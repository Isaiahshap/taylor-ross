import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaFolder, FaArrowLeft, FaTrophy, FaUsers, FaBalanceScale } from 'react-icons/fa';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';
import { Link } from 'react-router-dom';

const MartinezSuperLawyers: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const achievementStats = [
    { icon: FaTrophy, value: "Top 100", label: "Super Lawyers" },
    { icon: FaUsers, value: "500+", label: "Families Helped" },
    { icon: FaBalanceScale, value: "$150M+", label: "Total Recoveries" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src="/sarah.jpg"
              alt="Sarah Martinez Super Lawyers"
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
                    Firm News
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display text-white mb-6">
                  Partner Sarah Martinez Named to Super Lawyers Top 100
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-law-red" />
                    February 28, 2024
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-law-red" />
                    Taylor & Ross
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFolder className="text-law-red" />
                    Recognition
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
                {achievementStats.map((stat, index) => (
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
                  Taylor & Ross Law Firm is proud to announce that Senior Partner Sarah Martinez has been named to the prestigious Super Lawyers Top 100 list for 2024. This recognition highlights her exceptional work in personal injury law and her dedication to securing justice for her clients.
                </p>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Notable Achievements</h2>
                
                <p>
                  Sarah Martinez has been instrumental in securing several landmark victories for the firm, including the recent $15.5 million medical malpractice verdict that set a state record. Her expertise in complex medical malpractice cases and dedication to client advocacy has earned her recognition as one of the state's premier personal injury attorneys.
                </p>

                <div className="bg-law-red/10 p-6 rounded-lg my-12">
                  <blockquote className="text-xl italic text-white">
                    "This recognition reflects our firm's commitment to excellence and our dedication to fighting for our clients' rights. It's an honor to be acknowledged by my peers, but the real reward is the justice we secure for our clients."
                  </blockquote>
                  <div className="text-white/60 mt-4">- Sarah Martinez, Senior Partner</div>
                </div>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Career Highlights</h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Lead attorney in over 300 successful medical malpractice cases</li>
                  <li>Secured more than $150 million in total recoveries for clients</li>
                  <li>Achieved a 98% success rate in medical negligence cases</li>
                  <li>Recognized by multiple legal organizations for excellence in advocacy</li>
                </ul>

                <p>
                  The Super Lawyers selection process involves peer nominations, independent research, and peer evaluations. Only the top 5% of attorneys in each state are selected for Super Lawyers recognition, with the Top 100 representing the very best in their respective fields.
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

export default MartinezSuperLawyers; 