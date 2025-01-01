import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaFolder, FaArrowLeft, FaShare, FaChartLine, FaGavel, FaClock } from 'react-icons/fa';
import CaseEvaluation from '../components/CaseEvaluation/CaseEvaluation';

const MedicalMalpracticeBlog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const statistics = [
    {
      value: "95%",
      label: "Success Rate in Medical Malpractice Cases",
      description: "Our track record of successful outcomes in medical negligence claims"
    },
    {
      value: "$18.2M",
      label: "Largest Medical Malpractice Settlement",
      description: "Record-breaking settlement achieved for our client in 2023"
    },
    {
      value: "300+",
      label: "Healthcare Cases Handled",
      description: "Extensive experience across various medical specialties"
    }
  ];

  const keyPoints = [
    {
      title: "Understanding the Basics",
      content: "Medical malpractice occurs when a healthcare provider's negligence leads to patient harm. This can include surgical errors, misdiagnosis, medication mistakes, or failure to obtain informed consent."
    },
    {
      title: "Time Limitations",
      content: "Most states have strict statutes of limitations for filing medical malpractice claims, typically ranging from 1-3 years from the date of injury or discovery."
    },
    {
      title: "Expert Testimony",
      content: "Successful medical malpractice cases usually require testimony from medical experts who can establish the standard of care and how it was breached."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src="/malpractice.jpg"
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
                <div className="flex items-center justify-center gap-6 text-white/60 flex-wrap">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-law-red" />
                    2024-03-15
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-law-red" />
                    Sarah Martinez
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-law-red" />
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
                className="text-white/80 mb-8 text-xl leading-relaxed"
              >
                Medical malpractice cases are among the most complex areas of personal injury law, requiring both legal expertise and deep medical knowledge. At Taylor & Ross, we've successfully represented hundreds of patients who have suffered due to medical negligence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
              >
                {statistics.map((stat, index) => (
                  <div key={index} className="bg-law-red/10 p-6 rounded-lg border-l-4 border-law-red">
                    <div className="text-4xl font-display text-law-red mb-2">{stat.value}</div>
                    <div className="text-white font-semibold mb-2">{stat.label}</div>
                    <div className="text-white/60 text-sm">{stat.description}</div>
                  </div>
                ))}
              </motion.div>

              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-display text-white mb-4">
                    {point.title}
                  </h2>
                  <p className="text-white/80">
                    {point.content}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-3xl font-display text-white mb-6">
                  Key Elements of a Medical Malpractice Claim
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <FaGavel className="text-law-red text-xl" />
                      <h3 className="text-xl font-display text-white">Legal Requirements</h3>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>Establishing doctor-patient relationship</li>
                      <li>Proving breach of standard of care</li>
                      <li>Demonstrating causation</li>
                      <li>Documenting damages</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <FaChartLine className="text-law-red text-xl" />
                      <h3 className="text-xl font-display text-white">Evidence Required</h3>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 text-white/80">
                      <li>Medical records and documentation</li>
                      <li>Expert witness testimony</li>
                      <li>Treatment timeline</li>
                      <li>Proof of damages</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-law-red/10 p-8 rounded-lg border-l-4 border-law-red mt-12"
              >
                <h3 className="text-2xl font-display text-white mb-4">Get Expert Legal Support</h3>
                <p className="text-white/80 mb-6">
                  If you believe you've been a victim of medical malpractice, don't wait to seek legal counsel. Our experienced team is here to help you understand your rights and fight for the compensation you deserve.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-law-red text-white px-6 py-3 rounded hover:bg-law-red/90 transition-colors duration-300"
                >
                  Schedule a Free Consultation
                </Link>
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