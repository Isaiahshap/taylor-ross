import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCar, FaUserInjured, FaHospital, FaHardHat, FaBalanceScale, FaHeartbeat } from 'react-icons/fa';

const practiceAreas = [
  {
    icon: FaCar,
    title: "AUTO ACCIDENTS",
    description: "Aggressive representation for victims of car, truck, and motorcycle accidents."
  },
  {
    icon: FaUserInjured,
    title: "PERSONAL INJURY",
    description: "Fighting for maximum compensation in slip and fall and premises liability cases."
  },
  {
    icon: FaHospital,
    title: "MEDICAL MALPRACTICE",
    description: "Holding negligent healthcare providers accountable for their mistakes."
  },
  {
    icon: FaHardHat,
    title: "WORKPLACE INJURIES",
    description: "Protecting workers' rights and securing compensation for on-the-job injuries."
  },
  {
    icon: FaBalanceScale,
    title: "WRONGFUL DEATH",
    description: "Seeking justice and compensation for families who lost loved ones."
  },
  {
    icon: FaHeartbeat,
    title: "CATASTROPHIC INJURIES",
    description: "Dedicated advocacy for life-changing injury victims and their families."
  }
];

const ResultsAndPractice: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      {/* Results Section */}
      <section className="relative py-24 bg-black">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
              Recent <span className="text-law-red">Victories</span>
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
              Our track record of success speaks volumes. We've secured millions in compensation for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { amount: "$15.5M", type: "Medical Malpractice", desc: "Settlement for surgical error victim" },
              { amount: "$8.2M", type: "Auto Accident", desc: "Verdict for catastrophically injured driver" },
              { amount: "$12.1M", type: "Wrongful Death", desc: "Settlement for grieving family" }
            ].map((result, index) => (
              <motion.div
                key={result.type}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden"
              >
                <div className="relative bg-gradient-to-br from-black to-law-dark/90 p-10 border-l-[6px] border-law-red hover:border-l-[12px] transition-all duration-500">
                  <div className="relative z-10">
                    <div className="text-8xl font-display font-bold text-law-red mb-4 group-hover:scale-110 transition-transform duration-300">
                      {result.amount}
                    </div>
                    <div className="text-2xl text-white font-display uppercase tracking-[0.2em] mb-3">
                      {result.type}
                    </div>
                    <p className="text-white/70 font-body text-lg">
                      {result.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-law-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="relative py-24 bg-law-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
              Practice <span className="text-law-red">Areas</span>
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
              We specialize in fighting for victims of negligence across multiple practice areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-black p-8 border-l-4 border-law-red hover:bg-law-red/10 transition-all duration-300"
              >
                <area.icon className="text-law-red text-4xl mb-6" />
                <h3 className="text-xl font-display text-white mb-4 uppercase">{area.title}</h3>
                <p className="text-white/70 font-body leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ResultsAndPractice; 