import React from 'react';
import prof from '../assets/prof.jpeg';
import profs from '../assets/profs.jpeg';
import profss from '../assets/profss.jpeg';
import NewsletterSignup from '../Newsletter';
import { motion } from 'framer-motion';

export default function Midsec_2() {
  const faculty = [
    {
      name: 'Prof. Oluwaseun Adebayo',
      title: 'Ph.D. in Artificial Intelligence from MIT',
      department: 'Computer Science',
      experience: '15+ Years Experience',
      image: prof,
      color: 'text-yellow-600 ',
    },
    {
      name: 'Prof. Chioma Okonkwo',
      title: 'Ph.D. in Business Analytics from Stanford',
      department: 'E-commerce',
      experience: '20+ Years Experience',
      image: profs,
      color: 'text-yellow-600',
    },
    {
      name: 'Prof. Bolajiade Adeleke',
      title: 'Ph.D. in Data Science from Berkeley',
      department: 'Data Science',
      experience: '18+ Years Experience',
      image: profss,
      color: 'text-yellow-600 ',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-yellow-600 font-semibold">🎓 Meet Our Faculty</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Learn from the Best</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our distinguished faculty brings real-world expertise and cutting-edge research to the classroom.
          </p>
        </motion.div>

        {/* Faculty Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-6 space-y-2">
                <span className={`text-sm font-medium ${member.color}`}>{member.department}</span>
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
                <p className="text-xs text-gray-500">{member.experience}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-4">📊 Research Impact</h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="text-2xl font-bold text-yellow-600 ">200+</p>
                <p>Research Papers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-600">$15M+</p>
                <p>Research Grants</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-600 ">50+</p>
                <p>Fellows Trained</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-600 ">30+</p>
                <p>Research Labs</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold mb-4">🔬 The Big Brain</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <span className="font-medium text-yellow-600 ">Artificial Intelligence</span> – NLP, Robotics, Computer Vision
              </li>
              <li>
                <span className="font-medium text-yellow-600">Business Analytics</span> – Market Models, Consumer Trends
              </li>
              <li>
                <span className="font-medium text-yellow-600 ">Data Science</span> – Big Data, Neural Networks, Simulation
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}