import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import AboutHero from '../../components/About/AboutHero';
import NewsCard from '../../components/About/NewsCard';
import MediaMention from '../../components/About/MediaMention';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const newsItems = [
  {
    title: "Firm Secures $15.5M Verdict in Landmark Medical Malpractice Case",
    date: "March 15, 2024",
    category: "Press Release",
    excerpt: "Our legal team successfully represented a family affected by a severe medical error, securing one of the largest medical malpractice verdicts in state history.",
    image: "/news/medical-verdict.jpg",
    link: "/news/medical-malpractice-verdict"
  },
  {
    title: "Partner Sarah Martinez Named to Super Lawyers Top 100",
    date: "February 28, 2024",
    category: "Firm News",
    excerpt: "Senior Partner Sarah Martinez has been recognized among the state's top 100 attorneys for her exceptional work in personal injury law.",
    image: "/news/sarah-martinez.jpg",
    link: "/news/martinez-super-lawyers"
  },
  {
    title: "Firm Launches New Pro Bono Initiative for Veterans",
    date: "February 15, 2024",
    category: "Community",
    excerpt: "Our firm is proud to announce a new program providing free legal services to veterans injured during their service.",
    image: "/news/veterans-initiative.jpg",
    link: "/news/veterans-program"
  }
];

const mediaMentions = [
  {
    outlet: "The New York Times",
    logo: "/media/nyt-logo.png",
    title: "Local Law Firm Sets New Standard for Medical Malpractice Settlements",
    date: "March 10, 2024",
    link: "https://nytimes.com"
  },
  {
    outlet: "Law360",
    logo: "/media/law360-logo.png",
    title: "Rising Stars: Top Personal Injury Attorneys Under 40",
    date: "February 25, 2024",
    link: "https://law360.com"
  },
  {
    outlet: "ABC News",
    logo: "/media/abc-logo.png",
    title: "Law Firm's Pro Bono Program Makes Impact on Veteran Community",
    date: "February 12, 2024",
    link: "https://abcnews.com"
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
          inView={inView}
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
              <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
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

        {/* Media Coverage Section */}
        <section className="relative py-24 bg-law-red">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-display uppercase text-black mb-6">
                Media <span className="text-white">Coverage</span>
              </h2>
              <p className="text-black/80 text-xl max-w-3xl mx-auto font-body">
                Recent features and mentions in leading media outlets.
              </p>
            </motion.div>

            <div className="space-y-6">
              {mediaMentions.map((mention, index) => (
                <MediaMention
                  key={mention.title}
                  {...mention}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        <CaseEvaluation />
      </main>
    </div>
  );
};

export default NewsMedia; 