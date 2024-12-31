import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const TruckAccidents: React.FC = () => {
  const heroStats = [
    { value: "$12.8M", label: "Highest Settlement" },
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Trucking Cases" },
    { value: "100%", label: "Focus on Results" }
  ];

  const detailedContent = {
    title: "Commercial Truck Accident Specialists",
    description: "Truck accident cases demand a deep understanding of federal regulations, industry standards, and complex liability issues. Our firm has extensive experience handling commercial vehicle accidents, from semi-trucks to delivery vans. We know how to investigate these cases thoroughly and hold all responsible parties accountable.",
    image: "/images/truck-accident-detailed.jpg",
    bulletPoints: [
      "Expert knowledge of Federal Motor Carrier Safety Regulations (FMCSR)",
      "Access to top accident reconstruction specialists",
      "Experience with electronic logging devices (ELD) and black box data",
      "Understanding of commercial insurance policies and coverage",
      "Ability to identify multiple liable parties",
      "Track record of successful negotiations with trucking companies"
    ],
    statistics: [
      { value: "97%", label: "Success Rate" },
      { value: "$100M+", label: "Trucking Cases" },
      { value: "800+", label: "Cases Won" },
      { value: "50+", label: "Expert Network" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Immediate Investigation",
      description: "Rapid response team to preserve critical evidence and document the accident scene."
    },
    {
      title: "Regulatory Compliance",
      description: "Deep understanding of state and federal trucking regulations and safety standards."
    },
    {
      title: "Multiple Liable Parties",
      description: "Investigation of trucking companies, manufacturers, maintenance providers, and other responsible parties."
    },
    {
      title: "Complex Insurance",
      description: "Expert handling of commercial insurance policies and coverage disputes."
    },
    {
      title: "Industry Knowledge",
      description: "Understanding of trucking industry practices, standards, and common violations."
    },
    {
      title: "Maximum Compensation",
      description: "Fighting for full compensation for catastrophic injuries and wrongful death."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="TRUCK ACCIDENT ATTORNEYS"
          description="When commercial trucks cause devastating accidents, you need attorneys who understand the complexities of trucking cases and have the resources to take on large companies."
          backgroundImage="/images/truck-accident.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="OUR APPROACH TO TRUCK ACCIDENTS"
          description="We leverage our extensive experience and resources to build powerful cases against trucking companies and their insurers."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default TruckAccidents; 