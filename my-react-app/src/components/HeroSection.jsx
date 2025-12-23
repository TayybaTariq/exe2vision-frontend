import React from 'react';
import Metrics from './PerformanceMetrics.jsx';
import { ArrowRight } from './SVGIcons.jsx'
import header from '../assets/malwarewebsiteheader.jpg'

const HeroSection = () => {
  const primaryBtnClass = "flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg shadow-cyan-500/50";
  const secondaryBtnClass = "text-white font-medium py-3 px-6 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors";

  return (
    <section className="max-w-7xl mx-auto p-4 md:p-10 lg:p-20 pt-32 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content & CTAs */}
        <div className="text-white">
          {/* Tag/Pill */}
          <span className="inline-block px-3 py-1 text-cyan-400 text-xs font-semibold uppercase tracking-wider bg-cyan-900/40 rounded-full border border-cyan-700/50 mb-4 shadow-md">
            Exe Malware Detection
          </span>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            AI-Driven <span className="text-cyan-400">Malware Detection</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Upload your executable and let our deep learning model analyze its visual DNA for threats. Advanced cybersecurity through assembly n-gram imaging.
          </p>
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button className={primaryBtnClass}>
              Scan Your File Now
              <ArrowRight />
            </button>
            <button className={secondaryBtnClass}>
              Learn More
            </button>
          </div>
          
          {/* Metrics */}
          <Metrics />
        </div>

        {/* RIGHT COLUMN: Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Image Container with Custom Border Style */}
          <div className="p-4 rounded-[2rem] bg-gray-900 shadow-2xl border border-cyan-700/60 overflow-hidden">
            <img 
              src={header}
              alt="Person analyzing code on multiple dark monitors" 
              className="rounded-xl w-full h-auto object-cover border border-gray-800/50"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x350/1e293b/a5f3fc?text=Placeholder+Image"; }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;