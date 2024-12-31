import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const practiceAreas = [
    "Car Accidents",
    "Medical Malpractice",
    "Truck Accidents",
    "Workplace Injuries",
    "Motorcycle Accidents",
    "Catastrophic Injuries",
    "Wrongful Death",
    "Brain & Spinal Injuries"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      practiceArea: '',
      message: ''
    });
    
    setIsSubmitting(false);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-16 left-0 right-0 bg-law-red text-white p-4 rounded-md text-center"
          >
            <div className="flex items-center justify-center gap-2">
              <FaCheck className="text-xl" />
              <span>Thank you! Our legal team will contact you within 24 hours.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="bg-law-dark p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-white">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full bg-black border-2 border-law-red/30 p-3 text-white focus:border-law-red transition-all duration-300"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-black border-2 border-law-red/30 p-3 text-white focus:border-law-red transition-all duration-300"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block mb-2 text-white">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full bg-black border-2 border-law-red/30 p-3 text-white focus:border-law-red transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="practiceArea" className="block mb-2 text-white">Practice Area</label>
            <select
              name="practiceArea"
              id="practiceArea"
              value={formData.practiceArea}
              onChange={(e) => setFormData(prev => ({ ...prev, practiceArea: e.target.value }))}
              className="w-full bg-black border-2 border-law-red/30 p-3 text-white focus:border-law-red transition-all duration-300"
              disabled={isSubmitting}
            >
              <option value="">Select Practice Area</option>
              {practiceAreas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-white">Message</label>
          <textarea
            name="message"
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full bg-black border-2 border-law-red/30 p-3 text-white focus:border-law-red transition-all duration-300"
            required
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-law-red text-white px-8 py-4 font-display text-xl uppercase tracking-wider transition-all duration-300
            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-law-red/90'}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 