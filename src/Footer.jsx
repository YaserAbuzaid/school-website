import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import skl from '../src/assets/skl.jpeg'

export default function Footer() {
  return (
    <footer className="bg-[#e5e1e1] text-black pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo + Address */}
        <div>
          <img src={skl} alt="DWC Logo" className="w-20 mb-4" />
          <p className='text-bold'>Royal Breeds School</p>
          <p className="mt-4 text-sm">
            Asu Village Road, <br />
            Off Abeokuta-Sagamu Expressway, <br />
            Abeokuta, Ogun State
          </p>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-black font-semibold mb-2">Academics</h3>
          <div className="h-1 w-10 bg-yellow-500 mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li>School Calendar</li>
            <li>Higher Achievers</li>
            <li>Academic Resources</li>
            <li>Learning Resources Centre</li>
          </ul>
        </div>

        {/* Pastoral */}
        <div>
          <h3 className="text-black font-semibold mb-2">Pastoral</h3>
          <div className="h-1 w-10 bg-yellow-500 mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li>RBS Charity</li>
            <li>Student Life</li>
            <li>Student Leadership</li>
            <li>Indigent Scholarship Fund</li>
          </ul>
        </div>

        {/* Admissions */}
        <div>
          <h3 className="text-black font-semibold mb-2">Admissions</h3>
          <div className="h-1 w-10 bg-yellow-500 mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li>Apply To RBS</li>
            <li>Examination Centres</li>
            <li>Admissions Criteria & Policy</li>
            <li>Online Application Form</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-yellow-700 pt-4 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm text-black text-center md:text-left">
          Copyright All Right Reserved 2025, Royal Breeds School | <span className="text-yellow-500 cursor-pointer">Privacy Policy</span>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-yellow-500">
          <FaFacebookF className="cursor-pointer hover:text-yellow-700" />
          <FaTwitter className="cursor-pointer hover:text-yellow-700" />
          <FaYoutube className="cursor-pointer hover:text-yellow-700" />
          <FaInstagram className="cursor-pointer hover:text-yellow-700" />
        </div>
      </div>
    </footer>
  );
}
