
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Phone, Briefcase, Info, Mail, Calculator, LayoutDashboard, Menu, X } from 'lucide-react';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import EstimatePage from './pages/Estimate';
import PortalPage from './pages/Portal';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Portfolio', path: '/portfolio', icon: LayoutDashboard },
    { name: 'Estimator', path: '/estimate', icon: Calculator },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 text-white backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-amber-500 p-1.5 rounded-sm">
              <div className="border-2 border-white text-white font-bold px-1 text-xl">NC</div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter leading-none">NEVEAUX CAPITAL</span>
              <span className="text-[10px] tracking-widest text-amber-500 font-medium uppercase">Katy, Texas</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-amber-500 ${
                  isActive(link.path) ? 'text-amber-500 underline underline-offset-8' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/portal"
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-md text-sm font-bold transition-all shadow-md active:scale-95"
            >
              CLIENT PORTAL
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-300 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-4 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'bg-amber-600/20 text-amber-500' : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <link.icon size={20} />
                {link.name}
              </Link>
            ))}
            <Link
              to="/portal"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-4 text-amber-500 font-bold border-t border-slate-800"
            >
              <LayoutDashboard size={20} />
              CLIENT PORTAL
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-16 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-amber-500 p-1 rounded-sm">
            <div className="border-2 border-white text-white font-bold px-1 text-lg leading-none">NC</div>
          </div>
          <span className="text-xl font-bold text-white tracking-tighter">NEVEAUX CAPITAL</span>
        </div>
        <p className="max-w-sm mb-8 leading-relaxed">
          Premium residential and commercial construction based in Katy, TX. Building Greater Houston's future with integrity and craftsmanship.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.355-2.617-6.783-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">QUICK LINKS</h4>
        <ul className="space-y-4 text-sm">
          <li><Link to="/services" className="hover:text-amber-500 transition-colors">Residential Services</Link></li>
          <li><Link to="/services" className="hover:text-amber-500 transition-colors">Commercial Construction</Link></li>
          <li><Link to="/portfolio" className="hover:text-amber-500 transition-colors">Project Portfolio</Link></li>
          <li><Link to="/estimate" className="hover:text-amber-500 transition-colors">Cost Estimator</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">CONTACT</h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <Mail size={16} className="mt-1 text-amber-500" />
            <span>sirneveaux@gmail.com</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone size={16} className="mt-1 text-amber-500" />
            <span>936-499-8772</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-4 h-4 mt-1 bg-amber-500 rounded-full flex-shrink-0" />
            <span>Serving Katy, TX &<br/>Greater Houston Area</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
      <p>© 2026 Neveaux Capital. All rights reserved. Licensed & Insured.</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/estimate" element={<EstimatePage />} />
            <Route path="/portal/*" element={<PortalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
