import React from 'react';
import heroImgAsset from '../assets/Hero Page.png';

const HomePage = ({ setActiveTab }) => {
  // Provided Hero Page image from workspace
  const heroImg = heroImgAsset;
  
  const artisanImg1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCHiB6q779wKd6u6KX7NzPYVPtK4tFRDmimWkVIrjY4BfInDGBUYTxQv5Tsutn9stdCfd1uhprI8taMus81dNCZghxTrPVfrc0rf58KNxmuseoN1dAhn6cF4yE-WwzvpOQPTkuaLBIdOERhBshLB-sdqe8VAYV858L5n0HrA-57cLOAWKzLOCVBkuh70Yg_gIuRPzyiiAEbTxc_A-jV-eIda4stlUs32bs2M0uvNpMQvNagVYa75emLyg";
  const artisanImg2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDbYo5xNefhakLNHPC80VqZN882X8_LUe-wq8lV48rD0u6cvqAxym-0He-0aSeiVRqLPQAxB7f6udfCWY_H8mXC_kQjNuJtMwYth6Il9VkBvCRUbqIfS2tQb1aVsZPTES-SIltwHzP7Gt9AHwDHuUX7U77QRUsOlr6V4m22-4oq_EePm9RdxN4LU1qA_0nQoon-wOFjKucR3K9RFH1uGTbbEDjwpV9RQxw0c8ccS_BUU8K-ZzHsd3qQ3A";

  const portfolio1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJNaZi1mF_-LhXEXdSyayydsqXOacx6-Sv82w0jRvF5pLumUDU_FtNShcWDsw3g6Xq_oMiYNcQ4dCAMRsZhPnrm4yFLb2orupzimxX3rO89H_CMM-7klMaVQrDjzpyPcTRwmN51L14B7gP0dpVaCr8YfESPoOS6Z7jKJfv_3GeGLcYwtJwQMdpepoloG2_XHCFyfBGS7Z4gUyliXtt4smAWvDprEI-D4l1DXPy74kK9E6ad1dpNLYeYQ";
  const portfolio2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBeLBnP9wJwb85yAj8A3KFbH5a3gAUe8ep0ZY_PYQuQx9_pRX4AQZsyKx_QONSU7EmvqLJNwbFFJyDlTLkNaJ9F2kuTVeVZWUcoNnjD5CmwfqlQX9rGCxxkFzkXbYMLIcInvXYwKRtdq2EUlM2fJNupOtNWITjVMRvE--t_aM4-fKMfs1L0DTpRm-eR9Dwvx9l_2LumKSIzm5a82io6J0Fh0qmLN-ooj8L1Nrz5Dy7Lk0jnoS4Nr73m7w";
  const portfolio3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBmJLK42eaWfQL7akdOs7hxsj918hWHZtnsFaYZcma3rhI5LAgiE87XgAoXeCACmwqKV5R4jrDbPX9QnN_I4PaHsAHUq1PlQbZilAu4qscQ3gDYzd_3kr3ym2xHTgFIsNP90PM8Os2Av7p1DQM7QLToiWqFPP57uCucZ0VUGZbIP5g-Kqg4uHSRJ5AG-6Qbg4A9ryi_fG1SaX1BS_LmkDJNhyg5QSD0m1b5L64MUH8c0W5uqAo_1PHWTg";

  return (
    <main className="relative z-20">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-container-padding-mobile md:px-container-padding-desktop relative pt-32 pb-section-gap">
        {/* Background Image Layer with Shadow Overlay behind Text */}
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-background z-10"></div>
          <div className="absolute inset-0 bg-radial from-black/60 via-black/20 to-transparent z-10 pointer-events-none"></div>
          <img 
            alt="The Sunset Gateway - TASK Marketplace" 
            className="w-full h-full object-cover opacity-95 object-center scale-105 transform transition-transform duration-1000 ease-out" 
            src={heroImg} 
          />
        </div>
        
        {/* Clean Foreground Text (Hanging over background shadow) */}
        <div className="text-center max-w-4xl mx-auto p-4 relative z-10">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-6 inline-block px-5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-secondary/40">
            The Sunset Gateway
          </span>
          
          <h1 className="font-headline-xl text-3xl md:text-headline-xl text-gradient mb-6 leading-tight">
            Where Digital Craft Meets Marketplace Chaos
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            We weave cinematic stories into high-performance digital storefronts. A maximalist approach to modern web architecture, rooted in timeless craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className="bg-primary-container text-on-primary-container font-button-text text-button-text px-9 py-3.5 rounded-lg hover:border hover:border-secondary transition-all crimson-glow font-bold tracking-wider hover:scale-105 active:scale-95 shadow-lg"
            >
              PORTFOLIO
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className="bg-black/50 backdrop-blur-md border border-secondary/50 text-secondary font-button-text text-button-text px-9 py-3.5 rounded-lg hover:bg-secondary/20 transition-colors font-bold tracking-wider hover:scale-105 active:scale-95 shadow-lg"
            >
              CONNECT
            </button>
          </div>
        </div>
      </section>

      {/* Narrative Section: The Digital Artisans */}
      <section className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 leading-tight">
              The Digital Artisans
            </h2>
            <div className="w-16 h-1 bg-secondary mb-8 rounded-full"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              In a landscape of templated monotony, we forge bespoke digital experiences. Our approach is deeply tactile, treating code as clay and pixels as pigment.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/80 leading-relaxed">
              We believe that a brand's digital presence should evoke the same wonder as wandering through a bustling, vibrant bazaar at twilight—full of hidden details, rich textures, and unforgettable interactions.
            </p>
          </div>

          <div className="md:col-span-7 relative mt-8 md:mt-0">
            <div className="bg-[#1c1b1b] border border-secondary/30 p-4 rounded-xl rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img 
                className="w-full h-auto rounded-lg object-cover" 
                alt="Digital Artisan Workspace" 
                src={artisanImg1} 
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-[#1c1b1b] border border-secondary/40 p-4 rounded-xl -rotate-3 hidden md:block w-64 shadow-2xl">
              <img 
                className="w-full h-auto rounded-lg object-cover" 
                alt="UI Detail" 
                src={artisanImg2} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace (Portfolio Highlights) Section */}
      <section className="py-section-gap px-container-padding-mobile md:px-container-padding-desktop bg-surface-container-low/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/10 via-background to-background z-[-1]"></div>
        
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Our Digital Storefronts
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div 
            onClick={() => setActiveTab('portfolio')}
            className="solid-panel bg-[#1c1b1b] rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-secondary/20 hover:border-secondary/60"
          >
            <div className="h-64 relative overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="The Jewelers Loom" 
                src={portfolio1} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4">
                <span className="font-label-caps text-label-caps text-primary border border-primary/50 px-3 py-1 rounded bg-background">
                  E-Commerce
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                The Jewelers Loom
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A tactile, immersive shopping experience for handcrafted heritage jewelry.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => setActiveTab('portfolio')}
            className="solid-panel bg-[#1c1b1b] rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-secondary/20 hover:border-secondary/60"
          >
            <div className="h-64 relative overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Studio Sandstone" 
                src={portfolio2} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4">
                <span className="font-label-caps text-label-caps text-primary border border-primary/50 px-3 py-1 rounded bg-background">
                  Architecture
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                Studio Sandstone
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Spatial storytelling translated into a dynamic web architecture portfolio.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            onClick={() => setActiveTab('portfolio')}
            className="solid-panel bg-[#1c1b1b] rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-secondary/20 hover:border-secondary/60"
          >
            <div className="h-64 relative overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Crimson Dusk" 
                src={portfolio3} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-4 left-4">
                <span className="font-label-caps text-label-caps text-primary border border-primary/50 px-3 py-1 rounded bg-background">
                  Branding
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                Crimson Dusk
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A sensory branding journey built with fluid micro-interactions and depth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
