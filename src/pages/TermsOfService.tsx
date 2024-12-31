import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGavel, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar';

const TermsOfService: React.FC = () => {
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
              <FaGavel className="text-law-red text-5xl mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
                Terms of <span className="text-law-red">Service</span>
              </h1>
            </motion.div>

            <div className="prose prose-lg prose-invert max-w-none">
              <div className="bg-white/5 p-8 mb-12 border-l-4 border-law-red">
                <h2 className="text-2xl text-white mb-4">Demo Website Notice</h2>
                <p className="text-white/80">
                  These terms of service are for a demonstration website only. No actual services are provided 
                  through this site.
                </p>
              </div>

              <h3 className="text-xl text-white mb-4">Website Usage</h3>
              <p className="text-white/70 mb-8">
                This website is a demonstration of web development capabilities. All content, including text, 
                images, and functionality, is for demonstration purposes only. No actual legal services are 
                offered or provided.
              </p>

              <h3 className="text-xl text-white mb-4">Intellectual Property</h3>
              <p className="text-white/70 mb-8">
                This demo website was created by Yeshaya Shapiro as a portfolio piece. All design elements, 
                code, and implementation are showcased as examples of professional web development work.
              </p>

              <h3 className="text-xl text-white mb-4">No Legal Relationship</h3>
              <p className="text-white/70 mb-8">
                Interaction with this demo website does not create any attorney-client relationship or legal 
                obligations. This is a non-functional demonstration site only.
              </p>

              <div className="bg-gradient-to-r from-[#E31837] via-[#8B0000] to-black p-8 mt-12">
                <h3 className="text-2xl text-white mb-4">Create Your Own Professional Website</h3>
                <p className="text-white/90 mb-6">
                  Interested in having a professional website built for your business? Let's discuss how I can 
                  help create a custom solution that meets your needs.
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

export default TermsOfService; 