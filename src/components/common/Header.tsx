import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 shadow-md bg-white' : 'absolute bg-transparent'}`}>
      {/* Top Info Bar */}
      <div className="hidden md:block bg-primary-600 text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <FaPhoneAlt className="mr-2 text-xs" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center text-sm">
              <FaMapMarkerAlt className="mr-2 text-xs" />
              <span>123 Clinic Address, City - 123456</span>
            </div>
          </div>
          <div>
            <Link
              to="/appointment"
              className="flex items-center text-sm font-medium hover:underline"
            >
              <FaCalendarAlt className="mr-2" />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-primary-600 font-montserrat font-bold text-2xl">
              Dr. Ayaan
              <span className="block text-sm text-secondary-600 font-medium">Homeopathy Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/homeopathy"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`
              }
            >
              Homeopathy
            </NavLink>

            {/* Services with Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 rounded-md text-sm font-medium flex items-center text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition duration-300"
                onClick={() => toggleDropdown('services')}
              >
                Services <FaChevronDown className="ml-1 h-3 w-3" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
                  >
                    <div className="py-1">
                      <Link to="/services/chronic-diseases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                        Chronic Diseases
                      </Link>
                      <Link to="/services/acute-conditions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                        Acute Conditions
                      </Link>
                      <Link to="/services/pediatric-care" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                        Pediatric Care
                      </Link>
                      <Link to="/services/geriatric-care" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                        Geriatric Care
                      </Link>
                      <Link to="/services" className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50">
                        View All Services
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/success-stories"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`
              }
            >
              Success Stories
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                  isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                }`
              }
            >
              Contact
            </NavLink>

            <Link
              to="/appointment"
              className="btn-hover-effect bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ml-2"
            >
              Appointment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-600 hover:text-primary-800 hover:bg-primary-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>

              <NavLink
                to="/homeopathy"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Homeopathy
              </NavLink>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobileServices')}
                  className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                >
                  <span>Services</span>
                  <FaChevronDown className={`h-4 w-4 transform transition-transform ${activeDropdown === 'mobileServices' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'mobileServices' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4"
                    >
                      <Link
                        to="/services/chronic-diseases"
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Chronic Diseases
                      </Link>
                      <Link
                        to="/services/acute-conditions"
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Acute Conditions
                      </Link>
                      <Link
                        to="/services/pediatric-care"
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Pediatric Care
                      </Link>
                      <Link
                        to="/services/geriatric-care"
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Geriatric Care
                      </Link>
                      <Link
                        to="/services"
                        className="block px-3 py-2 text-sm font-medium text-primary-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        View All Services
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/success-stories"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>

              <Link
                to="/appointment"
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-md text-base font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>

              {/* Contact Info in Mobile Menu */}
              <div className="pt-4 pb-2 border-t border-gray-200">
                <div className="flex items-center px-3 py-2">
                  <FaPhoneAlt className="text-primary-600 mr-2" />
                  <span className="text-sm">+91 9876543210</span>
                </div>
                <div className="flex items-center px-3 py-2">
                  <FaMapMarkerAlt className="text-primary-600 mr-2" />
                  <span className="text-sm">123 Clinic Address, City - 123456</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
