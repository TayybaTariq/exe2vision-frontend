import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import ResearchMethodology from '../components/ResearchMethadology';
import AdvantagesAndFooter from '../components/Footer';

// Main App Component (Wrapper)
export default function ExeVisionHome() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      {/* Fixed Header */}
      <Header />
      
      {/* 1. Hero Section */}
      <HeroSection/>
      
      {/* 2. How It Works Section */}
      <HowItWorks />
      
     
    </div>
  );
}