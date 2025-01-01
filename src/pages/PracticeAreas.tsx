import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const practiceAreas = [
  {
    title: "Car Accidents",
    description: "Expert representation for victims of auto accidents, including multi-vehicle collisions, drunk driving incidents, and rideshare accidents.",
    image: "/carcrash.jpg",
    link: "/practice-areas/car-accidents",
    stats: ["$15.5M Highest Settlement", "98% Success Rate", "2,500+ Cases Won"]
  },
  {
    title: "Truck Accidents",
    description: "Specialized handling of commercial truck accidents, dealing with complex regulations and multiple liable parties.",
    image: "/truckcrash.jpg",
    link: "/practice-areas/truck-accidents",
    stats: ["$12.8M Highest Settlement", "25+ Years Experience", "Federal Regulation Experts"]
  },
  {
    title: "Medical Malpractice",
    description: "Fighting for victims of medical negligence, including surgical errors, misdiagnosis, and medication mistakes.",
    image: "/malpractice.jpg",
    link: "/practice-areas/medical-malpractice",
    stats: ["$18.2M Highest Settlement", "300+ Healthcare Cases", "Expert Medical Network"]
  },
  {
    title: "Workplace Injuries",
    description: "Protecting workers' rights in construction accidents, industrial injuries, and occupational illness cases.",
    image: "/injury.jpg",
    link: "/practice-areas/workplace-injuries",
    stats: ["$9.5M Highest Settlement", "1,000+ Workers Helped", "OSHA Compliance Experts"]
  },
  {
    title: "Product Liability",
    description: "Taking on manufacturers of defective products that cause injury or harm to consumers.",
    image: "/productliability.jpg",
    link: "/practice-areas/product-liability",
    stats: ["$11.3M Highest Settlement", "National Cases Handled", "Industry-Leading Experts"]
  },
  {
    title: "Wrongful Death",
    description: "Compassionate representation for families who have lost loved ones due to negligence or misconduct.",
    image: "/wrongfuldeath.jpg",
    link: "/practice-areas/wrongful-death",
    stats: ["$21.5M Highest Settlement", "100+ Families Helped", "Dedicated Support Team"]
  },
  {
    title: "Motorcycle Accidents",
    description: "Specialized advocacy for motorcycle riders, understanding their unique challenges and rights.",
    image: "/motorcyclecrash.jpg",
    link: "/practice-areas/motorcycle-accidents",
    stats: ["$8.7M Highest Settlement", "500+ Riders Helped", "Biker Rights Advocates"]
  },
  {
    title: "Brain & Spinal Injuries",
    description: "Expert handling of catastrophic injuries requiring long-term care and substantial compensation.",
    image: "/brain.jpg",
    link: "/practice-areas/catastrophic-injuries",
    stats: ["$25.1M Highest Settlement", "Life-Care Planning", "Medical Expert Network"]
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
                Decades of experience fighting for victims' rights across all areas of personal injury law.
                Explore our practice areas to learn how we can help you.
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
                  className="group relative overflow-hidden bg-black border border-white/10"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    <h3 className="text-2xl font-display text-white mb-4 group-hover:text-law-red transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-white/70 mb-6">
                      {area.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {area.stats.map((stat, i) => (
                        <div key={i} className="text-sm text-white/60 flex items-center">
                          <span className="w-1.5 h-1.5 bg-law-red rounded-full mr-2" />
                          {stat}
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      to={area.link}
                      className="inline-flex items-center gap-2 text-law-red hover:text-white transition-colors duration-300"
                    >
                      Learn More <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
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