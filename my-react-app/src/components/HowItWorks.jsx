import React from 'react';
import { UploadIcon, DisassembleIcon, RGBIcon, ClassificationIcon } from './SVGIcons.jsx';

const HowItWorks = () => {
    const steps = [
        {
            icon: UploadIcon,
            title: "Upload Executable",
            description: "Securely upload your .exe file to our platform."
        },
        {
            icon: DisassembleIcon,
            title: "Disassemble & Extract",
            description: "Convert to assembly code and extract n-gram patterns."
        },
        {
            icon: RGBIcon,
            title: "Generate RGB Image",
            description: "Transform n-grams into visual representation."
        },
        {
            icon: ClassificationIcon,
            title: "AI Classification",
            description: "Deep learning model analyzes and classifies threats."
        },
    ];

    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
                    Our innovative approach transforms executable analysis through visual AI
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-[1.02]">
                            <div className="inline-block p-3 rounded-xl bg-cyan-900/50 text-cyan-400 mb-4">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;