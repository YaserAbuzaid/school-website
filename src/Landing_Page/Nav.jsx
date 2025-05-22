import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 w-full z-300">
            {/* Logo & Name */}
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 border-2 border-yellow-500 rounded-lg flex items-center justify-center text-green-700 font-bold text-lg">
                    RB
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-gray-800">
                        ROYAL<span className="text-green-600">.</span>
                    </h1>
                    <p className="text-xs text-yellow-600 font-semibold -mt-1">BREEDS EST. 2008</p>
                </div>
            </div>

            {/* Burger Menu Button */}
            <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Navigation Links */}
            {/* Navigation Links */}
            <nav
    className={`${
        isMenuOpen ? "block" : "hidden"
    } md:flex md:justify-between md:items-center text-sm font-medium text-gray-700 absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:space-y-0 space-y-4 md:p-0 p-4 shadow md:shadow-none`}
>
    <div className="md:flex md:space-x-8 w-full md:justify-center">
        <Link to={"/"} className="block py-2 hover:text-yellow-600">Home</Link>
        <Link to={"Aboutus"} className="block py-2 hover:text-yellow-600">About</Link>
        <Link to={"GalleryHome"} className="block py-2 hover:text-yellow-600">Gallery</Link>
        <Link to={"ContactHome"} className="block py-2 hover:text-yellow-600">Contact</Link>
    </div>
    <Link
        to={"AddHome"}
        className="block py-3 px-8 bg-yellow-500 text-white text-center rounded-full shadow-lg hover:bg-yellow-600 transition md:ml-6"
    >
        Admission
    </Link>
</nav>
        </header>
    );
}