import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import logo from '../assets/adbpack-logo.png';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      
      <div className="coming-soon-content">
        <motion.div 
          className="coming-soon-logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={logo} alt={`${SITE_CONFIG.name} Logo`} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="coming-soon-title">Launching Soon</h1>
          <p className="coming-soon-subtitle">
            We are working hard to bring you the best packaging solutions. 
            Our new website is almost ready to go live!
          </p>
        </motion.div>

        <motion.div 
          className="coming-soon-contact-cards"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Phone className="contact-icon" />
            </div>
            <h3>Call Us</h3>
            <p><a href="tel:+919711492120">+91 9711492120</a></p>
            <p><a href="tel:+917982194994">+91 7982194994</a></p>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <Mail className="contact-icon" />
            </div>
            <h3>Email Us</h3>
            <p><a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a></p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <MapPin className="contact-icon" />
            </div>
            <h3>Visit Us</h3>
            <p>{SITE_CONFIG.contact.address.join(' ')}</p>
          </div>
        </motion.div>

        <motion.div 
          className="coming-soon-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
