import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from './components/Header'
import Footer from './components/Footer'
import dev from '../../src/assets/dev.png'
import tick from '../../src/assets/tick.png'

export default function HireTalent() {
  const words = ["Java", "JavaScript", "Python", "C++", "VueJS", "ReactJS", "PHP", "NodeJS", "iOS", "Flutter", "Golang"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Header />
    <section className="bg-light-blue py-16 px-6 bg-opacity-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">
            Hire <span></span> a <span></span>
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 1.0 }}
            className="text-dark-blue"
          >
            {words[index]}
          </motion.span>{" "}
        Developer
        </h2>
      </div>
    </section>

            <section className="relative bg-white text-black py-16 px-6">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-light-blue bg-opacity-50"></div>

            {/* Content Wrapper */}
            <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                
                {/* Left Content */}
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="lg:w-1/2 text-center lg:text-left"
                >
                <h1 className="text-4xl font-bold mb-4">
                    Right <span className="text-dark-blue"> Developers </span> for the Right job
                </h1>
                <p className="text-black-300 mb-6">
                    Right developers from us to create dynamic and interactive applications.
                    Our experienced developers ensure seamless performance, easy navigation, and 2x faster results.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 px-6 py-3 rounded-md font-semibold">
                    START 15 DAYS RISK-FREE TRIAL
                    </button>
                    <button className="bg-dark-blue text-white hover:bg-light-blue transition duration-300 px-6 py-3 rounded-md font-semibold border border-gray-600">
                    SCHEDULE A CALL
                    </button>
                </div>

                {/* Features */}
                <div className="mt-8 flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-2xl">🛠️</span>
                    <p>13+ Years of Experience</p>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-2xl">🔄</span>
                    <p>Regular Upgrade Service</p>
                    </div>
                    <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-2xl">💰</span>
                    <p>Save Up to 40% on Development Cost</p>
                    </div>
                </div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
                >
                <div className="relative w-80 h-80 overflow-hidden rounded-full border-4
                 border-gray-700 shadow-xl">
                    <img
                    src={dev} // Replace with actual image URL
                    alt="Angular Developer"
                    className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Animated Circular Effect */}
                <div className="absolute inset-0 w-full h-full animate-pulse border-4 border-gray-700 rounded-full"></div>
                </motion.div>
            </div>
            </section>



            <section class="py-16 bg-gray-50">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-5xl font-bold text-gray-800 mb-6">100's of Happy Clients</h2>
    
    <p class="text-gray-700 mb-10 leading-relaxed">
      From IT consultants to digital agencies, ISVs, and enterprises, we, as a pioneering offshore software outsourcing firm, cater to a diverse clientele seeking reliable solutions for their software consultancy and development needs. Here are some touching testimonials from our happy clients:
    </p>
    
    <div class="flex justify-center items-center space-x-8 mt-6">
      <a href="#" class="flex items-center text-blue-600 hover:text-blue-800 font-medium">
        <span class="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        Read testimonials
      </a>
      
      <a href="#" class="flex items-center text-gray-500 hover:text-gray-700 font-medium">
        <span class="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </span>
        View case studies
      </a>
    </div>
  </div>
</section>




<section class="py-16 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-center mb-10">Why Choose Alpixn?</h2>
    
    <div class="text-center mb-16">
      <p class="text-lg">
        Being a <span class="font-bold">Reliable and Committed IT Partner</span>, eSparkBiz aims at bringing digital transformation to your business. 
        <span class="font-bold">Our 14+ years of remarkable expertise</span> with 500+ global collaborations showcase 
        <span class="font-bold">our trusted development services</span>, state-of-the-art infrastructure, 
        transparent transactions, and security to kickstart your digital business strategy.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">

      <div class="flex p-4 border-t border-gray-200">
        <div class="flex-shrink-0 mr-4">
          <img src= {tick} alt="Expert" class="w-12 h-12" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Expert and Skilled Professionals</h3>
          <p class="text-gray-700">Hire our experienced developers who are well knowledgeable in technical aspects to deliver outstanding results.</p>
        </div>
      </div>
      

      <div class="flex p-4 border-t border-gray-200">
        <div class="flex-shrink-0 mr-4">
          <img src={tick} alt="Communication" class="w-12 h-12" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Real-time Communication Channels</h3>
          <p class="text-gray-700">You can use Skype, Email or Phone to communicate with your team in real-time and work together efficiently.</p>
        </div>
      </div>
      

      <div class="flex p-4 border-t border-gray-200">
        <div class="flex-shrink-0 mr-4">
          <img src={tick} alt="Pricing" class="w-12 h-12" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Adaptable Pricing and Engagement Models</h3>
          <p class="text-gray-700">Choose from a variety of pricing options and work arrangements based on the needs of your project.</p>
        </div>
      </div>
      

      <div class="flex p-4 border-t border-gray-200">
        <div class="flex-shrink-0 mr-4">
          <img src={tick} alt="Project Tracking" class="w-12 h-12" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Project Tracking via Advanced PMS</h3>
          <p class="text-gray-700">Oversee your project in real time with the help of our sophisticated Project Management Software.</p>
        </div>
      </div>
      

      <div class="flex p-4 border-t border-gray-200">
        <div class="flex-shrink-0 mr-4">
          <img src={tick} alt="Backup" class="w-12 h-12" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Robust Code and Backup Management</h3>
          <p class="text-gray-700">Our secure code handling rules and reliable backup will ensure a smooth development process.</p>
        </div>
      </div>
      

      <div class="flex p-4 border-t border-gray-200">
        <div class="flex-shrink-0 mr-4">
          <img src={tick} alt="No Training Costs" class="w-12 h-12" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">No Training or Retention Costs</h3>
          <p class="text-gray-700">Reduce your expenses on training and turnover by hiring our developers who are already proficient in their fields.</p>
        </div>
      </div>
      

      <div class="flex p-4 border-t border-gray-200">
        <div class="flex-shrink-0 mr-4">
          <img src={tick} alt="Single Point of Contact" class="w-12 h-12" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Single Point of Contact Lead</h3>
          <p class="text-gray-700">Get a dedicated lead to help you liaise with our team and to ensure that communication is clear and direct.</p>
        </div>
      </div>
      

      <div class="flex p-4 border-t border-gray-200">
        <div class="flex-shrink-0 mr-4">
          <img src={tick} alt="Secure Work" class="w-12 h-12" />
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Secure and Reliable Work Environment</h3>
          <p class="text-gray-700">Rest assured that your data will be safe with our secure and protected development environment.</p>
        </div>
      </div>
    </div>
  </div>
</section>



            <Footer />

    </>
  );
}
