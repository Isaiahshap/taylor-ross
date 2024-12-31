import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const CarAccidents: React.FC = () => {
  const heroStats = [
    { value: "$15.5M", label: "Highest Settlement" },
    { value: "98%", label: "Success Rate" },
    { value: "2,500+", label: "Cases Won" },
    { value: "24/7", label: "Available" }
  ];

  const detailedContent = {
    title: "Expert Car Accident Attorneys Fighting For Your Rights",
    description: "Car accidents can have devastating consequences, leaving victims with serious injuries, mounting medical bills, and lost wages. At Taylor & Ross, our experienced car accident attorneys understand the physical, emotional, and financial toll these accidents take on victims and their families. We're committed to helping you recover the maximum compensation you deserve while you focus on healing.",
    image: "/images/car-accident-detailed.jpg",
    bulletPoints: [
      "Comprehensive investigation of your accident, including gathering evidence and witness statements",
      "Expert analysis from accident reconstructionists and medical professionals",
      "Skilled negotiation with insurance companies to ensure fair compensation",
      "Aggressive courtroom representation if a fair settlement cannot be reached",
      "No upfront costs - we only get paid when you win",
      "Direct communication with your legal team throughout your case"
    ],
    statistics: [
      { value: "95%", label: "Success Rate" },
      { value: "$100M+", label: "Recovered" },
      { value: "1,000+", label: "Cases Won" },
      { value: "25+", label: "Years Experience" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Immediate Investigation",
      description: "We quickly gather and preserve crucial evidence, including witness statements, surveillance footage, and accident reports."
    },
    {
      title: "Expert Network",
      description: "Access to accident reconstructionists, medical experts, and other specialists to build your case."
    },
    {
      title: "Insurance Negotiation",
      description: "Skilled negotiators who won't settle for less than what your case is worth."
    },
    {
      title: "Trial Experience",
      description: "Ready to take your case to court if insurance companies don't offer fair compensation."
    },
    {
      title: "Medical Coordination",
      description: "We help coordinate your medical care and work with providers to maximize your recovery."
    },
    {
      title: "No Recovery, No Fee",
      description: "You pay nothing unless we win your case. We take all the financial risk."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="CAR ACCIDENT ATTORNEYS"
          description="When negligent drivers change your life, you need attorneys who will fight relentlessly for the compensation you deserve. Our track record of success in car accident cases speaks for itself."
          backgroundImage="/images/car-accident.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="HOW WE FIGHT FOR YOU"
          description="Our comprehensive approach to car accident cases ensures no detail is overlooked and no stone is left unturned in pursuit of maximum compensation."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default CarAccidents; 