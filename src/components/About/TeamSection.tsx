import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Michael Anderson",
    role: "FOUNDING PARTNER",
    image: "/team/michael-anderson.jpg",
    linkedin: "https://linkedin.com",
    description: "30+ years of experience in personal injury law. Record-setting verdicts in medical malpractice."
  },
  {
    name: "Sarah Martinez",
    role: "SENIOR PARTNER",
    image: "/team/sarah-martinez.jpg",
    linkedin: "https://linkedin.com",
    description: "Specialized in catastrophic injury cases. Named Top 100 Trial Lawyers for 5 consecutive years."
  },
  {
    name: "David Thompson",
    role: "MANAGING PARTNER",
    image: "/team/david-thompson.jpg",
    linkedin: "https://linkedin.com",
    description: "Expert in complex litigation. Former prosecutor with extensive trial experience."
  }
];

const TeamSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-black" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
            Our <span className="text-law-red">Leadership</span>
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
            Meet the experienced attorneys who fight relentlessly for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-display text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-law-red font-display text-sm tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="text-white/80 font-body text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.description}
                  </p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/60 hover:text-law-red transition-colors duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 