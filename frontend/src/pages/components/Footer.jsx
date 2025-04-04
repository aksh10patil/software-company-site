import logo from '../../assets/logo.jpeg'



export default function Footer  () {


    return (
        <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Alpixn Logo" className="h-16 rounded-md"  />
            </div>
            <p className="text-lg font-medium mb-2">Building Digital Products for Startups</p>
            <div className="mt-6">
              <button className="light-blue hover:bg-dark-blue text-gray-900 font-medium py-2 px-6 rounded-md transition duration-300">
                Let's have a talk
              </button>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-span-1">
            <h3 className="text-light-blue text-xl font-medium mb-6">Services we offer</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-light-blue hover:text-blue-200">Our Services</a></li>
              <li>
                <p className="text-light-blue hover:text-blue-200 mb-2">What we do</p>
                <ul className="pl-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-light-blue mr-2">▸</span>
                    <span>Product workflow development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    <span>UI/UX research and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    <span>Product development services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">▸</span>
                    <span>Quality assurance</span>
                  </li>
                </ul>
              </li>
              <li><a href="#" className="text-light-blue hover:text-blue-200">Our Process</a></li>
              <li><a href="#" className="text-light-blue hover:text-blue-200">Our Blog</a></li>
              <li><a href="#" className="text-light-blue hover:text-blue-200">Our Clients</a></li>
              <li><a href="#" className="text-light-blue hover:text-blue-200">About Us</a></li>
              <li><a href="#" className="text-light-blue hover:text-blue-200">Testimonials</a></li>
            </ul>
          </div>

          {/* Empty Column for Spacing (mimicking the vertical line) */}
          <div className="hidden md:block md:col-span-1 border-l border-teal-800 mx-auto h-full"></div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-light-blue text-xl font-medium mb-6">Contact Us</h3>
            <div className="space-y-6">
              <div>
                <p className="text-light-blue mb-2">Mobile</p>
                <p>India: +91 7069990055</p>
              </div>
              <div>
                <p className="text-light-blue mb-2">Email</p>
                <p>info@Alpixn.com</p>
              </div>
              <div>
                <p className="text-light-blue mb-2">Follow Us</p>
                <div className="flex space-x-2 mt-2">
                  <a href="#" className="light-blue p-2 rounded-md hover:bg-dark-blue transition duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                    </svg>
                  </a>
                  <a href="#" className="light-blue p-2 rounded-md hover:bg-dark-blue transition duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" className="light-blue p-2 rounded-md hover:bg-dark-blue transition duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="light-blue p-2 rounded-md hover:bg-dark-blue transition duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm opacity-70">
          <p>© All Rights reserved -  Alpixn Technologies Private Limited</p>
        </div>
      </div>
    </footer>
    )
}