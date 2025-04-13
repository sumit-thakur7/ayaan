import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gray-50">
      <motion.div
        className="max-w-md w-full text-center p-8 bg-white rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-7xl font-bold mb-4 text-primary-600"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.div>

        <h1 className="text-2xl font-montserrat font-bold mb-4 text-gray-800">
          Page Not Found
        </h1>

        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col space-y-3">
          <Link
            to="/"
            className="btn-hover-effect flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition duration-300"
          >
            <FaHome className="mr-2" />
            Return to Home
          </Link>

          <div className="flex space-x-3">
            <Link
              to="/contact"
              className="btn-hover-effect flex-1 flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-md transition duration-300"
            >
              <FaEnvelope className="mr-2" />
              Contact Us
            </Link>

            <a
              href="tel:+919876543210"
              className="btn-hover-effect flex-1 flex items-center justify-center px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-md transition duration-300"
            >
              <FaPhone className="mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
