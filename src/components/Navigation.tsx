import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img 
                src="/YELENI-logo.png" 
                alt="YELENI - Pour un brillant avenir" 
                className="h-16 w-auto"
                style={{
                  filter: 'brightness(0) invert(1)',
                  objectFit: 'contain'
                }}
              />
            </Link>

            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-gray-300">Accueil</Link>
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 hover:text-gray-300"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>Produits</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5 ${isProductsOpen ? 'block' : 'hidden'} group-hover:block`}>
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link
                      to="/produits/standard"
                      className="block px-4 py-2 text-sm hover:bg-gray-800"
                      role="menuitem"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Starlink Standard
                    </Link>
                    <Link
                      to="/produits/mini"
                      className="block px-4 py-2 text-sm hover:bg-gray-800"
                      role="menuitem"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Starlink Mini
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/services" className="hover:text-gray-300">Services</Link>
              <Link to="/a-propos" className="hover:text-gray-300">À propos</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </div>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu principal"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>

        <div
          ref={mobileMenuRef}
          className={`fixed inset-0 bg-black transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          } md:hidden`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 md:hidden"
            aria-label="Fermer le menu"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex flex-col h-full pt-32 px-8">
            <div className="flex-1">
              <div className="space-y-8 text-center">
                <Link 
                  to="/"
                  className="block text-2xl font-semibold hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
                <div className="py-4">
                  <button
                    className="flex items-center justify-center w-full text-2xl font-semibold hover:text-gray-300 transition-colors"
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    aria-expanded={isProductsOpen}
                  >
                    <span>Produits</span>
                    <ChevronDown className={`w-6 h-6 ml-2 transform transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`mt-4 space-y-4 overflow-hidden transition-all duration-300 ${
                      isProductsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <Link
                      to="/produits/standard"
                      className="block text-xl text-gray-300 hover:text-white transition-colors"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Starlink Standard
                    </Link>
                    <Link
                      to="/produits/mini"
                      className="block text-xl text-gray-300 hover:text-white transition-colors"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Starlink Mini
                    </Link>
                  </div>
                </div>
                <Link 
                  to="/services"
                  className="block text-2xl font-semibold hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/a-propos"
                  className="block text-2xl font-semibold hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  À propos
                </Link>
                <Link 
                  to="/contact"
                  className="block text-2xl font-semibold hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}