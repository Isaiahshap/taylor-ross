import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const SlipAndFall: React.FC = () => {
  const heroStats = [
    { value: "$4.2M", label: "Highest Settlement" },
    { value: "95%", label: "Success Rate" },
    { value: "750+", label: "Cases Won" },
    { value: "24/7", label: "Available" }
  ];

  const detailedContent = {
    title: "Premises Liability Experts",
    description: "Property owners have a legal duty to maintain safe conditions for visitors and customers. When they fail in this duty, serious injuries can occur. Our premises liability attorneys have extensive experience proving negligence in slip and fall cases, ensuring property owners are held accountable for their negligence.",
    image: "/images/slip-and-fall-detailed.jpg",
    bulletPoints: [
      "Thorough investigation of accident scenes and conditions",
      "Documentation of hazardous conditions and safety violations",
      "Expert analysis of maintenance records and safety protocols",
      "Identification of all liable parties",
      "Understanding of complex premises liability laws",
      "Proven track record of successful settlements"
    ],
    statistics: [
      { value: "95%", label: "Success Rate" },
      { value: "$50M+", label: "Recovered" },
      { value: "750+", label: "Cases Won" },
      { value: "20+", label: "Safety Experts" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Wet Floor Accidents",
      description: "Representation for injuries caused by unmarked wet floors and spills in businesses."
    },
    {
      title: "Uneven Surfaces",
      description: "Cases involving dangerous sidewalks, steps, and walking surfaces."
    },
    {
      title: "Poor Maintenance",
      description: "Handling cases of negligent property maintenance and repair."
    },
    {
      title: "Inadequate Lighting",
      description: "Accidents caused by poor visibility in parking lots and common areas."
    },
    {
      title: "Snow & Ice",
      description: "Winter weather-related falls due to improper snow and ice removal."
    },
    {
      title: "Security Issues",
      description: "Cases involving inadequate security measures leading to injuries."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="SLIP & FALL ATTORNEYS"
          description="When property owners' negligence leads to serious injuries, our experienced premises liability attorneys fight to hold them accountable and secure the compensation you deserve."
          backgroundImage="/images/slip-and-fall.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="TYPES OF PREMISES LIABILITY CASES"
          description="Our firm handles all types of slip and fall and premises liability cases, bringing decades of experience to every claim."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default SlipAndFall; 