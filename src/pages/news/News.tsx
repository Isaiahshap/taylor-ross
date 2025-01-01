import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const newsArticles = [
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
    image: "/sarah.jpg",
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

const News: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img
              src="/news.jpg"
              alt="Latest News"
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
                <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
                  Latest <span className="text-law-red">News</span>
                </h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                  Stay updated with the latest news, victories, and community initiatives from Taylor & Ross Law Firm.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24" ref={ref}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <Link to={article.link} className="block">
                    <div className="relative h-64 mb-6 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-law-red px-4 py-2 text-white text-sm font-display uppercase tracking-wider">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-white/60 text-sm">
                        {article.date}
                      </div>
                      <h3 className="text-2xl font-display text-white group-hover:text-law-red transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-white/80">
                        {article.excerpt}
                      </p>
                      <div className="text-law-red font-display uppercase tracking-wider text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Read More →
                      </div>
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
}

export default News; 