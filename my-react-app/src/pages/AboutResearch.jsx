import React from 'react';
import ResearchMethodology from '../components/ResearchMethadology';
import AdvantagesAndFooter from '../components/Footer';
import Header from '../components/Header';

// Main App Component (Wrapper)
export default function AboutResearch() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      
      <Header />
      {/* 3. Research Methodology Section */}
      <ResearchMethodology />
      
      {/* 4. Advantages and Footer Block */}
      <AdvantagesAndFooter/>
    </div>
  );
}