import React, { useState, useEffect } from 'react';
import heroLightAsset from '../assets/Hero Page.png';
import heroDarkAsset from '../assets/hero-dark.jpg';

const BUSINESS_WEBSITE_PRICING = [
  {
    id: '1m',
    duration: '1 Month',
    offerPrice: '₹799 / mos',
    priceVal: '₹799',
    unit: '/ month',
    regularPrice: '₹799',
    discount: 'Standard',
    savings: '—',
    badge: null,
    description: 'Standard monthly rate for flexible website requirements.'
  },
  {
    id: '3m',
    duration: '3 Months',
    offerPrice: '₹2,199 / 3 mos',
    priceVal: '₹2,199',
    unit: '/ 3 months',
    regularPrice: '₹2,397',
    discount: '8.3% OFF',
    savings: 'Save ₹198',
    badge: null,
    description: 'Quarterly website solution with locked-in savings.'
  },
  {
    id: '6m',
    duration: '6 Months',
    offerPrice: '₹4,299 / 6 mos',
    priceVal: '₹4,299',
    unit: '/ 6 months',
    regularPrice: '₹4,794',
    discount: '10.3% OFF',
    savings: 'Save ₹495',
    badge: null,
    description: 'Semi-annual web growth package with strategic savings.'
  },
  {
    id: '12m',
    duration: '12 Months',
    offerPrice: '₹7,999 / yr',
    priceVal: '₹7,999',
    unit: '/ yr',
    regularPrice: '₹9,588',
    discount: '16.6% OFF',
    savings: 'Save ₹1,589',
    badge: 'POPULAR',
    description: 'Our most sought-after annual plan for complete digital presence.'
  },
  {
    id: '24m',
    duration: '24 Months',
    offerPrice: '₹13,999 / 2 yrs',
    priceVal: '₹13,999',
    unit: '/ 2 yrs',
    regularPrice: '₹19,176',
    discount: '27.0% OFF',
    savings: 'Save ₹5,177',
    badge: 'BEST VALUE',
    description: 'Maximum long-term value and deep pricing discount for scaling businesses.'
  }
];

const ECOMMERCE_WEBSITE_PRICING = [
  {
    id: '1m',
    duration: '1 Month',
    offerPrice: '₹1,899 / mos',
    priceVal: '₹1,899',
    unit: '/ month',
    regularPrice: '₹1,899',
    discount: 'Standard',
    savings: '—',
    badge: null,
    description: '1 Month E-Commerce starter package with full store setup.'
  },
  {
    id: '3m',
    duration: '3 Months',
    offerPrice: '₹5,299 / 3 mos',
    priceVal: '₹5,299',
    unit: '/ 3 months',
    regularPrice: '₹5,697',
    discount: '7.0% OFF',
    savings: 'Save ₹398',
    badge: null,
    description: 'Quarterly E-Commerce integrated package with discount.'
  },
  {
    id: '6m',
    duration: '6 Months',
    offerPrice: '₹10,299 / 6 mos',
    priceVal: '₹10,299',
    unit: '/ 6 months',
    regularPrice: '₹11,394',
    discount: '9.6% OFF',
    savings: 'Save ₹1,095',
    badge: null,
    description: 'Semi-annual E-Commerce package with high savings.'
  },
  {
    id: '12m',
    duration: '12 Months',
    offerPrice: '₹18,999 / yr',
    priceVal: '₹18,999',
    unit: '/ yr',
    regularPrice: '₹22,788',
    discount: '16.6% OFF',
    savings: 'Save ₹3,789',
    badge: 'POPULAR',
    description: 'Annual E-Commerce flagship package for active online stores.'
  },
  {
    id: '24m',
    duration: '24 Months',
    offerPrice: '₹32,999 / 2 yrs',
    priceVal: '₹32,999',
    unit: '/ 2 yrs',
    regularPrice: '₹45,576',
    discount: '27.6% OFF',
    savings: 'Save ₹12,577',
    badge: 'BEST VALUE',
    description: '2-Year E-Commerce enterprise package with maximum discount & savings.'
  }
];

const WEBSITE_TYPES = {
  business: {
    id: 'business',
    label: 'Business Website',
    icon: 'language',
    badge: 'Professional',
    packageTitle: 'BUSINESS WEBSITE PACKAGE',
    packageSubtitle: 'Website + Brand Identity + SEO Optimization',
    description: 'Professional websites for businesses, brands, services, startups, and local businesses.',
    pricingData: BUSINESS_WEBSITE_PRICING,
    features: [
      'Responsive design for all devices',
      'SEO & performance optimization',
      'Contact form & lead integration',
      'Custom animations & micro-interactions'
    ]
  },
  ecommerce: {
    id: 'ecommerce',
    label: 'E-Commerce Website',
    icon: 'shopping_bag',
    badge: 'Online Store',
    packageTitle: 'E-COMMERCE INTEGRATED PACKAGE',
    packageSubtitle: 'Website + Online Store + Payment Gateway',
    description: 'A complete online store designed to help businesses showcase products, accept orders, and sell online.',
    pricingData: ECOMMERCE_WEBSITE_PRICING,
    features: [
      'Online store & product catalog',
      'Product pages & shopping cart',
      'Checkout & payment gateway integration',
      'Order management & customer flow',
      'Mobile-responsive storefront'
    ]
  }
};

const PricingPage = ({ setActiveTab, isDarkMode: isDarkModeProp }) => {
  const [selectedDurationId, setSelectedDurationId] = useState('12m');
  const [websiteType, setWebsiteType] = useState('business');

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
  const activePricingData = WEBSITE_TYPES[websiteType].pricingData;
  const selectedOption = activePricingData.find(opt => opt.id === selectedDurationId) || activePricingData[3];

  const generateWhatsAppMessage = (service, duration, price) => {
    return `Hi TASK! 👋\n\nI'm interested in the following service:\n\nService: ${service}\nPlan/Duration: ${duration}\nPrice: ${price}\n\nI'd like to know more about this plan and the next steps.`;
  };

  const openWhatsApp = (service, duration, price) => {
    const message = generateWhatsAppMessage(service, duration, price);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9310040848?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-background text-on-surface">
      {/* Header Hero */}
      <header className="relative w-full min-h-[75vh] flex items-center justify-center pt-28 z-10">
        <div className="absolute -top-32 inset-x-0 bottom-0 z-0 overflow-hidden">
          <img 
            className="absolute inset-0 w-full h-full object-cover object-top opacity-85 pointer-events-none" 
            alt="Light Marketplace Scene" 
            src={heroLightAsset} 
          />
          <img 
            className={`absolute inset-0 w-full h-full object-cover object-top blur-[6px] scale-105 transition-opacity duration-500 ease-in-out pointer-events-none ${
              activeDarkMode ? 'opacity-100' : 'opacity-0'
            }`} 
            alt="Dark Marketplace Scene" 
            src={heroDarkAsset} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-background/60 to-background z-10"></div>
        </div>

        {/* Floating Animated Lanterns */}
        <div className="absolute top-1/4 left-1/4 w-16 h-24 bg-primary-container rounded-full blur-2xl opacity-40 animate-pulse-glow animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse-glow animate-float-delayed"></div>

        <div className="relative z-10 text-center max-w-4xl px-container-padding-mobile md:px-0 mt-12">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 inline-block px-4 py-1 rounded-full bg-background/80 border border-secondary/30">
            Website Pricing Plans
          </span>
          <h1 className="font-headline-xl text-4xl md:text-headline-xl text-on-surface mb-6 text-glow leading-tight">
            Flexible Pricing for <br />
            <span className="text-primary-fixed-dim">Digital Excellence</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            Choose a fixed plan or configure your custom website duration with instant savings. Built with high performance and premium craftsmanship.
          </p>
          
          <a 
            href="#pricing-plans" 
            className="inline-flex items-center gap-3 text-secondary font-label-caps text-label-caps uppercase tracking-widest hover:text-white transition-colors group"
          >
            Explore Options
            <span className="material-symbols-outlined animate-bounce">keyboard_arrow_down</span>
          </a>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="relative z-20 pb-section-gap pt-12 px-container-padding-mobile md:px-container-padding-desktop" id="pricing-plans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Option 1: LOGO MAKING */}
            <div className="md:col-span-6 lg:col-span-3 solid-panel rounded-xl p-6 lg:p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-secondary/20 hover:border-secondary/50">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high border border-outline/30 text-secondary">
                <span className="material-symbols-outlined">palette</span>
              </div>
              
              <span className="font-label-caps text-xs text-secondary/80 uppercase tracking-widest mb-1 block">STARTER BRANDING</span>
              <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">Logo Making</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                A professional, custom-designed logo crafted to give your business a strong and memorable brand identity.
              </p>
              
              <div className="mb-8 border-b border-white/10 pb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-lg text-3xl lg:text-4xl text-primary-fixed-dim font-bold">₹1,499</span>
                  <span className="font-body-md text-sm text-on-surface-variant"> / logo</span>
                </div>
                <div className="mt-2 text-xs text-on-surface-variant/70">
                  Standalone Branding Service • Vector & Print Ready
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 font-body-md text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Custom logo concept</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Professional design</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Brand-focused approach</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>High-resolution final files</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Suitable for digital and print use</span>
                </li>
              </ul>
              
              <button 
                onClick={() => openWhatsApp("Logo Design", "One-time", "₹1,499")}
                className="w-full py-3.5 rounded-lg border border-secondary/50 text-secondary font-button-text text-button-text hover:bg-secondary/10 transition-colors mt-auto font-semibold tracking-wider hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get Your Logo</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>

            {/* Option 2: CUSTOM DURATION (Interactive Configurator) */}
            <div className="md:col-span-12 lg:col-span-6 solid-panel rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-500 relative overflow-hidden border-2 border-secondary ambient-glow-crimson z-10 bg-[#1e1c1c]">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary-container"></div>
              
              <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high border border-outline/30 text-secondary mb-2">
                    <span className="material-symbols-outlined">tune</span>
                  </div>
                  <span className="font-label-caps text-xs text-secondary uppercase tracking-widest block">Interactive Configurator</span>
                  <h3 className="font-headline-md text-2xl lg:text-3xl text-on-surface font-bold">Custom Duration</h3>
                </div>

                <div className="flex flex-col items-end">
                  <span className="px-3 py-1 rounded-full border border-primary/50 text-primary font-label-caps text-xs bg-primary/10 tracking-widest uppercase font-semibold">
                    Interactive Selector
                  </span>
                </div>
              </div>

              {/* Website Type Selector (Business Website vs E-Commerce Website) */}
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-xl bg-black/60 border border-secondary/30 mb-6">
                <button
                  type="button"
                  onClick={() => setWebsiteType('business')}
                  className={`py-2.5 px-3 rounded-lg font-button-text text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    websiteType === 'business'
                      ? 'bg-secondary text-black shadow-lg scale-[1.02]'
                      : 'text-on-surface-variant hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">language</span>
                  <span>Business Website</span>
                </button>

                <button
                  type="button"
                  onClick={() => setWebsiteType('ecommerce')}
                  className={`py-2.5 px-3 rounded-lg font-button-text text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    websiteType === 'ecommerce'
                      ? 'bg-secondary text-black shadow-lg scale-[1.02]'
                      : 'text-on-surface-variant hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">shopping_bag</span>
                  <span>E-Commerce Website</span>
                </button>
              </div>

              {/* Dynamic Description & Package Header */}
              <div className="mb-6 p-4 rounded-xl bg-black/60 border border-secondary/30">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-lg">
                      {WEBSITE_TYPES[websiteType].icon}
                    </span>
                    <span className="font-headline-md text-base text-white font-bold tracking-wide">
                      {WEBSITE_TYPES[websiteType].packageTitle}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-secondary/20 border border-secondary/40 text-secondary font-bold uppercase">
                    {WEBSITE_TYPES[websiteType].badge}
                  </span>
                </div>

                <div className="text-xs font-semibold text-secondary mb-2 tracking-wider">
                  {WEBSITE_TYPES[websiteType].packageSubtitle}
                </div>

                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-3">
                  {WEBSITE_TYPES[websiteType].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface/90 pt-2.5 border-t border-white/10">
                  {WEBSITE_TYPES[websiteType].features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[14px] shrink-0">check_circle</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Selected Summary Callout */}
              <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-on-surface-variant font-label-caps uppercase tracking-wider mb-1">
                    Selected Duration: <span className="text-white font-bold">{selectedOption.duration}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl lg:text-3xl font-headline-lg font-bold text-secondary">
                      {selectedOption.offerPrice}
                    </span>
                    {selectedOption.regularPrice !== selectedOption.priceVal && (
                      <span className="text-sm text-on-surface-variant/70 line-through">
                        {selectedOption.regularPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedOption.discount !== 'Standard' && (
                    <span className="px-2.5 py-1 rounded-md bg-secondary/20 border border-secondary/40 text-secondary font-label-caps text-xs font-bold">
                      {selectedOption.discount}
                    </span>
                  )}
                  {selectedOption.savings !== '—' && (
                    <span className="px-2.5 py-1 rounded-md bg-green-950/60 border border-green-500/40 text-green-400 font-label-caps text-xs font-bold">
                      {selectedOption.savings}
                    </span>
                  )}
                </div>
              </div>

              {/* Desktop Table View */}
              <div className="hidden sm:block mb-8 overflow-hidden rounded-xl border border-secondary/20 bg-black/40">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-secondary/20 bg-surface-container-high/40 text-on-surface-variant font-label-caps text-xs tracking-wider uppercase">
                      <th className="py-3 px-4">Duration</th>
                      <th className="py-3 px-4">Offer Price</th>
                      <th className="py-3 px-4">Regular</th>
                      <th className="py-3 px-4">Discount</th>
                      <th className="py-3 px-4 text-right">Total Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {activePricingData.map((opt) => {
                      const isSelected = opt.id === selectedDurationId;
                      return (
                        <tr 
                          key={opt.id}
                          onClick={() => setSelectedDurationId(opt.id)}
                          className={`cursor-pointer transition-all duration-200 ${
                            isSelected 
                              ? 'bg-secondary/15 border-l-4 border-l-secondary text-white font-medium' 
                              : 'hover:bg-white/5 text-on-surface/80'
                          }`}
                        >
                          <td className="py-3.5 px-4 font-bold flex items-center gap-2">
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-secondary bg-secondary' : 'border-white/30'
                            }`}>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black"></span>}
                            </span>
                            {opt.duration}
                            {opt.badge === 'POPULAR' && (
                              <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-secondary/20 border border-secondary/40 text-secondary font-bold tracking-wider uppercase">
                                POPULAR
                              </span>
                            )}
                            {opt.badge === 'BEST VALUE' && (
                              <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-primary/20 border border-primary/40 text-primary font-bold tracking-wider uppercase">
                                BEST VALUE
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-secondary font-semibold">{opt.offerPrice}</td>
                          <td className="py-3.5 px-4 text-on-surface-variant/70 line-through">{opt.regularPrice}</td>
                          <td className="py-3.5 px-4">
                            <span className={`inline-block px-2 py-0.5 rounded text-xs ${
                              opt.discount === 'Standard' 
                                ? 'bg-white/5 text-on-surface-variant/70' 
                                : 'bg-secondary/20 text-secondary font-semibold'
                            }`}>
                              {opt.discount}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right font-bold text-green-400">
                            {opt.savings}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked Layout (No Horizontal Overflow) */}
              <div className="sm:hidden space-y-3 mb-8">
                {activePricingData.map((opt) => {
                  const isSelected = opt.id === selectedDurationId;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedDurationId(opt.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-secondary/15 border-secondary shadow-[0_0_15px_rgba(233,195,73,0.15)]'
                          : 'bg-black/40 border-white/10 hover:border-secondary/40'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-secondary bg-secondary' : 'border-white/30'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black"></span>}
                          </span>
                          <span className="font-bold text-white text-base">{opt.duration}</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {opt.badge === 'POPULAR' && (
                            <span className="px-2 py-0.5 rounded text-[10px] bg-secondary/20 border border-secondary/40 text-secondary font-bold uppercase">
                              POPULAR
                            </span>
                          )}
                          {opt.badge === 'BEST VALUE' && (
                            <span className="px-2 py-0.5 rounded text-[10px] bg-primary/20 border border-primary/40 text-primary font-bold uppercase">
                              BEST VALUE
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between mt-3 pt-3 border-t border-white/5">
                        <div>
                          <div className="text-secondary font-bold text-lg">{opt.offerPrice}</div>
                          {opt.regularPrice !== opt.priceVal && (
                            <div className="text-xs text-on-surface-variant/70 line-through">Reg: {opt.regularPrice}</div>
                          )}
                        </div>

                        <div className="text-right">
                          <div className="text-xs font-semibold text-secondary">{opt.discount}</div>
                          {opt.savings !== '—' && (
                            <div className="text-xs font-bold text-green-400">{opt.savings}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={() => openWhatsApp(WEBSITE_TYPES[websiteType].label, selectedOption.duration, selectedOption.priceVal)}
                className="w-full py-4 rounded-lg bg-primary-container text-on-primary-container font-button-text text-button-text hover:bg-primary-container/80 transition-all crimson-glow mt-auto font-bold tracking-wider hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continue on WhatsApp</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>

            {/* Option 3: WHATSAPP AUTOMATION */}
            <div className="md:col-span-6 lg:col-span-3 solid-panel rounded-xl p-6 lg:p-8 flex flex-col group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-secondary/20 hover:border-secondary/50">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-high border border-outline/30 text-secondary">
                <span className="material-symbols-outlined">forum</span>
              </div>

              <div className="flex justify-between items-start mb-1">
                <span className="font-label-caps text-xs text-secondary/80 uppercase tracking-widest block">BUSINESS AUTOMATION</span>
                <span className="px-2 py-0.5 rounded bg-primary/20 border border-primary/40 text-primary font-label-caps text-[10px] font-bold uppercase">
                  ONE-TIME SETUP
                </span>
              </div>

              <h3 className="font-headline-md text-2xl text-on-surface mb-3 font-bold">WhatsApp Automation</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                Automate your business communication on WhatsApp with smart workflows designed to save time, respond faster, and manage customer interactions more efficiently.
              </p>

              <div className="mb-8 border-b border-white/10 pb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-lg text-3xl lg:text-4xl text-secondary font-bold">₹4,999</span>
                  <span className="font-body-md text-sm text-on-surface-variant"> / setup</span>
                </div>
                <div className="mt-2 text-xs text-on-surface-variant/70">
                  One-Time Setup Service • No Hidden Fees
                </div>
              </div>

              <ul className="space-y-3 mb-8 font-body-md text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>WhatsApp automation setup</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Automated customer responses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Lead capture through WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Custom message workflows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Business inquiry automation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Basic automation configuration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span>Setup and integration support</span>
                </li>
              </ul>

              <button 
                onClick={() => openWhatsApp("WhatsApp Automation", "One-time setup", "₹4,999")}
                className="w-full py-3.5 rounded-lg border border-secondary/50 text-secondary font-button-text text-button-text hover:bg-secondary/10 transition-colors mt-auto font-semibold tracking-wider hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

