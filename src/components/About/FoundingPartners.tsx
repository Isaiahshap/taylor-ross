import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUniversity, FaGavel, FaHandshake, FaBalanceScale, FaTrophy } from 'react-icons/fa';

const milestones = [
  {
    year: "1990",
    title: "Law School",
    description: "James Taylor and Michael Ross meet at Harvard Law School, bonding over their shared passion for justice and advocacy."
  },
  {
    year: "1992",
    title: "Public Service",
    description: "Both serve as public defenders in New York City, gaining invaluable trial experience while helping underserved communities."
  },
  {
    year: "1995",
    title: "Private Practice",
    description: "Work together at a prestigious personal injury firm, learning the intricacies of civil litigation."
  },
  {
    year: "1998",
    title: "Firm Founded",
    description: "Taylor & Ross is established with a mission to provide aggressive representation for injury victims."
  }
];

const FoundingPartners: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-24 bg-black" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
            Our <span className="text-law-red">Founding Partners</span>
          </h2>
          <p className="text-white text-xl max-w-3xl mx-auto font-body leading-relaxed">
            A partnership forged through shared values and an unwavering commitment to justice.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* James Taylor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] mb-6">
              <img
                src="/jamestaylor.jpg"
                alt="James Taylor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-display text-white mb-4">James Taylor</h3>
              <div className="text-white font-body leading-relaxed space-y-4">
                <p>
                  A former public defender turned civil rights advocate, James brings over 25 years of 
                  trial experience and an unwavering commitment to justice to every case he handles.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <FaGavel className="text-law-red text-xl mt-1 flex-shrink-0" />
                    <span className="text-white">Lead counsel in over 100 jury trials with a 95% success rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaTrophy className="text-law-red text-xl mt-1 flex-shrink-0" />
                    <span className="text-white">Named "Lawyer of the Year" by Best Lawyers® for Personal Injury Litigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaBalanceScale className="text-law-red text-xl mt-1 flex-shrink-0" />
                    <span className="text-white">Secured the state's largest personal injury verdict of $15.5M in 2022</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Michael Ross */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] mb-6">
              <img
                src="/michaelross.jpg"
                alt="Michael Ross"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-display text-white mb-4">Michael Ross</h3>
              <div className="text-white font-body leading-relaxed space-y-4">
                <p>
                  With a background in medical malpractice litigation and a family history in medicine, 
                  Michael brings unique insights and technical expertise to complex injury cases.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <FaUniversity className="text-law-red text-xl mt-1 flex-shrink-0" />
                    <span className="text-white">Harvard Law Review Editor & Clinical Excellence Award recipient</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaHandshake className="text-law-red text-xl mt-1 flex-shrink-0" />
                    <span className="text-white">Recovered over $200M for medical malpractice victims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaTrophy className="text-law-red text-xl mt-1 flex-shrink-0" />
                    <span className="text-white">Selected to Super Lawyers® for 15 consecutive years</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-law-red/10 p-8 md:p-12 mb-20"
        >
          <h3 className="text-3xl font-display text-white mb-6">Our Story</h3>
          <p className="text-white font-body leading-relaxed mb-6">
            The story of Taylor & Ross begins in the halls of Harvard Law School, where James 
            Taylor and Michael Ross first met during their first year. Despite their different 
            backgrounds - James from a working-class family in Brooklyn, Michael from a long 
            line of physicians in Boston - they shared a common vision: using the law to help 
            those who needed it most.
          </p>
          <p className="text-white font-body leading-relaxed">
            After graduating with honors, both chose to serve as public defenders in New York 
            City, gaining invaluable trial experience while helping underserved communities. 
            Their shared experiences in the trenches of criminal defense shaped their approach 
            to advocacy and strengthened their commitment to justice.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-black p-8 border-l-4 border-law-red"
            >
              <span className="text-3xl font-display text-law-red mb-2 block">
                {milestone.year}
              </span>
              <h4 className="text-xl font-display text-white mb-3">
                {milestone.title}
              </h4>
              <p className="text-white font-body">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingPartners; 