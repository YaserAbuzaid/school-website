import React from 'react';

function ContactInfo() {
  return (
    <div className="flex space-x-7 items-center justify-center p-15">
      <div className="bg-white rounded-lg shadow-md p-4 w-64">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 21.9a1.998 1.998 0 01-2.827 0l-4.244-5.253a2 2 0 010-2.828l4.244-5.253a1.998 1.998 0 012.827 0l4.244 5.253a2 2 0 010 2.828z"
            />
          </svg>
          <h3 className="text-lg font-medium">Address:</h3>
        </div>
        <p className="text-gray-700 text-sm">
          Plot 6, Ogombo Road, Off Abraham Adesanya Roundabout, Ajah, Lagos
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 w-64">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h3 className="text-lg font-medium">Email Us:</h3>
        </div>
        <a
          href="mailto:info@royalbreedschools.com"
          className="text-yellow-500 text-sm underline"
        >
          info@royalbreedschools.com
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 w-64">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.517l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.28a1 1 0 01-1-1V7a1 1 0 011-1h1.28a2 2 0 012 2z"
            />
          </svg>
          <h3 className="text-lg font-medium">Call Us:</h3>
        </div>
        <a
          href="tel:+23408132103045"
          className="text-yellow-500 text-sm underline"
        >
          +234(0)8132103045
        </a>
      </div>
    </div>
    
  );
}

export default ContactInfo;
