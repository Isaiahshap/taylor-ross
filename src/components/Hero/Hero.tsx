import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import StatCard from './StatCard';
import { stats } from './data';

const fadeInUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AnimatedStat = ({ number, label, delay }: StatCardProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay, duration: 0.6 }
        }
      }}
      className="bg-law-navy/40 backdrop-blur-md p-6 rounded-sm border border-law-gold/20 hover:border-law-gold/40 transition-all duration-300"
    >
      <CountUp
        start={0}
        end={parseInt(number)}
        duration={2.5}
        separator=","
        suffix={number.includes('+') ? '+' : ''}
        className="text-3xl font-bold text-law-gold mb-2"
      />
      <div className="text-white/80 uppercase tracking-wider text-sm">{label}</div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      {/* Layered Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-law-navy/98 via-law-navy/95 to-law-navy/90 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_65%)] z-20" />
        <img
          src="/hero.png"
          alt="Law office background"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center justify-center w-full max-w-7xl">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="text-center mb-8"
        >
          <motion.span 
            variants={fadeInUpVariants}
            className="text-law-gold uppercase tracking-[0.4em] text-sm font-medium mb-8 block"
          >
            Established 1995 • New York City
          </motion.span>
          
          <h1 className="text-7xl md:text-9xl font-bold font-display leading-tight mb-8">
            <motion.span
              variants={fadeInUpVariants}
              className="block text-law-gold mb-4 tracking-tight"
            >
              Relentless
            </motion.span>
            <motion.span
              variants={fadeInUpVariants}
              className="block text-white tracking-tight"
            >
              Advocacy.
            </motion.span>
          </h1>
          
          <motion.p
            variants={fadeInUpVariants}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Over <span className="text-law-gold font-semibold">$500+ Million</span> recovered for our clients. 
            When justice matters most, experience makes all the difference.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUpVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <a
            href="/contact"
            className="group relative px-12 py-5 bg-law-navy text-law-gold border-2 border-law-gold overflow-hidden rounded-sm w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-gold-glow"
          >
            <span className="relative z-10 text-lg font-bold uppercase tracking-[0.2em] block text-center transition-colors duration-300 group-hover:text-law-white">
              Free Case Review
            </span>
            <div className="absolute inset-0 w-0 bg-law-gold transition-all duration-500 ease-out group-hover:w-full" />
          </a>
          <a
            href="/results"
            className="group px-12 py-5 bg-law-gold text-law-navy w-full sm:w-auto transform transition-all duration-300 hover:scale-105 hover:shadow-gold-glow hover:bg-law-gold-light"
          >
            <span className="text-lg font-bold uppercase tracking-[0.2em] block text-center">
              View Case Results
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 