import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-background text-on-background min-h-screen relative overflow-x-hidden flex flex-col font-body-md text-body-md">
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-10 noise-bg mix-blend-overlay pointer-events-none"></div>

      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Area */}
      <div className="flex-grow">
        {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} />}
        {activeTab === 'portfolio' && <PortfolioPage setActiveTab={setActiveTab} />}
        {activeTab === 'pricing' && <PricingPage setActiveTab={setActiveTab} />}
        {activeTab === 'contact' && <ContactPage setActiveTab={setActiveTab} />}
      </div>

      {/* Shared Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
