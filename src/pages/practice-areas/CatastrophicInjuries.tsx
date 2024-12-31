import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const CatastrophicInjuries: React.FC = () => {
  const heroStats = [
    { value: "$25.1M", label: "Highest Settlement" },
    { value: "100%", label: "Life-Care Focus" },
    { value: "250+", label: "Medical Experts" },
    { value: "24/7", label: "Support Available" }
  ];

  const detailedContent = {
    title: "Catastrophic Injury Specialists",
    description: "Brain and spinal cord injuries have life-altering consequences that require extensive medical care and long-term support. Our catastrophic injury team combines medical knowledge with legal expertise to secure the substantial compensation needed for lifetime care, rehabilitation, and quality of life adaptations.",
    image: "/images/brain-injury-detailed.jpg",
    bulletPoints: [
      "Comprehensive understanding of neurological and spinal injuries",
      "Expert life-care planning for long-term needs",
      "Access to leading medical specialists and rehabilitation experts",
      "Experience with complex medical evidence and documentation",
      "Strong track record in high-value catastrophic injury cases",
      "Dedication to securing maximum lifetime compensation"
    ],
    statistics: [
      { value: "98%", label: "Success Rate" },
      { value: "$200M+", label: "Recovered" },
      { value: "300+", label: "Families Helped" },
      { value: "30+", label: "Medical Experts" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Brain Injuries",
      description: "Expert handling of traumatic brain injury cases, from mild concussions to severe trauma."
    },
    {
      title: "Spinal Cord Injuries",
      description: "Comprehensive representation for paralysis and other spinal cord injury cases."
    },
    {
      title: "Life-Care Planning",
      description: "Detailed planning for lifetime medical care, rehabilitation, and support needs."
    },
    {
      title: "Medical Coordination",
      description: "Access to top neurologists, rehabilitation specialists, and care providers."
    },
    {
      title: "Future Needs",
      description: "Calculation of lifetime costs for medical care, equipment, and home modifications."
    },
    {
      title: "Family Support",
      description: "Comprehensive assistance for families adapting to new caregiving roles."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="CATASTROPHIC INJURY ATTORNEYS"
          description="When brain and spinal injuries change lives forever, you need attorneys who understand the complex medical and financial challenges ahead. We fight to secure the substantial compensation needed for lifetime care."
          backgroundImage="/images/brain-injury.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="COMPREHENSIVE CATASTROPHIC INJURY SUPPORT"
          description="Our approach ensures that all current and future needs are addressed in your settlement or verdict."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default CatastrophicInjuries; 