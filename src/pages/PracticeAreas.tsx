import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar';
import { FaCar, FaUserInjured, FaHospital, FaHardHat, FaBalanceScale, FaHeartbeat } from 'react-icons/fa';

const practiceAreas = [
  {
    icon: FaCar,
    title: "AUTO ACCIDENTS",
    description: "Aggressive representation for victims of car, truck, and motorcycle accidents.",
    details: [
      "Car & Truck Accidents",
      "Motorcycle Accidents",
      "Pedestrian Injuries",
      "Rideshare Accidents",
      "Commercial Vehicle Crashes"
    ]
  },
  {
    icon: FaUserInjured,
    title: "PERSONAL INJURY",
    description: "Fighting for maximum compensation in slip and fall and premises liability cases.",
    details: [
      "Slip & Fall Accidents",
      "Premises Liability",
      "Dog Bites",
      "Product Liability",
      "Catastrophic Injuries"
    ]
  },
  {
    icon: FaHospital,
    title: "MEDICAL MALPRACTICE",
    description: "Holding negligent healthcare providers accountable for their mistakes.",
    details: [
      "Surgical Errors",
      "Misdiagnosis",
      "Birth Injuries",
      "Medication Errors",
      "Hospital Negligence"
    ]
  },
  {
    icon: FaHardHat,
    title: "WORKPLACE INJURIES",
    description: "Protecting workers' rights and securing compensation for on-the-job injuries.",
    details: [
      "Construction Accidents",
      "Industrial Accidents",
      "Workers' Compensation",
      "OSHA Violations",
      "Third-Party Claims"
    ]
  },
  {
    icon: FaBalanceScale,
    title: "WRONGFUL DEATH",
    description: "Seeking justice and compensation for families who lost loved ones.",
    details: [
      "Fatal Accidents",
      "Medical Negligence",
      "Workplace Fatalities",
      "Product Defects",
      "Criminal Acts"
    ]
  },
  {
    icon: FaHeartbeat,
    title: "CATASTROPHIC INJURIES",
    description: "Dedicated advocacy for life-changing injury victims and their families.",
    details: [
      "Brain Injuries",
      "Spinal Cord Injuries",
      "Severe Burns",
      "Amputations",
      "Multiple Trauma"
    ]
  }
];

const PracticeAreas: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-black">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-display uppercase text-white mb-6">
                Practice <span className="text-law-red">Areas</span>
              </h1>
              <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
                Our experienced attorneys handle a wide range of personal injury cases, 
                fighting tirelessly to secure the compensation our clients deserve.
              </p>
            </motion.div>

            {/* Practice Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
              {practiceAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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
                      
                      <p className="text-white/80 font-body leading-relaxed mb-6">
                        {area.description}
                      </p>

                      <ul className="space-y-2">
                        {area.details.map((detail, i) => (
                          <li key={i} className="text-white/60 font-body flex items-center">
                            <span className="w-1.5 h-1.5 bg-law-red rounded-full mr-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-law-red/5 blur-3xl group-hover:bg-law-red/10 transition-all duration-700" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black blur-2xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PracticeAreas; 