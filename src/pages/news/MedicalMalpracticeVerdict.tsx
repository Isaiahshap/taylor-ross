import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaFolder, FaArrowLeft, FaShare, FaBalanceScale, FaGavel, FaHospital } from 'react-icons/fa';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';
import { Link } from 'react-router-dom';

const MedicalMalpracticeVerdict: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const caseHighlights = [
    { icon: FaGavel, value: "$15.5M", label: "Total Verdict" },
    { icon: FaBalanceScale, value: "12", label: "Month Case Duration" },
    { icon: FaHospital, value: "4", label: "Medical Experts" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src="/malpractice.jpg"
              alt="Medical Malpractice Verdict"
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
                    Press Release
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display text-white mb-6">
                  Firm Secures $15.5M Verdict in Landmark Medical Malpractice Case
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/60">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-law-red" />
                    March 15, 2024
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-law-red" />
                    Sarah Martinez
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFolder className="text-law-red" />
                    Medical Malpractice
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
                {caseHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="text-center p-6 bg-law-red/10 rounded-lg"
                  >
                    <highlight.icon className="text-law-red text-3xl mb-4 mx-auto" />
                    <div className="text-2xl font-bold text-white mb-2">{highlight.value}</div>
                    <div className="text-white/60">{highlight.label}</div>
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
                  Taylor & Ross Law Firm has secured a landmark $15.5 million verdict in a medical malpractice case involving a surgical error that resulted in catastrophic brain damage to the patient. This verdict represents one of the largest medical malpractice awards in state history and underscores our firm's commitment to holding healthcare providers accountable for serious medical errors.
                </p>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Case Background</h2>
                
                <p>
                  The case involved a 42-year-old patient who suffered severe brain damage during what should have been a routine surgical procedure. Through extensive investigation and expert testimony, our legal team demonstrated that the surgical team failed to follow standard protocols for monitoring the patient's oxygen levels, resulting in prolonged oxygen deprivation and permanent brain damage.
                </p>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Key Elements of the Case</h2>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Comprehensive review of medical records revealed multiple protocol violations</li>
                  <li>Testimony from four leading medical experts established clear negligence</li>
                  <li>Advanced medical visualization technology used to demonstrate the injury mechanism</li>
                  <li>Detailed life-care planning showed the extensive future care requirements</li>
                </ul>

                <div className="bg-law-red/10 p-6 rounded-lg my-12">
                  <blockquote className="text-xl italic text-white">
                    "This verdict sends a clear message about the importance of maintaining proper medical standards and protocols. While no amount of money can fully compensate for such a devastating injury, this award will ensure our client receives the lifetime of care they require."
                  </blockquote>
                  <div className="text-white/60 mt-4">- Sarah Martinez, Lead Trial Attorney</div>
                </div>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Impact and Implications</h2>

                <p>
                  This verdict not only provides essential financial support for the victim's lifetime care needs but also sets an important precedent for medical malpractice cases in our state. The case has already led to policy changes at several major healthcare facilities regarding surgical monitoring protocols.
                </p>

                <p>
                  The $15.5 million award includes compensation for:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Past and future medical expenses</li>
                  <li>Lifetime care requirements</li>
                  <li>Lost earnings and earning capacity</li>
                  <li>Pain and suffering</li>
                  <li>Loss of quality of life</li>
                </ul>
              </motion.div>
            </article>

            <div className="mt-16">
              <Link
                to="/news"
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

export default MedicalMalpracticeVerdict; 