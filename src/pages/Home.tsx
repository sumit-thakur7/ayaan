import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaLeaf,
  FaHeartbeat,
  FaBrain,
  FaChild,
  FaUserMd,
  FaCertificate,
  FaStethoscope,
  FaCalendarCheck,
  FaArrowRight
} from 'react-icons/fa';

const Home = () => {
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

  const serviceCards = [
    {
      icon: <FaLeaf className="text-3xl text-primary-500 mb-4" />,
      title: "Natural Healing",
      description: "Homeopathic remedies stimulate the body's natural healing mechanisms without side effects.",
      link: "/homeopathy"
    },
    {
      icon: <FaHeartbeat className="text-3xl text-primary-500 mb-4" />,
      title: "Chronic Diseases",
      description: "Effective treatment for chronic diseases focusing on the root cause rather than just symptoms.",
      link: "/services/chronic-diseases"
    },
    {
      icon: <FaBrain className="text-3xl text-primary-500 mb-4" />,
      title: "Mental Health",
      description: "Holistic approach to anxiety, depression, stress, and other mental health conditions.",
      link: "/services/mental-health"
    },
    {
      icon: <FaChild className="text-3xl text-primary-500 mb-4" />,
      title: "Pediatric Care",
      description: "Gentle and effective treatments for children's health issues and developmental concerns.",
      link: "/services/pediatric-care"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      condition: "Chronic Migraine",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "After suffering from migraines for over 10 years, Dr. Ayaan's homeopathic treatment has reduced my episodes by 90%. I can finally live a normal life!"
    },
    {
      name: "Priya Patel",
      condition: "Skin Allergy",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "I had severe skin allergies that weren't responding to conventional treatments. Dr. Ayaan's personalized approach has cleared my skin completely in just 3 months."
    },
    {
      name: "Amit Kumar",
      condition: "Digestive Issues",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: "I've struggled with IBS for years. Dr. Ayaan's holistic treatment plan not only addressed my symptoms but improved my overall gut health and wellbeing."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-50 to-secondary-50 py-20 md:py-28">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary-200 rounded-full -ml-32 -mb-16"></div>
          <div className="absolute right-0 top-0 w-80 h-80 bg-secondary-200 rounded-full -mr-40 -mt-40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Natural Healing with <span className="text-primary-600">Homeopathic</span> Approach
              </motion.h1>

              <motion.p
                className="text-lg text-gray-700 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Experience the power of holistic healing with Dr. Ayaan's personalized homeopathic treatments. We focus on treating the root cause, not just the symptoms.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  to="/appointment"
                  className="btn-hover-effect bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center"
                >
                  Book Appointment <FaCalendarCheck className="ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="btn-hover-effect bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 px-8 py-3 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center"
                >
                  About Dr. Ayaan <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://media.istockphoto.com/id/466628811/photo/alternative-medicine.jpg?s=612x612&w=0&k=20&c=xGUFtYeRC8SuOPLkt9XxmKN85RlMkqDy7toQJWt1YEM="
                    alt="Homeopathic medicine"
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 text-primary-600">
                    <FaCertificate className="text-2xl" />
                    <span className="font-medium">Certified Homeopath</span>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2 text-primary-600">
                    <FaStethoscope className="text-2xl" />
                    <span className="font-medium">15+ Years Experience</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">Our Homeopathic Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive range of homeopathic treatments to address various health conditions naturally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                className="card-hover-effect bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
                variants={fadeIn}
              >
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-primary-600 font-medium hover:text-primary-700 flex items-center justify-center">
                  Learn More <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={5}
            variants={fadeIn}
          >
            <Link
              to="/services"
              className="btn-hover-effect inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-md transition duration-300"
            >
              View All Services <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              className="lg:w-2/5 mb-10 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeIn}
            >
              <div className="relative">
                <img
                  src="https://www.shutterstock.com/image-photo/indian-male-doctor-consulting-senior-600nw-2036186195.jpg"
                  alt="Dr. Ayaan"
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                />
                <div className="absolute bottom-4 right-4 bg-primary-600 text-white py-2 px-4 rounded-lg">
                  <div className="font-medium">15+ Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-3/5 lg:pl-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">Meet Dr. Ayaan</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Ayaan is a highly qualified homeopathic physician with over 15 years of experience in treating various acute and chronic ailments. With a patient-centered approach, he believes in addressing the root cause of diseases rather than just alleviating symptoms.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                His expertise covers a wide range of conditions including respiratory disorders, skin problems, digestive issues, women's health, pediatric care, and mental health concerns. His compassionate care and personalized treatment plans have helped thousands of patients live healthier lives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                  <div className="text-gray-600 text-center">Years Experience</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">10,000+</div>
                  <div className="text-gray-600 text-center">Patients Treated</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-1">95%</div>
                  <div className="text-gray-600 text-center">Success Rate</div>
                </div>
              </div>

              <Link
                to="/about"
                className="btn-hover-effect inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition duration-300"
              >
                Learn More About Dr. Ayaan <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">Patient Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read how our homeopathic treatments have transformed the lives of our patients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card-hover-effect bg-white rounded-xl p-6 shadow-md border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-200"
                  />
                  <div>
                    <h4 className="text-lg font-montserrat font-semibold">{testimonial.name}</h4>
                    <p className="text-primary-600">{testimonial.condition}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
            variants={fadeIn}
          >
            <Link
              to="/success-stories"
              className="btn-hover-effect inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 bg-white hover:bg-primary-50 rounded-md transition duration-300"
            >
              View All Success Stories <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              className="lg:w-2/3 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">Ready to Start Your Healing Journey?</h2>
              <p className="text-lg opacity-90">
                Schedule a consultation with Dr. Ayaan today and take the first step towards natural healing and better health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/appointment"
                className="btn-hover-effect inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-md text-lg font-medium transition duration-300"
              >
                Book Appointment <FaCalendarCheck className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
