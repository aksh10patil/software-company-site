import Header from './components/Header'
import Footer from './components/Footer'
import aws from '../../src/assets/aws.png'
import cmmi from '../../src/assets/cmmi.png'
import pal from '../../src/assets/pal.png'
import devops from '../../src/assets/devops.png'
import soc2 from '../../src/assets/soc2.png'
import ecomn  from '../../src/assets/ecomn.png'
import medical from '../../src/assets/medical.png'
import check from '../../src/assets/check.png'
import insurance from '../../src/assets/insurance.png'
import sec from '../../src/assets/sec.png'
import realestate from '../../src/assets/realestate.png'
import education from '../../src/assets/education.png'
import food from '../../src/assets/food.png'
import log from '../../src/assets/log.png'
import sporttech from '../../src/assets/sporttech.png'
import agri from '../../src/assets/agri.png'
import manu2 from '../../src/assets/manu2.png'
import manu from '../../src/assets/manu.png'
import oil from '../../src/assets/oil.png'
import solarbat from '../../src/assets/solarbat.png'



const whatsapplink = () => {
  const phoneNumber = '7069990055';
  
  const message = encodeURIComponent(
    `Hi, I want infromation regarding :\n`
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};


function Industries () {
    return (
        <>
        <Header />
    <section className="bg-gray-200 h-full px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            EMPOWERING INDUSTRIES TO INNOVATE
          </h2>
          <p className="text-gray-600 text-lg">
            Delivering successful digital products and platforms for diverse use cases across key industries.
          </p>
          <button onClick={whatsapplink} className="bg-dark-blue hover:bg-light-blue text-white hover:text-black font-medium py-3 px-6 rounded-md transition duration-300">
            Book a Call
          </button>
        </div>

        {/* Right Side - Certifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 justify-center items-center">
          <div className="p-3 md:p-4 bg-white shadow-lg rounded-lg">
            <img src={aws} alt="AWS Partner" className="w-full mx-auto"/>
          </div>
          <div className="p-3 md:p-4 bg-white shadow-lg rounded-lg">
            <img src={cmmi} alt="CMMI Level 3" className="w-full mx-auto"/>
          </div>
          <div className="p-3 md:p-4 bg-white shadow-lg rounded-lg">
            <img src={pal} alt="PAL I" className="w-full mx-auto"/>
          </div>
          <div className="p-3 md:p-4 bg-white shadow-lg rounded-lg">
            <img src={devops} alt="AWS DevOps Engineer" className="w-full mx-auto"/>
          </div>
          <div className="p-3 md:p-4 bg-white shadow-lg rounded-lg">
            <img src={soc2} alt="SOC 2 Compliance" className="w-full mx-auto"/>
          </div>
        </div>
      </div>
    </section>

    {/* Industry Sections */}
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">eCommerce Industry</h2>
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
          <div className="mt-6 text-center lg:text-left">
            <a
              onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={ecomn}
              alt="Excited shopper"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Reverse Section - Healthcare */}
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={medical}
              alt="Healthcare professional"
              className="w-full max-w-md mx-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Healthcare Industry</h2>
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
              <li>Medical Image Management</li>
              <li>Practice Management Solutions</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom Telehealth Solutions</li>
              <li>mHealth Apps Development</li>
              <li>Health Management Software</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
             onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Insurance Industry */}
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Insurance Industry</h2>
          <p className="text-gray-600 mt-4">
            Artificial Intelligence, Machine Learning, Predictive Analysis, and other technologies have brought
            ground-breaking changes to the insurance sector. 
          </p>
          <p className="text-gray-600 mt-2">
            From writing policy terms and conditions to claiming
            policies, everything has gone digital. In this scenario, not embracing technology should be the last thing on your mind. To save from such faux pas, we develop scalable and fully-featured insurance software and apps with 
            Alpixn to give your insurance business a leap forward.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>Insurance Comparison Platforms</li>
              <li>Predictive Analytics Software</li>
              <li>Payment Processing Software</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Policyholder Portals</li>
              <li>Agent Portals</li>
              <li>Insurance Risk Management Solutions</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
               onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={insurance}
              alt="Insurance concept"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Security Industry */}
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={sec}
              alt="Security concept"
              className="w-full max-w-md mx-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Security Industry</h2>
          <p className="text-gray-600 mt-4">
            Technological advancements have reshaped global security capabilities. Enabling many businesses as well as countries to monitor their security concerns. From using cybersecurity, and AI for interpreting images and illegal activities to using IoT for connected security, we provide complete security solutions. So that the businesses, organizations, and official sectors
            can integrate smart security services into their business process.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>Face Recognition Systems</li>
              <li>Phishing Awareness Platform</li>
              <li>Custom Access Control System</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Software Threat Protection Services</li>
              <li>Mobile Device Management</li>
              <li>Health Management Software</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
               onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Real Estate Industry */}
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Real Estate Industry</h2>
          <p className="text-gray-600 mt-4">
            Significantly, the Real-estate industry has moved towards embracing technology. To ease down the lengthy paper-works, enable seamless payment methods, have effective client management, and maintain transparency. With our real-estate development services backed by Big Data, AI & ML, Predictive Analysis, and Blockchain technology, you will experience a complete digital transformation
            of your real-estate business with greater client satisfaction.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>Mortgage Applications</li>
              <li>MLS Software for Real Estate</li>
              <li>Smart Homes</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Real Estate Mobile Apps</li>
              <li>Vendor Management Software</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
               onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={realestate}
              alt="Real estate concept"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Education Industry */}
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={education}
              alt="Education concept"
              className="w-full max-w-md mx-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Education Industry</h2>
          <p className="text-gray-600 mt-4">
            After the pandemic, the education sector reinvented & revived itself by moving toward modern technology. It massively gave rise to the Education Technology or EdTech industry. By 2027, the EdTech industry is expected to cross $3 billion. It's huge! Thus, digitalization brings transparency to education and many tools to help educators monitor homework, classes, submissions, smart teaching, etc. Owing to the potentiality of the technologies, we have also shifted our focus to the EdTech industry by helping businesses with cutting-edge R/VR, AI, IoT, decentralization, and more. And build easy-to-use, student-friendly, 
            and defining EdTech apps and websites.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>Learning Management System (LMS)</li>
              <li>Education Portals</li>
              <li>Knowledge Bases and Wikis</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom Tests and Assessments</li>
              <li>e-learning Reporting and Analytics</li>
              <li>Interactive Whiteboards</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
               onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Food and Beverages Industry */}
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Food and Beverages Industry</h2>
          <p className="text-gray-600 mt-4">
            Online food delivery systems, smart restaurant management, digital menu, 
            and other digital services in the food and beverage industry have swiftly turned businesses to adopt digitalization in their process. And leverage the benefits of all the merging technologies to the max as possible. Fret not, for the dedicated developers from eSParkBiz have years of experience in building top-rate chatbot-integrated food delivery systems and related applications. And can help you create your own, uniquely 
            styled F&B-related apps that users would love to visit again and again.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>Food Product Development Software</li>
              <li>Food Manufacturing ERP Systems</li>
              <li>Food Distribution and Supply Software Solutions</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Menu Creating and Management Software</li>
              <li>Kitchen Maintenance and Management Software</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
               onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={food}
              alt="Food industry concept"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    





    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={sporttech}
              alt="Education concept"
              className="w-full max-w-md mx-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Sports Industry</h2>
          <p className="text-gray-600 mt-4">
          Interest in various sports, exploring the digitalized sports industry is not a bad idea. Moreover, 
          technology is helping unlock unprecedented opportunities present in this industry. From widening 
          the content reach to engaging sponsors and generating revenue, a fully-functional and well-designed
           application plays a greater role in increasing sports awareness and availability. Additionally, 
           Fitness apps and sports coaching apps present completely different opportunities to explore sports ideas. 
           Then why not venture into this field by leveraging our 
          fitness/sports app development services and take your business idea a step ahead.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>Score Tracking & Scoreboard App</li>
              <li>Personal Training Mobile Apps</li>
              <li>Fitness Tracker Mobile Apps</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Betting Applications</li>
              <li>Custom Scoring System</li>
              <li>On-demand Sports App</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
               onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Food and Beverages Industry */}
    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Logistics and Transportation Industry</h2>
          <p className="text-gray-600 mt-4">
          From smart capacity optimization, effective route planning, and
           interconnectivity between shippers and warehouses to improving safety and customer experience,
            digitalization in the logistics and transportation industry is proving disruptive. 
            With Alpixn advanced software engineering, you can build fully-functional logistics and transportation
           apps and digital solutions to steer your growth towards innovation.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>Asset Tracking</li>
              <li>Warehouse Management</li>
              <li>GPS Monitoring System</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Supply Chain IoT Solutions</li>
              <li>Custom Mobile Applications</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
               onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={log}
              alt="Food industry concept"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>



    <section className="bg-white py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
          <div className="relative">
            <img
              src={agri}
              alt="Education concept"
              className="w-full max-w-md mx-auto rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Agri-tech Industry</h2>
          <p className="text-gray-600 mt-4">
          There are numerous inventive ways in which technology is
           now potentially disrupting the agriculture sector today.
            Statistically, the agriculture technology industry, or even 
            better termed the agri-tech industry is predicted to generate
             9 million jobs by 2024. And 50% of agri-tech startups have come 
             up that provide supply chain solutions. All of this and more has opened a plethora of opportunities for businesses looking to come up with something new in this actor. Here, our smart agri-tech solution scan assists you with powerful GPS technology, work process automation,
           global collaboration, streamlining supply and inventory, and so much more.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
            <ul className="list-disc list-inside space-y-2">
              <li>Farm Management Systems</li>
              <li>Supply Chain</li>
              <li>Aerial Imaging</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Smart IoT Sensors</li>
              <li>Indoor and Vertical Farming</li>
              <li>Robotics and Automation</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6 text-center lg:text-left">
            <a
               onClick={whatsapplink}
              className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
            >
              Inquire Now! <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>


    {/* Normal Layout - Infrastructure & Hydro */}
<section className="bg-white py-12 md:py-16 px-4 md:px-6">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
    
    {/* Text Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">
        Infrastructure & Hydro Industry
      </h2>
      <p className="text-gray-600 mt-4">
        The infrastructure and hydro sectors are embracing tech to drive smarter, safer, and more sustainable 
        development. Over <strong>78% of engineering firms</strong> believe digital tools improve project 
        efficiency and resilience.
      </p>
      <p className="text-gray-600 mt-2">
        From water resource optimization to smart infrastructure management, we provide digital solutions 
        tailored for modern public works and energy infrastructure projects.
      </p>

      {/* Features List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
        <ul className="list-disc list-inside space-y-2">
          <li>Hydroelectric Plant Monitoring</li>
          <li>Smart Infrastructure Dashboards</li>
          <li>Water Flow Management Systems</li>
        </ul>
        <ul className="list-disc list-inside space-y-2">
          <li>GIS & Mapping Solutions</li>
          <li>Construction Project Analytics</li>
          <li>Asset Lifecycle Management</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-6 text-center lg:text-left">
        <a
          onClick={whatsapplink}
          className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center"
        >
          Inquire Now! <span className="ml-2">→</span>
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
      <div className="relative">
        <img
          src={manu} // replace with your image path
          alt="Infrastructure and Hydro Projects"
          className="w-full max-w-md mx-auto rounded-lg shadow-sm"
        />
      </div>
    </div>
  </div>
</section>

<section className="bg-white py-12 md:py-16 px-4 md:px-6">
  <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
    <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
      <img src={manu2} alt="Manufacturing Industry" className="w-full max-w-md mx-auto rounded-lg shadow-sm" />
    </div>

    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Manufacturing Industry</h2>
      <p className="text-gray-600 mt-4">
        Automation and Industry 4.0 are redefining how manufacturers design, produce, and deliver goods.
        <strong>Over 60%</strong> of smart factories leverage AI and data analytics to optimize production.
      </p>
      <p className="text-gray-600 mt-2">
        We build scalable systems for predictive maintenance, workflow automation, and real-time quality assurance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
        <ul className="list-disc list-inside space-y-2">
          <li>Smart Factory Solutions</li>
          <li>Production Line Automation</li>
          <li>Digital Twin Technology</li>
        </ul>
        <ul className="list-disc list-inside space-y-2">
          <li>Inventory & SCM Platforms</li>
          <li>Predictive Maintenance</li>
          <li>Custom ERP Integration</li>
        </ul>
      </div>

      <div className="mt-6 text-center lg:text-left">
        <a onClick={whatsapplink} className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center">
        Inquire Now! <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  </div>
</section>



    

        {/* oil and gas industries */}

        <section className="bg-white py-12 md:py-16 px-4 md:px-6">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
    
    {/* Text Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Oil & Gas Industry</h2>
      <p className="text-gray-600 mt-4">
        Digital innovation is revolutionizing exploration, drilling, and logistics in the oil & gas sector.
        Around <strong>85% of industry leaders</strong> believe digital transformation improves asset utilization and sustainability.
      </p>
      <p className="text-gray-600 mt-2">
        Our smart software and IoT solutions help companies streamline operations, monitor pipelines in real-time,
        and reduce operational risks.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
        <ul className="list-disc list-inside space-y-2">
          <li>Pipeline Monitoring</li>
          <li>Asset Management Systems</li>
          <li>Remote Inspection Solutions</li>
        </ul>
        <ul className="list-disc list-inside space-y-2">
          <li>IoT-based Sensor Systems</li>
          <li>Energy Data Analytics</li>
          <li>Field Mobility Solutions</li>
        </ul>
      </div>

      <div className="mt-6 text-center lg:text-left">
        <a onClick={whatsapplink} className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center">
        Inquire Now! <span className="ml-2">→</span>
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
      <img src={oil} alt="Oil and Gas Industry" className="w-full max-w-md mx-auto rounded-lg shadow-sm" />
    </div>
  </div>
</section>

<section className="bg-white py-12 md:py-16 px-4 md:px-6">
  <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
    <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
      <img src={solarbat} alt="Solar and Battery Tech" className="w-full max-w-md mx-auto rounded-lg shadow-sm" />
    </div>

    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center lg:text-left">Solar & Battery Industry</h2>
      <p className="text-gray-600 mt-4">
        The renewable energy boom is driving adoption of solar grids, smart batteries, and home energy systems.
        <strong>Global solar adoption</strong> is expected to grow by 30% annually.
      </p>
      <p className="text-gray-600 mt-2">
        We empower companies with tools to monitor solar assets, manage battery life, and analyze energy production trends.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-dark-blue font-medium">
        <ul className="list-disc list-inside space-y-2">
          <li>Solar Panel Monitoring</li>
          <li>Battery Lifecycle Tools</li>
          <li>Energy Usage Dashboards</li>
        </ul>
        <ul className="list-disc list-inside space-y-2">
          <li>IoT & Sensor Integration</li>
          <li>Smart Grid Management</li>
          <li>Green Analytics Platforms</li>
        </ul>
      </div>

      <div className="mt-6 text-center lg:text-left">
        <a onClick={whatsapplink} className="text-lg font-bold text-dark-blue hover:underline inline-flex items-center">
        Inquire Now! <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  </div>
</section>

























    {/* Hiring Process Section */}
    <section className="bg-gray-100 py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
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
      <div className="mt-10 max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
          {[
            "Share the Job Requirements",
            "Assess & Shortlist the Candidates",
            "Interview & Hire",
            "Onboard & Manage"
          ].map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-xl md:text-2xl font-bold text-dark-blue">{index + 1}</span>
              <span className="text-gray-900 font-medium">{step}</span>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src={check}
            alt="Hiring process illustration"
            className="w-48 md:w-72"
          />
        </div>
      </div>







      {/* Call to Action */}
      <div className="mt-8 text-center">
        <a
           onClick={whatsapplink}
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