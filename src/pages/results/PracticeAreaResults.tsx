import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCar, FaUserInjured, FaHospital, FaHardHat, FaBalanceScale, FaHeartbeat } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import ResultsHero from '../../components/Results/ResultsHero';
import VictoryCard from '../../components/Results/VictoryCard';
import PracticeAreaStats from '../../components/Results/PracticeAreaStats';
import StatsCard from '../../components/Results/StatsCard';
import CaseEvaluation from '../../components/CaseEvaluation/CaseEvaluation';
import ResultsContent from '../../components/Results/ResultsContent';

const PracticeAreaResults: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const heroStats = [
    { label: "Practice Areas", value: "6+" },
    { label: "Total Recovered", value: "$500M+" },
    { label: "Success Rate", value: "98%" }
  ];

  const practiceAreas = [
    {
      icon: FaCar,
      title: "Auto Accidents",
      description: "Aggressive representation for victims of car, truck, and motorcycle accidents.",
      stats: { total: "$100M+", cases: "2,500+", avgSettlement: "$850K" }
    },
    {
      icon: FaHospital,
      title: "Medical Malpractice",
      description: "Holding negligent healthcare providers accountable for their mistakes.",
      stats: { total: "$150M+", cases: "500+", avgSettlement: "$2.1M" }
    },
    {
      icon: FaHardHat,
      title: "Workplace Injuries",
      description: "Protecting workers' rights and securing compensation for on-the-job injuries.",
      stats: { total: "$75M+", cases: "1,000+", avgSettlement: "$950K" }
    },
    {
      icon: FaUserInjured,
      title: "Slip & Fall",
      description: "Fighting for maximum compensation in premises liability cases.",
      stats: { total: "$50M+", cases: "750+", avgSettlement: "$725K" }
    },
    {
      icon: FaBalanceScale,
      title: "Wrongful Death",
      description: "Seeking justice and compensation for families who lost loved ones.",
      stats: { total: "$120M+", cases: "450+", avgSettlement: "$1.8M" }
    },
    {
      icon: FaHeartbeat,
      title: "Catastrophic Injuries",
      description: "Dedicated advocacy for life-changing injury victims and their families.",
      stats: { total: "$85M+", cases: "300+", avgSettlement: "$1.5M" }
    }
  ];

  const yearlyGrowth = [
    { label: "2023 Growth", value: "+25%" },
    { label: "New Cases", value: "850+" },
    { label: "Referral Rate", value: "92%" },
    { label: "Client Satisfaction", value: "4.9/5" }
  ];

  const practiceAreaContent = [
    "Taylor & Ross Law Firm has established itself as a leader across multiple practice areas, with specialized expertise that has resulted in record-breaking settlements and verdicts. Our focused approach to each practice area allows us to maximize results for our clients through deep understanding of specific legal challenges and requirements.",

    "In Medical Malpractice, our team has secured over $150 million in recoveries, including our landmark $15.5 million settlement for a surgical error victim. Our success in these complex cases stems from our close relationships with medical experts and deep understanding of healthcare standards.",

    "Our Auto Accident practice has recovered more than $100 million for over 2,500 clients. By combining advanced accident reconstruction techniques with aggressive negotiation strategies, we consistently secure settlements well above industry averages, including our recent $8.2 million verdict in a multi-vehicle collision case.",

    "Workplace Injury cases represent a significant portion of our practice, with over $75 million recovered for construction site accidents alone. Our expertise in navigating both workers' compensation and third-party liability claims has resulted in numerous multi-million dollar recoveries.",

    "In Product Liability cases, we've established ourselves as formidable opponents to major manufacturers, securing over $85 million in total recoveries. Our $11.3 million verdict against a medical device manufacturer demonstrates our ability to handle complex technical cases.",

    "Our Wrongful Death practice has secured over $120 million for grieving families, with our attorneys providing both aggressive representation and compassionate support during these difficult cases. Our success rate of 98% across all practice areas reflects our commitment to excellence in every case we handle."
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <ResultsHero
          title="Practice Area"
          subtitle="Results"
          description="Explore our track record of success across various practice areas, showcasing our expertise and dedication to maximizing client compensation."
          stats={heroStats}
          inView={inView}
        />

        <ResultsContent
          title="Practice Areas"
          content={practiceAreaContent}
          inView={true}
        />

        {/* Practice Areas Grid */}
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
              Practice Area <span className="text-black">Expertise</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <VictoryCard
                  key={area.title}
                  amount={area.stats.total}
                  type={area.title}
                  desc={area.description}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Practice Area Stats */}
        <section className="relative py-24 bg-black">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Practice Area <span className="text-law-red">Statistics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practiceAreas.map((area, index) => (
                <PracticeAreaStats
                  key={area.title}
                  area={area.title}
                  total={area.stats.total}
                  cases={area.stats.cases}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Growth Stats */}
        <section className="relative py-24 bg-black">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <h2 className="text-4xl font-display text-white uppercase mb-12">
              Practice Area <span className="text-law-red">Growth</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {yearlyGrowth.map((stat, index) => (
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

export default PracticeAreaResults; 