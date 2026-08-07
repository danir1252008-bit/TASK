import React, { useState, useEffect } from 'react';
import heroLightAsset from '../assets/Hero Page.png';
import heroDarkAsset from '../assets/hero-dark.jpg';

const PricingPage = ({ setActiveTab, isDarkMode: isDarkModeProp }) => {
  const [isDark, setIsDark] = useState(() => 
    isDarkModeProp !== undefined ? isDarkModeProp : (typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
  );

  useEffect(() => {
    const checkDark = () => {
      if (typeof document !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    if (typeof document !== 'undefined') {
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    }
    return () => observer.disconnect();
  }, []);

  const activeDarkMode = isDarkModeProp !== undefined ? isDarkModeProp : isDark;
  const marketplaceBg = activeDarkMode ? heroDarkAsset : heroLightAsset;

  const handleSelectPlan = (planName) => {
    if (setActiveTab) setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-background text-on-surface">
      {/* Header Hero */}
      <header className="relative w-full min-h-[75vh] flex items-center justify-center pt-24 overflow-hidden z-10">
        <div className="absolute -top-24 inset-x-0 bottom-0 z-0">
          <img 
            className="absolute inset-0 w-full h-[120vh] object-cover object-top opacity-85 pointer-events-none" 
            alt="Light Marketplace Scene" 
            src={heroLightAsset} 
          />
          <img 
            className={`absolute inset-0 w-full h-[120vh] object-cover object-top blur-[6px] scale-105 transition-opacity duration-500 ease-in-out pointer-events-none ${
              activeDarkMode ? 'opacity-100' : 'opacity-0'
            }`} 
            alt="Dark Marketplace Scene" 
            src={heroDarkAsset} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-background/60 to-background z-10"></div>
        </div>

        {/* Floating Animated Lanterns */}
        <div className="absolute top-1/4 left-1/4 w-16 h-24 bg-primary-container rounded-full blur-2xl opacity-40 animate-pulse-glow animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse-glow animate-float-delayed"></div>

        <div className="relative z-10 text-center max-w-4xl px-container-padding-mobile md:px-0 mt-12">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 inline-block px-4 py-1 rounded-full bg-background/80 border border-secondary/30">
            Pricing & Services
          </span>
          <h1 className="font-headline-xl text-4xl md:text-headline-xl text-on-surface mb-6 text-glow leading-tight">
            The Marketplace of <br />
            <span className="text-primary-fixed-dim">Digital Growth</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our curated boutiques for design, development, and scaling. Find the perfect architectural fit for your brand's next chapter.
          </p>
          
          <a 
            href="#boutiques" 
            className="inline-flex items-center gap-3 text-secondary font-label-caps text-label-caps uppercase tracking-widest hover:text-white transition-colors group"
          >
            Descend into the Bazaar
            <span className="material-symbols-outlined animate-bounce">keyboard_arrow_down</span>
          </a>
        </div>
      </header>

      {/* Pricing Boutiques Bento Section */}
      <section className="relative z-20 pb-section-gap pt-12 px-container-padding-mobile md:px-container-padding-desktop" id="boutiques">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
            
            {/* Card 1: Starter */}
            <div className="md:col-span-4 solid-panel rounded-xl p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-secondary/20 hover:border-secondary/50">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high border border-outline/30 text-secondary">
                <span className="material-symbols-outlined">brush</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">The Artisan's Stall</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
                Essential digital craftsmanship for emerging brands. Focuses on identity, high-conversion landing pages, and clean UI.
              </p>
              
              <div className="mb-8 border-b border-white/10 pb-6">
                <span className="font-headline-lg text-headline-lg text-primary-fixed-dim">$2,500</span>
                <span className="font-body-md text-body-md text-on-surface-variant"> / project</span>
              </div>
              
              <ul className="space-y-4 mb-8 font-body-md text-body-md">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Bespoke Brand Identity System</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Custom Animated Landing Page</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>SEO & Performance Tuning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Mobile & Tablet Responsiveness</span>
                </li>
              </ul>
              
              <button 
                onClick={() => handleSelectPlan("The Artisan's Stall")}
                className="w-full py-3.5 rounded-lg border border-secondary/50 text-secondary font-button-text text-button-text hover:bg-secondary/10 transition-colors mt-auto font-semibold tracking-wider hover:scale-105 active:scale-95"
              >
                Visit Stall
              </button>
            </div>

            {/* Card 2: Business (Highlighted) */}
            <div className="md:col-span-4 solid-panel rounded-xl p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border-2 border-secondary ambient-glow-crimson transform scale-105 z-10 bg-[#1e1c1c]">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary-container"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high border border-outline/30 text-secondary">
                  <span className="material-symbols-outlined">storefront</span>
                </div>
                <span className="px-3 py-1 rounded-full border border-primary/50 text-primary font-label-caps text-label-caps bg-primary/10 tracking-widest uppercase">
                  Most Popular
                </span>
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">The Merchant's Manor</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
                Sophisticated architecture for growing businesses. Full e-commerce, custom CMS, and integrated growth systems.
              </p>
              
              <div className="mb-8 border-b border-white/10 pb-6">
                <span className="font-headline-lg text-headline-lg text-secondary">$8,500</span>
                <span className="font-body-md text-body-md text-on-surface-variant"> / project</span>
              </div>

              <ul className="space-y-4 mb-8 font-body-md text-body-md text-on-surface">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Full E-Commerce Platform Setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Advanced Headless CMS Integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Custom Glassmorphic Micro-interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>30 Days Post-Launch Support</span>
                </li>
              </ul>

              <button 
                onClick={() => handleSelectPlan("The Merchant's Manor")}
                className="w-full py-4 rounded-lg bg-primary-container text-on-primary-container font-button-text text-button-text hover:bg-primary-container/80 transition-all crimson-glow mt-auto font-bold tracking-wider hover:scale-105 active:scale-95"
              >
                Enter Manor
              </button>
            </div>

            {/* Card 3: Enterprise */}
            <div className="md:col-span-4 solid-panel rounded-xl p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-secondary/20 hover:border-secondary/50">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high border border-outline/30 text-secondary">
                <span className="material-symbols-outlined">castle</span>
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">The Empire's Citadel</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow leading-relaxed">
                Full-scale custom digital ecosystems for ambitious industry leaders requiring maximum performance and bespoke features.
              </p>

              <div className="mb-8 border-b border-white/10 pb-6">
                <span className="font-headline-lg text-headline-lg text-primary-fixed-dim">$18,500</span>
                <span className="font-body-md text-body-md text-on-surface-variant"> / project</span>
              </div>

              <ul className="space-y-4 mb-8 font-body-md text-body-md">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Bespoke Web Application & APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Multi-Region Cloud Infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Interactive 3D / Shader Canvas Elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-1">check_circle</span>
                  <span>Priority Support & SLA SLA</span>
                </li>
              </ul>

              <button 
                onClick={() => handleSelectPlan("The Empire's Citadel")}
                className="w-full py-3.5 rounded-lg border border-secondary/50 text-secondary font-button-text text-button-text hover:bg-secondary/10 transition-colors mt-auto font-semibold tracking-wider hover:scale-105 active:scale-95"
              >
                Claim Citadel
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
