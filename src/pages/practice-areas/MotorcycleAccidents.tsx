import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const MotorcycleAccidents: React.FC = () => {
  const heroStats = [
    { value: "$8.7M", label: "Highest Settlement" },
    { value: "500+", label: "Riders Helped" },
    { value: "97%", label: "Success Rate" },
    { value: "24/7", label: "Available" }
  ];

  const detailedContent = {
    title: "Motorcycle Accident Specialists",
    description: "Motorcycle accidents often result in devastating injuries, and riders face unique challenges in securing fair compensation. Our attorneys understand motorcycle culture, rider rights, and the complexities of these cases. We fight against bias and work tirelessly to ensure riders receive the compensation they deserve.",
    image: "/motorcyclecrash.jpg",
    bulletPoints: [
      "Deep understanding of motorcycle dynamics and accident causes",
      "Experience countering anti-motorcycle bias",
      "Expert accident reconstruction specific to motorcycles",
      "Knowledge of protective gear and injury mitigation",
      "Strong network of motorcycle safety experts",
      "Track record of successful motorcycle accident settlements"
    ],
    statistics: [
      { value: "97%", label: "Success Rate" },
      { value: "$50M+", label: "Recovered" },
      { value: "500+", label: "Riders Helped" },
      { value: "25+", label: "Years Experience" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Immediate Response",
      description: "Rapid investigation team to document accident scenes and preserve crucial evidence."
    },
    {
      title: "Biker Advocacy",
      description: "Fighting against anti-motorcycle bias in insurance claims and court proceedings."
    },
    {
      title: "Injury Expertise",
      description: "Specialized experience with severe injuries common in motorcycle accidents."
    },
    {
      title: "Insurance Knowledge",
      description: "Understanding of motorcycle insurance policies and coverage issues."
    },
    {
      title: "Safety Analysis",
      description: "Expert evaluation of road conditions, visibility, and other safety factors."
    },
    {
      title: "Maximum Recovery",
      description: "Aggressive pursuit of full compensation for injuries, damages, and lost riding time."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="MOTORCYCLE ACCIDENT ATTORNEYS"
          description="When riders are injured due to others' negligence, they need attorneys who understand motorcycle culture and will fight against bias to secure fair compensation."
          backgroundImage="/images/motorcycle-accident.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="HOW WE PROTECT RIDERS' RIGHTS"
          description="Our comprehensive approach ensures motorcycle accident victims receive the respect and compensation they deserve."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default MotorcycleAccidents; 