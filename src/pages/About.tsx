import { motion } from 'framer-motion';
import { FaUserMd, FaGraduationCap, FaCertificate, FaAward, FaStar, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
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

  const qualifications = [
    {
      year: "2005",
      degree: "Bachelor of Homeopathic Medicine and Surgery (BHMS)",
      institution: "National Institute of Homeopathy, Kolkata"
    },
    {
      year: "2008",
      degree: "MD in Homeopathy",
      institution: "National Institute of Homeopathy, Kolkata"
    },
    {
      year: "2010",
      degree: "Certification in Advanced Clinical Homeopathy",
      institution: "Central Council for Research in Homeopathy (CCRH)"
    },
    {
      year: "2012",
      degree: "Fellowship in Pediatric Homeopathy",
      institution: "International Academy of Classical Homeopathy"
    }
  ];

  const certifications = [
    "Registered with Central Council of Homeopathy (CCH)",
    "Member of International Homeopathic Medical League (LMHI)",
    "Certified Practitioner from International Academy of Classical Homeopathy (IACH)",
    "Awarded Excellence in Homeopathic Practice by State Medical Association",
    "Published researcher in Journal of Homeopathic Research"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">About Dr. Ayaan</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                A dedicated homeopathic physician with over 15 years of experience in treating various acute and chronic ailments with personalized homeopathic remedies. Dr. Ayaan combines traditional homeopathic wisdom with modern medical knowledge to provide holistic healthcare solutions.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://www.shutterstock.com/image-photo/indian-male-doctor-consulting-senior-600nw-2036186195.jpg"
                  alt="Dr. Ayaan"
                  className="rounded-lg shadow-xl w-full max-w-lg mx-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white py-3 px-6 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="ml-2 text-gray-800 font-semibold">15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor's Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              <FaUserMd className="inline-block mr-3 text-primary-600" />
              Professional Profile
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dr. Ayaan's approach to homeopathic treatment is comprehensive and patient-centered. He believes in understanding not just the symptoms but the entire constitution of the patient before prescribing remedies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <h3 className="text-xl font-montserrat font-semibold mb-4 text-gray-900 flex items-center">
                <span className="bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                  <FaGraduationCap className="text-xl" />
                </span>
                Educational Background
              </h3>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={qual.year} className="border-l-2 border-primary-200 pl-4">
                    <div className="text-primary-600 font-medium">{qual.year}</div>
                    <div className="font-semibold text-gray-800">{qual.degree}</div>
                    <div className="text-gray-600 text-sm">{qual.institution}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={fadeIn}
            >
              <h3 className="text-xl font-montserrat font-semibold mb-4 text-gray-900 flex items-center">
                <span className="bg-primary-100 text-primary-600 p-2 rounded-full mr-3">
                  <FaCertificate className="text-xl" />
                </span>
                Certifications & Memberships
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor's Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
                My Approach to Healing
              </h2>
            </motion.div>

            <motion.div
              className="bg-white p-8 md:p-12 rounded-xl shadow-md relative mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
              variants={fadeIn}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <FaQuoteLeft className="text-4xl text-primary-200" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "I believe homeopathy is not merely a system of medicine but a holistic approach to health and wellbeing. My philosophy is centered on treating the individual, not just the disease. Every patient has a unique constitution, and understanding this is the key to finding the correct homeopathic remedy.
                <br /><br />
                True healing comes from within, and homeopathic remedies stimulate the body's natural healing mechanisms. My approach combines classical homeopathic principles with an understanding of modern medicine to provide the most effective care for my patients."
              </p>
              <div className="text-right mt-6 text-primary-600 font-semibold">- Dr. Ayaan</div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            variants={fadeIn}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://media.istockphoto.com/id/537890370/vector/herbal-medicine-icons-set.jpg?s=612x612&w=0&k=20&c=9JsqHH8I4S5WgWKnMUe-DyXMLUTZIVEuXXcM-m0PIOo="
                  alt="Holistic Approach"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-3 text-gray-900">Holistic Approach</h3>
              <p className="text-gray-600">Treating the whole person rather than just addressing symptoms.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://media.istockphoto.com/id/466628811/photo/alternative-medicine.jpg?s=612x612&w=0&k=20&c=xGUFtYeRC8SuOPLkt9XxmKN85RlMkqDy7toQJWt1YEM="
                  alt="Natural Remedies"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-3 text-gray-900">Natural Remedies</h3>
              <p className="text-gray-600">Using natural substances to stimulate the body's self-healing abilities.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://media.istockphoto.com/id/1406496671/photo/psychiatrist-or-professional-psychologist-counseling-or-therapy-session-to-male-patients.jpg?s=612x612&w=0&k=20&c=8hA0uzGJoMWohJWEtNUgNemRHawAR5Sw2frrEwW_ldY="
                  alt="Personalized Care"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-montserrat font-semibold mb-3 text-gray-900">Personalized Care</h3>
              <p className="text-gray-600">Customized treatment plans based on individual constitution and symptoms.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards and Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              <FaAward className="inline-block mr-3 text-primary-600" />
              Awards & Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Recognition for excellence in homeopathic practice and research over the years.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeIn}
          >
            <div className="card-hover-effect bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-primary-600 text-xl font-semibold mb-3">2018</div>
              <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Excellence in Homeopathic Practice</h3>
              <p className="text-gray-600">Awarded by State Medical Association for outstanding contribution to homeopathy.</p>
            </div>

            <div className="card-hover-effect bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-primary-600 text-xl font-semibold mb-3">2015</div>
              <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Best Research Paper</h3>
              <p className="text-gray-600">Recognized for research on homeopathic treatments for chronic respiratory conditions.</p>
            </div>

            <div className="card-hover-effect bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="text-primary-600 text-xl font-semibold mb-3">2012</div>
              <h3 className="text-lg font-montserrat font-semibold mb-2 text-gray-900">Community Service Award</h3>
              <p className="text-gray-600">For providing free homeopathic care to underserved communities.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600">
              Over 15 years of dedicated service in homeopathic medicine.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary-300 pl-8 ml-6">
              <motion.div
                className="mb-12 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={1}
                variants={fadeIn}
              >
                <div className="absolute -left-14 top-0 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-semibold">1</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-primary-600 font-semibold mb-2">2010 - Present</div>
                  <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">Dr. Ayaan Homeopathy Clinic</h3>
                  <p className="text-gray-700">
                    Founded and managing a successful homeopathic clinic serving over 10,000 patients. Specializing in chronic diseases, pediatric care, and mental health conditions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="mb-12 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={2}
                variants={fadeIn}
              >
                <div className="absolute -left-14 top-0 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-semibold">2</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-primary-600 font-semibold mb-2">2008 - 2010</div>
                  <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">Senior Homeopathic Physician</h3>
                  <p className="text-gray-700">
                    Worked at National Institute of Homeopathy Hospital as a senior physician, treating complex cases and mentoring junior doctors.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={3}
                variants={fadeIn}
              >
                <div className="absolute -left-14 top-0 bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-semibold">3</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-primary-600 font-semibold mb-2">2005 - 2008</div>
                  <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">Resident Doctor</h3>
                  <p className="text-gray-700">
                    Completed residency at City General Hospital, gaining experience in integrating homeopathy with conventional medical treatments.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
