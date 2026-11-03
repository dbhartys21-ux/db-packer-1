import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import RequestQuote from './pages/RequestQuote';
import ContactUs from './pages/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Industries from './pages/Industries';
import IndustryDetails from './pages/IndustryDetails';
import ExportPage from './pages/ExportPage';
import ScrollToTop from './components/ScrollToTop';
import FloatingWidgets from './components/FloatingWidgets';
import { Analytics } from '@vercel/analytics/react';

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to Content</a>
      <Navbar />
      <main id="main-content" className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetails />} />
          <Route path="/export" element={<ExportPage />} />
          <Route path="/quote" element={<RequestQuote />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <FloatingWidgets />
      <Footer />
    </>
  );
}

function App() {
  const isComingSoon = false; // Set to false to reveal the full website

  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <Router>
      <AppRoutes />
      <Analytics />
    </Router>
  );
}

export default App;
