import './ContactUs.css';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-breadcrumb">
        <Link to="/">DB Packer</Link> &bull; Contact us
      </div>

      <div className="contact-page-header">
        <h1>Contact us</h1>
        <p>Get in touch and ask us anything. Whether you need custom packaging solutions, want to check our manufacturing capacity, or just have a general question — we answer it all.</p>
      </div>

      <div className="contact-form-section">
        <div className="contact-form-wrapper">
          <form className="minimal-contact-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your name *" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email address *" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group phone-input-group">
                <div className="country-code-select">
                  <span>🇮🇳</span>
                  <span>&#8964;</span>
                </div>
                <input type="tel" className="form-control phone-input" placeholder="+91 999 9999999 *" required />
              </div>
              <div className="form-group">
                <select className="form-control" required defaultValue="">
                  <option value="" disabled>Interested in *</option>
                  <option value="manufacturing">Custom Manufacturing</option>
                  <option value="bulk">Bulk Order Quote</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <textarea className="form-control" rows={6} placeholder="How can we help? *" required></textarea>
            </div>

            <div className="form-submit-wrapper">
              <button type="submit" className="btn-submit-pill">Send your message</button>
              <p className="terms-text">
                By clicking, you agree to our <a href="#">Terms & Conditions</a>,<br />
                <a href="#">Privacy and Data Protection Policy</a>
              </p>
            </div>
          </form>

          {/* Illustrations */}
          <div className="illustration-left">
            <img src="/contact-left.png" alt="Person at desk" />
          </div>
          <div className="illustration-right">
            <img src="/contact-right.png" alt="Person waving" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
