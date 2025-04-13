import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-50 to-secondary-50 py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-200 rounded-full -ml-32 -mb-16" />
          <div className="absolute right-0 top-0 w-80 h-80 bg-secondary-200 rounded-full -mr-40 -mt-40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact <span className="text-primary-600">Us</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're here to answer your questions and provide assistance. Reach out to us through any of the channels below.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeIn}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-2xl text-primary-600" />
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Clinic Address, <br />
                Main Street, City - 123456, <br />
                State, Country
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <FaPhoneAlt className="text-2xl text-primary-600" />
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-1">+91 9876543210</p>
              <p className="text-gray-600">+91 1234567890</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={fadeIn}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <FaEnvelope className="text-2xl text-primary-600" />
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-1">dr.ayaan@example.com</p>
              <p className="text-gray-600">info@drayaan.com</p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              variants={fadeIn}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <FaClock className="text-2xl text-primary-600" />
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600 mb-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row -mx-4">
            <motion.div
              className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeIn}
            >
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start mb-6">
                    <FaCheck className="text-green-500 mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium text-green-800">Message sent successfully!</h3>
                      <p className="text-green-700 text-sm">Thank you for contacting us. We'll get back to you shortly.</p>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Appointment">Appointment</option>
                        <option value="Treatment Question">Treatment Question</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3 px-6 text-white font-medium rounded-md transition duration-300 ${
                      isLoading
                        ? 'bg-primary-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 btn-hover-effect'
                    }`}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <div className="bg-white p-3 rounded-xl shadow-md h-full">
                <div className="rounded-lg overflow-hidden h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3349489275074!2d77.21162647619321!3d28.528455789475803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce17cfba02a11%3A0x966f0e7deeb3eb6b!2sSaket%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1707131254025!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location Map"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our clinic and appointments.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-6 bg-gray-50 p-6 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">
                How do I schedule an appointment?
              </h3>
              <p className="text-gray-700">
                You can schedule an appointment by calling our clinic directly at +91 9876543210, using our online appointment form, or sending us an email. We'll respond promptly to confirm your appointment.
              </p>
            </motion.div>

            <motion.div
              className="mb-6 bg-gray-50 p-6 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={fadeIn}
            >
              <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">
                What should I bring to my first appointment?
              </h3>
              <p className="text-gray-700">
                Please bring your medical history records, any recent test reports, a list of current medications, and details of any treatments you've already tried. This helps us provide more personalized care.
              </p>
            </motion.div>

            <motion.div
              className="mb-6 bg-gray-50 p-6 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              variants={fadeIn}
            >
              <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">
                Do you provide online consultations?
              </h3>
              <p className="text-gray-700">
                Yes, we offer online consultations for patients who cannot visit our clinic in person. These virtual appointments are conducted via secure video conferencing and are equally comprehensive.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
              variants={fadeIn}
            >
              <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">
                How long does a typical consultation take?
              </h3>
              <p className="text-gray-700">
                The initial consultation usually lasts 60-90 minutes as we conduct a thorough assessment. Follow-up appointments are typically shorter, lasting about 30-45 minutes, depending on your specific situation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
