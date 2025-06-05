import React from 'react';
import school_1 from '../assets/school_1.jpg';
import school_2 from '../assets/school_2.jpg';
import school_3 from '../assets/school_3.jpg';
import { ImageSlider } from './imageslider.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {AlertDialogDemo} from '../components/vidpop'

export default function Header() {
  const images = [
    { url: school_1, title: 'school1' },
    { url: school_2, title: 'school2' },
    { url: school_3, title: 'school3' },
  ];

  return (
    <section className="bg-gradient-to-br from-white to-green-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 space-y-6">
            <motion.span
              className="text-yellow-600 font-medium text-sm"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              📍 Admissions Open 2024
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Lifelong Learning <br /> <span className="text-gray-800">Starts Here</span>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-base md:text-lg max-w-xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover a transformative educational journey that goes beyond traditional learning.
              Our innovative approach combines academic excellence with real-world experience,
              preparing you for lifelong success.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="AddHome"
                className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition"
              >
                Start Your Journey
              </Link>
              <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-yellow-600">
                
                <AlertDialogDemo />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Professional Programs</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image/Slider */}
        <motion.div
          className="flex-1 w-full h-96 lg:h-[400px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <ImageSlider slides={images} />

          {/* Top Badge */}
          <motion.span
            className="absolute top-4 right-4 bg-white px-4 py-1 text-sm rounded-full shadow text-yellow-600 font-medium"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ● Live Campus
          </motion.span>
          {/* Bottom Stat */}
          <motion.div
            className="absolute bottom-2 left-6 bg-white px-6 py-3 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}