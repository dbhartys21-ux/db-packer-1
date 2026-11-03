import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../config/site';
import './FloatingWidgets.css';

const WhatsAppIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const FloatingWidgets = () => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      if (window.scrollY > 100) {
        setIsScrolling(true);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        scrollTimeout.current = setTimeout(() => {
          setIsScrolling(false);
        }, 800); // Collapse contact buttons 800ms after scrolling stops
      } else {
        setIsScrolling(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryPhoneDialable = SITE_CONFIG.contact.phones[0].e164;
  const primaryPhoneWhatsapp = SITE_CONFIG.contact.whatsapp;
  const whatsappContextMsg = location.pathname.startsWith('/product/')
    ? `Hi ADBPack, I'm viewing ${location.pathname.replace('/product/', '').replace(/-/g, ' ')} on adbpack.com and would like a quote.`
    : location.pathname.startsWith('/industries/')
    ? `Hi ADBPack, I'm viewing ${location.pathname.replace('/industries/', '').replace(/-/g, ' ')} on adbpack.com and would like a quote.`
    : location.pathname === '/export'
    ? `Hi ADBPack Export Desk, I'm looking to import custom printed packaging from India.`
    : `Hi ADBPack, I visited adbpack.com and would like a custom packaging quote.`;

  return (
    <div className="floating-widgets-container">
      {/* Scroll to Top Widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            className="floating-btn scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} color="#ffffff" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="contact-slot">
        {/* Main Floating Inquiry FAB */}
        <AnimatePresence>
          {isScrolling && (
            <motion.div 
              className="floating-btn fab-btn"
              aria-label="Inquiry options active"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <MessageCircle size={18} color="#ffffff" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Collapsible Contact Action Group */}
        <div className={`contact-widgets-group ${isScrolling ? 'collapsed' : ''}`}>
          {/* Call Widget */}
          <a 
            href={`tel:${primaryPhoneDialable}`} 
            className="floating-btn phone-btn" 
            aria-label="Call Us"
          >
            <Phone size={16} color="#ffffff" />
          </a>

          {/* Email Widget */}
          <a 
            href={`mailto:${SITE_CONFIG.contact.email}`} 
            className="floating-btn email-btn" 
            aria-label="Email Us"
          >
            <Mail size={16} color="#ffffff" />
          </a>
          
          {/* WhatsApp Chat Widget */}
          <a 
            href={`https://wa.me/${primaryPhoneWhatsapp}?text=${encodeURIComponent(whatsappContextMsg)}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="floating-btn whatsapp-btn" 
            aria-label="WhatsApp chat"
          >
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingWidgets;
