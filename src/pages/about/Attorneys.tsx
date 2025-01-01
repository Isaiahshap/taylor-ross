import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import AboutHero from '../../components/About/AboutHero';
import TeamSection from '../../components/About/TeamSection';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';
import FoundingPartners from '../../components/About/FoundingPartners';

const Attorneys: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Combined Experience", value: "100+" },
    { label: "Super Lawyers", value: "12" },
    { label: "Best Lawyers", value: "8" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <AboutHero
          title="Our"
          subtitle="Attorneys"
          description="Meet our team of award-winning trial lawyers dedicated to fighting for justice and securing life-changing results for our clients."
          stats={heroStats}
        />

        {/* Leadership Introduction */}
        <section className="relative py-24 bg-black" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-8">
                Trial-Tested <span className="text-law-red">Leadership</span>
              </h2>
              <p className="text-xl text-white font-body leading-relaxed mb-8">
                Our attorneys bring decades of combined experience to every case, with a proven 
                track record of securing record-breaking verdicts and settlements across all areas 
                of personal injury law.
              </p>
              <p className="text-xl text-white font-body leading-relaxed">
                From complex medical malpractice cases to catastrophic injury claims, our team 
                has the expertise, resources, and dedication needed to take on powerful defendants 
                and win.
              </p>
            </motion.div>
          </div>
        </section>

        <FoundingPartners />
        
        <TeamSection />
        
        <CaseEvaluation />
      </main>
    </div>
  );
};

export default Attorneys; 