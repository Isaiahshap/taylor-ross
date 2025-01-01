import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaFolder, FaArrowLeft, FaShare, FaShieldAlt, FaChartLine, FaClock } from 'react-icons/fa';
import CaseEvaluation from '../components/CaseEvaluation/CaseEvaluation';

const WorkplaceSafetyBlog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const statistics = [
    {
      value: "+45%",
      label: "Increase in Workplace Safety Claims",
      description: "Rise in safety-related claims since the pandemic began"
    },
    {
      value: "92%",
      label: "Success Rate in OSHA Compliance Cases",
      description: "Our track record in workplace safety violation cases"
    },
    {
      value: "1,200+",
      label: "Workplace Cases Handled",
      description: "Experience across various industries and safety issues"
    }
  ];

  const safetyGuidelines = [
    {
      title: "Updated OSHA Requirements",
      content: "New workplace safety protocols have been implemented to address evolving health concerns and modern workplace arrangements."
    },
    {
      title: "Remote Work Policies",
      content: "Companies must now consider safety implications for employees working from home, including ergonomic requirements and mental health support."
    },
    {
      title: "Hybrid Workplace Standards",
      content: "Special considerations for maintaining consistent safety standards across both in-office and remote work environments."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src="/covid.jpg"
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
                <div className="flex items-center justify-center gap-6 text-white/60 flex-wrap">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-law-red" />
                    2024-02-15
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-law-red" />
                    Jennifer Ross
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-law-red" />
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
                className="text-white/80 mb-8 text-xl leading-relaxed"
              >
                The COVID-19 pandemic has fundamentally changed how we approach workplace safety, introducing new legal obligations and considerations for both employers and employees. As businesses adapt to new working models, understanding these evolving requirements is crucial for maintaining compliance and ensuring worker protection.
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

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl font-display text-white mb-6"
              >
                Key Changes in Workplace Safety Standards
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                {safetyGuidelines.map((guideline, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <FaShieldAlt className="text-law-red text-xl" />
                      <h3 className="text-xl font-display text-white">{guideline.title}</h3>
                    </div>
                    <p className="text-white/80">{guideline.content}</p>
                  </div>
                ))}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl font-display text-white my-8"
              >
                Emerging Legal Trends
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                <div className="bg-white/5 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <FaChartLine className="text-law-red text-xl" />
                    <h3 className="text-xl font-display text-white">Compliance Requirements</h3>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li>Enhanced ventilation standards</li>
                    <li>Digital health screening protocols</li>
                    <li>Remote work safety assessments</li>
                    <li>Mental health support requirements</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <FaShieldAlt className="text-law-red text-xl" />
                    <h3 className="text-xl font-display text-white">Legal Protections</h3>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li>Expanded worker rights</li>
                    <li>Whistleblower protections</li>
                    <li>Accommodation requirements</li>
                    <li>Safety violation reporting</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-law-red/10 p-8 rounded-lg border-l-4 border-law-red mt-12"
              >
                <h3 className="text-2xl font-display text-white mb-4">Need Legal Assistance?</h3>
                <p className="text-white/80 mb-6">
                  If you're facing workplace safety concerns or need help understanding your rights under the new regulations, our experienced team is here to help. We've successfully represented numerous clients in workplace safety cases and can help ensure your rights are protected.
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

export default WorkplaceSafetyBlog; 