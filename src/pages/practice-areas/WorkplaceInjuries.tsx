import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const WorkplaceInjuries: React.FC = () => {
  const heroStats = [
    { value: "$9.5M", label: "Highest Settlement" },
    { value: "1,000+", label: "Workers Helped" },
    { value: "100%", label: "OSHA Compliance" },
    { value: "24/7", label: "Available" }
  ];

  const detailedContent = {
    title: "Workplace Injury Specialists",
    description: "Workplace accidents can devastate both workers and their families. Our firm specializes in navigating the complex intersection of workers' compensation and personal injury law, ensuring you receive maximum compensation for your workplace injury. We understand OSHA regulations and how to build strong cases against negligent employers.",
    image: "/injury.jpg",
    bulletPoints: [
      "Expert knowledge of workers' compensation laws and OSHA regulations",
      "Investigation of workplace safety violations and negligence",
      "Handling of third-party liability claims",
      "Experience with construction accidents and industrial injuries",
      "Understanding of occupational illness cases",
      "Coordination with workers' compensation benefits"
    ],
    statistics: [
      { value: "95%", label: "Success Rate" },
      { value: "$75M+", label: "Recovered" },
      { value: "1,000+", label: "Cases Won" },
      { value: "30+", label: "Safety Experts" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Construction Accidents",
      description: "Comprehensive representation for falls, equipment accidents, and safety violations on construction sites."
    },
    {
      title: "Industrial Injuries",
      description: "Handling cases involving machinery accidents, chemical exposure, and manufacturing injuries."
    },
    {
      title: "OSHA Violations",
      description: "Investigation and documentation of safety violations to strengthen your case."
    },
    {
      title: "Third-Party Claims",
      description: "Identifying additional liable parties beyond workers' compensation."
    },
    {
      title: "Occupational Diseases",
      description: "Representation for long-term exposure and occupational illness cases."
    },
    {
      title: "Benefits Coordination",
      description: "Strategic handling of workers' compensation and personal injury claims."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="WORKPLACE INJURY ATTORNEYS"
          description="When workplace accidents change your life, you need attorneys who understand both workers' compensation and personal injury law. We fight to protect your rights and maximize your compensation."
          backgroundImage="/images/workplace-injury.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="HOW WE HANDLE WORKPLACE INJURIES"
          description="Our comprehensive approach ensures you receive full compensation through both workers' compensation and potential third-party claims."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default WorkplaceInjuries; 