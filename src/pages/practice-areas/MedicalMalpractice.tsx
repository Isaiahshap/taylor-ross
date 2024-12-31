import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PracticeAreaHero from '../../components/PracticeArea/PracticeAreaHero';
import DetailedContent from '../../components/PracticeArea/DetailedContent';
import KeyInfo from '../../components/PracticeArea/KeyInfo';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const MedicalMalpractice: React.FC = () => {
  const heroStats = [
    { value: "$18.2M", label: "Highest Settlement" },
    { value: "95%", label: "Success Rate" },
    { value: "300+", label: "Healthcare Cases" },
    { value: "30+", label: "Medical Experts" }
  ];

  const detailedContent = {
    title: "Fighting Against Medical Negligence",
    description: "Medical malpractice cases are among the most complex areas of personal injury law. At Taylor & Ross, we combine our legal expertise with a network of medical professionals to build powerful cases against healthcare providers who have breached their duty of care. Our track record of success in medical malpractice cases speaks to our ability to handle these challenging claims.",
    image: "/images/medical-malpractice-detailed.jpg",
    bulletPoints: [
      "Comprehensive review of medical records by expert physicians",
      "Access to leading medical experts for case evaluation and testimony",
      "Deep understanding of complex medical procedures and standards of care",
      "Experience with all types of medical malpractice cases",
      "Strategic approach to proving negligence and causation",
      "Full support for families dealing with catastrophic medical errors"
    ],
    statistics: [
      { value: "98%", label: "Expert Testimony Rate" },
      { value: "$150M+", label: "Medical Cases Won" },
      { value: "500+", label: "Families Helped" },
      { value: "25+", label: "Years Experience" }
    ]
  };

  const keyInfoItems = [
    {
      title: "Surgical Errors",
      description: "Representation for victims of surgical mistakes, wrong-site surgery, and post-operative complications."
    },
    {
      title: "Misdiagnosis",
      description: "Fighting for patients who suffered due to delayed, missed, or incorrect diagnoses of serious conditions."
    },
    {
      title: "Medication Errors",
      description: "Holding healthcare providers accountable for prescription mistakes and dangerous drug interactions."
    },
    {
      title: "Birth Injuries",
      description: "Advocating for families affected by preventable birth trauma and maternal injuries."
    },
    {
      title: "Hospital Negligence",
      description: "Pursuing cases involving systemic failures, infections, and inadequate patient care."
    },
    {
      title: "Emergency Room Errors",
      description: "Representing patients harmed by ER mistakes, delayed treatment, and improper triage."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <PracticeAreaHero
          title="MEDICAL MALPRACTICE ATTORNEYS"
          description="When healthcare providers breach their duty of care, the consequences can be devastating. Our experienced medical malpractice attorneys fight to hold negligent providers accountable and secure the compensation you deserve."
          backgroundImage="/images/medical-malpractice.jpg"
          stats={heroStats}
        />
        
        <DetailedContent {...detailedContent} />
        
        <KeyInfo
          title="TYPES OF MEDICAL MALPRACTICE CASES"
          description="Our firm handles all types of medical negligence cases, bringing decades of experience and medical expertise to every claim."
          items={keyInfoItems}
        />

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default MedicalMalpractice; 