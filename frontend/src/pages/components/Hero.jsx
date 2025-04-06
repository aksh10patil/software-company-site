
import bluebghero from '../../assets/blue-bg-hero.jpg'
import hero2 from '../../assets/hero2img.jpg'


import TechStack from './TechStack';

import React , {useState} from 'react';


const whatsapplink = () => {
    const phoneNumber = '7069990055';
    
    const message = encodeURIComponent(
      `Hi, I want infromation regarding :\n`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };



export default function Hero () {

        return (

            <>                                        
                <section class="bg-gray-900 relative overflow-hidden py-16 md:py-24">
                    <div class="absolute inset-0 z-0">
                        <img src={bluebghero} alt="herobg" className="w-full h-full object-cover" />
                    </div>
                    <div class="container mx-auto px-6 relative py-16 z-10">
                        <div class="max-w-3xl">
                            <p class="text-gray-300 uppercase tracking-wider font-medium mb-2">AI-DRIVEN</p>
                            <h1 class="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Empowering Businesses with Agile Development
                            </h1>
                            <p class="text-gray-300 text-xl mb-8">
                            Turn your ideas into products that perform exceptionally and flawlessly. 
                            We assure you, we are big enough to deliver and small enough to care.
                            </p>
                          
                            <button onClick={whatsapplink} className="inline-block bg-dark-blue hover:bg-orange-600
                                    text-white font-medium py-3 mt-4 px-6 rounded transition-colors duration-200">
                                     BUILD YOUR OWN TEAM <span class="ml-2">→</span>
                            </button>




                        </div>
                    </div>
                    <div class="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-gray-800 to-transparent opacity-70"></div>
                </section>

                            


                        {/* hero2 section */}
                 <section class="bg-dark-blue py-16 relative">

                    <div class="absolute inset-0 overflow-hidden">
                        <div class="grid grid-cols-12 gap-8 h-full">
                        <div class="col-span-12">
                            <div class="flex justify-end">
                            <div class="w-2/3 h-full flex items-end justify-end">
                                <div class="grid grid-cols-12 gap-4">

                                <div class="absolute right-0 top-1/2 bottom-0 w-1/2 opacity-20">
                                    <div class="grid grid-cols-12 gap-8">
                                    {/* Programmatically generate dots */}
                                    <div class="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                                    {/* Repeat for all dots */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    

                    <div class="container mx-auto px-6 text-center">
                        <div class="max-w-4xl mx-auto">
                        <h2 class="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            We know you have an amazingly disruptive idea.
                        </h2>
                        <h2 class="text-white text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            We can help you build it!
                        </h2>
                        

                        <div class="flex justify-center mb-12">
                            <div class="h-1.5 bg-green-400 w-64 rounded-full"></div>
                        </div>


                        <div class="absolute right-24 top-32">
                            <div class="w-8 h-8 rounded-full border-2 border-green-400"></div>
                        </div>
                        
                        <p class="text-white text-lg md:text-xl mb-8 leading-relaxed">
                            Alpixin assists startups in developing world-class software products for the B2B and B2C segments across multiple domains. Our customers have been selected by Y-Combinator and have received over $2 million in VC funding.
                        </p>
                        </div>
                    </div>
                    </section>


       

                      {/* hero3 section */}

                                <section class="bg-gray-900 py-16 px-6 md:px-8 lg:px-12">
                            <div class="container mx-auto">

                                <div class="max-w-3xl mb-12">
                                <h2 class="text-white text-4xl md:text-5xl font-bold mb-6">Connect, Collaborate, and Create</h2>
                                        <p class="text-white text-2xl font-bold relative inline-block group">
                                    <span>We represent the connected world, collaborate to build customer-centric AI-driven solutions, and create innovative experiences.</span>
                                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                                    </p>
                                 <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                                </div>


                                <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">

                                <div class="lg:col-span-2 relative">
                                    <img 
                                    src={hero2}
                                    alt="Team collaborating in office" 
                                    class="w-full h-full object-cover rounded-md"
                                    />

                                </div>


                <div class="lg:col-span-3 grid grid-cols-2 gap-8">

                    <div class="border-r border-gray-700">
                    <div class="text-white text-5xl font-bold mb-2 blur-sm hover:blur-none transition-all duration-300 ">1050+</div>
                    <div class="text-gray-300">Agile Enabled Employees</div>
                    </div>
                    <div>
                    <div class="text-white text-5xl font-bold mb-2">2500+</div>
                    <div class="text-gray-300">Delivered Projects</div>
                    </div>


                    <div class="border-r border-gray-700">
                    <div class="text-white text-5xl font-bold mb-2">13+</div>
                    <div class="text-gray-300">Years of Experience</div>
                    </div>
                    <div>
                    <div class="text-white text-5xl font-bold mb-2 blur-sm hover:blur-none transition-all duration-300">14</div>
                    <div class="text-gray-300">Certified Scrum Masters</div>
                    </div>


                    <div class="border-r border-gray-700">
                    <div class="text-white text-5xl font-bold mb-2 blur-sm hover:blur-none transition-all duration-300">06</div>
                    <div class="text-gray-300">Worldwide Offices</div>
                    </div>
                    <div>
                    <div class="text-white text-5xl font-bold mb-2">05</div>
                    <div class="text-gray-300">Agile Coaches</div>
                    </div>


                    <div class="border-r border-gray-700">
            
                    </div>
                </div>
                </div>
            </div>
            </section>


                {/* TECH STACK SECTION */}

                    <TechStack />
                
            </>
        )



}