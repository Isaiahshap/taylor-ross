import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar/Navbar';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/Contact/ContactForm';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactInfo = [
    {
      icon: FaPhone,
      label: "Phone",
      value: "(888) 888-8888",
      link: "tel:888-888-8888"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "info@taylorross.com",
      link: "mailto:info@taylorross.com"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: "123 Legal Street, New York, NY 10001",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-24">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-display uppercase text-white mb-6">
                Contact <span className="text-law-red">Us</span>
              </h1>
              <p className="text-white/80 text-xl max-w-3xl mx-auto font-body">
                Get in touch with our experienced legal team for a free consultation about your case.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex items-start gap-4 bg-law-dark p-6 hover:bg-law-red/10 transition-colors duration-300"
                >
                  <item.icon className="text-law-red text-2xl mt-1" />
                  <div>
                    <span className="block text-white/70 group-hover:text-law-red transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="text-white font-display text-lg">
                      {item.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="max-w-3xl mx-auto" ref={ref}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
