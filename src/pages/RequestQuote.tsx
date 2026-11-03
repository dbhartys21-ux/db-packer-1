import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Factory, Calendar, Settings, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../utils/supabaseClient';
import { SITE_CONFIG } from '../config/site';
import SEOHead from '../components/SEOHead';
import './RequestQuote.css';

const mapParamToProduct = (raw: string | null): string => {
  if (!raw) return '';
  const l = raw.toLowerCase();
  if (l.includes('mono')) return 'Mono Cartons';
  if (l.includes('rigid')) return 'Rigid Luxury Boxes';
  if (l.includes('corrugated')) return 'Corrugated Shippers';
  if (l.includes('pouch')) return 'Flexible Pouches';
  if (l.includes('blister')) return 'Cold / Hot Seal Blisters';
  if (l.includes('label')) return 'Self Adhesive Labels';
  if (l.includes('canister') || l.includes('tube')) return 'Canister Boxes / Paper Tubes';
  if (l.includes('tape')) return 'Promotional Tapes';
  return 'Other Custom Packaging';
};

const mapParamToIndustry = (raw: string | null): string => {
  if (!raw) return 'E-Commerce / Retail';
  const l = raw.toLowerCase();
  if (l.includes('pharma') || l.includes('health')) return 'Healthcare / Pharma';
  if (l.includes('cosmetic') || l.includes('personal')) return 'Cosmetics & Personal Care';
  if (l.includes('nutra') || l.includes('supplement') || l.includes('fitness')) return 'Nutraceuticals & Supplements';
  if (l.includes('liquor') || l.includes('spirit')) return 'Liquor & Spirits';
  if (l.includes('food') || l.includes('tea') || l.includes('coffee') || l.includes('confection')) return 'Food & Beverage';
  if (l.includes('gift')) return 'Corporate Gifting';
  if (l.includes('manufactur')) return 'Manufacturing / Industrial';
  return 'E-Commerce / Retail';
};

const RequestQuote = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    industry: mapParamToIndustry(searchParams.get('industry')),
    email: '',
    phone: '',
    product: mapParamToProduct(searchParams.get('product')),
    quantity: '',
    dimensions: '',
    customPrinting: 'Yes, custom logo/design',
    additionalInfo: ''
  });

  useEffect(() => {
    const p = searchParams.get('product');
    const ind = searchParams.get('industry');
    if (p || ind) {
      setFormData((prev) => ({
        ...prev,
        ...(p ? { product: mapParamToProduct(p) } : {}),
        ...(ind ? { industry: mapParamToIndustry(ind) } : {})
      }));
    }
  }, [searchParams]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.company.trim()) errs.company = 'Company is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Invalid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone is required';
    } else if (!/^\+?[0-9\s-]{7,18}$/.test(formData.phone.replace(/[^0-9+]/g, ''))) {
      errs.phone = 'Enter a valid phone / WhatsApp number';
    }
    return errs;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.product) errs.product = 'Please select a product';
    if (!formData.quantity) errs.quantity = 'Please select quantity';
    return errs;
  };

  const handleNext = () => {
    const step1Errors = validateStep1();
    if (Object.keys(step1Errors).length > 0) {
      setErrors(step1Errors);
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleBack = () => {
    setErrors({});
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const step2Errors = validateStep2();
    if (Object.keys(step2Errors).length > 0) {
      setErrors(step2Errors);
      return;
    }
    
    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            company: formData.company,
            industry: formData.industry,
            email: formData.email,
            phone: formData.phone,
            product: formData.product,
            quantity: formData.quantity,
            dimensions: formData.dimensions,
            custom_printing: formData.customPrinting,
            additional_info: formData.additionalInfo,
          }
        ]);

      if (error) throw error;

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting quote request:', err);
      setSubmitError(err.message || 'Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  return (
    <div className="quote-page-wrapper">
      <SEOHead
        title="Request a Free Packaging Quote — Custom Boxes & Cartons | ADBPack"
        description="Get a free custom packaging quote from ADBPack. ISO 9001:2015 certified. Wholesale B2B pricing on corrugated boxes, mono cartons, rigid boxes, pouches, blister packaging & more."
        canonicalPath="/quote"
        keywords="packaging quote, custom packaging price, bulk packaging order, wholesale packaging quote India, B2B packaging pricing, custom box quote"
      />
      
      {/* Left Column: Premium Graphics Sidebar */}
      <div className="quote-sidebar">
        <div className="quote-sidebar-overlay"></div>
        <div className="quote-sidebar-content">
          <h2>Premium B2B Packaging Quotes</h2>
          <p>
            Engage with our industrial manufacturing team. We supply ISO 9001 certified mono cartons, custom corrugated shippers, blisters, and pouches direct-from-factory.
          </p>
          <ul className="sidebar-benefits-list">
            <li><ShieldCheck size={18} className="sidebar-icon" /> ISO 9001 Certified Quality Standards</li>
            <li><Factory size={18} className="sidebar-icon" /> High-volume automated capacity</li>
            <li><Calendar size={18} className="sidebar-icon" /> Fast design and sample turnarounds</li>
            <li><Settings size={18} className="sidebar-icon" /> Engineered product specs</li>
          </ul>
        </div>
      </div>

      {/* Right Column: Multi-step Form Wizard Area */}
      <div className="quote-form-area">
        <div className="page-breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Request A Quote</span>
        </div>
        
        <div className="quote-form-header">
          <h1>Request a Custom Quote</h1>
          <p>Provide details below and our packaging engineer will contact you with bulk wholesale estimates.</p>
        </div>

        {/* Step Indicator Bar */}
        {!isSubmitted && (
          <div className="quote-step-indicator-bar" aria-label="Form progress">
            <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className="step-line-fill" style={{ width: step === 2 ? '100%' : '0%' }}></div>
            <div className={`step-dot ${step === 2 ? 'active' : ''}`}>2</div>
            <span className="step-label">Step {step} of 2</span>
          </div>
        )}

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* Success Feedback Box */
            <motion.div 
              className="quote-success-block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <CheckCircle2 size={56} className="success-icon" />
              <h2>Quote Request Received!</h2>
              <p>Our sales engineer is already working on your packaging layout specifications. You will receive a detailed wholesale pricing catalog via email within 2-4 business hours.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginTop: '18px' }}>
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    `Hi ADBPack, I just submitted a quote request on adbpack.com:\n• Name: ${formData.firstName} ${formData.lastName}\n• Company: ${formData.company} (${formData.industry})\n• Product: ${formData.product}\n• Quantity: ${formData.quantity}\n• Dimensions: ${formData.dimensions || 'To be discussed'}\n• Printing: ${formData.customPrinting}\n• Notes: ${formData.additionalInfo || 'None'}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ backgroundColor: '#25d366', color: '#fff', fontWeight: 700 }}
                >
                  Get Instant Priority Response on WhatsApp
                </a>
                <Link to="/products" className="btn btn-primary">Browse Packaging Catalog</Link>
              </div>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="detailed-quote-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {submitError && (
                <div className="submit-error-banner" style={{ color: '#dc3545', backgroundColor: 'rgba(220, 53, 69, 0.1)', padding: '12px', borderRadius: 'var(--radius)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{submitError}</span>
                </div>
              )}
              {step === 1 ? (
                /* STEP 1: Personal / Company Contact Info */
                <div className="form-step-section">
                  <h3 className="form-section-title">1. Business Information</h3>
                  
                  <div className="dq-row">
                    <div className="dq-group">
                      <label htmlFor="quote-fname">First Name *</label>
                      <input 
                        type="text" 
                        id="quote-fname"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`dq-input ${errors.firstName ? 'error' : ''}`} 
                        required 
                      />
                      {errors.firstName && <span className="dq-error">{errors.firstName}</span>}
                    </div>
                    <div className="dq-group">
                      <label htmlFor="quote-lname">Last Name *</label>
                      <input 
                        type="text" 
                        id="quote-lname"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`dq-input ${errors.lastName ? 'error' : ''}`} 
                        required 
                      />
                      {errors.lastName && <span className="dq-error">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="dq-row">
                    <div className="dq-group">
                      <label htmlFor="quote-company">Company Name *</label>
                      <input 
                        type="text" 
                        id="quote-company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`dq-input ${errors.company ? 'error' : ''}`} 
                        required 
                      />
                      {errors.company && <span className="dq-error">{errors.company}</span>}
                    </div>
                    <div className="dq-group">
                      <label htmlFor="quote-industry">Industry</label>
                      <select 
                        id="quote-industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="dq-select"
                      >
                        <option>E-Commerce / Retail</option>
                        <option>Healthcare / Pharma</option>
                        <option>Cosmetics &amp; Personal Care</option>
                        <option>Nutraceuticals &amp; Supplements</option>
                        <option>Food &amp; Beverage</option>
                        <option>Liquor &amp; Spirits</option>
                        <option>Corporate Gifting</option>
                        <option>Manufacturing / Industrial</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="dq-row">
                    <div className="dq-group">
                      <label htmlFor="quote-email">Email Address *</label>
                      <input 
                        type="email" 
                        id="quote-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`dq-input ${errors.email ? 'error' : ''}`} 
                        required 
                      />
                      {errors.email && <span className="dq-error">{errors.email}</span>}
                    </div>
                    <div className="dq-group">
                      <label htmlFor="quote-phone">Phone / WhatsApp Number (with Country Code) *</label>
                      <input 
                        type="tel" 
                        id="quote-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`dq-input ${errors.phone ? 'error' : ''}`} 
                        placeholder="e.g. +91 97114 92120 or +1 / +971 / +44"
                        required 
                      />
                      {errors.phone && <span className="dq-error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-navigation-actions" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
                    <button type="button" onClick={handleNext} className="btn btn-primary btn-next-step">
                      Next Step <ArrowRight size={18} style={{ marginLeft: '6px' }} />
                    </button>
                  </div>
                </div>
              ) : (
                /* STEP 2: Packaging Specifications */
                <div className="form-step-section">
                  <h3 className="form-section-title">2. Packaging Specifications</h3>

                  <div className="dq-row">
                    <div className="dq-group">
                      <label htmlFor="quote-product">Packaging Type *</label>
                      <select 
                        id="quote-product"
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        className={`dq-select ${errors.product ? 'error' : ''}`}
                        required
                      >
                        <option value="" disabled>Select product type...</option>
                        <option value="Mono Cartons">Mono Cartons</option>
                        <option value="Rigid Luxury Boxes">Rigid Luxury Boxes</option>
                        <option value="Corrugated Shippers">Corrugated Shippers</option>
                        <option value="Flexible Pouches">Flexible Pouches</option>
                        <option value="Cold / Hot Seal Blisters">Cold / Hot Seal Blister Packaging</option>
                        <option value="Self Adhesive Labels">Self Adhesive Labels</option>
                        <option value="Canister Boxes / Paper Tubes">Canister Boxes / Paper Tubes</option>
                        <option value="Promotional Tapes">Promotional Tapes</option>
                        <option value="Other Custom Packaging">Other Custom Packaging</option>
                      </select>
                      {errors.product && <span className="dq-error">{errors.product}</span>}
                    </div>
                    <div className="dq-group">
                      <label htmlFor="quote-quantity">Estimated Order Volume *</label>
                      <select 
                        id="quote-quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className={`dq-select ${errors.quantity ? 'error' : ''}`}
                        required
                      >
                        <option value="" disabled>Select quantity...</option>
                        <option>Under 1,000 units</option>
                        <option>1,000 - 5,000 units</option>
                        <option>5,000 - 20,000 units</option>
                        <option>20,000+ units (Wholesale discount)</option>
                      </select>
                      {errors.quantity && <span className="dq-error">{errors.quantity}</span>}
                    </div>
                  </div>

                  <div className="dq-row">
                    <div className="dq-group">
                      <label htmlFor="quote-dimensions">Approximate Dimensions (L x W x H)</label>
                      <input 
                        type="text" 
                        id="quote-dimensions"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        className="dq-input" 
                        placeholder="e.g. 12 x 10 x 6 inches" 
                      />
                    </div>
                    <div className="dq-group">
                      <label htmlFor="quote-printing">Do you need custom printing?</label>
                      <select 
                        id="quote-printing"
                        name="customPrinting"
                        value={formData.customPrinting}
                        onChange={handleInputChange}
                        className="dq-select"
                      >
                        <option>Yes, custom logo/design</option>
                        <option>No, plain packaging</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="dq-group">
                    <label htmlFor="quote-info">Additional Requirements</label>
                    <textarea 
                      id="quote-info"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="dq-textarea" 
                      rows={4} 
                      placeholder="Specify material grades (e.g. kraft GSM, fluting profiles), timeline constraints, shipping requirements..."
                    ></textarea>
                  </div>

                  <div className="form-navigation-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                    <button type="button" onClick={handleBack} className="btn btn-secondary btn-back-step" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <ArrowLeft size={18} /> Back
                    </button>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-submit-dq">
                      {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
                    </button>
                  </div>
                </div>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default RequestQuote;
