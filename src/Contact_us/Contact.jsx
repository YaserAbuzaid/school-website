import blur from '../assets/blur.jpeg'


function Contact() {
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
                        Contact
                    </h2>
                    <p className="mt-3 text-lg text-gray-300 sm:mt-5">
                        Shaping future leaders through innovative education and practical excellence since 2010.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;