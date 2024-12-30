import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">About Taylor &amp; Ross</h1>
        <p className="mb-4">
          We are a team of dedicated personal injury lawyers with decades of combined experience...
        </p>
          <p>Our mission is to fight for justice and ensure you receive the compensation you deserve.</p>
        </section>
      </main>
    </div>
  );
};

export default About;
