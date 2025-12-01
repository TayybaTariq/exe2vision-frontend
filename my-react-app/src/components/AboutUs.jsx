import React from 'react';
// Using Lucide icons, which are typically available in React environments
import { Mail, Linkedin, Globe } from 'lucide-react';

// Team member data based on the provided images
const teamMembers = [
  {
    name: "Huzaifa",
    title: "Principal Investigator",
    initials: "H",
    description: "Software Engineer with specialization in Malware Analysis and Deep Learning. Leading the research direction and methodology.",
    social: { mail: "#", linkedin: "#", research: "#" }
  },
  {
    name: "Tayyaba",
    title: "Machine Learning Engineer",
    initials: "T",
    description: "Expert in convolutional neural networks and model optimization. Responsible for developing and training classification models.",
    social: { mail: "#", linkedin: "#", research: "#" }
  },
  {
    name: "Ahmad Mukarram",
    title: "Security Researcher",
    initials: "AM",
    description: "Specializing in binary analysis and reverse engineering. Focuses on n-gram extraction and visualization techniques.",
    social: { mail: "#", linkedin: "#", research: "#" }
  },
  {
    name: "Rabbia",
    title: "Full-Stack Developer",
    initials: "R",
    description: "Building the web application and API infrastructure. Ensuring seamless integration between research models and user interface.",
    social: { mail: "#", linkedin: "#", research: "#" }
  },
];

/**
 * Renders an individual team member card.
 */
const TeamCard = ({ member }) => (
  <div className="p-8 bg-gray-800 rounded-xl flex flex-col items-center text-center border border-gray-700 shadow-2xl transition-all duration-300 hover:border-cyan-500">
    
    {/* Initials Circle */}
    <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center text-5xl font-bold text-white mb-6 shadow-lg">
      {member.initials}
    </div>

    {/* Name and Title */}
    <h3 className="text-xl font-bold text-white">{member.name}</h3>
    <p className="text-cyan-400 font-semibold text-sm mt-1 mb-4">
      {member.title}
    </p>

    {/* Description */}
    <p className="text-gray-400 max-w-xs mb-6 flex-grow">
      {member.description}
    </p>

    {/* Social Icons */}
    <div className="flex space-x-6 mt-auto">
      <a href={member.social.mail} aria-label={`Email ${member.name}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
        <Mail className="w-5 h-5" />
      </a>
      <a href={member.social.linkedin} aria-label={`LinkedIn ${member.name}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href={member.social.research} aria-label={`Research Profile ${member.name}`} className="text-gray-400 hover:text-cyan-400 transition-colors">
        {/* Placeholder for the custom research icon - using Globe */}
        <Globe className="w-5 h-5" />
      </a>
    </div>
  </div>
);

/**
 * Main component for the About Us section.
 */
const AboutUsSection = () => {
  return (
    // Outer container with responsive padding and centering
    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the research team behind Exe2Vision, dedicated to advancing cybersecurity through innovative machine learning solutions.
          </p>
        </header>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;