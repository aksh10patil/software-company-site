import Header from './components/Header'
import Footer from './components/Footer'
import aws from '../../src/assets/aws.png'
import cmmi from '../../src/assets/cmmi.png'
import pal from '../../src/assets/pal.png'
import devops from '../../src/assets/devops.png'
import soc2 from '../../src/assets/soc2.png'
import ecom from '../../src/assets/ecom.png'
import health from '../../src/assets/health.png'
import check from '../../src/assets/check.png'





function Industries () {
    return (
        <>
        <Header />
    <section className="bg-gray-200 h-full px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            EMPOWERING INDUSTRIES TO INNOVATE
          </h2>
          <p className="text-gray-600 text-lg">
            Delivering successful digital products and platforms for diverse use cases across key industries.
          </p>
          <button className="bg-dark-blue hover:bg-light-blue text-white hover:text-black font-medium py-3 px-6 rounded-md transition duration-300">
            Book a Call
          </button>
        </div>

        {/* Right Side - Certifications Grid */}
        <div className="grid grid-cols-3 gap-6 justify-center items-center">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src={aws} alt="AWS Partner" className="w-30 mx-auto"/>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src={cmmi}alt="CMMI Level 3" className="w-20 mx-auto"/>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src= {pal} alt="PAL I" className="w-25 mx-auto"/>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src={devops} alt="AWS DevOps Engineer" className="w-50 mx-auto"/>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src={soc2} alt="SOC 2 Compliance" className="w-40 mx-auto"/>
          </div>
        </div>
      </div>
    </section>




            {/* example sections  */}


                        <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900">eCommerce Industry</h2>
                    <p className="text-gray-600 mt-4">
                        The eCommerce industry almost doubled during the pandemic, with around 
                        <strong> $870 billion</strong> in sales in the US. By 2027, B2C eCommerce is likely to grow by
                        <strong> $6 trillion</strong> globally. 
                    </p>
                    <p className="text-gray-600 mt-2">
                        This rapid shift mandates businesses to move from brick-and-mortar stores to digital platforms.
                        Thinking about eCommerce mobile and app development? Our team of <strong>400+ skilled developers</strong> is
                        ready to build feature-rich, engaging digital products.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
                        <ul className="list-disc list-inside space-y-2">
                        <li>Inventory Management</li>
                        <li>ERP and CRM Integration</li>
                        <li>Marketing and Sales</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">
                        <li>Payment Solutions</li>
                        <li>Product Information Management</li>
                        <li>Warehousing and Logistics</li>
                        </ul>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-6">
                        <a
                        href="#"
                        className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
                        >
                        Inquire Now! <span className="ml-2">→</span>
                        </a>
                    </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2 relative">
                    <div className="relative">
                        <img
                        src={ecom}
                        alt="Excited shopper"
                        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0  rounded-lg"></div>
                    </div>
                    </div>
                </div>
                </section>



                {/* Reverse Section */}

                <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <img
              src= {health}
              alt="Healthcare professional"
              className="w-full max-w-md mx-auto rounded-lg shadow-sm"
            />
            <div className="absolute inset-0 rounded-lg "></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">Healthcare Industry</h2>
          <p className="text-gray-600 mt-4">
            The on-demand healthcare services have pushed the industry to embrace
            digitalization. Today, around <strong>77% of medical appointments</strong> 
            are done online, and <strong>47% of people</strong> seek medical 
            consultations or information digitally.
          </p>
          <p className="text-gray-600 mt-2">
            This digital shift has opened a wealth of opportunities for the 
            healthcare sector to enhance customer experiences. Our solutions can 
            help you grow and capture this evolving market.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>EMR/EHR Systems</li>
              <li className="text-dark-blue">Medical Image Management </li>
              <li>Practice Management Solutions</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom Telehealth Solutions</li>
              <li>mHealth Apps Development</li>
              <li>Health Management Software</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <a
              href="#"
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>





    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          Our Hiring Process: <span className="text-gray-700">Easy, Exact, & Efficient</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          At Alpixn, our <strong className="font-semibold">proven 4-step hiring process</strong> 
          surely lands you with the exact <strong className="font-semibold">skill sets</strong> 
          that you are looking for. When <strong className="font-semibold">our specialists</strong> 
          augment your team, the success rate grows to double. <strong className="font-semibold">
          Our sheer expertise</strong> and agility help cut development costs by up to 50%.
        </p>
      </div>




      {/* Process Steps */}
      <div className="mt-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 space-y-6">
          {[
            "Share the Job Requirements",
            "Assess & Shortlist the Candidates",
            "Interview & Hire",
            "Onboard & Manage"
          ].map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-dark-blue">{index + 1}</span>
              <span className="text-gray-900 font-medium">{step}</span>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <img
            src={check}
            alt="Hiring process illustration"
            className="w-72 max-w-sm mx-36"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <a
          href="#"
          className="bg-dark-blue text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-800 transition"
        >
          Find Your Dev Team
        </a>
      </div>
    </section>

    <Footer />

        </>

    )
}

export default Industries;