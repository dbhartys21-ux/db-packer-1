import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, CheckCircle2, Truck, FileCheck, PackageCheck } from 'lucide-react';
import { products } from '../data/products';
import { industriesData } from '../data/industries';
import { SITE_CONFIG, SITE_URL, ORG_ID } from '../config/site';
import { EXPORT_MARKETS, faqSchema, breadcrumbSchema } from '../config/schema';
import SEOHead from '../components/SEOHead';
import './Industries.css';

const exportFaqs = [
  {
    q: "Which countries does ADBPack export custom packaging to?",
    a: "ADBPack exports custom printed mono cartons, rigid boxes, corrugated boxes, flexible pouches, blister cards, paper canisters, and roll labels from New Delhi, India to Nepal, Bhutan, Sri Lanka, Bangladesh, UAE (Dubai, Abu Dhabi), Saudi Arabia, Qatar, Oman, Kuwait, Kenya, Nigeria, South Africa, the United Kingdom, Germany, Netherlands, France, the United States, Canada, and Australia."
  },
  {
    q: "What Incoterms and shipping methods do you support for international orders?",
    a: "We support EXW (New Delhi), FOB (ICD Tughlakabad / Mundra / Nhava Sheva), CIF, and door-to-door air/sea freight. Urgent orders and pre-production physical samples ship via DHL, FedEx, or Aramex air express (3–6 business days), while bulk volume orders ship via LCL or 20ft/40ft FCL ocean freight."
  },
  {
    q: "How does ADBPack protect paperboard packaging from moisture during ocean freight?",
    a: "All export shipments are packed inside heavy-duty 5-ply high-ECT master corrugated cartons with internal poly-bag moisture liners, silica gel desiccant packs, corner edge-board protectors, stretch-film wrapping, and ISPM-15 heat-treated fumigated pallets."
  },
  {
    q: "Can we receive physical pre-production samples in our country before mass production?",
    a: "Yes. We provide 3D digital mockups, die-line templates, and physical pre-production samples shipped via international air courier (DHL/FedEx) so your team can verify structural fit, board GSM, and print finishes before bulk manufacturing begins."
  },
  {
    q: "Why should international brands source packaging from India instead of local or Chinese suppliers?",
    a: "Sourcing from ADBPack in India delivers 30–50% cost savings compared to Western domestic printers, competitive duty rates across many trade corridors, English-first engineering communication, lower minimum order quantities (starting at 1,000 rigid boxes or 2,000 carton sheets), and ISO 9001:2015 certified quality."
  }
];

const exportSteps = [
  {
    name: "Step 1: Share Specifications or Dieline",
    text: "Submit your box dimensions, material preference (SBS, Duplex, Kraft, Greyboard, or Laminate), finish requirements, and quantity via our quote form, email (info@adbpack.com), or WhatsApp (+91 97114 92120)."
  },
  {
    name: "Step 2: Receive Export Quotation (EXW / FOB / CIF)",
    text: "Within 24 hours, our export desk provides a transparent B2B quotation along with flat-pack master carton counts, gross weight, and CBM volume calculations."
  },
  {
    name: "Step 3: Structural CAD & Physical Sample Approval",
    text: "Our engineers verify your artwork on the exact dieline, share digital proofs, and courier physical samples via DHL/FedEx if required."
  },
  {
    name: "Step 4: ISO 9001:2015 Mass Production & QC",
    text: "Your packaging is printed and converted at our 50,000 sq.ft New Delhi plant with multi-stage quality inspection for color ΔE, crease stiffness, and bond strength."
  },
  {
    name: "Step 5: Export Palletization, Customs & Global Dispatch",
    text: "Finished goods are moisture-wrapped, packed in 5-ply export shippers on ISPM-15 pallets, and dispatched with Commercial Invoice, Packing List, Certificate of Origin, and Bill of Lading / Airway Bill."
  }
];

const ExportPage = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    "Hi ADBPack Export Desk, I am looking to import custom printed packaging from India. My country and product requirements are:"
  )}`;

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Import Custom Printed Packaging from ADBPack India",
    "description": "Step-by-step process for international brands to order and import custom mono cartons, rigid boxes, pouches, and labels from ADBPack in New Delhi, India.",
    "step": exportSteps.map((s, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": s.name,
      "text": s.text
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Global Custom Packaging Manufacturing & Export from India",
    "provider": { "@id": ORG_ID },
    "serviceType": "B2B Custom Packaging Manufacturing & International Export",
    "areaServed": EXPORT_MARKETS.map((name) => ({ "@type": "Country", "name": name })),
    "url": `${SITE_URL}/export`
  };

  return (
    <div className="industry-page-container">
      <SEOHead
        title="Custom Packaging Exporter India — Mono Cartons, Rigid Boxes, Pouches & Labels | ADBPack"
        description="Import custom printed packaging directly from ADBPack's 50,000 sq.ft ISO 9001:2015 plant in New Delhi, India. Mono cartons, rigid boxes, corrugated boxes, pouches & labels exported to UAE, USA, UK, Europe, Africa & Nepal."
        canonicalPath="/export"
        keywords="custom packaging exporter India, packaging manufacturer India for export, import packaging boxes from India, mono carton exporter India, rigid box manufacturer India export, packaging supplier for UAE USA UK Nepal Africa"
        schema={[
          serviceSchema,
          howToSchema,
          faqSchema(exportFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Global Export Desk", path: "/export" }
          ])
        ]}
      />

      <section className="industry-hero">
        <div className="container">
          <div className="industry-hero-badge">
            <Globe size={16} /> Exporting from New Delhi, India to 20+ Countries • ISO 9001:2015 Certified
          </div>
          <h1>Custom Packaging Manufacturer &amp; Global Exporter from India</h1>
          <p className="industry-hero-sub">
            Source factory-direct mono cartons, luxury rigid boxes, corrugated shippers, barrier pouches, blister cards, paper canisters, and roll labels from our 50,000 sq.ft automated plant in New Delhi—engineered for seamless international freight.
          </p>
          <div className="industry-hero-actions">
            <Link to="/quote" className="btn btn-primary">
              Request an Export Quotation (EXW / FOB / CIF) <ArrowRight size={18} style={{ marginLeft: '6px' }} />
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp-cta">
              WhatsApp Export Desk (+91 97114 92120)
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* AEO Direct Summary */}
          <div className="aeo-answer-box">
            <span className="aeo-answer-label">Global Export Capability Summary</span>
            <p>
              <strong>ADBPack</strong> is an ISO 9001:2015, GeM, and MSME certified custom packaging manufacturer and exporter in New Delhi, India, producing <strong>10 million+ packaging units monthly</strong> across a 50,000 sq.ft facility. We supply flat-packed and palletized custom packaging via air and ocean freight (EXW, FOB, CIF, DDP) to brands in the <strong>Middle East (UAE, Saudi Arabia, Qatar, Oman), South Asia (Nepal, Sri Lanka, Bangladesh), Africa, Europe, the UK, North America, and Australia</strong>.
            </p>
          </div>

          {/* Why Source from ADBPack India */}
          <div style={{ marginTop: '48px' }}>
            <h2>Why Global Brands Source Custom Packaging from ADBPack India</h2>
            <div className="industry-advantages-grid">
              <div className="industry-adv-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <ShieldCheck size={20} color="var(--primary-color)" />
                  <h3 style={{ margin: 0 }}>30–50% Factory Cost Advantage</h3>
                </div>
                <p>Direct-from-manufacturer pricing in India cuts unit packaging costs significantly compared to domestic printers in the US, UK, EU, or GCC while maintaining ISO 9001:2015 quality.</p>
              </div>
              <div className="industry-adv-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <PackageCheck size={20} color="var(--primary-color)" />
                  <h3 style={{ margin: 0 }}>Flexible Mid-Market MOQs</h3>
                </div>
                <p>Start from 1,000 luxury rigid boxes, 2,000 mono carton sheets, 2,000 paper canisters, or 5,000 pouches/labels—ideal for growing D2C and mid-market international brands.</p>
              </div>
              <div className="industry-adv-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Truck size={20} color="var(--primary-color)" />
                  <h3 style={{ margin: 0 }}>Moisture-Barrier Export Packing</h3>
                </div>
                <p>Every export consignment is sealed in poly-lined 5-ply master cartons with desiccants, corner protectors, stretch wrap, and ISPM-15 fumigated pallets.</p>
              </div>
              <div className="industry-adv-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <FileCheck size={20} color="var(--primary-color)" />
                  <h3 style={{ margin: 0 }}>Complete Export Documentation</h3>
                </div>
                <p>Full support for HS code classification (Chapter 48 &amp; 39), Commercial Invoice, Packing List, Certificate of Origin, Test Reports, and BL/AWB coordination.</p>
              </div>
            </div>
          </div>

          {/* Export Logistics & Freight Matrix Table */}
          <div style={{ marginTop: '56px' }}>
            <h2>International Freight, Container &amp; Incoterms Matrix</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '12px' }}>
              Choose the shipping mode that matches your launch timeline and order volume from ICD Tughlakabad (New Delhi), Mundra Port, Nhava Sheva, or IGI Airport:
            </p>
            <div className="aeo-table-wrapper">
              <table className="aeo-spec-table">
                <thead>
                  <tr>
                    <th>Shipping Mode</th>
                    <th>Typical Volume / Load</th>
                    <th>Estimated Transit Time</th>
                    <th>Supported Incoterms</th>
                    <th>Best Suited For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Air Express Courier (DHL / FedEx / Aramex)</strong></td>
                    <td>Samples &amp; 50 kg – 500 kg</td>
                    <td>3–6 Business Days Worldwide</td>
                    <td>DAP / DDP Door-to-Door</td>
                    <td>Pre-production samples, urgent product launches, high-value labels &amp; folding cartons</td>
                  </tr>
                  <tr>
                    <td><strong>Air Cargo Freight (DEL Airport)</strong></td>
                    <td>500 kg – 3,000 kg (Palletized)</td>
                    <td>5–8 Business Days</td>
                    <td>EXW / FCA / CIP</td>
                    <td>Mid-sized pharma, cosmetic &amp; nutraceutical carton runs</td>
                  </tr>
                  <tr>
                    <td><strong>LCL Ocean Freight (Consolidated)</strong></td>
                    <td>2 CBM – 15 CBM (1–8 Pallets)</td>
                    <td>12–28 Days (Port-Dependent)</td>
                    <td>FOB / CIF / DDP</td>
                    <td>1,000–5,000 rigid boxes, canister tubes, or mixed-SKU orders</td>
                  </tr>
                  <tr>
                    <td><strong>20ft / 40ft HQ Full Container Load (FCL)</strong></td>
                    <td>28 CBM (20ft) / 68 CBM (40ft HQ)</td>
                    <td>10–30 Days (GCC: 7–12d, EU/UK: 22–28d, US: 28–35d)</td>
                    <td>FOB / CIF</td>
                    <td>High-volume mono cartons, corrugated boxes, liquor packaging &amp; flexible pouches</td>
                  </tr>
                  <tr>
                    <td><strong>Cross-Border Road Freight (South Asia)</strong></td>
                    <td>FTL / Part-Load Truck</td>
                    <td>4–7 Days</td>
                    <td>EXW / CIP / Delivered</td>
                    <td>Direct factory dispatches to Nepal, Bhutan &amp; Bangladesh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Proven Export Case Study */}
          <div style={{ marginTop: '56px', background: 'var(--surface-1)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              International Client Spotlight
            </span>
            <h2 style={{ marginTop: '6px', marginBottom: '12px' }}>Trusted by Shree Distillery Limited, Nepal</h2>
            <blockquote style={{ fontSize: '1.08rem', fontStyle: 'italic', color: 'var(--text-color)', borderLeft: '4px solid var(--primary-color)', paddingLeft: '18px', margin: '0 0 14px' }}>
              "Shree Distillery Limited, Nepal has procured packaging materials from ADBPack India for one of its flagship brands of liquor. The company is fully satisfied with the quality of the product and the service of the vendor."
            </blockquote>
            <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-light)' }}>
              — Hari K. Sampang, Shree Distillery Limited (Nepal)
            </p>
          </div>

          {/* Step-by-Step How to Import */}
          <div style={{ marginTop: '56px' }}>
            <h2>How to Import Custom Packaging from ADBPack in 5 Steps</h2>
            <div className="industry-advantages-grid">
              {exportSteps.map((step, idx) => (
                <div key={idx} className="industry-adv-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle2 size={20} color="var(--primary-color)" />
                    <h3 style={{ margin: 0 }}>{step.name}</h3>
                  </div>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Export Product Range */}
          <div style={{ marginTop: '56px' }}>
            <h2>Export-Ready Packaging Catalog</h2>
            <div className="industry-products-grid">
              {products.map((p) => (
                <div key={p.id} className="industry-prod-card">
                  <Link to={`/product/${p.id}`} className="industry-prod-img">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </Link>
                  <div className="industry-prod-body">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      MOQ: {p.specifications.MOQ || 'Custom'}
                    </span>
                    <h3><Link to={`/product/${p.id}`}>{p.title}</Link></h3>
                    <p>{p.desc}</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link to={`/product/${p.id}`} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '0.86rem', flex: 1 }}>
                        Specs
                      </Link>
                      <Link
                        to={`/quote?product=${encodeURIComponent(p.title)}`}
                        className="btn btn-primary"
                        style={{ padding: '8px 14px', fontSize: '0.86rem', flex: 1 }}
                      >
                        Export Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Links */}
          <div style={{ marginTop: '56px' }}>
            <h3 style={{ marginBottom: '14px' }}>Browse Packaging by Industry Vertical</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {industriesData.map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.88rem' }}
                >
                  {ind.shortTitle} →
                </Link>
              ))}
            </div>
          </div>

          {/* Export FAQs */}
          <div style={{ marginTop: '56px' }}>
            <h2>Frequently Asked Questions — Importing Packaging from India</h2>
            <div className="industry-faq-list">
              {exportFaqs.map((faq, idx) => (
                <div key={idx} className="industry-faq-card">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="industry-bottom-cta">
            <div>
              <h2>Ready to Request Your Export Quotation?</h2>
              <p>
                Send us your box dimensions, target quantity, and destination port/country. Our export specialists respond within 2–4 business hours.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/quote" className="btn btn-primary" style={{ background: '#fff', color: 'var(--primary-color)' }}>
                Start Export RFQ
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp-cta">
                WhatsApp +91 97114 92120
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportPage;

