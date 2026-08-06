import React, { useState } from 'react';

// Supabase Project Configuration
const SUPABASE_URL = "https://jusgwmygfdwjwlbkhowb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_63M5fUayCAc0FK6-5Hkzjw_AneidUzZ";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const bgImg = "./Hero Page.png";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const saveToSupabase = async (data) => {
    const headers = {
      'apikey': SUPABASE_PUBLISHABLE_KEY,
      'Content-Type': 'application/json'
    };

    const payload = {
      full_name: data.fullName,
      company_name: data.companyName,
      email: data.email,
      phone: data.phone,
      industry: data.industry,
      details: data.details
    };

    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok && response.status !== 201) {
      const errDetails = await response.text();
      throw new Error(`Failed to save inquiry (${response.status}): ${errDetails}`);
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setErrorMessage("Please fill in required fields (Full Name and Email Address).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await saveToSupabase(formData);
      setSubmitted(true);
    } catch (err) {
      console.error("Supabase Submission Error:", err);
      setErrorMessage("Could not connect to Supabase. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-grow relative flex items-center justify-center min-h-screen pt-32 pb-section-gap px-container-padding-mobile md:px-container-padding-desktop z-20">
      {/* Background Layer */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-background/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-primary-container/20 via-background/80 to-background z-20"></div>
        <img 
          alt="Marketplace Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105" 
          src={bgImg} 
        />
      </div>

      {/* Glassmorphic Lead Form Card */}
      <div className="relative z-40 w-full max-w-2xl bg-[#1c1b1b]/95 backdrop-blur-xl rounded-[24px] p-8 md:p-12 shadow-2xl border border-secondary/30 overflow-hidden my-8">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
        
        {submitted ? (
          <div className="text-center py-12 relative z-10 animate-fadeIn">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container/20 text-secondary border border-secondary/40 mb-6 lantern-glow">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-4">
              Inquiry Saved to Supabase!
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed">
              Thank you, <strong className="text-secondary">{formData.fullName}</strong>. Your project details have been saved to your Supabase <code className="bg-black/50 px-2 py-1 rounded text-secondary">leads</code> table. Our team at TASK will reach out to you within 24 hours.
            </p>
            <button 
              onClick={() => {
                setSubmitted(false);
                setFormData({ fullName: '', companyName: '', email: '', phone: '', industry: '', details: '' });
              }}
              className="bg-transparent border border-secondary/50 text-secondary font-button-text px-8 py-3 rounded-lg hover:bg-secondary/10 transition-all font-semibold"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-10 relative z-10">
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl md:text-headline-lg text-on-surface mb-4 drop-shadow-md leading-tight">
                Let's Build Something Extraordinary Together
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto">
                Tell us about your business and we'll craft a website that helps it stand out, attract customers, and grow online.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-lg bg-red-900/40 border border-red-500/50 text-red-200 text-sm text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider font-semibold" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input 
                    className="w-full rounded-lg px-4 py-3 bg-black/70 border border-secondary/40 text-white placeholder-white/40 focus:border-secondary focus:bg-black/90 focus:outline-none focus:ring-1 focus:ring-secondary transition-all font-medium text-base" 
                    id="fullName" 
                    placeholder="Jane Doe" 
                    type="text" 
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider font-semibold" htmlFor="companyName">
                    Company Name *
                  </label>
                  <input 
                    className="w-full rounded-lg px-4 py-3 bg-black/70 border border-secondary/40 text-white placeholder-white/40 focus:border-secondary focus:bg-black/90 focus:outline-none focus:ring-1 focus:ring-secondary transition-all font-medium text-base" 
                    id="companyName" 
                    placeholder="Your Business" 
                    type="text" 
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider font-semibold" htmlFor="email">
                    Email Address *
                  </label>
                  <input 
                    className="w-full rounded-lg px-4 py-3 bg-black/70 border border-secondary/40 text-white placeholder-white/40 focus:border-secondary focus:bg-black/90 focus:outline-none focus:ring-1 focus:ring-secondary transition-all font-medium text-base" 
                    id="email" 
                    placeholder="jane@example.com" 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider font-semibold" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input 
                    className="w-full rounded-lg px-4 py-3 bg-black/70 border border-secondary/40 text-white placeholder-white/40 focus:border-secondary focus:bg-black/90 focus:outline-none focus:ring-1 focus:ring-secondary transition-all font-medium text-base" 
                    id="phone" 
                    placeholder="+91 93100 40848" 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider font-semibold" htmlFor="industry">
                  Business Industry
                </label>
                <input 
                  className="w-full rounded-lg px-4 py-3 bg-black/70 border border-secondary/40 text-white placeholder-white/40 focus:border-secondary focus:bg-black/90 focus:outline-none focus:ring-1 focus:ring-secondary transition-all font-medium text-base" 
                  id="industry" 
                  placeholder="e.g. E-Commerce, Retail, Hospitality" 
                  type="text" 
                  value={formData.industry}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <label className="block font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-wider font-semibold" htmlFor="details">
                  Project Details
                </label>
                <textarea 
                  className="w-full rounded-lg px-4 py-3 bg-black/70 border border-secondary/40 text-white placeholder-white/40 focus:border-secondary focus:bg-black/90 focus:outline-none focus:ring-1 focus:ring-secondary transition-all font-medium text-base resize-none" 
                  id="details" 
                  placeholder="Tell us briefly about your goals and timeline..." 
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-4">
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-primary-container text-on-primary-container font-button-text text-button-text py-4 rounded-lg lantern-glow hover:bg-inverse-primary hover:scale-[1.02] transition-all duration-300 flex justify-center items-center gap-2 group font-bold tracking-wider cursor-pointer disabled:opacity-50" 
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin material-symbols-outlined">sync</span>
                      Saving to Supabase...
                    </>
                  ) : (
                    <>
                      Start My Project
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </>
                  )}
                </button>
                <p className="text-center mt-4 font-label-caps text-label-caps text-on-surface-variant/70">
                  ✓ Directly connected to your Supabase backend (<code className="text-secondary">jusgwmygfdwjwlbkhowb</code>).
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
};

export default ContactPage;
