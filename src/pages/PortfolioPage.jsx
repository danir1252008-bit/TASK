import React, { useState, useEffect } from 'react';
import coachingImg from '../assets/xyz-coaching.png';
import coachingMobileImg from '../assets/xyz-coaching-mobile.png';
import jewelryImg from '../assets/xyz-jewelry.jpg';
import heroLightAsset from '../assets/Hero Page.png';
import heroDarkAsset from '../assets/hero-dark.jpg';

const PortfolioPage = ({ setActiveTab, isDarkMode: isDarkModeProp }) => {
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
  const bgImg = activeDarkMode ? heroDarkAsset : heroLightAsset;

  return (
    <div className="relative min-h-screen bg-background">
      {/* Visible Stationary Background Image on Mobile, Fixed on Desktop */}
      <div className="absolute md:fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-background z-10"></div>
        <img 
          alt="Light Marketplace Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-85 blur-md scale-105 pointer-events-none" 
          src={heroLightAsset} 
        />
        <img 
          alt="Dark Marketplace Background" 
          className={`absolute inset-0 w-full h-full object-cover object-center blur-md scale-105 transition-opacity duration-500 ease-in-out pointer-events-none ${
            activeDarkMode ? 'opacity-100' : 'opacity-0'
          }`} 
          src={heroDarkAsset} 
        />
      </div>

      <main className="relative z-10 pt-32 pb-section-gap">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-container-padding-mobile md:px-container-padding-desktop max-w-[1440px] mx-auto relative mb-16">
          <div className="glass-panel p-8 md:p-12 rounded-xl max-w-4xl relative z-10 glow-hover transition-all duration-500 bg-[#1c1b1b]/80 border border-secondary/30">
            <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-secondary mb-6 text-glow leading-tight">
              The Digital City of Growth
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
              Where traditional craftsmanship meets digital power. Explore our portfolio of transformed landmarks and immersive digital storefronts.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-panel px-5 py-2.5 rounded-full flex items-center gap-2 border border-primary/30 bg-black/40">
                <span className="material-symbols-outlined text-primary text-base">group</span>
                <span className="font-label-caps text-label-caps text-on-surface">53+ CLIENTS TRANSFORMED</span>
              </div>
              <div className="glass-panel px-5 py-2.5 rounded-full flex items-center gap-2 border border-primary/30 bg-black/40">
                <span className="material-symbols-outlined text-secondary text-base">bolt</span>
                <span className="font-label-caps text-label-caps text-on-surface">99.9% UPTIME & SPEED</span>
              </div>
              <div className="glass-panel px-5 py-2.5 rounded-full flex items-center gap-2 border border-primary/30 bg-black/40">
                <span className="material-symbols-outlined text-primary text-base">public</span>
                <span className="font-label-caps text-label-caps text-on-surface">GLOBAL REACH</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Digital Street (Portfolio Projects) */}
        <section className="max-w-[1440px] mx-auto px-container-padding-mobile md:px-container-padding-desktop space-y-24 relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary/20 to-transparent -translate-x-1/2 z-0 hidden md:block"></div>

          {/* Project 1: XYZ Coaching Centre */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 md:col-start-1">
              <div className="glass-panel p-8 rounded-xl glow-hover border border-secondary/30 bg-[#1c1b1b]/90">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary">school</span>
                  <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">XYZ COACHING</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">XYZ Coaching Centre</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  A high-converting educational portal and exam preparation platform designed to empower students and showcase top rankers across competitive exams.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary-container/20 text-primary px-4 py-1.5 rounded-full border border-primary/30">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span className="font-label-caps text-label-caps">150+ TOP RANKERS</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 relative">
              <div className="glass-panel rounded-xl overflow-hidden aspect-video relative border border-outline-variant/30 shadow-2xl group">
                <img 
                  src={coachingImg} 
                  alt="XYZ Coaching Centre Mockup" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>
          </div>

          {/* Project 2: XYZ Coaching App */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:col-start-1 order-2 md:order-1 relative">
              <div className="glass-panel rounded-xl overflow-hidden aspect-[4/3] relative border border-outline-variant/30 shadow-2xl group flex items-center justify-center p-2 bg-black/40">
                <img 
                  src={coachingMobileImg} 
                  alt="XYZ Coaching App Mobile Mockup" 
                  className="max-h-full w-auto object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 rounded-lg" 
                />
              </div>
            </div>

            <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 relative z-10">
              <div className="glass-panel p-8 rounded-xl glow-hover border border-secondary/30 bg-[#1c1b1b]/90 text-left md:text-right">
                <div className="flex items-center gap-3 mb-4 md:justify-end">
                  <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">XYZ MOBILE APP</span>
                  <span className="material-symbols-outlined text-tertiary">smartphone</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">XYZ Coaching App</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Redefining mobile learning with an intuitive, sleek interface designed for admissions, course tracking, and competitive exam preparation.
                </p>
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full border border-secondary/30 md:ml-auto">
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span className="font-label-caps text-label-caps">50,000+ ACTIVE USERS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: XYZ Jewelry */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 md:col-start-1">
              <div className="glass-panel p-8 rounded-xl glow-hover border border-secondary/30 bg-[#1c1b1b]/90">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-secondary">diamond</span>
                  <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">XYZ JEWELRY</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">XYZ Jewelry</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  A luxury e-commerce experience crafted for bespoke, timeless, and everyday luxury jewelry collections.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary-container/20 text-primary px-4 py-1.5 rounded-full border border-primary/30">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  <span className="font-label-caps text-label-caps">+350% ONLINE SALES</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 relative">
              <div className="glass-panel rounded-xl overflow-hidden aspect-video relative border border-outline-variant/30 shadow-2xl group">
                <img 
                  src={jewelryImg} 
                  alt="XYZ Jewelry Web Experience" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="text-center mt-24">
          <button 
            onClick={() => setActiveTab('contact')}
            className="bg-primary-container text-on-primary-container font-button-text text-button-text px-10 py-4 rounded-lg lantern-glow hover:scale-105 transition-all font-bold"
          >
            Transform Your Business Today
          </button>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
