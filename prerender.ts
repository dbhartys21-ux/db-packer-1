import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { products } from './src/data/products.ts';
import { industriesData } from './src/data/industries.ts';
import { productSEO } from './src/config/productSEO.ts';
import { SITE_CONFIG, SITE_URL } from './src/config/site.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dynamic routes to pre-render (22 pages)
const routes = [
  '/',
  '/about',
  '/products',
  '/industries',
  '/export',
  '/quote',
  '/contact',
  ...products.map((p) => `/product/${p.id}`),
  ...industriesData.map((i) => `/industries/${i.slug}`)
];

function buildLlmsFullTxt(): string {
  const lines: string[] = [];
  lines.push(`# ${SITE_CONFIG.name} — Complete Technical & Commercial Reference (llms-full.txt)`);
  lines.push('');
  lines.push(`> Official full-context documentation for AI answer engines (ChatGPT, Perplexity, Gemini, Claude, Copilot).`);
  lines.push(`> Canonical Website: ${SITE_URL}`);
  lines.push(`> Summary File: ${SITE_URL}/llms.txt`);
  lines.push('');
  lines.push('## 1. Verified Entity Profile');
  lines.push(`- **Business Name:** ${SITE_CONFIG.name}`);
  lines.push(`- **Founder & CEO:** ${SITE_CONFIG.founder} (Founded ${SITE_CONFIG.foundingYear})`);
  lines.push(`- **Manufacturing Location:** ${SITE_CONFIG.contact.address.join(' ')} (${SITE_CONFIG.contact.postalCode})`);
  lines.push(`- **Plant Size & Capacity:** ${SITE_CONFIG.stats.facility} facility | ${SITE_CONFIG.stats.monthlyCapacity} monthly capacity`);
  lines.push(`- **Certifications:** ${SITE_CONFIG.stats.certifications.join(', ')}`);
  lines.push(`- **Phone / WhatsApp:** ${SITE_CONFIG.contact.phone}`);
  lines.push(`- **Email:** ${SITE_CONFIG.contact.email}`);
  lines.push(`- **Instagram:** ${SITE_CONFIG.social.instagram}`);
  lines.push(`- **Global Export:** Exports custom packaging from New Delhi, India to Nepal (including Shree Distillery Limited), UAE, Saudi Arabia, Qatar, Oman, Africa, Europe, UK, USA, Canada, and Australia.`);
  lines.push('');
  lines.push('## 2. Complete Product Catalog & Specifications');
  for (const p of products) {
    const seo = productSEO[p.id];
    lines.push('');
    lines.push(`### ${p.title} (${SITE_URL}/product/${p.id})`);
    lines.push(p.fullDesc);
    lines.push('**Key Features:**');
    for (const f of p.features) lines.push(`- ${f}`);
    lines.push('**Technical Specifications:**');
    for (const [k, v] of Object.entries(p.specifications)) {
      lines.push(`- **${k}:** ${v}`);
    }
    if (seo?.faqs?.length) {
      lines.push('**Product FAQs:**');
      for (const faq of seo.faqs) {
        lines.push(`- **Q: ${faq.q}**`);
        lines.push(`  A: ${faq.a}`);
      }
    }
  }
  lines.push('');
  lines.push('## 3. Industry-Specific Packaging Solutions');
  for (const ind of industriesData) {
    lines.push('');
    lines.push(`### ${ind.title} (${SITE_URL}/industries/${ind.slug})`);
    lines.push(ind.aeoSummary);
    lines.push('');
    lines.push(`| Packaging Format | Material Grade | Finishes & Features | MOQ | Best For |`);
    lines.push(`|---|---|---|---|---|`);
    for (const row of ind.specTable) {
      lines.push(`| ${row.packagingType} | ${row.materialGrade} | ${row.finishesAndFeatures} | ${row.moq} | ${row.bestFor} |`);
    }
    if (ind.faqs.length) {
      lines.push('');
      for (const faq of ind.faqs) {
        lines.push(`- **Q: ${faq.q}**`);
        lines.push(`  A: ${faq.a}`);
      }
    }
  }
  lines.push('');
  lines.push(`## 4. Global Export Desk (${SITE_URL}/export)`);
  lines.push(`ADBPack supports EXW, FOB (ICD Tughlakabad / Mundra / Nhava Sheva), CIF, and DDP international shipments via DHL/FedEx air express, air cargo, LCL consolidated ocean freight, and 20ft/40ft HQ full container loads (FCL) with ISPM-15 fumigated pallets and moisture-barrier shrink wrapping.`);
  lines.push('');
  return lines.join('\n');
}

async function prerender() {
  console.log('Starting pre-rendering...');

  const template = await fs.readFile(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
  const serverEntryPath = path.resolve(__dirname, 'dist-ssr/entry-server.js');
  const { render } = await import(`file://${serverEntryPath}`);

  for (const url of routes) {
    const helmetContext: any = {};
    const appHtml = render(url, helmetContext);
    const { helmet } = helmetContext;
    const helmetTags = helmet ? `
      ${helmet.title.toString()}
      ${helmet.priority.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
    ` : '';

    const html = template
      .replace('<!--ssr-head-->', helmetTags)
      .replace('</head>', `${helmetTags}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const isIndex = url === '/';
    const filePath = isIndex
      ? path.resolve(__dirname, 'dist/index.html')
      : path.resolve(__dirname, `dist${url}.html`);

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, html);

    if (!isIndex) {
      const indexFilePath = path.resolve(__dirname, `dist${url}/index.html`);
      await fs.mkdir(path.dirname(indexFilePath), { recursive: true });
      await fs.writeFile(indexFilePath, html);
    }

    console.log(`pre-rendered ${url}`);
  }

  // Auto-generate sitemap.xml with today's lastmod date for all 22 routes
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((url) => {
    const loc = url === '/' ? 'https://adbpack.com/' : `https://adbpack.com${url}`;
    const priority =
      url === '/'
        ? '1.0'
        : url === '/products' || url === '/industries' || url === '/export'
        ? '0.9'
        : url.startsWith('/product/') || url.startsWith('/industries/')
        ? '0.85'
        : '0.7';
    const changefreq = url === '/' || url === '/products' || url === '/industries' ? 'weekly' : 'monthly';
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;
  await fs.writeFile(path.resolve(__dirname, 'public/sitemap.xml'), sitemapXml);
  await fs.writeFile(path.resolve(__dirname, 'dist/sitemap.xml'), sitemapXml);
  console.log('Generated sitemap.xml (22 URLs)');

  // Auto-generate llms-full.txt for deep AI ingestion
  const llmsFull = buildLlmsFullTxt();
  await fs.writeFile(path.resolve(__dirname, 'public/llms-full.txt'), llmsFull);
  await fs.writeFile(path.resolve(__dirname, 'dist/llms-full.txt'), llmsFull);
  console.log('Generated llms-full.txt');

  console.log('Pre-rendering complete.');
}

prerender().catch((err) => {
  console.error('Error during pre-rendering:', err);
  process.exit(1);
});
