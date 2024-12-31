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
              Notable <span className="text-law-red">Victories</span>
            </h2>
            <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
              Our track record of success speaks volumes. We've secured millions in compensation for our clients.
            </p>
          </motion.div>

          {/* Victory Cards with Black Edges */}
          <div className="relative">
            {/* Black gradient edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
            
            {/* Cards container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {practiceAreas.slice(0, 3).map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-law-red p-8 border-l-8 border-black hover:border-l-12 transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="text-5xl text-black group-hover:text-white transition-colors duration-300" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-display text-black group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                        {area.title}
                      </h3>
                      
                      <div className="w-16 h-1 bg-black group-hover:w-24 transition-all duration-300" />
                      
                      <p className="text-black/90 font-body leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="relative">
        {/* Top black section */}
        <div className="bg-black py-24 pb-20">
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

            {/* Top three cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.slice(0, 3).map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-law-red p-8 border-l-8 border-black hover:border-l-12 transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="text-5xl text-black group-hover:text-white transition-colors duration-300" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-display text-black group-hover:text-white transition-colors duration-300 uppercase tracking-wider">
                        {area.title}
                      </h3>
                      
                      <div className="w-16 h-1 bg-black group-hover:w-24 transition-all duration-300" />
                      
                      <p className="text-black/90 font-body leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom red section */}
        <div className="bg-law-red py-24 pt-6 -mt-12"> {/* Negative margin to create overlap */}
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Bottom three cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.slice(3).map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                  className="group relative bg-black p-8 border-l-8 border-law-red hover:border-l-12 transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="text-5xl text-law-red group-hover:text-white transition-colors duration-300" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-display text-white group-hover:text-law-red transition-colors duration-300 uppercase tracking-wider">
                        {area.title}
                      </h3>
                      
                      <div className="w-16 h-1 bg-law-red group-hover:w-24 transition-all duration-300" />
                      
                      <p className="text-white/90 font-body leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResultsAndPractice;