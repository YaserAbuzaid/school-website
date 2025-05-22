import blur from '../assets/blur.jpeg';

function GallerryHead() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover filter blur-lg"
            src={blur}
            alt="Classroom Setting"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        </div>
        <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-32 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Welcome to Our <span className="text-yellow-500">Gallery</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 sm:mt-6 sm:text-xl max-w-3xl mx-auto">
            Explore moments that define our journey. From academic excellence to
            extracurricular achievements, our gallery showcases the vibrant life
            at Royal Breeds Academy.
          </p>
          <div className="mt-8">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerryHead;