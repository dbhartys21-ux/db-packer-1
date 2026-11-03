import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import logoImg from '../assets/adbpack-logo.png';
import { supabase } from '../utils/supabaseClient';
import './Footer.css';

const Facebook = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Instagram = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [toastMessage, setToastMessage] = useState('Subscribed!');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setToastMessage('Already Subscribed!');
        } else {
          throw error;
        }
      } else {
        setToastMessage('Subscribed!');
      }
      
      setSubscribed(true);
      setEmail('');
    } catch (err: any) {
      console.error('Newsletter error:', err);
      setToastMessage('Try again later');
      setSubscribed(true);
    }
    
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content grid grid-4">
        
        {/* About ADBPack Column */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logoImg} alt="ADBPack Logo" className="footer-logo-img" style={{ height: '55px', objectFit: 'contain' }} />
          </div>
          <p className="footer-desc">
            ADBPack is an ISO 9001:2015 certified B2B packaging manufacturer &amp; global exporter in New Delhi, India — supplying mono cartons, rigid boxes, corrugated boxes, blisters, labels, and pouches direct from factory.
          </p>
          <div className="footer-contact-mini" style={{ fontSize: '0.88rem', color: 'var(--text-light)', marginBottom: '14px', lineHeight: 1.7 }}>
            <div><strong>Location:</strong> {SITE_CONFIG.contact.address.join(' ')}</div>
            <div>
              <strong>Phone / WhatsApp:</strong>{' '}
              {SITE_CONFIG.contact.phones.map((p, idx) => (
                <span key={p.e164}>
                  {idx > 0 && ', '}
                  <a href={`tel:${p.e164}`} style={{ textDecoration: 'underline' }}>{p.display}</a>
                </span>
              ))}
            </div>
            <div><strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.contact.email}`} style={{ textDecoration: 'underline' }}>{SITE_CONFIG.contact.email}</a></div>
          </div>
          <div className="social-links">
            {SITE_CONFIG.social.facebook && (
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            )}
            {SITE_CONFIG.social.linkedin && (
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            )}
            {SITE_CONFIG.social.instagram && (
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="ADBPack on Instagram">
                <Instagram size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products Catalog</Link></li>
            <li><Link to="/quote">Request Quote</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* B2B Products Catalog Column */}
        <div className="footer-col">
          <h4 className="footer-heading">PACKAGING PRODUCTS</h4>
          <ul className="footer-links">
            <li><Link to="/product/mono-cartons">Mono Cartons</Link></li>
            <li><Link to="/product/rigid-boxes">Rigid Boxes</Link></li>
            <li><Link to="/product/corrugated-boxes">Corrugated Boxes</Link></li>
            <li><Link to="/product/pouches">Flexible Pouches</Link></li>
            <li><Link to="/product/cold-seal-blisters">Cold Seal Blisters</Link></li>
            <li><Link to="/product/hot-seal-blisters">Hot Seal Blisters</Link></li>
            <li><Link to="/product/self-adhesive-labels">Self Adhesive Labels</Link></li>
            <li><Link to="/product/canister-boxes">Canister Boxes</Link></li>
            <li><Link to="/product/promotional-tape-roll">Promotional Tapes</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription Column */}
        <div className="footer-col">
          <h4 className="footer-heading">NEWSLETTER</h4>
          <p className="footer-desc">Subscribe to receive technical packaging updates and industry B2B insights.</p>
          
          <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
            <div className="newsletter-input-group">
              <label htmlFor="footer-subscribe-email" className="visually-hidden">Email Address</label>
              <input 
                type="email" 
                id="footer-subscribe-email" 
                placeholder="Your corporate email *" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </div>
            {subscribed && <span className="newsletter-success-toast">{toastMessage}</span>}
          </form>
        </div>

      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} ADBPack. All Rights Reserved. ISO 9001:2015 Quality Assured.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
