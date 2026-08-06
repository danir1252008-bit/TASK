import React from 'react';
import coachingImg from '../assets/xyz-coaching.png';
import heroBgImg from '../assets/Hero Page.png';

const PortfolioPage = ({ setActiveTab }) => {
  // Use Hero Page.png as background picture with soft blur and dark mode overlay
  const bgImg = heroBgImg;
  
  const auraImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDHoQtvXbyygjQPgwGl7-A1x-J-jFyftEV7sZpCrpWwQl2FtPi1Eh3yQFNFXwGW62CliS_JY_cdgoyinKa19OelZ4wqwRNab6PRePsRzI54USiA_UU0Lnt4vSRRTwKpSIV_sJ6H92CJyMZ66_8xzmBE6QJNq2TMmxyCMBaNMpaIYveDB3cTyD1VTeo3xMDOByg2oo-Lg4n3_xNvru4uvcob2tX-mPZljxRBhNumMiZfU4bySt4juu6YxQ";
  const ironForgeImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuD_von0qDzG1oRNAFTgECMhGwysED7D5ifgazZFHIZ6aXWAAD1XJOm0Mi4PVQ__I7DU4_1RPSdaU5XmNMEnxIuB4qNeLbm4iuQHvuCzOViwJ1FJE3Gbss-2IyYTRAccthN8XRPk0Lez2FjTwFhOR6JgzvU5ARSwnkF5QdNCrpkfNtzXSoOcg72oCDUtSyYa6hIePVpdK-1ysjrOy4UUB6mWf3Q-UTwuqHJHspykBpIkgATjYp-V7rn8nQ";

  return (
    <div className="relative min-h-screen bg-background">
      {/* Visible Fixed Dark Mode Blurred Background Image */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-background z-10"></div>
        <img 
          alt="Dark Blurred Marketplace Background" 
          className="w-full h-full object-cover object-center opacity-70 blur-[8px] scale-105" 
          src={bgImg} 
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

          {/* Project 2: Aura Aesthetics */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:col-start-1 order-2 md:order-1 relative">
              <div className="glass-panel rounded-xl overflow-hidden aspect-[4/3] relative border border-outline-variant/30 shadow-2xl group">
                <img 
                  src={auraImg} 
                  alt="Aura Aesthetics Mobile App" 
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>
            </div>

            <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 relative z-10">
              <div className="glass-panel p-8 rounded-xl glow-hover border border-secondary/30 bg-[#1c1b1b]/90 text-left md:text-right">
                <div className="flex items-center gap-3 mb-4 md:justify-end">
                  <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">AURA</span>
                  <span className="material-symbols-outlined text-tertiary">spa</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Aura Aesthetics</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Redefining luxury beauty bookings through a seamless glassmorphic mobile & web interface that mirrors the serenity of physical spa sanctuary spaces.
                </p>
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full border border-secondary/30 md:ml-auto">
                  <span className="material-symbols-outlined text-sm">event_available</span>
                  <span className="font-label-caps text-label-caps">FULLY BOOKED SLOTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Iron Forge Fitness */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 md:col-start-1">
              <div className="glass-panel p-8 rounded-xl glow-hover border border-secondary/30 bg-[#1c1b1b]/90">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary">fitness_center</span>
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">IRON FORGE</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Iron Forge Fitness</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  A high-contrast, data-dense dashboard built for community engagement and member tracking. Industrial strength meets digital precision.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary-container/20 text-primary px-4 py-1.5 rounded-full border border-primary/30">
                  <span className="material-symbols-outlined text-sm">monitoring</span>
                  <span className="font-label-caps text-label-caps">4.8X USER ENGAGEMENT</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7 relative">
              <div className="glass-panel rounded-xl overflow-hidden aspect-video relative border border-outline-variant/30 shadow-2xl group">
                <img 
                  src={ironForgeImg} 
                  alt="Iron Forge Dashboard" 
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
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
