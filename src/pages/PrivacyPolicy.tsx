import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';

const PrivacyPolicy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative py-24" ref={ref}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <FaShieldAlt className="text-law-red text-5xl mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
                Privacy <span className="text-law-red">Policy</span>
              </h1>
            </motion.div>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-white/5 p-8 mb-12 border-l-4 border-law-red">
                <h2 className="text-2xl text-white mb-4">Demo Site Notice</h2>
                <p className="text-white/80">
                  This privacy policy is part of a demonstration website. No real data collection or processing occurs on this site.
                </p>
              </div>

              <h3 className="text-xl text-white mb-4">Information Collection</h3>
              <p className="text-white/70 mb-8">
                This demo website does not collect, store, or process any personal information. Any forms or contact 
                submissions are non-functional and for demonstration purposes only.
              </p>

              <h3 className="text-xl text-white mb-4">Cookies & Tracking</h3>
              <p className="text-white/70 mb-8">
                This site may use basic cookies for demonstration purposes only. No tracking or analytics 
                are implemented. No user data is collected or stored.
              </p>

              <h3 className="text-xl text-white mb-4">Third-Party Services</h3>
              <p className="text-white/70 mb-8">
                This demo site may reference third-party services but does not actually integrate with them. 
                All features are simulated for portfolio demonstration purposes.
              </p>

              <div className="bg-gradient-to-r from-[#E31837] via-[#8B0000] to-black p-8 mt-12">
                <h3 className="text-2xl text-white mb-4">Questions About This Demo?</h3>
                <p className="text-white/90 mb-6">
                  For questions about this demo website or to discuss creating a similar site for your business, 
                  please visit my portfolio.
                </p>
                
                <a 
                  href="https://yeshaya.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-black/90 px-8 py-4 text-white font-display text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                >
                  Visit Yeshaya.dev
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy; 