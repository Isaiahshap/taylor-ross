import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaFolder, FaArrowLeft, FaShare } from 'react-icons/fa';
import CaseEvaluation from '../components/CaseEvaluation/CaseEvaluation';

const WorkplaceSafetyBlog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src="/blog/workplace-safety-blog.jpg"
              alt="Workplace Safety Post-COVID"
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
                    Workplace Injuries
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display text-white mb-6">
                  Workplace Safety in the Post-COVID Era: New Legal Considerations
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-law-red" />
                    2024-02-15
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-law-red" />
                    Jennifer Ross
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFolder className="text-law-red" />
                    7 min read
                  </div>
                  <button 
                    className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                    onClick={() => navigator.share({
                      title: 'Workplace Safety in the Post-COVID Era',
                      url: window.location.href
                    })}
                  >
                    <FaShare className="text-law-red" />
                    Share
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-6 max-w-4xl">
            <article className="prose prose-lg prose-invert">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-white/80 mb-8"
              >
                The COVID-19 pandemic has fundamentally changed how we approach workplace safety, introducing new legal obligations and considerations for both employers and employees.
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl font-display text-white mb-6"
              >
                Emerging Workplace Safety Standards
              </motion.h2>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="list-disc pl-6 mb-8"
              >
                <li className="text-white/80 mb-2">Updated OSHA guidelines</li>
                <li className="text-white/80 mb-2">Remote work considerations</li>
                <li className="text-white/80 mb-2">Mental health accommodations</li>
                <li className="text-white/80 mb-2">Hybrid workplace safety protocols</li>
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-law-red/10 p-8 mb-8 border-l-4 border-law-red"
              >
                <div className="text-4xl font-display text-law-red mb-2">+45%</div>
                <div className="text-white/60">Workplace Safety Claims</div>
              </motion.div>
            </article>

            <div className="mt-16">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-law-red hover:text-white transition-colors duration-300"
              >
                <FaArrowLeft />
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <CaseEvaluation />
    </div>
  );
};

export default WorkplaceSafetyBlog; 