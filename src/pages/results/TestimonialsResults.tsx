import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';

const TestimonialsResults: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "5-Star Reviews", value: "500+" },
    { label: "Client Satisfaction", value: "4.9/5" },
    { label: "Client Referrals", value: "65%" }
  ];

  const featuredTestimonials = [
    {
      client: "John D.",
      case: "Medical Malpractice - $15.5M Settlement",
      quote: "After my surgical error case, I was lost and scared. The team not only secured a life-changing settlement but supported me through every step of my recovery.",
      rating: 5
    },
    {
      client: "Sarah M.",
      case: "Auto Accident - $8.2M Verdict",
      quote: "They fought tirelessly for my rights after my devastating car accident. Their expertise and dedication made all the difference in securing justice.",
      rating: 5
    },
    {
      client: "Robert K.",
      case: "Workplace Injury - $9.8M Settlement",
      quote: "When I was injured on the construction site, they immediately took charge. Their knowledge of workplace injury law was impressive and got me the compensation I deserved.",
      rating: 5
    }
  ];

  const clientStats = [
    { label: "Cases Won", value: "5,000+" },
    { label: "Total Recovered", value: "$500M+" },
    { label: "Avg. Settlement Time", value: "8.5 Months" },
    { label: "Client Retention", value: "98%" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <ResultsHero
          title="Client"
          subtitle="Testimonials"
          description="Read what our satisfied clients have to say about their experience working with our dedicated legal team."
          stats={heroStats}
          inView={inView}
        />

        {/* Featured Testimonials */}
        <section className="relative py-24 bg-gradient-to-r from-[#E31837] via-[#8B0000] to-black" ref={ref}>
          {/* Background Pattern & Gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/pattern.png')] mix-blend-overlay opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
            
            {/* Full-width black edge gradients */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Client <span className="text-black">Stories</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.client}
                  className="bg-black p-8 group border-l-4 border-law-red relative overflow-hidden h-full"
                >
                  {/* Background Gradient Animation - Subtle sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-law-red/0 via-law-red/2 to-law-red/0 group-hover:translate-x-full duration-2000 transition-transform ease-in-out" />
                  
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Top Section */}
                    <div className="flex justify-between items-start h-[40px]">
                      {/* Quote Icon */}
                      <div className="text-law-red">
                        <FaQuoteLeft className="text-4xl" />
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-law-red" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Section */}
                    <div className="h-[180px] my-6">
                      <p className="text-white/80 text-lg italic leading-relaxed line-clamp-5">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="h-[100px]">
                      <div className="mb-6">
                        <h3 className="text-xl font-display text-white group-hover:text-law-red transition-colors duration-700 line-clamp-1">
                          {testimonial.client}
                        </h3>
                        <p className="text-law-red font-display text-sm mt-2 line-clamp-1">
                          {testimonial.case}
                        </p>
                      </div>

                      {/* Animated underline */}
                      <div className="h-0.5 bg-law-red/30 group-hover:bg-law-red/40 transition-all duration-700">
                        <div className="h-full w-0 group-hover:w-full bg-law-red transition-all duration-1000 ease-out" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Success Stats */}
        <section className="relative py-24 bg-black">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Client Success <span className="text-law-red">Metrics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clientStats.map((stat, index) => (
                <StatsCard
                  key={stat.label}
                  {...stat}
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

export default TestimonialsResults; 