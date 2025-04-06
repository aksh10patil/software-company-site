import React from 'react';
import healthcare from '../../assets/healthcare.png';
import bank from '../../assets/bank.png';
import insurance from '../../assets/insurance.png';
import lending from '../../assets/lending.png';
import investment from '../../assets/investment.png';
import retail from '../../assets/retail.png';
import manufacture from '../../assets/manufacture.png';
import personal from '../../assets/personal.png';
import peopleinco from '../../assets/peopleinco.png';
import vision from '../../assets/vision.png';
import misson from '../../assets/misson.png';
import aboutushero from '../../assets/aboutushero.jpg';
import Footer from './Footer';

const TechStack2 = () => {
  const industries = [
    { id: 'healthcare', name: 'Healthcare', icon: healthcare, bgColor: 'bg-green-100', iconColor: 'text-green-500' },
    { id: 'banking', name: 'Banking', icon: bank, bgColor: 'bg-blue-100', iconColor: 'text-blue-500' },
    { id: 'insurance', name: 'Insurance', icon: insurance, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-500' },
    { id: 'lending', name: 'Lending', icon: lending, bgColor: 'bg-red-100', iconColor: 'text-red-500' },
    { id: 'investment', name: 'Investment', icon: investment, bgColor: 'bg-blue-100', iconColor: 'text-blue-500' },
    { id: 'retail', name: 'Retail', icon: retail, bgColor: 'bg-red-100', iconColor: 'text-red-500' },
    { id: 'manufacturing', name: 'Manufacturing', icon: manufacture, bgColor: 'bg-green-100', iconColor: 'text-green-500' },
    { id: 'professional-services', name: 'Professional services', icon: personal, bgColor: 'bg-yellow-100', iconColor: 'text-yellow-500' },
  ];

  return (
    <>
      <section className="py-12 sm:py-16 px-4 text-center bg-white">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <span className="bg-dark-blue text-white px-3 py-2 rounded-md font-medium text-sm sm:px-4 sm:py-2">
            WE DRIVE SUCCESS FOR BUSINESSES WORLDWIDE!
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Unlocking Tomorrow's Tech Today!
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
          Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions.
        </p>

        <div className="mb-10 sm:mb-16">
          <button className="bg-dark-blue hover:bg-light-blue text-white px-6 py-2 sm:px-8 sm:py-3 font-medium rounded transition duration-300">
            LET'S TALK
          </button>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4">
          <img src={aboutushero} alt="Team collaboration" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col mb-8 sm:mb-12 px-4">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-md"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Industries Alpixn Serves</h2>
            </div>
            <p className="text-gray-700 text-base sm:text-lg">
              During our practice, we acquired expertise and a deep understanding of business models and processes across 30+ industries, including:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 px-2 sm:px-4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="border border-gray-200 rounded-lg p-4 sm:p-6 relative group hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <a href={`/industries/${industry.id}`} className="absolute inset-0" aria-label={`Learn more about ${industry.name}`}></a>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${industry.bgColor} rounded-md flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <img src={industry.icon} alt={industry.name} className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                </div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section className="max-w-7xl mx-auto p-4 md:p-8 px-4">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-md"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">About Alpixn</h2>
        </div>
        
        <div className="flex flex-col gap-6 md:flex-row md:gap-8 items-center">
          {/* Image shown first on mobile */}
          <div className="w-full md:w-2/5 order-1 md:order-2">
            <div className="relative">
              <img src={peopleinco} alt="Alpixns team members collaborating" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full md:w-3/5 order-2 md:order-1 text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-black mt-4">Your Partner for Project Success</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Founded in 2016, Alpixn is dedicated to empowering startups by transforming visionary ideas into cutting-edge digital solutions.
              Specializing in advanced technologies such as Artificial Intelligence (AI), Machine Learning (ML), and modern frameworks like React, we offer comprehensive services 
              in software development, mobile applications, and website creation.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our mission is to bridge innovation with imagination, providing startups with the technological foundation they need to thrive in a competitive landscape.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              At Alpixn, we believe in a collaborative approach, working closely with our clients to understand their unique challenges and goals. This partnership enables us to deliver tailored solutions that not only meet current needs but also anticipate future growth.
              With a team of passionate experts committed to excellence, Alpixn is more than a service provider; we are a trusted partner in your startup journey. Together, let's innovate, create, and lead the future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Mobile Optimized */}
      <section className="max-w-7xl mx-auto p-4 md:p-8 px-4 mt-6 sm:mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Alpixn Mission</h2>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-md"></div>
        </div>
        
        <div className="flex flex-col gap-6 md:flex-row md:gap-8 items-center">
          {/* Image shown first on mobile */}
          <div className="w-full md:w-2/5 order-1">
            <div className="relative">
              <img src={misson} alt="Alpixn mission" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          
          {/* Text content - always aligned left on mobile */}
          <div className="w-full md:w-3/5 order-2 text-left md:text-right">
            <h2 className="text-xl md:text-2xl font-semibold text-black mt-4">Mission of Success</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              At Alpixn, our mission is to empower startups by transforming innovative ideas into advanced technological 
              solutions. We specialize in software development, mobile applications, and website creation, leveraging cutting-edge
              technologies such as Artificial Intelligence (AI), Machine Learning (ML), and modern frameworks like React. 
              Our goal is to provide tailored, efficient, and scalable solutions that drive success and growth for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section - Mobile Optimized */}
      <section className="max-w-7xl mx-auto p-4 md:p-8 px-4 mt-6 sm:mt-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-md"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Alpixn Vision</h2>
        </div>
        
        <div className="flex flex-col gap-6 md:flex-row md:gap-8 items-center">
          {/* Image shown at the end on mobile */}
          <div className="w-full md:w-2/5 order-1 md:order-2">
            <div className="relative">
              <img src={vision} alt="Alpixn vision" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          
          {/* Text content */}
          <div className="w-full md:w-3/5 order-2 md:order-1 text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-black mt-4">Vision to be a Pioneer in Technology</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Our vision is to be a global leader in technological innovation, recognized for our commitment to excellence and our ability to bridge imagination with innovation. We aspire to create a future where startups and businesses of all sizes can seamlessly integrate advanced technologies,
              unlocking their full potential and achieving unprecedented success.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              These statements reflect our dedication to delivering exceptional value and fostering long-term partnerships with our clients, guiding us toward a future of shared success and technological advancement.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TechStack2;