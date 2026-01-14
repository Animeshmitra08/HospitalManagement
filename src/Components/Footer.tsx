import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane, FaTwitter } from "react-icons/fa";

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 py-16 border-t border-gray-200 relative">

      <div className="absolute inset-0">
        <img 
        src="./assets/10515406.png"
        className="w-full h-full object-fill opacity-25"
        />
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4 relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
              Company
            </h3>
            <ul className="space-y-2">
              {['About', 'Features', 'Works', 'Careers', 'Locations'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative inline-block transition-all duration-300 hover:text-blue-600 hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4 relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
              Treatments
            </h3>
            <ul className="space-y-2">
              {['Dental', 'Cardiac', 'Spinal Cord', 'Hair Growth', 'Anemia & Disorder'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block transition-all duration-300 hover:text-blue-600 hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4 relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
              Specialities
            </h3>
            <ul className="space-y-2">
              {['Transplant', 'Cardiologist', 'Oncology', 'Pediatrics', 'Gynacology'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block transition-all duration-300 hover:text-blue-600 hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-900 text-lg font-semibold mb-4 relative inline-block after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-gray-500">
              Subscribe & stay updated from Doccure
            </p>

            <div className="flex group">
              <input
                type="email"
                placeholder="Enter Email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-50 border border-gray-300 transition-all duration-300 focus:-translate-y-0.5 focus:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="px-6 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-r-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <FaPaperPlane
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="flex space-x-4 mt-6">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 Doccure. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Legal Notice', 'Privacy Policy', 'Refund Policy'].map(item => (
              <a
                key={item}
                href="#"
                className="text-sm transition-all duration-300 hover:text-blue-600 hover:-translate-y-0.5"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
