import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaFlask, FaHistory, FaBrain, FaCogs, FaQuestion, FaCheck, FaArrowRight } from 'react-icons/fa';

const Homeopathy = () => {
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

  const principles = [
    {
      icon: <FaLeaf className="text-3xl text-primary-500 mb-4" />,
      title: "Like Cures Like",
      description: "The principle of similars states that a substance that causes symptoms in a healthy person can cure similar symptoms in a sick person when prepared homeopathically."
    },
    {
      icon: <FaFlask className="text-3xl text-primary-500 mb-4" />,
      title: "Minimum Dose",
      description: "Homeopathic remedies are extremely diluted substances that work on an energetic level, avoiding side effects while stimulating the body's healing response."
    },
    {
      icon: <FaBrain className="text-3xl text-primary-500 mb-4" />,
      title: "Holistic Treatment",
      description: "Homeopathy treats the whole person—mind, body, and spirit—not just isolated symptoms or specific parts of the body."
    },
    {
      icon: <FaCogs className="text-3xl text-primary-500 mb-4" />,
      title: "Individualized Approach",
      description: "Each person is unique, so homeopathic treatments are carefully tailored to the individual's specific symptoms and constitution."
    }
  ];

  const faqs = [
    {
      question: "Is homeopathy scientifically proven?",
      answer: "While there is ongoing research, many clinical studies have shown positive results for homeopathy in treating various conditions. The mechanism of action may differ from conventional medicine, but many patients report significant benefits."
    },
    {
      question: "How long does homeopathic treatment take to work?",
      answer: "The timeline varies based on the condition and individual. Acute conditions may improve within hours or days, while chronic conditions might take weeks or months for substantial improvement."
    },
    {
      question: "Are homeopathic remedies safe?",
      answer: "Homeopathic remedies are generally considered very safe due to their high dilution. They have minimal to no side effects and can be used alongside conventional treatments under professional guidance."
    },
    {
      question: "Can homeopathy treat serious conditions?",
      answer: "Homeopathy can effectively support treatment for many serious conditions, though it may be complementary to conventional medicine in certain cases. A qualified homeopath can advise on the appropriate approach."
    },
    {
      question: "Do I need to follow any special diet during homeopathic treatment?",
      answer: "While homeopathy doesn't generally require strict dietary restrictions, your homeopath might recommend avoiding certain substances like coffee, mint, and camphor as they might interfere with some remedies."
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
              className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Understanding <span className="text-primary-600">Homeopathy</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A gentle, holistic system of healing that stimulates the body's natural ability to heal itself by using highly diluted natural substances.
            </motion.p>
          </div>
        </div>
      </section>

      {/* What is Homeopathy Section */}
      <section className="py-20 bg-white">
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
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">What is Homeopathy?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Homeopathy is a natural form of medicine used by over 200 million people worldwide to treat both acute and chronic conditions. It is based on the principle of 'like cures like' – in other words, a substance that can cause symptoms when taken in large doses, can be used in small doses to treat similar symptoms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in the late 18th century by German physician Dr. Samuel Hahnemann, homeopathy sees symptoms as the body's natural response to heal itself. Rather than suppressing these symptoms, homeopathic remedies aim to stimulate the body's self-regulatory mechanisms.
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                <FaHistory className="mr-2" />
                <span>Over 200 years of proven healing tradition</span>
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
                  src="https://media.istockphoto.com/id/466628811/photo/alternative-medicine.jpg?s=612x612&w=0&k=20&c=xGUFtYeRC8SuOPLkt9XxmKN85RlMkqDy7toQJWt1YEM="
                  alt="Homeopathic medicine"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles of Homeopathy */}
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">Core Principles of Homeopathy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Homeopathy follows several fundamental principles that guide its approach to health and healing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="card-hover-effect bg-white p-6 rounded-xl shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
                variants={fadeIn}
              >
                <div className="flex justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Homeopathy */}
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">Benefits of Homeopathic Treatment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Homeopathy offers numerous advantages as a complementary or alternative approach to healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                <FaCheck className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Safe and Non-Toxic</h3>
                <p className="text-gray-600">Highly diluted natural substances with minimal risk of side effects, safe for all ages including infants and elderly.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                <FaCheck className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Holistic Approach</h3>
                <p className="text-gray-600">Treats the person as a whole, addressing physical, mental, and emotional aspects rather than just isolated symptoms.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                <FaCheck className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Long-lasting Results</h3>
                <p className="text-gray-600">Focuses on treating the root cause of illness rather than suppressing symptoms, leading to sustainable improvement.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={4}
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                <FaCheck className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Complementary to Other Treatments</h3>
                <p className="text-gray-600">Can be used alongside conventional medicine without harmful interactions in most cases.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={5}
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                <FaCheck className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Effective for Chronic Conditions</h3>
                <p className="text-gray-600">Particularly beneficial for chronic conditions that may not respond well to conventional treatments.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={6}
              variants={fadeIn}
            >
              <div className="bg-primary-100 p-2 rounded-full mr-4 mt-1">
                <FaCheck className="text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Cost-Effective</h3>
                <p className="text-gray-600">Generally less expensive than many conventional medical treatments over the long term.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs about Homeopathy */}
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
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              <FaQuestion className="inline-block mr-3 text-primary-600" />
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about homeopathic medicine and treatment approach.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={`faq-${index}`}
                className="mb-6 bg-white p-6 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
                variants={fadeIn}
              >
                <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to Experience Homeopathic Healing?
            </motion.h2>

            <motion.p
              className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover how Dr. Ayaan's personalized homeopathic treatments can help you achieve optimal health naturally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/appointment"
                className="btn-hover-effect inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-md text-lg font-medium transition duration-300 mr-4"
              >
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="btn-hover-effect inline-flex items-center px-8 py-4 border border-white text-white hover:bg-primary-700 rounded-md text-lg font-medium transition duration-300"
              >
                View Our Services <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homeopathy;
