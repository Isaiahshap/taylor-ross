import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaFolder, FaArrowLeft, FaHandHoldingHeart, FaUsers, FaHandsHelping } from 'react-icons/fa';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';
import { Link } from 'react-router-dom';

const VeteransProgram: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const programStats = [
    { icon: FaHandHoldingHeart, value: "500+", label: "Pro Bono Hours" },
    { icon: FaUsers, value: "100+", label: "Veterans Helped" },
    { icon: FaHandsHelping, value: "25+", label: "Partner Organizations" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src="/veterans.jpg"
              alt="Veterans Pro Bono Initiative"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="mb-6">
                  <span className="inline-block bg-law-red px-4 py-2 text-white font-display uppercase tracking-wider">
                    Community
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display text-white mb-6">
                  Firm Launches New Pro Bono Initiative for Veterans
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-law-red" />
                    February 15, 2024
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-law-red" />
                    Taylor & Ross
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFolder className="text-law-red" />
                    Community Impact
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-6 max-w-4xl">
            <article className="prose prose-lg prose-invert">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {programStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="text-center p-6 bg-law-red/10 rounded-lg"
                  >
                    <stat.icon className="text-law-red text-3xl mb-4 mx-auto" />
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-white/80 space-y-6"
              >
                <p>
                  Taylor & Ross Law Firm is proud to announce the launch of a comprehensive pro bono initiative dedicated to serving veterans who have suffered injuries during their military service. This program represents our commitment to giving back to those who have sacrificed so much for our country.
                </p>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Program Overview</h2>
                
                <p>
                  The Veterans Pro Bono Initiative will provide free legal services to veterans facing personal injury and medical malpractice challenges. Our team of experienced attorneys will dedicate over 500 hours annually to helping veterans navigate complex legal matters and secure the compensation they deserve.
                </p>

                <div className="bg-law-red/10 p-6 rounded-lg my-12">
                  <blockquote className="text-xl italic text-white">
                    "Our veterans have made incredible sacrifices for our country. This initiative is our way of honoring their service by ensuring they have access to top-tier legal representation when they need it most."
                  </blockquote>
                  <div className="text-white/60 mt-4">- James Taylor, Managing Partner</div>
                </div>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Key Program Elements</h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Free legal consultations and case evaluations for veterans</li>
                  <li>Dedicated team of experienced personal injury attorneys</li>
                  <li>Partnerships with 25+ veteran support organizations</li>
                  <li>24/7 support line for veteran clients</li>
                  <li>Specialized expertise in military-related injury cases</li>
                </ul>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Community Impact</h2>

                <p>
                  This initiative builds on our firm's existing commitment to community service, which includes over $500,000 in annual charitable contributions and partnerships with numerous local organizations. Through this program, we aim to help at least 100 veteran families annually while raising awareness about the unique legal challenges facing our veteran community.
                </p>
              </motion.div>
            </article>

            <div className="mt-16">
              <Link
                to="/about/news"
                className="inline-flex items-center gap-2 text-law-red hover:text-white transition-colors duration-300"
              >
                <FaArrowLeft />
                Back to News
              </Link>
            </div>
          </div>
        </section>

        <CaseEvaluation />
      </main>
    </div>
  );
}

export default VeteransProgram; 