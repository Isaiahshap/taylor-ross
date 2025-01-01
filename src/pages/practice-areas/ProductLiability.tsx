import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const ProductLiability: React.FC = () => {
  const heroStats = [
    { value: "$11.3M", label: "Highest Settlement" },
    { value: "96%", label: "Success Rate" },
    { value: "500+", label: "Cases Won" },
    { value: "National", label: "Coverage" }
  ];

  const detailedContent = {
    title: "Fighting Against Dangerous Products",
    description: "When manufacturers put profits over safety, consumers pay the price. Our product liability attorneys have the expertise and resources to take on major corporations and hold them accountable for dangerous and defective products. We work with leading industry experts to prove liability and secure maximum compensation for our clients.",
    image: "/productliability.jpg",
    bulletPoints: [
      "Comprehensive investigation of product defects",
      "Expert analysis from engineering and safety specialists",
      "Understanding of complex manufacturing processes",
      "Experience with class action lawsuits",
      "National network of product safety experts",
      "Track record of victories against major corporations"
    ],
    statistics: [
      { value: "96%", label: "Success Rate" },
      { value: "$75M+", label: "Recovered" },
      { value: "25+", label: "Expert Network" },
      { value: "1,000+", label: "Cases Handled" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Defective Medical Devices",
      description: "Fighting for victims of failed implants, surgical tools, and medical equipment."
    },
    {
      title: "Dangerous Medications",
      description: "Holding pharmaceutical companies accountable for harmful drug side effects."
    },
    {
      title: "Auto Part Defects",
      description: "Cases involving faulty airbags, tires, brakes, and other vehicle components."
    },
    {
      title: "Consumer Products",
      description: "Representation for injuries caused by defective household and consumer goods."
    },
    {
      title: "Industrial Equipment",
      description: "Handling cases involving dangerous machinery and workplace equipment."
    },
    {
      title: "Children's Products",
      description: "Protecting families affected by unsafe toys and children's items."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="PRODUCT LIABILITY ATTORNEYS"
          description="When dangerous products cause serious injuries, our experienced product liability attorneys fight to hold manufacturers accountable and protect consumer safety."
          backgroundImage="/images/product-liability.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="TYPES OF PRODUCT LIABILITY CASES"
          description="Our firm handles all types of product liability cases, from defective medical devices to dangerous consumer products."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default ProductLiability; 