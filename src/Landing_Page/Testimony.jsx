import React from 'react';
import alibi from '../assets/alibi.jpeg';
import alibii from '../assets/alibii.jpeg';
import logoss from '../assets/logoss.png';
import amazon from '../assets/amazon.png';
import google from '../assets/google.png';
import { motion } from 'framer-motion';

const Testy = () => {
  const alumniData = [
    {
      name: 'Aisha Mohammed',
      title: 'Software Engineer at Microsoft',
      quote:
        'The practical approach to learning at Royal Breeds Academy prepared me for real-world challenges. Now I\'m leading tech projects at Microsoft.',
      imageSrc: alibi,
      companyLogoSrc: logoss,
      classOf: 2020,
    },
    {
      name: 'Oluwafemi Adeleke',
      title: 'Data Scientist at Google',
      quote:
        'The research opportunities and mentorship I received at Royal Breeds were instrumental in launching my career in data science.',
      imageSrc: alibii,
      companyLogoSrc: google,
      classOf: 2021,
    },
    {
      name: 'Chidinma Okafor',
      title: 'Product Manager at Amazon',
      quote:
        'Royal Breeds\'s gave me the perfect blend of technical and management skills needed in today\'s tech industry.',
      imageSrc: alibi,
      companyLogoSrc: amazon,
      classOf: 2019,
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yellow-500 font-semibold text-sm tracking-wide uppercase">
            Success Stories
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Alumni Success
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Meet our graduates who are making waves across various industries globally.
          </p>
        </motion.div>

        {/* Alumni Cards */}
        <motion.div
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {alumniData.map((alumnus, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={alumnus.imageSrc}
                      alt={alumnus.name}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {alumnus.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{alumnus.title}</p>
                  </div>
                </div>
                <blockquote className="mt-2 text-gray-700 text-sm italic">
                  "{alumnus.quote}"
                </blockquote>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-gray-600 text-xs">Class of {alumnus.classOf}</p>
                  <div className="w-10 h-6">
                    <img
                      className="w-full h-full object-contain"
                      src={alumnus.companyLogoSrc}
                      alt="Company Logo"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testy;