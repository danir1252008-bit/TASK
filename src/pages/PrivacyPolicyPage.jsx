import React, { useState, useEffect } from 'react';
import heroLightAsset from '../assets/Hero Page.png';
import heroDarkAsset from '../assets/hero-dark.jpg';

const PrivacyPolicyPage = ({ setActiveTab, isDarkMode: isDarkModeProp }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(() => 
    isDarkModeProp !== undefined ? isDarkModeProp : (typeof document !== 'undefined' && document.documentElement.classList.contains('dark'))
  );

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const sections = [
    {
      id: "introduction",
      icon: "gavel",
      title: "1. Introduction",
      content: "Welcome to TASK (\"Company\", \"we\", \"our\", or \"us\"). We are a modern web design, branding, and digital website management agency dedicated to transforming brands through elite digital architecture. This Privacy Policy outlines our commitment to protecting your personal data, explaining how we collect, use, disclose, and safeguard your information when you visit our website, utilize our services, or interact with our digital platforms."
    },
    {
      id: "information-collect",
      icon: "database",
      title: "2. Information We Collect",
      content: "We collect information that identifies, relates to, or describes you directly or indirectly when you engage with TASK:",
      bullets: [
        "Personal Contact Identifiers: Full name, professional email address, phone number, company name, and industry.",
        "Project & Service Inquiries: Details regarding your web development goals, branding requirements, and custom feature specifications provided via inquiry forms.",
        "Technical & Device Telemetry: IP addresses, browser specifications, operating system telemetry, referring URLs, and page navigation metrics.",
        "Communication Records: Messages, feedback, and project correspondence submitted via our website, email, or WhatsApp channels."
      ]
    },
    {
      id: "use-information",
      icon: "analytics",
      title: "3. How We Use Your Information",
      content: "TASK utilizes collected data strictly to deliver, optimize, and elevate our digital services:",
      bullets: [
        "Service Delivery & Project Onboarding: Scoping, architectural planning, and building custom digital web assets.",
        "Client Support & Inquiry Response: Communicating project timelines, technical proposals, and consultation details.",
        "Database Synchronization: Securely storing project inquiries in encrypted databases (such as Supabase) for rapid client response.",
        "Performance Optimization: Analyzing user navigation patterns to continuously refine user experience, interface speed, and system responsiveness.",
        "Legal & Regulatory Compliance: Fulfilling contractual obligations and protecting against unauthorized or fraudulent activity."
      ]
    },
    {
      id: "cookies",
      icon: "cookie",
      title: "4. Cookies & Tracking Technologies",
      content: "We use essential cookies, local storage, and analytical micro-pixels to maintain system state, preserve theme preferences (such as Light and Dark mode settings), and analyze traffic flow. You can control or disable cookie preferences through your browser settings; however, disabling essential cookies may impact certain interactive micro-animations and layout persistence."
    },
    {
      id: "third-party",
      icon: "cloud_sync",
      title: "5. Third-Party Services",
      content: "TASK integrates high-performance third-party cloud infrastructure to power client inquiries, hosting, and asset delivery. Third-party providers include:",
      bullets: [
        "Supabase Cloud Database: Encrypted storage for client consultation requests and project inquiry details.",
        "Vite & Static CDN Networks: Distributed global delivery networks for lighting-fast asset load times.",
        "Google Fonts & Material Symbols: Typography and icon rendering engines.",
        "Communication Gateways: Direct communication links via WhatsApp Business API."
      ],
      note: "All third-party vendors are vetted to adhere to standard data protection frameworks including GDPR and CCPA."
    },
    {
      id: "data-security",
      icon: "verified_user",
      title: "6. Data Security",
      content: "We enforce rigorous multi-layered defense protocols to safeguard your information against unauthorized access, alteration, disclosure, or destruction. Security measures include SSL/TLS 256-bit encryption in transit, row-level security (RLS) on database endpoints, and restricted access controls for authorized agency personnel only."
    },
    {
      id: "data-retention",
      icon: "history",
      title: "7. Data Retention",
      content: "TASK retains personal information only as long as necessary to fulfill the purposes described in this Privacy Policy or as required by law (e.g. accounting, tax, or legal reporting). Inquiries that do not transition into active projects are securely archived or permanently anonymized after 24 months."
    },
    {
      id: "your-rights",
      icon: "fingerprint",
      title: "8. Your Rights",
      content: "Depending on your geographic location, you possess specific data privacy rights regarding your personal data:",
      bullets: [
        "Right of Access & Inspection: Request a full copy of the personal information TASK maintains about you.",
        "Right to Rectification: Request correction of inaccurate, outdated, or incomplete personal data.",
        "Right to Erasure (\"Right to be Forgotten\"): Request permanent deletion of your inquiry and account data.",
        "Right to Restrict Processing: Request limits on how your information is processed.",
        "Data Portability: Request transfer of your data in a structured, machine-readable format."
      ]
    },
    {
      id: "childrens-privacy",
      icon: "child_care",
      title: "9. Children's Privacy",
      content: "Our services are designed exclusively for business entities, entrepreneurs, and adults over 18 years of age. TASK does not knowingly collect or solicit personal data from children under the age of 16. If we discover that a minor has provided us with personal information, we will delete it immediately."
    },
    {
      id: "policy-changes",
      icon: "update",
      title: "10. Changes to This Privacy Policy",
      content: "TASK reserves the right to update or modify this Privacy Policy periodically to reflect evolving legal requirements or technological enhancements. Updates will be published on this page with a revised \"Last Updated\" timestamp. We encourage you to review this policy periodically."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-on-surface selection:bg-primary selection:text-white">
      {/* Sticky Crimson Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-surface-container-high">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary-container shadow-[0_0_10px_#E50914] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Dynamic Background Scene Layer */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/80 to-[#050505] z-10"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-container/15 rounded-full blur-[140px] pointer-events-none z-10"></div>
        <img 
          alt="Light Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 pointer-events-none" 
          src={heroLightAsset} 
        />
        <img 
          alt="Dark Background" 
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out pointer-events-none ${
            activeDarkMode ? 'opacity-100' : 'opacity-0'
          }`} 
          src={heroDarkAsset} 
        />
      </div>

      <main className="relative z-20 pt-32 pb-section-gap px-container-padding-mobile md:px-container-padding-desktop max-w-5xl mx-auto">
        
        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          {/* Shield Lock Floating Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1c1b1b] to-[#0d0d0d] border border-primary/40 shadow-[0_0_30px_rgba(229,9,20,0.3)] mb-6 animate-float">
            <span className="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]">
              security
            </span>
          </div>

          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">
            LEGAL ARCHITECTURE
          </span>

          <h1 className="font-headline-xl text-4xl md:text-headline-xl text-on-surface mb-6 text-glow leading-tight">
            Privacy Policy
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Your privacy matters. Learn how TASK collects, uses, stores, and protects your information across our digital ecosystem.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs font-label-caps text-on-surface-variant/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              GDPR & CCPA COMPLIANT
            </span>
            <span>•</span>
            <span>256-BIT ENCRYPTION</span>
          </div>
        </section>

        {/* Policy Sections Stack */}
        <div className="space-y-8">
          {sections.map((sec) => (
            <div 
              key={sec.id}
              id={sec.id}
              className="solid-panel bg-[#121212]/90 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-secondary/20 hover:border-primary/50 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_30px_rgba(229,9,20,0.15)] group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-xl">{sec.icon}</span>
                </div>
                <h2 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold group-hover:text-primary transition-colors">
                  {sec.title}
                </h2>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-primary/30 via-secondary/20 to-transparent mb-6"></div>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                {sec.content}
              </p>

              {sec.bullets && (
                <ul className="space-y-3 mt-4 font-body-md text-body-md text-on-surface/90">
                  {sec.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-1 shrink-0">check_circle</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.note && (
                <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs text-primary-fixed-dim font-medium">
                  {sec.note}
                </div>
              )}
            </div>
          ))}

          {/* Highlighted Glass Contact Card */}
          <div className="solid-panel bg-gradient-to-br from-[#1c1b1b]/95 via-[#121212]/95 to-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl p-8 md:p-12 border-2 border-primary/40 shadow-[0_0_35px_rgba(229,9,20,0.25)] relative overflow-hidden mt-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">contact_support</span>
              <div>
                <h3 className="font-headline-md text-2xl text-on-surface font-bold">Privacy Contact Information</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Have questions or data deletion requests? Reach out to our legal team directly.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="space-y-4">
                <div>
                  <span className="font-label-caps text-xs text-secondary uppercase block mb-1">Company Name</span>
                  <span className="font-headline-md text-lg text-white font-bold">TASK Studio</span>
                </div>
                <div>
                  <span className="font-label-caps text-xs text-secondary uppercase block mb-1">Legal Email</span>
                  <a href="mailto:privacy@taskagency.com" className="font-body-md text-on-surface hover:text-primary transition-colors font-medium">
                    privacy@taskagency.com
                  </a>
                </div>
                <div>
                  <span className="font-label-caps text-xs text-secondary uppercase block mb-1">Direct Phone</span>
                  <a href="tel:+919310040848" className="font-body-md text-on-surface hover:text-primary transition-colors font-medium">
                    +91 93100 40848
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-label-caps text-xs text-secondary uppercase block mb-1">Official Website</span>
                  <a href="https://task.com" target="_blank" rel="noopener noreferrer" className="font-body-md text-on-surface hover:text-primary transition-colors font-medium">
                    https://task.com
                  </a>
                </div>
                <div>
                  <span className="font-label-caps text-xs text-secondary uppercase block mb-1">Last Updated</span>
                  <span className="font-body-md text-white font-semibold">August 06, 2026</span>
                </div>
                <div>
                  <button 
                    onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-button-text text-xs hover:bg-primary-container/80 transition-all font-bold tracking-wider mt-2 crimson-glow cursor-pointer"
                  >
                    Submit Privacy Request
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
