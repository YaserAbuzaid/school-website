import React from "react";

const ContactEnd = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-4xl font-bold mb-2">
            Reach out <br /> <span className="text-yellow-600">to us</span>
          </h2>
          <p className="text-gray-600 mb-8">Get in touch and we'll respond to you.</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-600 text-sm">First Name</label>
              <input type="text" className="w-full mt-1 p-2 border-b border-gray-300 focus:outline-none" />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Last Name</label>
              <input type="text" className="w-full mt-1 p-2 border-b border-gray-300 focus:outline-none" />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Email</label>
              <input type="email" className="w-full mt-1 p-2 border-b border-gray-300 focus:outline-none" />
            </div>
            <div>
              <label className="text-gray-600 text-sm">Phone</label>
              <input type="tel" className="w-full mt-1 p-2 border-b border-gray-300 focus:outline-none" />
            </div>
            <div>
              <label className="text-gray-600 text-sm">School yr</label>
              <select className="w-full mt-1 p-2 border-b border-gray-300 focus:outline-none">
                <option>- Select Service</option>
                <option>Nursery</option>
                <option>Junior School</option>
                <option>Secondary Shool</option>
              </select>
            </div>
            <div>
              <label className="text-gray-600 text-sm">Subject</label>
              <input type="text" className="w-full mt-1 p-2 border-b border-gray-300 focus:outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="text-gray-600 text-sm">Message</label>
              <textarea className="w-full mt-1 p-2 border-b border-gray-300 focus:outline-none" rows="4"></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-700 text-white py-3 rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31632.043585857473!2d3.569718602829716!3d6.4666679949199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5c0f7f65f3f%3A0xd152d3b3c36e7b1!2sAtican%20BeachView%20Estate!5e0!3m2!1sen!2sng!4v1680000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            className="h-[700px] w-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactEnd;
