import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import { FaArrowRight } from 'react-icons/fa';

const BrainAndSpinalInjuries: React.FC = () => {
  const heroStats = [
    { value: "$25.1M", label: "Highest Settlement" },
    { value: "98%", label: "Success Rate" },
    { value: "500+", label: "Cases Won" },
    { value: "24/7", label: "Available" }
  ];

  const detailedContent = {
    title: "Brain & Spinal Injury Specialists",
    description: "Brain and spinal cord injuries are among the most devastating injuries a person can suffer. Our specialized team combines medical knowledge with legal expertise to secure the substantial compensation needed for lifetime care, rehabilitation, and quality of life adaptations.",
    image: "/brain.jpg",
    bulletPoints: [
      "Deep understanding of neurological and spinal trauma",
      "Expert life-care planning for long-term needs",
      "Access to leading medical specialists and rehabilitation experts",
      "Experience with complex medical evidence",
      "Strong track record in catastrophic injury cases",
      "Dedication to securing maximum lifetime compensation"
    ],
    statistics: [
      { value: "98%", label: "Success Rate" },
      { value: "$200M+", label: "Recovered" },
      { value: "500+", label: "Families Helped" },
      { value: "30+", label: "Medical Experts" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Traumatic Brain Injuries",
      description: "Comprehensive representation for all types of brain trauma, from mild concussions to severe injuries."
    },
    {
      title: "Spinal Cord Damage",
      description: "Expert handling of cases involving paralysis, nerve damage, and other spinal cord injuries."
    },
    {
      title: "Medical Care Planning",
      description: "Detailed planning for immediate and long-term medical needs, including rehabilitation and therapy."
    },
    {
      title: "Life Care Needs",
      description: "Calculation of lifetime costs for medical care, equipment, and home modifications."
    },
    {
      title: "Expert Coordination",
      description: "Access to top neurologists, neurosurgeons, and rehabilitation specialists."
    },
    {
      title: "Family Support",
      description: "Comprehensive assistance for families adapting to new caregiving responsibilities."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="BRAIN & SPINAL INJURY ATTORNEYS"
          description="When catastrophic injuries change lives forever, you need attorneys who understand the complex medical and financial challenges ahead. We fight to secure the compensation needed for lifetime care."
          backgroundImage="/brain.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="COMPREHENSIVE INJURY SUPPORT"
          description="Our approach ensures that all current and future needs are addressed in your settlement or verdict."
          items={keyInfoItems}
        />

        <section className="relative py-24 bg-black">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-display text-white uppercase mb-6">
                Get Your Free <span className="text-law-red">Consultation</span>
              </h2>
              <p className="text-white/80 text-xl max-w-3xl mx-auto mb-8">
                Our experienced brain and spinal injury attorneys are ready to review your case and discuss your legal options.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-law-red hover:bg-white px-8 py-4 text-white hover:text-black font-display text-xl uppercase tracking-wider transition-all duration-300"
              >
                Free Consultation
                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BrainAndSpinalInjuries; 