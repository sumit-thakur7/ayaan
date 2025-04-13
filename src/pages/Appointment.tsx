import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaClock, FaCalendarAlt, FaInfoCircle, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    healthConcern: '',
    additionalInfo: '',
    previousTreatment: '',
    heardFrom: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for the field being changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.appointmentType) {
      newErrors.appointmentType = 'Please select an appointment type';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (!formData.healthConcern.trim()) {
      newErrors.healthConcern = 'Please describe your health concern';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        appointmentType: '',
        preferredDate: '',
        preferredTime: '',
        healthConcern: '',
        additionalInfo: '',
        previousTreatment: '',
        heardFrom: ''
      });

      // Scroll to top to show the success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Get today's date in YYYY-MM-DD format for min date in date picker
  const today = new Date().toISOString().split('T')[0];

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
              Book an <span className="text-primary-600">Appointment</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Schedule a consultation with Dr. Ayaan to start your journey towards holistic wellness through homeopathy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg mb-10 border-l-4 border-green-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <FaCheck className="text-2xl text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">Appointment Request Submitted!</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Thank you for scheduling an appointment with Dr. Ayaan. We have received your request and will confirm your appointment shortly.
                    </p>
                    <p className="text-gray-700">
                      Our team will contact you within 24 hours to confirm your appointment date and time. If you have any questions in the meantime, please feel free to call us at +91 9876543210.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-900 mb-4">Appointment Request Form</h2>
                <p className="text-gray-600 mb-8">
                  Please fill out the form below to request an appointment. Fields marked with * are required.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Personal Information */}
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="bg-primary-100 text-primary-600 p-1 rounded-full mr-2">
                          <FaInfoCircle />
                        </span>
                        Personal Information
                      </h3>
                    </div>

                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200 ${
                          errors.fullName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                      )}
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
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="heardFrom" className="block text-sm font-medium text-gray-700 mb-1">
                        How did you hear about us?
                      </label>
                      <select
                        id="heardFrom"
                        name="heardFrom"
                        value={formData.heardFrom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200"
                      >
                        <option value="">Select an option</option>
                        <option value="Search Engine">Search Engine</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Friend or Family">Friend or Family</option>
                        <option value="Doctor Referral">Doctor Referral</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Appointment Details */}
                    <div className="md:col-span-2 mt-6">
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="bg-primary-100 text-primary-600 p-1 rounded-full mr-2">
                          <FaCalendarAlt />
                        </span>
                        Appointment Details
                      </h3>
                    </div>

                    <div>
                      <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-1">
                        Appointment Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="appointmentType"
                        name="appointmentType"
                        value={formData.appointmentType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200 ${
                          errors.appointmentType ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select appointment type</option>
                        <option value="New Patient Consultation">New Patient Consultation</option>
                        <option value="Follow-up Consultation">Follow-up Consultation</option>
                        <option value="Urgent Consultation">Urgent Consultation</option>
                        <option value="Online Consultation">Online Consultation</option>
                      </select>
                      {errors.appointmentType && (
                        <p className="mt-1 text-sm text-red-500">{errors.appointmentType}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={today}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200 ${
                          errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-sm text-red-500">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200 ${
                          errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select preferred time</option>
                        <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                        <option value="Evening (3:00 PM - 7:00 PM)">Evening (3:00 PM - 7:00 PM)</option>
                      </select>
                      {errors.preferredTime && (
                        <p className="mt-1 text-sm text-red-500">{errors.preferredTime}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="previousTreatment" className="block text-sm font-medium text-gray-700 mb-1">
                        Have you received homeopathic treatment before?
                      </label>
                      <select
                        id="previousTreatment"
                        name="previousTreatment"
                        value={formData.previousTreatment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200"
                      >
                        <option value="">Select an option</option>
                        <option value="Yes, currently receiving">Yes, currently receiving</option>
                        <option value="Yes, in the past">Yes, in the past</option>
                        <option value="No, first time">No, first time</option>
                      </select>
                    </div>

                    {/* Health Information */}
                    <div className="md:col-span-2 mt-6">
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="bg-primary-100 text-primary-600 p-1 rounded-full mr-2">
                          <FaClock />
                        </span>
                        Health Information
                      </h3>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="healthConcern" className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Health Concern/Reason for Visit <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="healthConcern"
                        name="healthConcern"
                        value={formData.healthConcern}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200 ${
                          errors.healthConcern ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Please describe your main health concern and symptoms"
                      />
                      {errors.healthConcern && (
                        <p className="mt-1 text-sm text-red-500">{errors.healthConcern}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information (optional)
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition duration-200"
                        placeholder="Any allergies, current medications, or other relevant medical information"
                      />
                    </div>

                    {/* Notice */}
                    <div className="md:col-span-2 mt-4">
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex">
                        <div className="flex-shrink-0">
                          <FaExclamationTriangle className="h-5 w-5 text-yellow-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            This form is for appointment requests only. We will contact you to confirm the date and time. For urgent concerns, please call us directly at +91 9876543210.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-6">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-6 text-white font-medium rounded-md transition duration-300 ${
                          isLoading
                            ? 'bg-primary-400 cursor-not-allowed'
                            : 'bg-primary-600 hover:bg-primary-700 btn-hover-effect'
                        }`}
                      >
                        {isLoading ? 'Submitting...' : 'Request Appointment'}
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Appointment Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's some information about our consultation process to help you prepare for your appointment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <span className="text-xl font-bold text-primary-600">1</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold">Initial Consultation</h3>
              </div>
              <p className="text-gray-700">
                The first appointment typically lasts 60-90 minutes. Dr. Ayaan will conduct a thorough review of your health history, current symptoms, lifestyle, and emotional well-being.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <span className="text-xl font-bold text-primary-600">2</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold">What to Bring</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• List of current medications and supplements</li>
                <li>• Recent medical test reports (if available)</li>
                <li>• Details of previous treatments</li>
                <li>• Notes about your symptoms and concerns</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              variants={fadeIn}
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 p-2 rounded-full mr-3">
                  <span className="text-xl font-bold text-primary-600">3</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold">Follow-Up Care</h3>
              </div>
              <p className="text-gray-700">
                After your initial consultation, follow-up appointments will be scheduled to monitor your progress and adjust your treatment as needed. These typically last 30-45 minutes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-primary-50 p-8 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-6 text-center">Clinic Hours</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-montserrat font-semibold mb-3 text-primary-700">Consultation Hours</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-montserrat font-semibold mb-3 text-primary-700">Medicine Collection</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  For urgent matters outside of clinic hours, please call +91 9876543210.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
