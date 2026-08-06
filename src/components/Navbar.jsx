import React, { useState } from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuAOn2QRGn-BG4x5vuubQ-4M2dIB7N930LKtPmOXJBOE48bCXvuRekAGtjBruiBoJGdsQMgQ4PppE2YqmNux6nRDR53HIG0zBSgRvJrhCxmCqRSXOwfKqc3LrD8W9Wf7WwYs6veYbCRtqvOcvgRIb84qWr9SFWcyivT7PscGfX343QDDwi9xFvK0Pdy2dYJ7Duc5mp3Ij3OTCHoM3-ozZncK61O0yX-uyP4RSztCN-wSxrvzVF-Hn-32XFnop2EprH5HEZA";
  
  const whatsappUrl = "https://wa.me/9310040848?text=Hi%20TASK,%20I%20want%20to%20build%20a%20website.";

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Height Desktop Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 rounded-full mx-auto max-w-[75%] w-full h-12 border border-secondary/20 shadow-[0_4px_24px_0_rgba(175,141,17,0.1)] hidden md:flex bg-surface-container-low/90 backdrop-blur-md mt-2 transition-all duration-300">
        <div 
          className="cursor-pointer flex items-center gap-2 relative z-10"
          onClick={() => handleNavClick('home')}
        >
          <img 
            alt="TASK Logo" 
            className="h-14 w-auto object-contain drop-shadow-[0_0_14px_rgba(193,18,31,0.5)] hover:scale-105 transition-transform -my-2" 
            src={logoSrc} 
            style={{ maxHeight: '56px', width: 'auto' }}
          />
        </div>

        <div className="flex items-center space-x-6">
          <button 
            onClick={() => handleNavClick('home')}
            className={`font-button-text text-sm transition-all ${
              activeTab === 'home' 
                ? 'text-secondary font-bold scale-105 border-b-2 border-secondary pb-0.5' 
                : 'text-on-surface/70 hover:text-secondary hover:scale-105'
            }`}
          >
            Home
          </button>

          <button 
            onClick={() => handleNavClick('portfolio')}
            className={`font-button-text text-sm transition-all ${
              activeTab === 'portfolio' 
                ? 'text-secondary font-bold scale-105 border-b-2 border-secondary pb-0.5' 
                : 'text-on-surface/70 hover:text-secondary hover:scale-105'
            }`}
          >
            Portfolio
          </button>

          <button 
            onClick={() => handleNavClick('pricing')}
            className={`font-button-text text-sm transition-all ${
              activeTab === 'pricing' 
                ? 'text-secondary font-bold scale-105 border-b-2 border-secondary pb-0.5' 
                : 'text-on-surface/70 hover:text-secondary hover:scale-105'
            }`}
          >
            Pricing
          </button>
        </div>

        {/* WhatsApp Reach Us Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-container text-on-primary-container font-button-text text-xs px-5 py-1.5 rounded-lg hover:border hover:border-secondary transition-all crimson-glow hover:scale-105 active:scale-95 font-bold tracking-wider inline-block text-center"
        >
          Reach Us
        </a>
      </nav>

      {/* Fixed Height Mobile Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden glass-panel flex justify-between items-center h-12 px-5 bg-[#1c1b1b]/95 border-b border-secondary/20 backdrop-blur-md">
        <div 
          className="cursor-pointer flex items-center"
          onClick={() => handleNavClick('home')}
        >
          <img 
            alt="TASK Logo" 
            className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(193,18,31,0.4)] -my-1" 
            src={logoSrc} 
            style={{ maxHeight: '48px', width: 'auto' }}
          />
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-secondary p-1 focus:outline-none"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-12 z-40 md:hidden bg-[#131313]/95 backdrop-blur-xl border-b border-secondary/20 px-6 py-5 flex flex-col space-y-3 shadow-2xl">
          <button 
            onClick={() => handleNavClick('home')}
            className={`text-left py-1.5 font-button-text text-base ${
              activeTab === 'home' ? 'text-secondary font-bold' : 'text-on-surface/80'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('portfolio')}
            className={`text-left py-1.5 font-button-text text-base ${
              activeTab === 'portfolio' ? 'text-secondary font-bold' : 'text-on-surface/80'
            }`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => handleNavClick('pricing')}
            className={`text-left py-1.5 font-button-text text-base ${
              activeTab === 'pricing' ? 'text-secondary font-bold' : 'text-on-surface/80'
            }`}
          >
            Pricing
          </button>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-2 bg-primary-container text-on-primary-container font-button-text text-center py-2.5 rounded-lg crimson-glow font-semibold text-sm block"
          >
            Reach Us
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
