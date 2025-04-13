import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Clinic */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-montserrat font-semibold mb-6 text-white">Dr. Ayaan <span className="text-primary-400">Homeopathy</span></h3>
            <p className="mb-4 text-gray-400 leading-relaxed">
              Providing personalized homeopathic care with natural remedies for optimal health and healing. With over 15 years of experience, we focus on treating the root cause of diseases naturally.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> About Dr. Ayaan
                </Link>
              </li>
              <li>
                <Link to="/homeopathy" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Homeopathy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Success Stories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Health Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/chronic-diseases" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Chronic Disease Treatment
                </Link>
              </li>
              <li>
                <Link to="/services/acute-conditions" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Acute Conditions
                </Link>
              </li>
              <li>
                <Link to="/services/pediatric-care" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Pediatric Care
                </Link>
              </li>
              <li>
                <Link to="/services/geriatric-care" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Geriatric Care
                </Link>
              </li>
              <li>
                <Link to="/services/allergy-treatment" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Allergy Treatment
                </Link>
              </li>
              <li>
                <Link to="/services/digestive-disorders" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Digestive Disorders
                </Link>
              </li>
              <li>
                <Link to="/services/skin-care" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Skin Care
                </Link>
              </li>
              <li>
                <Link to="/services/mental-health" className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Mental Health
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3" />
                <p className="text-gray-400">
                  123 Clinic Address, <br />
                  Main Street, City - 123456, <br />
                  State, Country
                </p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-primary-400 mr-3" />
                <p className="text-gray-400">+91 9876543210</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <p className="text-gray-400">dr.ayaan@example.com</p>
              </div>
              <div className="flex items-start">
                <FaClock className="text-primary-400 mt-1.5 mr-3" />
                <div className="text-gray-400">
                  <p className="mb-1">Monday - Saturday:</p>
                  <p className="mb-1">9:00 AM - 7:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-6 md:mb-0 md:w-1/2">
              <h4 className="text-lg font-montserrat font-semibold text-white mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-gray-400">Get health tips, latest updates and exclusive offers right in your inbox.</p>
            </div>
            <div className="md:w-1/2 max-w-md">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-gray-800 text-gray-200 px-4 py-3 rounded-md sm:rounded-r-none flex-grow focus:outline-none focus:ring-2 focus:ring-primary-400 mb-2 sm:mb-0"
                />
                <button
                  className="bg-primary-600 hover:bg-primary-700 transition duration-300 text-white font-medium px-6 py-3 rounded-md sm:rounded-l-none"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} Dr. Ayaan Homeopathy Clinic. All Rights Reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-primary-400 transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary-400 transition duration-300">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="hover:text-primary-400 transition duration-300">
                Disclaimer
              </Link>
              <Link to="/sitemap" className="hover:text-primary-400 transition duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
