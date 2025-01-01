import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaFolder, FaArrowLeft } from 'react-icons/fa';
import CaseEvaluation from '../components/CaseEvaluation/CaseEvaluation';

const TruckAccidentsBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img
              src="/truckcrash.jpg"
              alt="Truck Accident Settlements"
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
                    Truck Accidents
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display text-white mb-6">
                  Recent Changes in Truck Accident Settlements: 2024 Update
                </h1>
                <div className="flex items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-law-red" />
                    March 1, 2024
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-law-red" />
                    Michael Taylor
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFolder className="text-law-red" />
                    6 min read
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <article className="prose prose-lg prose-invert max-w-none">
              <div className="text-white text-lg leading-relaxed space-y-6">
                <p>
                  The landscape of truck accident litigation continues to evolve, with new federal regulations and technological advances impacting how these cases are handled and settled. As we move through 2024, several key developments are reshaping the way attorneys approach these complex cases.
                </p>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Impact of New Safety Technologies</h2>
                
                <p>
                  Modern commercial trucks are increasingly equipped with sophisticated safety systems that can both prevent accidents and provide crucial evidence when incidents occur. Understanding these technologies is essential for effective case building:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Advanced driver assistance systems (ADAS) are now standard on many new trucks, providing valuable data about driver behavior and vehicle operation.</li>
                  <li>Electronic logging devices (ELD) offer precise records of driver hours and rest periods, making it easier to identify violations of federal regulations.</li>
                  <li>Collision avoidance technology, including automatic emergency braking and lane departure warnings, creates detailed logs of safety system activations.</li>
                  <li>Real-time driver monitoring systems can provide evidence of distraction or fatigue leading up to an accident.</li>
                </ul>

                <div className="bg-law-red/10 p-6 rounded-lg my-12">
                  <div className="text-4xl font-bold text-law-red mb-2">+35%</div>
                  <div className="text-white">Average Settlement Increase with Comprehensive Digital Evidence</div>
                </div>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Recent Legal Precedents</h2>

                <p>
                  Several significant court decisions in 2023 have set new precedents for truck accident cases:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Expanded liability for trucking companies in cases involving contractor drivers</li>
                  <li>Higher standards for fleet maintenance documentation</li>
                  <li>Stricter interpretation of hours-of-service violations</li>
                  <li>Enhanced requirements for driver training programs</li>
                </ul>

                <h2 className="text-2xl font-display text-white mt-12 mb-6">Settlement Trends in 2024</h2>

                <p>
                  The combination of advanced technology and evolving legal standards has led to significant changes in settlement negotiations:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li>Insurance companies are more likely to settle early when faced with comprehensive digital evidence</li>
                  <li>Higher settlement amounts reflect the increased availability of data supporting liability claims</li>
                  <li>Multi-party settlements are becoming more common as technology reveals shared responsibility</li>
                </ul>

                <div className="bg-law-red/10 p-6 rounded-lg my-12">
                  <div className="text-4xl font-bold text-law-red mb-2">97%</div>
                  <div className="text-white">Success Rate in Cases with Digital Evidence</div>
                </div>
              </div>
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

export default TruckAccidentsBlog; 