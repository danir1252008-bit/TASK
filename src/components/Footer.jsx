import React from 'react';
import FirefliesCanvas from './FirefliesCanvas';

const Footer = ({ setActiveTab }) => {
  const handleNavigate = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLogo = "https://lh3.googleusercontent.com/aida-public/AB6AXuDFRs65kMehhHQYet3Jr1umea0730SM8zyDfIdzqKDCOwaSBWAttAZoR8un9nkmaLuIDcK7nWkOvRPP0S1MibwtPCwK56FkIS3vg0rtSZeEtrukg7pg12A8RV1AcgzIp-Sqf1LO3mxuSTGaA0OjaMboKL_v0UemqFaYgwT3AIN8Sgf7Tyj7OA-Wc-pjk18IleDGfNEUPqDxcaUBVSDuSl_US2QWK4sB-ZtEgk4esJuM0bFU1K-jyxOHrJkUL_MsnnglVok";

  return (
    <footer className="w-full pt-section-gap pb-8 px-container-padding-mobile md:px-container-padding-desktop bg-[#0f111a] relative z-20 overflow-hidden border-t border-secondary/10">
      {/* Night Market Background & Effects */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f111a]/80 via-[#0f111a]/95 to-[#050608] z-0"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Floating Fireflies */}
      <FirefliesCanvas count={40} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top CTA Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/10 pb-16 mb-16 relative">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-4 leading-tight">
              Let's Build the Next Landmark of the Internet.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant/80">
              From local businesses to ambitious startups, we craft websites that don't just look beautiful—they grow businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button 
              onClick={() => handleNavigate('contact')}
              className="bg-primary-container text-on-primary-container font-button-text text-button-text px-8 py-4 rounded-lg hover:bg-primary-container/80 transition-all crimson-glow hover:scale-105 active:scale-95"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => handleNavigate('contact')}
              className="bg-transparent border border-secondary/30 text-secondary font-button-text text-button-text px-8 py-4 rounded-lg hover:bg-secondary/10 hover:border-secondary transition-all lantern-glow hover:scale-105 active:scale-95"
            >
              Schedule a Call
            </button>
          </div>

          {/* Floating Glassmorphic CTA Card */}
          <div className="hidden lg:block absolute -top-24 right-0 max-w-xs glass-panel p-6 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border border-secondary/20 bg-[#151720]/80 backdrop-blur-md">
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Have an idea? Let's make it unforgettable. We craft websites that don't just look beautiful—they grow businesses.
            </p>
            <button 
              onClick={() => handleNavigate('contact')}
              className="font-button-text text-button-text text-secondary hover:text-secondary-fixed flex items-center gap-2 group cursor-pointer"
            >
              Get Started 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Logo & Contact Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="font-headline-md text-headline-md text-primary drop-shadow-[0_0_15px_rgba(193,18,31,0.5)] mb-6">
              <img 
                alt="TASK Logo" 
                className="h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,210,206,0.5)]" 
                src={footerLogo} 
              />
            </div>
            <div className="space-y-3 font-body-md text-body-md text-on-surface-variant/70 mb-8">
              <a 
                href="mailto:Taskfromindia@gmail.com" 
                className="hover:text-secondary transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">mail</span> Taskfromindia@gmail.com
              </a>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">location_on</span> Kolkata, India
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#share" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant hover:bg-secondary/20 hover:text-secondary transition-all border border-white/10 hover:border-secondary/30">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>
              <a href="#instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant hover:bg-secondary/20 hover:text-secondary transition-all border border-white/10 hover:border-secondary/30">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a href="tel:+919310040848" title="Call Us: +91 93100 40848" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-on-surface-variant hover:bg-secondary/20 hover:text-secondary transition-all border border-white/10 hover:border-secondary/30">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 tracking-widest uppercase">Company</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => handleNavigate('home')} className="font-body-md text-body-md text-on-surface-variant/80 hover:text-white transition-colors relative group text-left">
                  About TASK
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('portfolio')} className="font-body-md text-body-md text-on-surface-variant/80 hover:text-white transition-colors relative group text-left">
                  Our Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('pricing')} className="font-body-md text-body-md text-on-surface-variant/80 hover:text-white transition-colors relative group text-left">
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="font-body-md text-body-md text-on-surface-variant/80 hover:text-white transition-colors relative group text-left">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-4">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 tracking-widest uppercase">Services</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {[
                'Custom Website Development',
                'UI/UX Design',
                'Brand Identity & Logo Design',
                'E-Commerce Development',
                'Website Management',
                'SEO Optimization',
                'Performance Optimization',
                'Website Redesign'
              ].map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavigate('pricing')}
                    className="font-body-md text-body-md text-on-surface-variant/80 hover:text-white transition-colors relative group text-sm text-left"
                  >
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-label-caps text-label-caps text-secondary mb-6 tracking-widest uppercase">Resources</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => handleNavigate('privacy')} className="font-body-md text-body-md text-on-surface-variant/80 hover:text-white transition-colors relative group block text-left">
                  Privacy Policy
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('terms')} className="font-body-md text-body-md text-on-surface-variant/80 hover:text-white transition-colors relative group block text-left">
                  Terms & Conditions
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-label-caps text-label-caps text-on-surface-variant/60 text-center md:text-left">
            © 2026 TASK Studio. Crafted with passion in India for businesses around the world.
          </div>
          <div className="flex items-center gap-2 font-label-caps text-[10px] text-on-surface-variant/40 tracking-widest uppercase">
            <span>System Online</span>
            <span className="w-2 h-2 rounded-full bg-secondary/80 animate-pulse"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
