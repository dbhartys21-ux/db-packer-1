import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { industriesData } from '../data/industries';
import { SITE_CONFIG, SITE_URL } from '../config/site';
import { organizationSchema, breadcrumbSchema } from '../config/schema';
import SEOHead from '../components/SEOHead';
import './Industries.css';

const Industries = () => {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    "Hi ADBPack, I'm looking for custom B2B packaging for my industry. Please share details and MOQ."
  )}`;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Industries Served by ADBPack Custom Packaging Manufacturer",
    "itemListElement": industriesData.map((ind, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": ind.title,
      "url": `${SITE_URL}/industries/${ind.slug}`,
      "description": ind.aeoSummary
    }))
  };

  return (
    <div className="industry-page-container">
      <SEOHead
        title="Industries We Serve — Pharma, Cosmetics, Nutraceutical, Liquor, Food & D2C Packaging | ADBPack India"
        description="ADBPack manufactures ISO 9001:2015 certified custom packaging for Pharmaceuticals, Cosmetics, Nutraceuticals, Liquor & Spirits, Food & Confectionery, and E-Commerce/D2C brands across India and worldwide."
        canonicalPath="/industries"
        keywords="pharmaceutical packaging India, cosmetic packaging manufacturer India, nutraceutical packaging supplier, liquor packaging manufacturer, food packaging company India, D2C e-commerce packaging manufacturer"
        schema={[
          organizationSchema(),
          itemListSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries We Serve", path: "/industries" }
          ])
        ]}
      />

      <section className="industry-hero">
        <div className="container">
          <div className="industry-hero-badge">
            <ShieldCheck size={16} /> ISO 9001:2015 Certified • 50,000 Sq.Ft Plant • 10M+ Units/Month
          </div>
          <h1>Industry-Specific Custom Packaging Solutions</h1>
          <p className="industry-hero-sub">
            Every sector has unique regulatory, barrier, and shelf-appeal demands. Explore how ADBPack engineers mono cartons, rigid boxes, corrugated shippers, flexible pouches, blisters, canisters, and roll labels for 6 major global verticals.
          </p>
          <div className="industry-hero-actions">
            <Link to="/quote" className="btn btn-primary">
              Request an Industry Quote <ArrowRight size={18} style={{ marginLeft: '6px' }} />
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp-cta">
              WhatsApp Packaging Engineer
            </a>
            <Link to="/export" className="btn btn-secondary" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
              <Globe size={17} style={{ marginRight: '6px' }} /> Global Export Desk
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="aeo-answer-box">
            <span className="aeo-answer-label">Quick Overview</span>
            <p>
              <strong>ADBPack</strong> (<a href={SITE_URL} style={{ textDecoration: 'underline' }}>adbpack.com</a>) is an ISO 9001:2015, GeM, and MSME certified custom packaging manufacturer based in New Delhi, India ({SITE_CONFIG.stats.facility} plant, {SITE_CONFIG.stats.monthlyCapacity}/month). We manufacture sector-specific secondary and primary-adjacent packaging for <strong>Pharmaceuticals, Cosmetics &amp; Fragrances, Nutraceuticals &amp; Sports Supplements, Liquor &amp; Spirits, Food &amp; Tea/Coffee, and E-Commerce D2C brands</strong> across India and 20+ export countries.
            </p>
          </div>

          <div className="industries-hub-grid">
            {industriesData.map((ind) => (
              <div key={ind.slug} className="industry-hub-card">
                <div>
                  <div className="industry-hub-card-top">
                    <div className="industry-hub-icon">
                      <img src={ind.heroImage} alt={ind.shortTitle} loading="lazy" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary-color)', textTransform: 'uppercase' }}>
                        B2B &amp; Export Vertical
                      </span>
                      <h2 style={{ fontSize: '1.3rem', marginBottom: 0 }}>{ind.shortTitle}</h2>
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.94rem', marginBottom: '18px' }}>
                    {ind.heroSubtitle}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '10px' }}>
                  <Link to={`/industries/${ind.slug}`} className="btn btn-primary" style={{ flex: 1 }}>
                    View Specs &amp; Products <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                  </Link>
                  <Link
                    to={`/quote?industry=${encodeURIComponent(ind.shortTitle)}`}
                    className="btn btn-secondary"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="industry-bottom-cta">
            <div>
              <h2>Sourcing Packaging from Outside India?</h2>
              <p>
                We export palletized, container-load, and air-freight custom packaging to brands in Nepal, the Middle East (UAE, Saudi Arabia, Qatar), Europe, UK, Africa, and North America.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/export" className="btn btn-secondary">
                Explore Export Capabilities
              </Link>
              <Link to="/quote" className="btn btn-primary" style={{ background: '#fff', color: 'var(--primary-color)' }}>
                Request Export RFQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
