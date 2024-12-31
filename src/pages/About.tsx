import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import AboutHero from '../components/About/AboutHero';
import CaseEvaluation from '../components/CaseEvaluation/CaseEvaluation';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Years Experience", value: "25+" },
    { label: "Team Members", value: "50+" },
    { label: "Client Rating", value: "4.9/5" }
  ];

  const sections = [
    {
      title: "Our Story",
      description: "Learn about our firm's 25-year journey fighting for justice and our commitment to excellence.",
      image: "/about/our-story.jpg",
      link: "/about/our-story"
    },
    {
      title: "Our Attorneys",
      description: "Meet our team of award-winning trial lawyers dedicated to securing life-changing results.",
      image: "/about/attorneys.jpg",
      link: "/about/attorneys"
    },
    {
      title: "Community Impact",
      description: "Discover how we give back and make a difference in our local community.",
      image: "/about/community.jpg",
      link: "/about/community"
    },
    {
      title: "News & Media",
      description: "Stay updated with our latest news, press releases, and media coverage.",
      image: "/about/news.jpg",
      link: "/about/news"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <AboutHero
          title="About"
          subtitle="Our Firm"
          description="For over 25 years, we've been fighting relentlessly for injury victims across the state, building a reputation for excellence and dedication to our clients."
          stats={heroStats}
          inView={inView}
        />
        
        <section className="relative py-24 bg-black" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link 
                    to={section.link}
                    className="group block relative overflow-hidden bg-law-dark hover:bg-law-red/10 transition-colors duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-display text-white mb-4">
                        {section.title}
                      </h3>
                      <p className="text-white/70 mb-6">
                        {section.description}
                      </p>
                      <span className="text-law-red group-hover:text-white transition-colors duration-300">
                        Learn More →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default About;
