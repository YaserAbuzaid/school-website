import React from 'react';
import chem from '../assets/chem.jpeg';
import math from '../assets/math.jpeg';
import waec from '../assets/waec.jpeg';
import { motion } from 'framer-motion';

export default function Middlesec() {
  const programs = [
    {
      title: 'Nursery',
      category: 'Nursery1-6',
      description: 'Develop essential child minded skills.',
      image: math,
      color: 'text-yellow-600',
    },
    {
      title: 'Primary',
      category: 'Primary1-6',
      description: 'Harness the knowledge of a growing child.',
      image: chem,
      color: 'text-yellow-600 ',
    },
    {
      title: 'Secondary',
      category: 'Jss1-ss3',
      description: 'Transform from a child to a teen with our complete secondary school program.',
      image: waec,
      color: 'text-yellow-600',
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
          <p className="text-sm text-yellow-600 font-semibold">🎓 Discover Your Path</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Academic Excellence & Innovation</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our diverse range of programs designed to nurture talent and inspire innovation.
          </p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-2">
                <span className={`text-sm font-medium ${program.color}`}>{program.category}</span>
                <h3 className="text-lg font-semibold text-gray-800">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
                <div className="text-xs text-gray-500 mt-2 flex gap-4">
                  <span>📅6 Year</span>
                  <span>🕐 Full Time</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800">
            View All Programs →
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.div
            className="shadow-yellow-500/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-4xl font-bold text-yellow-600">40+</p>
            <p className="text-sm text-yellow-600">Scholarship Programs</p>
          </motion.div>
          <motion.div
            className="shadow-yellow-500/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-4xl font-bold text-yellow-600">95%</p>
            <p className="text-sm text-yellow-600">Success Rate</p>
          </motion.div>
          <motion.div
            className="shadow-yellow-500/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-4xl font-bold text-yellow-600">180+</p>
            <p className="text-sm text-yellow-600">Education Partners</p>
          </motion.div>
          <motion.div
            className="shadow-yellow-500/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-4xl font-bold text-yellow-600">24/7</p>
            <p className="text-sm text-yellow-600">Learning Support</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}