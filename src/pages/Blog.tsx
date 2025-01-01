import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import MedicalMalpracticeBlog from './MedicalMalpracticeBlog';
import TruckAccidentsBlog from './TruckAccidentsBlog';
import WorkplaceSafetyBlog from './WorkplaceSafetyBlog';

// Mock WordPress API response
const blogPosts = [
  {
    id: 1,
    slug: 'understanding-medical-malpractice-claims',
    title: 'Understanding Medical Malpractice Claims: What Patients Need to Know',
    excerpt: 'Medical malpractice cases are among the most complex areas of personal injury law. Learn about the key elements required to prove negligence and how to protect your rights.',
    featuredImage: '/malpractice.jpg',
    date: '2024-03-15',
    author: 'Sarah Martinez',
    category: 'Medical Malpractice',
    readTime: '8 min read'
  },
  {
    id: 2,
    slug: 'truck-accident-settlements',
    title: 'Recent Changes in Truck Accident Settlements: 2024 Update',
    excerpt: 'New federal regulations and evolving case law are impacting how truck accident cases are settled. Discover what this means for accident victims seeking compensation.',
    featuredImage: '/truckcrash.jpg',
    date: '2024-03-01',
    author: 'Michael Taylor',
    category: 'Truck Accidents',
    readTime: '6 min read'
  },
  {
    id: 3,
    slug: 'workplace-safety-post-covid',
    title: 'Workplace Safety in the Post-COVID Era: New Legal Considerations',
    excerpt: 'As workplaces continue to evolve, new safety challenges and legal obligations emerge. Learn about recent developments in workplace injury law and prevention.',
    featuredImage: '/covid.jpg',
    date: '2024-02-15',
    author: 'Jennifer Ross',
    category: 'Workplace Injuries',
    readTime: '7 min read'
  }
];

const BlogList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-7xl font-display text-white uppercase mb-6">
                Latest <span className="text-law-red">Insights</span>
              </h1>
              <p className="text-white/70 text-xl max-w-3xl mx-auto">
                Stay informed with our latest legal perspectives and case updates
              </p>
            </motion.div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
            >
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  className="group relative bg-white/5 hover:bg-white/10 transition-all duration-500 flex flex-col"
                >
                  <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                      <motion.img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-4 text-sm text-white/60 flex-wrap">
                        <div className="flex items-center gap-2">
                          <FaCalendar className="text-law-red" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUser className="text-law-red" />
                          {post.author}
                        </div>
                      </div>
                      
                      <h2 className="text-xl md:text-2xl font-display text-white mb-4 group-hover:text-law-red transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-white/70 mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="inline-block bg-law-red/20 text-law-red px-3 py-1 text-sm">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-2 text-law-red group-hover:translate-x-2 transition-transform duration-300">
                          Read More <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <Routes>
      <Route index element={<BlogList />} />
      <Route path="understanding-medical-malpractice-claims" element={<MedicalMalpracticeBlog />} />
      <Route path="truck-accident-settlements" element={<TruckAccidentsBlog />} />
      <Route path="workplace-safety-post-covid" element={<WorkplaceSafetyBlog />} />
      <Route path="*" element={<Navigate to="/blog" replace />} />
    </Routes>
  );
};

export default Blog; 