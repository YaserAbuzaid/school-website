import blur from '../assets/blur.jpeg'
import { useState } from 'react';
// import hdbg from '..assets/hdbg.jpeg'


function Admission() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear errors as user types
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Enter a valid email.';
        if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = 'Enter a valid 10-digit phone number.';
        if (!formData.course) newErrors.course = 'Please select a course.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setFormSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            course: '',
            message: '',
        });
    
        // Show success alert
        window.alert('Form has been sent successfully!');
    
        // Hide the success message after 3 seconds
        setTimeout(() => {
            setFormSubmitted(false);
        }, 3000);
    };


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-lg shadow-md">
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
                        Admission into <span className="text-yellow-500">Royal Breeds</span>
                    </h2>
                    <p className="mt-3 text-lg text-gray-300 sm:mt-5">
                        Shaping future leaders through innovative education and practical excellence since 2010.
                    </p>
                </div>
            </div>

            {/* How to Apply Section */}
            <section className="py-12 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How to Apply</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-4">1. Online Application</h3>
                        <p className="text-gray-600">Complete the online application form with your details.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-4">2. Document Submission</h3>
                        <p className="text-gray-600">Submit required documents such as transcripts and certificates.</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-4">3. Interview & Assessment</h3>
                        <p className="text-gray-600">Attend an interview and complete the assessment process.</p>
                    </div>
                </div>
            </section>

            {/* Admission Requirements Section */}
            <section className="py-12 bg-gray-50">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Admission Requirements</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-4">Academic Requirements</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>WAEC/NECO Results</li>
                            <li>Latest School Transcript</li>
                            <li>Character Reference Letter</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-4">Additional Requirements</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Birth Certificate</li>
                            <li>Medical Certificate</li>
                            <li>Passport Photograph</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-12 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Apply Now</h2>
                <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className={`mt-1 block w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    } shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-base h-12 p-4`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={`mt-1 block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    } shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-base h-12 p-4`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className={`mt-1 block w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    } shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-base h-12 p-4`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        {/* Course of Interest */}
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                                Course of Interest
                            </label>
                            <select
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className={`mt-1 block w-full rounded-lg border ${errors.course ? 'border-red-500' : 'border-gray-300'
                                    } shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-base h-12 p-3 bg-white text-gray-700`}
                            >
                                <option value="" disabled>
                                    Select a course
                                </option>
                                <option value="Nursery School">Nursery School 1-3</option>
                                <option value="Primary School">Primary School 1-6</option>
                                <option value="Secondary School">Secondary School</option>

                            </select>
                            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                        </div>

                        {/* Additional Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Additional Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter any additional information"
                                className={`mt-1 block w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                    } shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-base h-32 p-4`}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                        >
                            Submit Application
                        </button>

                        {/* Success Message */}
                        {formSubmitted && (
                            
                            
                            <p className="text-yellow-600 text-center mt-4">Form submitted successfully!</p>
                            
                        )}
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Admission;