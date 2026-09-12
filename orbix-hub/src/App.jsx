import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './styles/tokens.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LiquidMesh from './components/LiquidMesh';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Global Liquid Mesh Background */}
        <LiquidMesh />
        
        {/* Header - shown on all pages */}
        <Header />
        
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer - shown on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
