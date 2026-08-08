import React, { useState } from 'react';

const Navbar = ({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuAOn2QRGn-BG4x5vuubQ-4M2dIB7N930LKtPmOXJBOE48bCXvuRekAGtjBruiBoJGdsQMgQ4PppE2YqmNux6nRDR53HIG0zBSgRvJrhCxmCqRSXOwfKqc3LrD8W9Wf7WwYs6veYbCRtqvOcvgRIb84qWr9SFWcyivT7PscGfX343QDDwi9xFvK0Pdy2dYJ7Duc5mp3Ij3OTCHoM3-ozZncK61O0yX-uyP4RSztCN-wSxrvzVF-Hn-32XFnop2EprH5HEZA";
  
  const whatsappUrl = "https://wa.me/919310040848?text=Hi%20TASK,%20I%20want%20to%20build%20a%20website.";

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleTheme = () => {
    const nextMode = !isDarkMode;
    if (setIsDarkMode) {
      setIsDarkMode(nextMode);
    }
    if (nextMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const ThemeToggle = () => (
    <div className="theme-toggle-wrapper">
      <label className="toggle-switch" title="Toggle Light / Dark Mode">
        <input 
          type="checkbox" 
          checked={!!isDarkMode} 
          onChange={handleToggleTheme} 
        />
        <span className="slider">
          <span className="clouds">
            <svg className="cloud cloud1" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
            </svg>
            <svg className="cloud cloud2" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
            </svg>
          </span>
        </span>
      </label>
    </div>
  );

  return (
    <>
      {/* Fixed Height Desktop Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 rounded-full mx-auto max-w-[80%] w-full h-12 border border-secondary/20 shadow-[0_4px_24px_0_rgba(175,141,17,0.1)] hidden md:flex bg-surface-container-low/90 backdrop-blur-md mt-2 transition-all duration-300 relative">
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

        {/* Mathematically Centered Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-8">
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

        <div className="flex items-center space-x-3 relative z-10">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* WhatsApp Reach Us Button */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary-container font-button-text text-xs px-5 py-1.5 rounded-lg hover:border hover:border-secondary transition-all crimson-glow hover:scale-105 active:scale-95 font-bold tracking-wider inline-block text-center"
          >
            Reach Us
          </a>
        </div>
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
        <div className="flex items-center space-x-2">
          {/* Mobile Theme Toggle Button */}
          <ThemeToggle />

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-secondary p-1 focus:outline-none"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
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
