import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaFolder, FaArrowLeft, FaShare } from 'react-icons/fa';
import CaseEvaluation from '../components/CaseEvaluation/CaseEvaluation';

const MedicalMalpracticeBlog: React.FC = () => {
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
              src="/blog/medical-malpractice-blog.jpg"
              alt="Medical Malpractice Claims"
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
                    Medical Malpractice
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display text-white mb-6">
                  Understanding Medical Malpractice Claims: What Patients Need to Know
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-law-red" />
                    2024-03-15
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-law-red" />
                    Sarah Martinez
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFolder className="text-law-red" />
                    8 min read
                  </div>
                  <button 
                    className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                    onClick={() => navigator.share({
                      title: 'Understanding Medical Malpractice Claims',
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
                Medical malpractice cases are among the most complex areas of personal injury law, requiring both legal expertise and deep medical knowledge. At Taylor & Ross, we've successfully represented hundreds of patients who have suffered due to medical negligence.
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl font-display text-white mb-6"
              >
                Key Elements of a Medical Malpractice Claim
              </motion.h2>

              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="list-disc pl-6 mb-8"
              >
                <li className="text-white/80 mb-2">Establishing doctor-patient relationship</li>
                <li className="text-white/80 mb-2">Proving breach of standard of care</li>
                <li className="text-white/80 mb-2">Demonstrating causation between negligence and injury</li>
                <li className="text-white/80 mb-2">Documenting specific damages</li>
              </motion.ul>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/80 mb-8"
              >
                Recent changes in medical malpractice law have made it more crucial than ever to work with experienced attorneys who understand both the legal and medical aspects of these cases.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-law-red/10 p-8 mb-8 border-l-4 border-law-red"
              >
                <div className="text-4xl font-display text-law-red mb-2">95%</div>
                <div className="text-white/60">Success Rate in Medical Malpractice Cases</div>
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

export default MedicalMalpracticeBlog; 