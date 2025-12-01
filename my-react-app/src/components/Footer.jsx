import React from 'react';
import { CheckCircleIcon } from './SVGIcons';

const AdvantagesAndFooter = () => {
    const advantages = [
        "Novel visual-based malware detection approach",
        "Fast scanning and classification (<30 seconds)",
        "Scalable architecture for high-volume analysis",
        "High accuracy with deep learning models",
        "Robust against code obfuscation techniques",
        "Continuous model training and improvement",
    ];
    
    // Placeholder image for the University block
    const universityImageUrl = "https://placehold.co/150x100/374151/f3f4f6?text=UET+Lahore";

    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 md:px-10 lg:px-20">
                
                {/* Key Advantages */}
                <div className="text-center mb-20">
                    <h3 className="text-3xl font-bold text-white mb-8">Key Advantages</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <CheckCircleIcon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-300">{advantage}</p>
                            </div>
                        ))}
                    </div>
                </div>

           
                {/* <div className="p-8 bg-gray-800 rounded-3xl border border-gray-700 shadow-2xl text-center">
                    <img 
                        src={universityImageUrl} 
                        alt="University building" 
                        className="w-36 h-24 mx-auto rounded-lg object-cover mb-6 border border-gray-700"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x100/374151/f3f4f6?text=Placeholder"; }}
                    />
                    <h4 className="text-xl font-bold text-white mb-2">University of Engineering and Technology, Lahore</h4>
                    <p className="text-sm text-gray-400 max-w-lg mx-auto">
                        This research project is conducted at UET Lahore's Department of Computer Science, contributing to the advancement of cybersecurity research and artificial intelligence applications.
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default AdvantagesAndFooter;