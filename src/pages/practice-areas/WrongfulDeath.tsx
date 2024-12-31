import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const WrongfulDeath: React.FC = () => {
  const heroStats = [
    { value: "$21.5M", label: "Highest Settlement" },
    { value: "100+", label: "Families Helped" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  const detailedContent = {
    title: "Compassionate Wrongful Death Representation",
    description: "Losing a loved one due to someone else's negligence is devastating. Our wrongful death attorneys provide compassionate yet aggressive representation to help families seek justice and secure their financial future. We handle all legal aspects of your case so you can focus on healing.",
    image: "/images/wrongful-death-detailed.jpg",
    bulletPoints: [
      "Thorough investigation of circumstances leading to death",
      "Expert analysis to establish liability and damages",
      "Calculation of long-term financial impact on families",
      "Experience with complex wrongful death statutes",
      "Dedicated support team for grieving families",
      "Strong track record of successful settlements and verdicts"
    ],
    statistics: [
      { value: "98%", label: "Success Rate" },
      { value: "$100M+", label: "Recovered" },
      { value: "100+", label: "Families Helped" },
      { value: "30+", label: "Years Experience" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Medical Negligence",
      description: "Cases involving fatal medical errors, misdiagnosis, and healthcare negligence."
    },
    {
      title: "Vehicle Accidents",
      description: "Fatal car, truck, and motorcycle accidents caused by negligent drivers."
    },
    {
      title: "Workplace Fatalities",
      description: "Deaths resulting from unsafe working conditions and industrial accidents."
    },
    {
      title: "Product Defects",
      description: "Fatal incidents caused by dangerous and defective products."
    },
    {
      title: "Premises Liability",
      description: "Deaths occurring due to unsafe property conditions and negligent security."
    },
    {
      title: "Criminal Acts",
      description: "Civil representation for families affected by violent crimes and negligent security."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="WRONGFUL DEATH ATTORNEYS"
          description="When families lose loved ones due to negligence or misconduct, our experienced wrongful death attorneys provide compassionate representation while fighting relentlessly for justice."
          backgroundImage="/images/wrongful-death.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="TYPES OF WRONGFUL DEATH CASES"
          description="Our firm handles all types of wrongful death cases with the sensitivity and dedication families deserve during difficult times."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default WrongfulDeath; 