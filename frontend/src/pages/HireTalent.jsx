import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from './components/Header'
import Footer from './components/Footer'
import dev from '../../src/assets/dev.png'

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
            <Footer />

    </>
  );
}
