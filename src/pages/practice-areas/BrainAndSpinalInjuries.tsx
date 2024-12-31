import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

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
    image: "/images/brain-injury-detailed.jpg",
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
          backgroundImage="/images/brain-injury.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="COMPREHENSIVE INJURY SUPPORT"
          description="Our approach ensures that all current and future needs are addressed in your settlement or verdict."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default BrainAndSpinalInjuries; 