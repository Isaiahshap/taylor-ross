import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaGraduationCap, FaHandsHelping, FaHeart } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import AboutHero from '../../components/About/AboutHero';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const initiatives = [
  {
    icon: FaHandHoldingHeart,
    title: "Pro Bono Services",
    description: "Providing free legal services to those in need, ensuring access to justice for all members of our community.",
    stats: ["500+ Hours Annually", "100+ Families Helped", "25+ Partner Organizations"]
  },
  {
    icon: FaGraduationCap,
    title: "Legal Education",
    description: "Sponsoring scholarships and educational programs to support the next generation of legal advocates.",
    stats: ["$250K+ in Scholarships", "15 Law Students", "5 Partner Universities"]
  },
  {
    icon: FaHandsHelping,
    title: "Community Outreach",
    description: "Partnering with local organizations to support various community initiatives and charitable causes.",
    stats: ["$500K+ Donated", "20+ Local Partners", "12 Annual Events"]
  },
  {
    icon: FaHeart,
    title: "Victim Support",
    description: "Supporting organizations that help accident victims and their families during recovery.",
    stats: ["300+ Families Supported", "5 Support Groups", "24/7 Crisis Line"]
  }
];

const CommunityImpact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Annual Pro Bono Hours", value: "500+" },
    { label: "Community Investment", value: "$1M+" },
    { label: "Local Partners", value: "20+" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <AboutHero
          title="Community"
          subtitle="Impact"
          description="Making a difference beyond the courtroom through community service, education, and charitable giving."
          stats={heroStats}
        />

        {/* Mission Statement */}
        <section className="relative py-24 bg-black" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-8">
                Our <span className="text-law-red">Commitment</span>
              </h2>
              <p className="text-xl text-white/80 font-body leading-relaxed mb-8">
                We believe that true success extends beyond the courtroom. Our firm is deeply 
                committed to giving back to the community that has trusted us for over 25 years.
              </p>
              <p className="text-xl text-white/80 font-body leading-relaxed">
                Through pro bono work, charitable giving, and community partnerships, we strive 
                to make a lasting positive impact on the lives of those around us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Initiatives Grid */}
        <section className="relative py-24 bg-law-red">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-display uppercase text-black mb-6">
                Our <span className="text-white">Initiatives</span>
              </h2>
              <p className="text-black/80 text-xl max-w-3xl mx-auto font-body">
                Making a difference through targeted programs and partnerships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-black p-8"
                >
                  <initiative.icon className="text-law-red text-5xl mb-6" />
                  <h3 className="text-2xl font-display text-white mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-white/60 font-body leading-relaxed mb-6">
                    {initiative.description}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {initiative.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="text-white/80 font-body text-sm border-l-4 border-law-red pl-4"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default CommunityImpact; 