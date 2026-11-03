import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import { getIndustryBySlug, industriesData } from '../data/industries';
import { products } from '../data/products';
import { SITE_CONFIG, SITE_URL, ORG_ID } from '../config/site';
import { faqSchema, breadcrumbSchema } from '../config/schema';
import SEOHead from '../components/SEOHead';
import './Industries.css';

const IndustryDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const matchedProducts = products.filter((p) =>
    industry.recommendedProductIds.includes(p.id)
  );

  const otherIndustries = industriesData.filter((i) => i.slug !== industry.slug);

  const whatsappText = `Hi ADBPack, I need a custom B2B packaging quote for the ${industry.shortTitle} sector. Please share MOQ and pricing details.`;
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.title,
    "description": industry.aeoSummary,
    "url": `${SITE_URL}/industries/${industry.slug}`,
    "provider": { "@id": ORG_ID },
    "serviceType": `${industry.shortTitle} Custom Packaging Manufacturing`,
    "areaServed": "Worldwide"
  };

  return (
    <div className="industry-page-container">
      <SEOHead
        title={industry.seoTitle}
        description={industry.seoDescription}
        canonicalPath={`/industries/${industry.slug}`}
        ogImage={`${SITE_URL}${industry.heroImage}`}
        keywords={industry.seoKeywords}
        schema={[
          serviceSchema,
          faqSchema(industry.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.shortTitle, path: `/industries/${industry.slug}` }
          ])
        ]}
      />

      <section className="industry-hero">
        <div className="container">
          <div style={{ marginBottom: '14px' }}>
            <Link to="/industries" style={{ color: '#cbd5e1', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ArrowLeft size={15} /> All Industries
            </Link>
          </div>
          <div className="industry-hero-badge">
            <ShieldCheck size={16} /> ISO 9001:2015 Certified • Direct Factory Pricing • Export Ready
          </div>
          <h1>{industry.title}</h1>
          <p className="industry-hero-sub">{industry.heroSubtitle}</p>
          <div className="industry-hero-actions">
            <Link
              to={`/quote?industry=${encodeURIComponent(industry.shortTitle)}`}
              className="btn btn-primary"
            >
              Get a Bulk {industry.shortTitle} Quote <ArrowRight size={18} style={{ marginLeft: '6px' }} />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-cta"
            >
              Instant Quote on WhatsApp
            </a>
            <Link
              to={`/contact?interest=sample&product=${encodeURIComponent(industry.shortTitle + ' Packaging')}`}
              className="btn btn-secondary"
              style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
            >
              Request Physical Sample Kit
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* AEO Direct Answer Summary */}
          <div className="aeo-answer-box">
            <span className="aeo-answer-label">Industry Packaging Overview</span>
            <p>{industry.aeoSummary}</p>
          </div>

          <p style={{ fontSize: '1.04rem', color: 'var(--text-light)', lineHeight: 1.75, maxWidth: '940px' }}>
            {industry.overview}
          </p>

          {/* Key Advantages */}
          <div style={{ marginTop: '48px' }}>
            <h2>Why Leading {industry.shortTitle} Brands Choose ADBPack</h2>
            <div className="industry-advantages-grid">
              {industry.keyAdvantages.map((adv, idx) => (
                <div key={idx} className="industry-adv-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle2 size={20} color="var(--primary-color)" />
                    <h3 style={{ margin: 0 }}>{adv.title}</h3>
                  </div>
                  <p>{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AEO Technical Specification Matrix Table */}
          <div style={{ marginTop: '56px' }}>
            <h2>{industry.specTableTitle}</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '12px' }}>
              Compare material grades, value-adding finishes, and minimum order quantities (MOQ) engineered at our New Delhi plant:
            </p>
            <div className="aeo-table-wrapper">
              <table className="aeo-spec-table">
                <thead>
                  <tr>
                    <th>Packaging Format</th>
                    <th>Recommended Substrate / GSM</th>
                    <th>Finishes &amp; Technical Features</th>
                    <th>MOQ</th>
                    <th>Ideal Applications</th>
                  </tr>
                </thead>
                <tbody>
                  {industry.specTable.map((row, idx) => (
                    <tr key={idx}>
                      <td><strong>{row.packagingType}</strong></td>
                      <td>{row.materialGrade}</td>
                      <td>{row.finishesAndFeatures}</td>
                      <td><strong>{row.moq}</strong></td>
                      <td>{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Products for this Industry */}
          <div style={{ marginTop: '56px' }}>
            <h2>Recommended Packaging Products for {industry.shortTitle}</h2>
            <div className="industry-products-grid">
              {matchedProducts.map((p) => (
                <div key={p.id} className="industry-prod-card">
                  <Link to={`/product/${p.id}`} className="industry-prod-img">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </Link>
                  <div className="industry-prod-body">
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {p.category} • MOQ: {p.specifications.MOQ || 'Custom'}
                    </span>
                    <h3>
                      <Link to={`/product/${p.id}`}>{p.title}</Link>
                    </h3>
                    <p>{p.desc}</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link to={`/product/${p.id}`} className="btn btn-secondary" style={{ padding: '8px 14px', fontSize: '0.86rem', flex: 1 }}>
                        Specs
                      </Link>
                      <Link
                        to={`/quote?product=${encodeURIComponent(p.title)}&industry=${encodeURIComponent(industry.shortTitle)}`}
                        className="btn btn-primary"
                        style={{ padding: '8px 14px', fontSize: '0.86rem', flex: 1 }}
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry FAQs */}
          <div style={{ marginTop: '56px' }}>
            <h2>Frequently Asked Questions — {industry.shortTitle} Packaging</h2>
            <div className="industry-faq-list">
              {industry.faqs.map((faq, idx) => (
                <div key={idx} className="industry-faq-card">
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Links to Other Industries */}
          <div style={{ marginTop: '56px' }}>
            <h3 style={{ marginBottom: '16px' }}>Explore Other Industry Packaging Solutions</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {otherIndustries.map((other) => (
                <Link
                  key={other.slug}
                  to={`/industries/${other.slug}`}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.88rem' }}
                >
                  {other.shortTitle} →
                </Link>
              ))}
              <Link to="/export" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.88rem' }}>
                Global Export Desk →
              </Link>
            </div>
          </div>

          {/* Bottom Conversion Banner */}
          <div className="industry-bottom-cta">
            <div>
              <h2>Ready to Produce Your {industry.shortTitle} Packaging?</h2>
              <p>
                Share your box dimensions, artwork/dieline, or target order volume. Our packaging engineers respond with a detailed factory quote within 2–4 business hours.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link
                to={`/quote?industry=${encodeURIComponent(industry.shortTitle)}`}
                className="btn btn-primary"
                style={{ background: '#fff', color: 'var(--primary-color)' }}
              >
                Request Custom Quote
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-cta"
              >
                WhatsApp +91 97114 92120
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetails;

