import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import itpeople from '../../assets/itpeople.png'
import solutions from '../../assets/solutions.png'
import cybersec from '../../assets/cybersec.png'



const ContentCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      image: itpeople,
      title: "Top-Tier IT Geniuses",
      description: "Alpixn Technology is an exclusive hub of top dedicated software developers, UI/UX designers, QA experts, and product managers with incredibly rare and hidden talents you will ever come across. We let you access the exceptional IT talent globally, from independent software developers to fully managed teams."
    },
    {
      image: solutions,
      title: "Expert Solutions Architects",
      description: "Our solutions architects bring decades of experience designing scalable, robust systems for enterprises of all sizes. With expertise in cloud infrastructure, microservices, and distributed systems, they transform business requirements into elegant technical solutions."
    },
    {
      image: cybersec,
      title: "Certified Security Specialists",
      description: "In today's threat landscape, our certified security specialists ensure your applications and infrastructure remain protected. From penetration testing to security architecture reviews, our team implements industry best practices to safeguard your most valuable digital assets."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <div className="relative flex flex-col md:flex-row items-center gap-8 p-6">
        {/* Image section */}
        <div className="w-full md:w-1/2 relative">
          <img 
            src={slides[activeIndex].image} 
            alt={slides[activeIndex].title}
            className="w-full h-auto rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
        
        {/* Content section */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-0 right-0 flex space-x-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="pt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 transition-all duration-300">
              {slides[activeIndex].title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {slides[activeIndex].description}
            </p>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
