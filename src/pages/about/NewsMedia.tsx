import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import AboutHero from '../../components/About/AboutHero';
import NewsCard from '../../components/About/NewsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const newsItems = [
  {
    title: "Firm Secures $15.5M Verdict in Landmark Medical Malpractice Case",
    date: "March 15, 2024",
    category: "Press Release",
    excerpt: "Our legal team successfully represented a family affected by a severe medical error, securing one of the largest medical malpractice verdicts in state history.",
    image: "/malpractice.jpg",
    link: "/news/medical-malpractice-verdict"
  },
  {
    title: "Partner Sarah Martinez Named to Super Lawyers Top 100",
    date: "February 28, 2024",
    category: "Firm News",
    excerpt: "Senior Partner Sarah Martinez has been recognized among the state's top 100 attorneys for her exceptional work in personal injury law.",
    image: "/sarah.jpg",
    link: "/news/martinez-super-lawyers"
  },
  {
    title: "Firm Launches New Pro Bono Initiative for Veterans",
    date: "February 15, 2024",
    category: "Community",
    excerpt: "Our firm is proud to announce a new program providing free legal services to veterans injured during their service.",
    image: "/veterans.jpg",
    link: "/news/veterans-program"
  }
];



const NewsMedia: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Press Mentions", value: "500+" },
    { label: "Media Features", value: "100+" },
    { label: "Industry Awards", value: "50+" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <AboutHero
          title="News &"
          subtitle="Media"
          description="Stay updated with our latest news, press releases, and media coverage as we continue to fight for justice and make headlines."
          stats={heroStats}
        />

        {/* Latest News Section */}
        <section className="relative py-24 bg-black" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
                Latest <span className="text-law-red">News</span>
              </h2>
              <p className="text-white text-xl max-w-3xl mx-auto font-body">
                Recent updates and announcements from our firm.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <NewsCard
                  key={news.title}
                  {...news}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Notable Case Results Section */}
        <section className="relative py-24 bg-law-red">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-display uppercase text-black mb-6">
                Notable <span className="text-white">Case Results</span>
              </h2>
              <p className="text-black text-xl max-w-3xl mx-auto font-body">
                Recent victories and settlements secured for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black/10 p-8 rounded-lg"
              >
                <div className="text-4xl font-display text-white mb-2">$15.5M</div>
                <div className="text-black font-bold mb-2">Medical Malpractice Verdict</div>
                <p className="text-black/80">Record-setting verdict for a family affected by a severe surgical error.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-black/10 p-8 rounded-lg"
              >
                <div className="text-4xl font-display text-white mb-2">$8.2M</div>
                <div className="text-black font-bold mb-2">Workplace Injury Settlement</div>
                <p className="text-black/80">Negotiated settlement for construction worker severely injured on the job.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-black/10 p-8 rounded-lg"
              >
                <div className="text-4xl font-display text-white mb-2">$5.7M</div>
                <div className="text-black font-bold mb-2">Auto Accident Recovery</div>
                <p className="text-black/80">Settlement for family involved in catastrophic trucking accident.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default NewsMedia; 