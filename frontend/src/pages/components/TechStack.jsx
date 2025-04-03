import React, { useState } from 'react';
import cpp from '../../assets/cpp.png'
import nodejs from '../../assets/nodejs.png'
import golang2 from '../../assets/golang2.png'
import java from '../../assets/java.png'
import laravel from '../../assets/laravel.png'
import net from '../../assets/net.png'
import php from '../../assets/php.png'
import python from '../../assets/python.png'
import ruby2 from '../../assets/ruby2.png'





const techCategories = [
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'devops', name: 'DevOps' },
  { id: 'cloud', name: 'Cloud' },
  { id: 'platforms', name: 'Platforms' },
  { id: 'relational', name: 'Relational Databases' },
  { id: 'bigdata', name: 'Big Data' },
  { id: 'ml', name: 'Machine Learning' },
  { id: 'auto', name: 'Automation' }
];

const backendTech = [
  { id: 'ruby', image: ruby2, alt: 'Ruby' },
  { id: 'nodejs', image: nodejs, alt: 'Node.js' },
  { id: 'python', image:  python, alt: 'Python' },
  { id: 'golang', image:  golang2, alt: 'Golang' },
  { id: 'net', image:  net, alt: '.NET' },
  { id: 'java', image:  java,  alt: 'Java' },
  { id: 'php', image:  php,    alt: 'PHP' },
  { id: 'cpp', image:  cpp,    alt: 'C++' },
  { id: 'laravel', image:  laravel,    alt: 'Laravel' }
];

const frontendTech = [
  { id: 'angular', image: '/images/angular.png', alt: 'Angular' },
  { id: 'react', image: '/images/react.png', alt: 'React' },
  { id: 'vue', image: '/images/vue.png', alt: 'Vue.js' },
  { id: 'js', image: '/images/javascript.png', alt: 'JavaScript' },
  { id: 'html-css', image: '/images/html-css.png', alt: 'HTML5/CSS3' },
  { id: 'ember', image: '/images/ember.png', alt: 'Ember' },
  { id: 'flutter', image: '/images/flutter.png', alt: 'Flutter' },
  { id: 'typescript', image: '/images/typescript.png', alt: 'TypeScript' }
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Tech Stack</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our expertise spans over 100+ innovative technologies and platforms, enabling us to deliver
          customized business solutions.
        </p>

        <div className="flex justify-end mb-8 space-x-2">
          <button 
            className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-dark-blue text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="border-b border-gray-200 mb-8">
          <nav className="flex overflow-x-auto pb-3 scrollbar-hide">
            {techCategories.map((category) => (
              <button
                key={category.id}
                className={`whitespace-nowrap px-6 py-3 font-medium text-sm transition-colors duration-300 mx-1 first:ml-0
                  ${activeCategory === category.id 
                    ? 'bg-dark-blue text-white rounded-t-lg' 
                    : 'text-gray-600 hover:text-orange-500'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">BACK END</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {backendTech.map((tech) => (
              <div 
                key={tech.id} 
                className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <img src={tech.image} alt={tech.alt} className="w-full h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-700 mb-6">FRONT END</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {frontendTech.map((tech) => (
              <div 
                key={tech.id}
                className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <img src={tech.image} alt={tech.alt} className="w-full h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-dark-blue hover:bg-orange-500 text-white px-6 py-3 rounded flex items-center transition-colors duration-300">
            EXPLORE ALL
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;