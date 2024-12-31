import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PracticeAreas from './pages/PracticeAreas';
import Footer from './components/Footer/Footer';
import CarAccidents from './pages/practice-areas/CarAccidents';
import MedicalMalpractice from './pages/practice-areas/MedicalMalpractice';
import TruckAccidents from './pages/practice-areas/TruckAccidents';
import WorkplaceInjuries from './pages/practice-areas/WorkplaceInjuries';
import MotorcycleAccidents from './pages/practice-areas/MotorcycleAccidents';
import CatastrophicInjuries from './pages/practice-areas/CatastrophicInjuries';
import WrongfulDeath from './pages/practice-areas/WrongfulDeath';
import BrainAndSpinalInjuries from './pages/practice-areas/BrainAndSpinalInjuries';
import Results from './pages/Results';
import CaseResults from './pages/results/CaseResults';
import TestimonialsResults from './pages/results/TestimonialsResults';
import SettlementTimeline from './pages/results/SettlementTimeline';
import NotableVictories from './pages/results/NotableVictories';
import PracticeAreaResults from './pages/results/PracticeAreaResults';
import OurStory from './pages/about/OurStory';
import Attorneys from './pages/about/Attorneys';
import CommunityImpact from './pages/about/CommunityImpact';
import NewsMedia from './pages/about/NewsMedia';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/attorneys" element={<Attorneys />} />
        <Route path="/about/community" element={<CommunityImpact />} />
        <Route path="/about/news" element={<NewsMedia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/practice-areas/car-accidents" element={<CarAccidents />} />
        <Route path="/practice-areas/medical-malpractice" element={<MedicalMalpractice />} />
        <Route path="/practice-areas/truck-accidents" element={<TruckAccidents />} />
        <Route path="/practice-areas/workplace-injuries" element={<WorkplaceInjuries />} />
        <Route path="/practice-areas/motorcycle-accidents" element={<MotorcycleAccidents />} />
        <Route path="/practice-areas/catastrophic-injuries" element={<CatastrophicInjuries />} />
        <Route path="/practice-areas/wrongful-death" element={<WrongfulDeath />} />
        <Route path="/practice-areas/brain-and-spinal-injuries" element={<BrainAndSpinalInjuries />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/case-results" element={<CaseResults />} />
        <Route path="/results/testimonials" element={<TestimonialsResults />} />
        <Route path="/results/settlement-timeline" element={<SettlementTimeline />} />
        <Route path="/results/notable-victories" element={<NotableVictories />} />
        <Route path="/results/practice-area-results" element={<PracticeAreaResults />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
