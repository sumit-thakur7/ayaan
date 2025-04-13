import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat,
  FaLungs,
  FaChild,
  FaBrain,
  FaUserMd,
  FaSun,
  FaStomach,
  FaFemale,
  FaAllergies,
  FaSleeping,
  FaPlus,
  FaArrowRight
} from 'react-icons/fa';

const Services = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const mainServices = [
    {
      id: "chronic-diseases",
      icon: <FaHeartbeat className="text-4xl text-primary-500 mb-4" />,
      title: "Chronic Disease Management",
      description: "Effective treatment for persistent conditions like hypertension, diabetes, arthritis, and asthma with personalized homeopathic protocols.",
      benefits: [
        "Non-invasive treatment approach",
        "Addresses root causes rather than symptoms",
        "Improves quality of life",
        "Reduces dependency on conventional medications"
      ]
    },
    {
      id: "respiratory-issues",
      icon: <FaLungs className="text-4xl text-primary-500 mb-4" />,
      title: "Respiratory Disorders",
      description: "Homeopathic solutions for allergies, asthma, recurring sinusitis, bronchitis, and other respiratory conditions for improved breathing.",
      benefits: [
        "Natural relief from breathing difficulties",
        "Strengthens respiratory system",
        "Reduces recurrence of seasonal issues",
        "Safe for long-term management"
      ]
    },
    {
      id: "pediatric-care",
      icon: <FaChild className="text-4xl text-primary-500 mb-4" />,
      title: "Pediatric Care",
      description: "Gentle, effective treatments for children's health concerns, including recurrent infections, behavioral issues, and developmental challenges.",
      benefits: [
        "Safe for infants and children",
        "No harmful side effects",
        "Strengthens immune system",
        "Addresses developmental concerns naturally"
      ]
    },
    {
      id: "mental-health",
      icon: <FaBrain className="text-4xl text-primary-500 mb-4" />,
      title: "Mental Health Support",
      description: "Holistic approach to anxiety, depression, stress disorders, and other mental health conditions with individualized remedies.",
      benefits: [
        "No dependency or sedative effects",
        "Addresses emotional and physical symptoms",
        "Improves sleep and mental clarity",
        "Complementary to conventional treatment"
      ]
    }
  ];

  const additionalServices = [
    {
      id: "skin-disorders",
      icon: <FaSun className="text-3xl text-primary-500" />,
      title: "Skin Disorders",
      description: "Treatment for eczema, psoriasis, acne, and other skin conditions through constitutional care."
    },
    {
      id: "digestive-issues",
      icon: <FaStomach className="text-3xl text-primary-500" />,
      title: "Digestive Disorders",
      description: "Solutions for IBS, acid reflux, chronic constipation, and other gastrointestinal issues."
    },
    {
      id: "womens-health",
      icon: <FaFemale className="text-3xl text-primary-500" />,
      title: "Women's Health",
      description: "Specialized treatments for hormonal imbalances, menstrual problems, fertility issues, and menopause."
    },
    {
      id: "allergy-treatment",
      icon: <FaAllergies className="text-3xl text-primary-500" />,
      title: "Allergy Management",
      description: "Natural approach to food allergies, seasonal allergies, and skin allergies without side effects."
    },
    {
      id: "sleep-disorders",
      icon: <FaSleeping className="text-3xl text-primary-500" />,
      title: "Sleep Disorders",
      description: "Effective remedies for insomnia, sleep apnea, and other sleep-related issues for restful nights."
    },
    {
      id: "geriatric-care",
      icon: <FaUserMd className="text-3xl text-primary-500" />,
      title: "Geriatric Care",
      description: "Specialized care for elderly patients with age-related concerns and multi-system disorders."
    }
  ];

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
              Our <span className="text-primary-600">Homeopathic</span> Services
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Dr. Ayaan provides personalized homeopathic care addressing a wide range of health conditions. Discover how our holistic approach can help you achieve optimal wellness.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">Our Treatment Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Dr. Ayaan's Homeopathy Clinic, we follow a comprehensive approach to health and healing. Each treatment plan is highly individualized based on your unique symptoms, constitution, and health history.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our consultation process is thorough, taking into account physical symptoms, emotional well-being, and lifestyle factors. We believe in treating the root cause of illness rather than simply suppressing symptoms, leading to long-lasting health improvements.
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                <FaPlus className="mr-2" />
                <span>Each remedy is selected based on your individual constitution</span>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://www.shutterstock.com/image-photo/doctor-consulting-patient-clinical-260nw-2191880035.jpg"
                  alt="Doctor consultation"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dr. Ayaan specializes in treating a wide range of conditions using personalized homeopathic protocols.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="card-hover-effect bg-white p-8 rounded-xl shadow-md border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
                variants={fadeIn}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0">
                    <div className="flex justify-center items-center">
                      {service.icon}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-montserrat font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>

                    <h4 className="text-lg font-montserrat font-medium text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={`${service.id}-benefit-${idx}`} className="flex items-center">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">Additional Specialties</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core services, we offer specialized care for various health conditions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="card-hover-effect bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
                variants={fadeIn}
              >
                <div className="flex items-start">
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">Our Treatment Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding what to expect during your homeopathic treatment journey with Dr. Ayaan.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 z-0"></div>

              <motion.div
                className="flex flex-col md:flex-row items-center mb-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={1}
                variants={fadeIn}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16 text-right">
                  <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">Initial Consultation</h3>
                  <p className="text-gray-700">
                    A comprehensive 60-90 minute session to understand your health concerns, medical history, lifestyle, and constitutional characteristics.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full font-bold text-xl">
                  1
                </div>
                <div className="md:hidden flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full font-bold text-xl mb-4">
                  1
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <img
                    src="https://media.istockphoto.com/id/1483051996/photo/female-patient-shakes-hands-with-the-female-healthcare-professional.jpg?s=612x612&w=0&k=20&c=0skmtVHVj1RpVXWOjZvrT-pKh3DQAp8NYZgZbbogvnE="
                    alt="Initial Consultation"
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row-reverse items-center mb-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={2}
                variants={fadeIn}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:pl-16">
                  <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">Personalized Treatment Plan</h3>
                  <p className="text-gray-700">
                    Based on your consultation, Dr. Ayaan will develop a tailored homeopathic prescription and lifestyle recommendations specific to your needs.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full font-bold text-xl">
                  2
                </div>
                <div className="md:hidden flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full font-bold text-xl mb-4">
                  2
                </div>
                <div className="md:w-1/2 md:pr-16 text-right">
                  <img
                    src="https://media.istockphoto.com/id/1406496671/photo/psychiatrist-or-professional-psychologist-counseling-or-therapy-session-to-male-patients.jpg?s=612x612&w=0&k=20&c=8hA0uzGJoMWohJWEtNUgNemRHawAR5Sw2frrEwW_ldY="
                    alt="Treatment Plan"
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center mb-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={3}
                variants={fadeIn}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-16 text-right">
                  <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">Follow-up Consultations</h3>
                  <p className="text-gray-700">
                    Regular follow-ups every 4-6 weeks to monitor progress, assess changes, and adjust treatment as needed for optimal results.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full font-bold text-xl">
                  3
                </div>
                <div className="md:hidden flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full font-bold text-xl mb-4">
                  3
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <img
                    src="https://media.istockphoto.com/id/1719539154/photo/home-care-healthcare-professional-hugging-senior-patient.jpg?s=612x612&w=0&k=20&c=t-dk4CGZ2BjGAj4XIljgMNqcPmS_h-qku70ofdyrHE4="
                    alt="Follow-up Consultations"
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row-reverse items-center relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={4}
                variants={fadeIn}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:pl-16">
                  <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">Long-term Health Management</h3>
                  <p className="text-gray-700">
                    Ongoing support and care to maintain your improved health status and prevent recurrence of symptoms for lasting wellness.
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full font-bold text-xl">
                  4
                </div>
                <div className="md:hidden flex items-center justify-center bg-primary-600 text-white w-12 h-12 rounded-full font-bold text-xl mb-4">
                  4
                </div>
                <div className="md:w-1/2 md:pr-16 text-right">
                  <img
                    src="https://media.istockphoto.com/id/1400053534/photo/young-patient-in-a-consult-with-his-doctor-african-american-doctor-showing-a-patient-their.jpg?s=612x612&w=0&k=20&c=rOkv0N_1p-_q7Hz3TDLfzx11CIjHQpGIai93OH_tztw="
                    alt="Health Management"
                    className="rounded-lg shadow-md w-full h-48 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-montserrat font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Start Your Healing Journey Today
            </motion.h2>

            <motion.p
              className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Book a consultation with Dr. Ayaan and discover how homeopathy can address your specific health concerns naturally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/appointment"
                className="btn-hover-effect inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-md text-lg font-medium transition duration-300"
              >
                Book an Appointment <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
