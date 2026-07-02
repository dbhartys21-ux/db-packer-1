import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Sliders, Truck, Users, Leaf, Target, Eye, BadgeCheck, Cpu, Briefcase, Tag, Globe2, ArrowLeft, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const heroImages = [
    "/assets/clean-warehouse.png",
    "/assets/boxes.png",
    "/assets/stretch-film.png",
    "/assets/bubble-wrap.png"
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const features = [
    { icon: <ShieldCheck size={32} />, title: "Premium Quality", desc: "Top-grade materials for maximum protection" },
    { icon: <Sliders size={32} />, title: "Customized Solutions", desc: "Tailored packaging as per your needs" },
    { icon: <Truck size={32} />, title: "Timely Delivery", desc: "On-time delivery you can rely on" },
    { icon: <Users size={32} />, title: "Customer Satisfaction", desc: "Committed to exceeding customer expectations" },
    { icon: <Leaf size={32} />, title: "Sustainable Practices", desc: "Eco-friendly materials for a better tomorrow" }
  ];

  const whyChoose = [
    { icon: <BadgeCheck size={32} />, title: "High Quality Materials", desc: "We use premium raw materials for strength and durability." },
    { icon: <Cpu size={32} />, title: "Advanced Technology", desc: "Modern machines ensure consistent quality and precision." },
    { icon: <Briefcase size={32} />, title: "Experienced Team", desc: "Skilled professionals committed to delivering the best." },
    { icon: <Tag size={32} />, title: "Competitive Pricing", desc: "Best quality packaging solutions at fair and competitive rates." },
    { icon: <Globe2 size={32} />, title: "Wide Industry Reach", desc: "Serving a diverse range of industries across the country." }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Full-width Background Slider */}
        {heroImages.map((img, idx) => (
          <div 
            key={idx}
            className="hero-bg-slide"
            style={{ 
              backgroundImage: `url(${img})`,
              opacity: currentHeroIdx === idx ? 1 : 0
            }}
          />
        ))}
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-text animate-fade-in">
            <h1>SMART PACKAGING<br />STRONGER FUTURE</h1>
            <p>High quality packaging solutions for every industry.<br />Reliable. Sustainable. Customizable.</p>
            <Link to="/quote" className="btn btn-primary hero-btn">
              REQUEST A QUOTE <ChevronRight size={18} style={{marginLeft: '5px'}}/>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-snippet section">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <img src="https://placehold.co/600x400/0f3d81/ffffff?text=Facility+Photo+Coming+Soon" alt="DBPack Facility" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }} />
          </div>
          <div className="about-text">
            <h4 className="section-subtitle">ABOUT US</h4>
            <h2>Who We Are</h2>
            <p>
              DBPack is a trusted name in the packaging industry, delivering high-quality, cost-effective, and sustainable packaging solutions to businesses of all sizes. With a focus on innovation and customer satisfaction, we ensure your products are well-protected and presented at their best.
            </p>
            <div className="mission-vision-grid">
              <div className="mv-item">
                <Target size={24} className="mv-icon"/>
                <div>
                  <h5>Our Mission</h5>
                  <p>To deliver innovative and sustainable packaging solutions that add value to our customers' business.</p>
                </div>
              </div>
              <div className="mv-item">
                <Eye size={24} className="mv-icon"/>
                <div>
                  <h5>Our Vision</h5>
                  <p>To be a leading packaging solutions provider known for quality, reliability and care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-snippet section bg-light">
        <div className="container">
          <div className="products-header">
            <div>
              <h4 className="section-subtitle">OUR PRODUCTS</h4>
              <h2>Packaging Solutions Built for Every Need</h2>
            </div>
            <Link to="/products" className="btn btn-secondary">VIEW ALL PRODUCTS</Link>
          </div>
          <div className="carousel-wrapper" style={{ position: 'relative' }}>
            <button className="carousel-btn left" onClick={scrollLeft} aria-label="Previous Products">
              <ArrowLeft size={20} />
            </button>
            <div className="products-grid" ref={carouselRef}>
              {products.map((p, i) => (
                <Link to={`/product/${p.id}`} key={i} className="product-card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div className="product-img-mock" style={{ overflow: 'hidden', padding: '0' }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="product-info">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <span className="view-details" style={{ display: 'inline-block', marginTop: '15px', color: 'var(--secondary-color)', fontWeight: '600', fontSize: '0.9rem' }}>View details →</span>
                  </div>
                </Link>
              ))}
            </div>
            <button className="carousel-btn right" onClick={scrollRight} aria-label="Next Products">
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="carousel-dots">
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <div className="cta-text">
            <h2>Need a Custom Packaging Solution?</h2>
            <p>Request a quote or send us your requirements.</p>
            <Link to="/quote" className="btn btn-secondary cta-btn">REQUEST A QUOTE</Link>
          </div>
          <div className="cta-graphics">
            <div className="mock-clipboard">📋</div>
            <div className="mock-box-small">📦</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section section">
        <div className="container">
          <h4 className="section-subtitle">WHY CHOOSE DBPACK?</h4>
          <div className="why-choose-grid">
            {whyChoose.map((w, i) => (
              <div key={i} className="why-choose-item">
                <div className="wc-icon">{w.icon}</div>
                <div>
                  <h5>{w.title}</h5>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
