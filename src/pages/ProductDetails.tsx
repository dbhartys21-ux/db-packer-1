import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Check, Package, ShieldCheck, Truck } from 'lucide-react';
import { getProductById } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(id ? getProductById(id) : undefined);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (id) {
      const found = getProductById(id);
      if (found) {
        setProduct(found);
        setActiveImage(found.img);
      } else {
        // Redirect to products if not found
        navigate('/products');
      }
    }
  }, [id, navigate]);

  if (!product) {
    return <div className="page-container" style={{ padding: '100px', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <div className="page-container product-details-page">
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-separator">›</span>
          <Link to="/products">Products</Link>
          <span className="breadcrumb-separator">›</span>
          <span style={{ color: 'var(--text-color)' }}>{product.title}</span>
        </div>

        {/* Top Section: Gallery, Info, Buy Box */}
        <div className="product-top-section">
          
          {/* Left: Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-container">
              <img src={activeImage} alt={product.title} />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="thumbnail-list">
                {product.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`${product.title} view ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Middle: Product Info */}
          <div className="product-info-column">
            <h1>{product.title}</h1>
            <span className="product-category">{product.category}</span>
            <p className="product-short-desc">{product.desc}</p>
            
            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Key Features</h3>
            <ul className="product-features">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Right: CTA Box (Amazon Style) */}
          <div className="product-cta-box">
            <div className="cta-price-mock">Custom Pricing</div>
            <div className="cta-stock">Available for bulk order</div>
            <p className="cta-box-desc">
              Get specialized B2B pricing tailored to your volume and customization needs.
            </p>
            
            <Link to="/quote" className="btn btn-primary btn-quote-full">
              Get a Custom Quote
            </Link>

            <ul className="cta-benefits">
              <li><Check size={16} /> Secure Payment Processing</li>
              <li><Truck size={16} /> Fast Pan-India Delivery</li>
              <li><Package size={16} /> MOQ Applies</li>
              <li><ShieldCheck size={16} /> DBPack Quality Guarantee</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Details and Specs */}
        <div className="product-bottom-section">
          <h2>Product Description</h2>
          <p className="product-full-desc">{product.fullDesc}</p>

          <h2>Technical Specifications</h2>
          <table className="specs-table">
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
    </div>
  );
};

export default ProductDetails;
