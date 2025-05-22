import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100"> {/* Added flex container */}
      <div className="bg-[#B8860B] rounded-lg shadow-xl/30 p-6 w-[500px] ">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-200 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
     
        <h2 className="text-2xl text-white text-center mb-2">Newsletter</h2>
        <p className="text-gray-100 text-center mb-4">Stay up to date with our latest news and products.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-3 py-2 border-yellow-200 border-2 rounded-md text-gray-100 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            SUBSCRIBE
          </button>
        </form>
        <p className="text-gray-200 text-center mt-4">Your email is safe with us, we don't spam.</p>
       
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-100">
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NewsletterSignup;
