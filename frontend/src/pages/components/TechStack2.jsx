import React from 'react';
import healthcare from '../../assets/healthcare.png';
import bank from '../../assets/bank.png';
import insurance from '../../assets/insurance.png';
import lending from '../../assets/lending.png';
import investment from '../../assets/investment.png';
import retail from '../../assets/retail.png';
import manufacture from '../../assets/manufacture.png';
import personal from '../../assets/personal.png';
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
      <section className="py-16 px-4 text-center bg-white">
        <div className="mb-8">
          <span className="bg-dark-blue text-white px-6 py-2 rounded-md font-medium">
            WE DRIVE SUCCESS FOR BUSINESSES WORLDWIDE!
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Unlocking Tomorrow's Tech Today!
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions.
        </p>

        <div className="mb-16">
          <button className="bg-dark-blue hover:bg-light-blue text-white px-8 py-3 font-medium rounded transition duration-300">
            LET'S TALK
          </button>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <img src={aboutushero} alt="Team collaboration" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-md"></div>
              <h2 className="text-3xl font-bold text-blue-900">Industries Alpixn Serves</h2>
            </div>
            <p className="text-gray-700 text-lg">
              During our practice, we acquired expertise and a deep understanding of business models and processes across 30+ industries, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="border border-gray-200 rounded-lg p-6 relative group hover:shadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <a href={`/industries/${industry.id}`} className="absolute inset-0" aria-label={`Learn more about ${industry.name}`}></a>
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 ${industry.bgColor} rounded-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <img src={industry.icon} alt={industry.name} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {industry.name}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <section className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/5">
              <h1 className="text-3xl md:text-4xl font-bold text-dark-blue">About Alpixn -</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-black">Your Partner for Project Success</h2>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2014, Alpixn Corporation, doing business as Alpixn, provides IT consulting and software development services.
                Clients respect us for unfailing budget and time control, cooperation transparency, and consistently high service quality.
              </p>
            </div>

            <div className="w-full md:w-3/5">
              <div className="relative">
                <img src={aboutushero} alt="Alpixns team members collaborating" className="w-full rounded-lg shadow-lg" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[...Array(6)].map((_, index) => (
                    <span key={index} className={`h-2 w-2 rounded-full bg-white ${index === 3 ? 'bg-opacity-100 ring-2 ring-blue-500' : 'opacity-50'}`}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TechStack2;
