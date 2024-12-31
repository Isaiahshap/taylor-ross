import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import AboutHero from '../../components/About/AboutHero';
import FirmHistory from '../../components/About/FirmHistory';
import CoreValues from '../../components/About/CoreValues';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const OurStory: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Years Experience", value: "25+" },
    { label: "Total Recovered", value: "$500M+" },
    { label: "Cases Won", value: "5,000+" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <AboutHero
          title="Our"
          subtitle="Story"
          description="From our founding in 1998 to becoming one of the state's leading personal injury firms, our commitment to fighting for justice has never wavered."
          stats={heroStats}
          inView={inView}
        />

        {/* Mission Statement Section */}
        <section className="relative py-24 bg-black" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-8">
                Our <span className="text-law-red">Mission</span>
              </h2>
              <p className="text-xl text-white/80 font-body leading-relaxed mb-8">
                Since our founding, we've been driven by a singular mission: to provide aggressive, 
                ethical representation for injury victims while treating every client like family.
              </p>
              <p className="text-xl text-white/80 font-body leading-relaxed">
                We believe that access to justice shouldn't depend on the size of your bank account. 
                That's why we work on a contingency fee basis - you don't pay unless we win. This 
                commitment to putting our clients first has helped us recover over $500 million in 
                compensation for injury victims and their families.
              </p>
            </motion.div>
          </div>
        </section>

        <FirmHistory />
        <CoreValues />
        <CaseEvaluation />
      </main>
    </div>
  );
};

export default OurStory; 