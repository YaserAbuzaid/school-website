import React from 'react';
import skls from '../assets/skls.jpeg';
import blur from '../assets/blur.jpeg';
import { motion } from 'framer-motion';

const AboutHeader = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-md"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover blur-sm"
              src={blur}
              alt="Classroom Setting"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-32 text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              About <span className="text-yellow-500">Royal Breeds</span>
            </h2>
            <p className="mt-3 text-lg text-gray-300 sm:mt-5">
              Shaping future leaders through innovative education and practical excellence since 2010.
            </p>
          </div>
        </motion.div>

        {/* Building a Legacy Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className="w-full h-full object-cover"
              src={skls}
              alt="Students in Class"
            />
            <div className="absolute bottom-0 left-0 bg-white bg-opacity-75 text-gray-800 p-4">
              <p className="text-sm font-semibold text-yellow-500">13+</p>
              <p className="text-xs text-yellow-500">Years of Excellence</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-yellow-500 font-semibold mb-2">Our Story</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building a Legacy of Excellence
            </h3>
            <p className="text-gray-700 mb-4">
              Founded in 2008, Royal Breeds Academy emerged from a vision to create a
              world-class educational institution in Nigeria that combines academic
              excellence with practical skills development.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began with a small campus and big dreams. Today, we've
              grown into one of Nigeria's leading institutions, known for innovation,
              research, and producing industry-ready graduates.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-yellow-500">5000+</span>
                <span className="text-sm text-gray-600">Alumni Worldwide</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-yellow-500">98%</span>
                <span className="text-sm text-gray-600">Employment Rate</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission and Vision Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.div
            className="bg-gray-50 rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 text-yellow-500 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 8v1m0-6c-1.662 0-3-1.518-3-3s1.338-3 3-3 3 1.518 3 3-1.338 3-3 3z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 ml-3">Our Mission</h4>
            </div>
            <p className="text-gray-700 text-sm">
              To empower students with knowledge, skills, and values needed to excel
              in the global marketplace while contributing positively to society.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 text-yellow-500 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 15v2m-6.364-3.636l.707-7.072a1 1 0 011.414-.707l3.535 3.536m-3.536-3.536l.707-7.072a1 1 0 011.414-.707l3.535 3.536m-3.536-3.536L3.636 12.364a1 1 0 01-1.414 1.414l7.072.707m-7.072.707l-1.414 1.414a1 1 0 010 1.414l7.072.707m7.072.707l1.414 1.414a1 1 0 010 1.414l-7.072.707M15.364 6.364L18.9 9.928a1 1 0 01-1.414 1.414l-3.535-3.536m3.535 3.536l-1.414 1.414a1 1 0 010 1.414l-3.535-3.536m-3.536-3.536L6.364 15.364a1 1 0 011.414 1.414l7.072-.707M12 6a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 ml-3">Our Vision</h4>
            </div>
            <p className="text-gray-700 text-sm">
              To be the leading institution in Africa, recognized globally for academic
              excellence, innovation, and producing future-ready leaders.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeader;