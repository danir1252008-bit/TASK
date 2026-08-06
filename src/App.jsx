import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('task_theme');
      if (savedTheme) return savedTheme === 'dark';
    }
    return false; // Default to Light Mode on first visit!
  });

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('task_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('task_theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="bg-background text-on-background min-h-screen relative overflow-x-hidden flex flex-col font-body-md text-body-md">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-10 noise-bg mix-blend-overlay pointer-events-none"></div>

      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main View Area */}
      <div className="flex-grow">
        {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'portfolio' && <PortfolioPage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'pricing' && <PricingPage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'contact' && <ContactPage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'privacy' && <PrivacyPolicyPage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'terms' && <TermsPage setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
      </div>

      {/* Shared Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
