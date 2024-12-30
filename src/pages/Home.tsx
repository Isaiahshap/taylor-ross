import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import ResultsAndPractice from '../components/ResultsAndPractice/ResultsAndPractice';
import CaseEvaluation from '../components/CaseEvaluation/CaseEvaluation';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <ResultsAndPractice />
        <CaseEvaluation />
      </main>
    </div>
  );
};

export default Home;
