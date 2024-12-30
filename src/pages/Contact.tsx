import React, { useState } from 'react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic (e.g., send to an API or email service)
    alert('Form submitted! We will get back to you soon.');
  };

  return (
    <Layout>
      <section className="py-24 px-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-display font-bold mb-12 text-law-gold">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-law-white">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-law-navy border-2 border-law-gold/30 p-3 rounded-sm text-law-white focus:border-law-gold focus:shadow-gold-glow transition-all duration-300"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-law-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-law-navy border-2 border-law-gold/30 p-3 rounded-sm text-law-white focus:border-law-gold focus:shadow-gold-glow transition-all duration-300"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-law-white">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="w-full bg-law-navy border-2 border-law-gold/30 p-3 rounded-sm text-law-white focus:border-law-gold focus:shadow-gold-glow transition-all duration-300"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-law-gold text-law-navy px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-law-gold-light transform hover:scale-105 transition-all duration-300 hover:shadow-gold-glow"
          >
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
