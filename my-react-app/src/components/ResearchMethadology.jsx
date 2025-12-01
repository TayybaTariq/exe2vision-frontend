import React from 'react';
import { FileTextIcon, HashIcon, RGBIcon, CpuIcon } from './SVGIcons';

const ResearchMethodology = () => {
    const methodologySteps = [
        {
            step: 1,
            icon: FileTextIcon,
            title: "Disassemble Executable",
            description: "The .exe file is disassembled into its assembly code representation, revealing the low-level instructions that comprise the executable."
        },
        {
            step: 2,
            icon: HashIcon,
            title: "Extract N-Grams",
            description: "Assembly code is processed to extract n-gram patterns - sequential combinations of assembly instructions that capture the behavioral signature of the executable."
        },
        {
            step: 3,
            icon: RGBIcon,
            title: "Convert to RGB Images",
            description: "The n-gram data is transformed into RGB pixel values, creating a unique visual fingerprint that represents the executable's characteristics in image form."
        },
        {
            step: 4,
            icon: CpuIcon,
            title: "Deep Learning Classification",
            description: "State-of-the-art convolutional neural networks (EfficientNet/ResNet) analyze the generated images to classify files as malicious or benign with high accuracy."
        },
    ];

    return (
        <section id="research" className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 md:px-10 lg:px-20 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Research Methodology</h2>
                <p className="text-lg text-gray-400 mb-12">
                    Exe2Vision employs advanced machine learning techniques to detect malware through visual analysis of executable binaries
                </p>

                <div className="space-y-6">
                    {methodologySteps.map((item) => (
                        <div key={item.step} className="p-6 text-left bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl flex items-start space-x-6">
                            {/* Icon & Step Number */}
                            <div className="flex-shrink-0 flex flex-col items-center">
                                <div className="inline-block p-3 rounded-xl bg-cyan-900/50 text-cyan-400 mb-2">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <span className="text-xs font-semibold text-gray-400 uppercase">Step {item.step}</span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchMethodology;