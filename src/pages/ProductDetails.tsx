import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Check, Package, ShieldCheck, Truck, ArrowLeft, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductById, products } from '../data/products';
import { productSEO } from '../config/productSEO';
import { ORG_ID, SITE_URL, SITE_CONFIG } from '../config/site';
import { faqSchema, breadcrumbSchema as buildBreadcrumbs } from '../config/schema';
import SEOHead from '../components/SEOHead';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const initialProduct = id ? getProductById(id) : undefined;
  const [product, setProduct] = useState(initialProduct);
  const [activeImage, setActiveImage] = useState<string>(initialProduct ? initialProduct.img : '');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const found = getProductById(id);
      if (found) {
        setProduct(found);
        setActiveImage(found.img);
      } else {
        navigate('/products');
      }
    }
  }, [id, navigate]);

  if (!product) {
    return <div className="page-container" style={{ padding: '100px', textAlign: 'center' }}>Product not found.</div>;
  }

  // Get related products from same category or different
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.category === 'Boxes'))
    .slice(0, 3);

  // Get SEO metadata for this product (falls back to generic if not configured)
  const seo = productSEO[product.id] || {
    title: `${product.title} — Custom Packaging Manufacturer & Exporter India | ADBPack`,
    description: product.fullDesc,
    keywords: `${product.title}, ${product.category}, packaging manufacturer India, ADBPack`,
    faqs: []
  };

  // JSON-LD Structured SEO Schema Markup (no Offer without price since B2B pricing is quote-based)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/product/${product.id}#product`,
    "name": product.title,
    "url": `${SITE_URL}/product/${product.id}`,
    "image": [product.img, ...product.gallery.filter(g => g !== product.img)].map(img => `${SITE_URL}${img}`),
    "description": product.fullDesc,
    "brand": {
      "@type": "Brand",
      "name": "ADBPack"
    },
    "manufacturer": {
      "@id": ORG_ID
    },
    "category": product.category,
    "countryOfOrigin": {
      "@type": "Country",
      "name": "India"
    },
    "additionalProperty": Object.entries(product.specifications).map(([name, value]) => ({
      "@type": "PropertyValue",
      "name": name,
      "value": value
    }))
  };

  const breadcrumbSchema = buildBreadcrumbs([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.title, path: `/product/${product.id}` }
  ]);

  const schemas: object[] = [schemaMarkup, breadcrumbSchema];
  if (seo.faqs && seo.faqs.length > 0) {
    schemas.push(faqSchema(seo.faqs));
  }

  return (
    <div className="page-container product-details-page-container">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={`/product/${product.id}`}
        ogImage={`${SITE_URL}${product.img}`}
        ogType="product"
        keywords={seo.keywords}
        schema={schemas}
      />

      <div className="container">
        {/* Back and Breadcrumb Links */}
        <div className="product-breadcrumb-wrap">
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">›</span>
            <Link to="/products">Products</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{product.title}</span>
          </div>
          <Link to="/products" className="back-catalog-link">
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
        </div>

        {/* Top Product Info block */}
          <div className="product-top-section">
            {/* Left Column: Interactive Image Gallery */}
            <div className="product-gallery-block">
              <div className="main-image-container-wrap">
                <img src={activeImage} alt={product.title} className="product-main-img" />
                <button 
                  className="lightbox-zoom-btn"
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="Zoom image"
                >
                  <ZoomIn size={18} />
                </button>
              </div>
              
              {product.gallery && product.gallery.length > 0 && (
                <div className="thumbnail-list-row">
                  {/* Keep main image as first thumbnail if not already present */}
                  <button 
                    className={`thumbnail-item-btn ${activeImage === product.img ? 'active' : ''}`}
                    onClick={() => setActiveImage(product.img)}
                    aria-label={`View primary image`}
                  >
                    <img src={product.img} alt={`${product.title} main thumbnail`} />
                  </button>
                  {product.gallery.map((img, idx) => {
                    // Skip if thumbnail matches main image to avoid duplicates
                    if (img === product.img) return null;
                    return (
                      <button 
                        key={idx} 
                        className={`thumbnail-item-btn ${activeImage === img ? 'active' : ''}`}
                        onClick={() => setActiveImage(img)}
                        aria-label={`View details image ${idx + 1}`}
                      >
                        <img src={img} alt={`${product.title} thumbnail ${idx + 1}`} />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Middle Column: Technical and Marketing Info */}
            <div className="product-info-column-wrap">
              <span className="product-cat-badge">{product.category}</span>
              <h1>{product.title}</h1>
              <p className="product-short-desc-text">{product.desc}</p>
              
              <div className="features-list-box">
                <h4>Core Packaging Features</h4>
                <ul className="product-features-check-list">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-bullet">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: B2B Call to Action Box */}
            <div className="product-cta-sidebar-box">
              <div className="cta-price-mock-tag">Wholesale B2B Pricing</div>
              <div className="cta-stock-badge">Bulk Orders Available</div>
              <p className="cta-box-desc-text">
                We are manufacturing partners for your custom size requirements. Get factory wholesale rates on your bulk ordering.
              </p>
              
              <Link
                to={`/quote?product=${encodeURIComponent(product.title)}`}
                className="btn btn-primary btn-quote-full-width"
              >
                Get a Bulk Quote
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  `Hi ADBPack, I would like a bulk quote for ${product.title} (MOQ: ${product.specifications.MOQ || 'Bulk'}). Please share pricing and lead time.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-quote-full-width"
                style={{ marginTop: '10px', width: '100%', backgroundColor: '#25d366', color: '#fff', fontWeight: 700 }}
              >
                Instant Quote on WhatsApp
              </a>
              <Link
                to={`/contact?interest=sample&product=${encodeURIComponent(product.title)}`}
                className="btn btn-secondary btn-sample-request-width"
                style={{ marginTop: '10px', width: '100%' }}
              >
                Request Sample Kit
              </Link>

              <ul className="cta-benefits-list">
                <li><Check size={16} className="benefit-icon" /> ISO 9001:2015 quality check</li>
                <li><Truck size={16} className="benefit-icon" /> Pan-India &amp; Global Export Delivery</li>
                <li><Package size={16} className="benefit-icon" /> Factory direct wholesale</li>
                <li><ShieldCheck size={16} className="benefit-icon" /> Custom branding &amp; die-lines</li>
              </ul>
            </div>
          </div>

        {/* Bottom Details Section: Full description & specifications */}
        <div className="product-bottom-specifications-section">
          <div className="description-section">
            <h2>Product Overview</h2>
            <p className="product-full-desc-para">{product.fullDesc}</p>
          </div>

          <div className="specifications-section">
            <h2>Technical Specifications</h2>
            <table className="specs-table-striped">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], idx) => (
                  <tr key={idx}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Feature Showcase 1 */}
        <div className="product-feature-showcase">
          <div className="feature-image-col">
            <img src={product.showcaseImages ? product.showcaseImages[0] : "/assets/product-feature.png"} alt={product.showcaseFeatures ? product.showcaseFeatures[0].title : "Premium Printing Quality"} className="feature-showcase-img" loading="lazy" />
          </div>
          <div className="feature-text-col">
            <h2>{product.showcaseFeatures ? product.showcaseFeatures[0].title : "Unmatched Print Quality"}</h2>
            <p>
              {product.showcaseFeatures ? product.showcaseFeatures[0].description : "Experience packaging that truly stands out. We ensure crisp edges, flawless folds, and high-definition color reproduction that elevates your brand identity."}
            </p>
            <ul className="feature-highlights">
              {(product.showcaseFeatures ? product.showcaseFeatures[0].highlights : [
                "High-definition offset and digital printing",
                "Precise die-cutting and structural folds",
                "Premium value-adding finishes"
              ]).map((highlight, idx) => (
                <li key={idx}><Check size={16} className="highlight-icon" /> {highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Feature Showcase 2 (Reversed) */}
        <div className="product-feature-showcase reverse">
          <div className="feature-image-col">
            <img src={product.showcaseImages ? product.showcaseImages[1] : "/assets/product-feature-2.png"} alt={product.showcaseFeatures ? product.showcaseFeatures[1].title : "Structural Strength and Durability"} className="feature-showcase-img" loading="lazy" />
          </div>
          <div className="feature-text-col">
            <h2>{product.showcaseFeatures ? product.showcaseFeatures[1].title : "Strength & Durability"}</h2>
            <p>
              {product.showcaseFeatures ? product.showcaseFeatures[1].description : "Protect your products with confidence. We utilize premium-grade materials engineered for maximum burst strength and crush resistance during transit."}
            </p>
            <ul className="feature-highlights">
              {(product.showcaseFeatures ? product.showcaseFeatures[1].highlights : [
                "3-Ply, 4-Ply, and 5-Ply rigid configurations",
                "High-impact resistance for B2B logistics",
                "Eco-friendly and 100% recyclable materials"
              ]).map((highlight, idx) => (
                <li key={idx}><Check size={16} className="highlight-icon" /> {highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Feature Showcase 3 */}
        <div className="product-feature-showcase">
          <div className="feature-image-col">
            <img src={product.showcaseImages ? product.showcaseImages[2] : "/assets/product-feature-3.png"} alt={product.showcaseFeatures ? product.showcaseFeatures[2].title : "Custom Branding Solutions"} className="feature-showcase-img" loading="lazy" />
          </div>
          <div className="feature-text-col">
            <h2>{product.showcaseFeatures ? product.showcaseFeatures[2].title : "Custom Crafted for You"}</h2>
            <p>
              {product.showcaseFeatures ? product.showcaseFeatures[2].description : "Your packaging is your silent ambassador. We offer end-to-end customization, tailoring dimensions, structures, and finishes perfectly to your unique brand requirements."}
            </p>
            <ul className="feature-highlights">
              {(product.showcaseFeatures ? product.showcaseFeatures[2].highlights : [
                "Bespoke sizes and structural engineering",
                "Advanced technical coatings (Matt, Gloss, Metallic)",
                "Dedicated B2B support and rapid prototyping"
              ]).map((highlight, idx) => (
                <li key={idx}><Check size={16} className="highlight-icon" /> {highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product-specific FAQs for B2B buyers & AI answer engines */}
        {seo.faqs && seo.faqs.length > 0 && (
          <div className="product-faqs-section" style={{ marginTop: '60px', padding: '40px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <h2 style={{ marginBottom: '24px', fontSize: '1.75rem' }}>Frequently Asked Questions — {product.title}</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {seo.faqs.map((faq, idx) => (
                <div key={idx} style={{ padding: '20px', backgroundColor: 'var(--white)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-color)' }}>{faq.q}</h3>
                  <p style={{ margin: 0, color: 'var(--text-light)', lineHeight: 1.65 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="related-products-section">
            <h2 className="related-title">Related Packaging Products</h2>
            <div className="related-products-grid">
              {relatedProducts.map((p) => (
                <Link to={`/product/${p.id}`} className="related-product-card" key={p.id}>
                  <div className="related-img-wrap">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <div className="related-info">
                    <h4>{p.title}</h4>
                    <span className="related-details-link">View details &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full Screen Image Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="lightbox-close-btn"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close zoom"
            >
              <X size={24} />
            </button>
            <motion.div 
              className="lightbox-img-container"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <img src={activeImage} alt={product.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
