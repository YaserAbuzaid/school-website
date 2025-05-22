import React from 'react';
import imgone from '../assets/imgone.webp';
import imgtwo from '../assets/imgtwo.webp';
import imgthree from '../assets/imgthree.webp';
import imgfour from '../assets/imgfour.webp';

const images = [imgone, imgtwo, imgthree, imgfour];

const GalleryPg = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 p-1 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 rounded-xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
            <img
              src={src}
              alt={`Gallery ${idx}`}
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">View Image</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPg;