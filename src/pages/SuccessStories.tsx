import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar, FaFilter, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
  id: string;
  name: string;
  age: string;
  location: string;
  condition: string;
  category: string;
  image: string;
  quote: string;
  fullStory: string;
  rating: number;
  date: string;
}

const SuccessStories = () => {
  const testimonials: Testimonial[] = [
    {
      id: "story1",
      name: "Rahul Sharma",
      age: "42",
      location: "Delhi",
      condition: "Chronic Migraine",
      category: "chronic",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "After suffering from migraines for over 10 years and trying numerous treatments, Dr. Ayaan's homeopathic treatment has reduced my episodes by 90%. I can finally live a normal life!",
      fullStory: "I had been suffering from severe migraines for more than a decade. The pain was debilitating, often leaving me bedridden for days. I had tried conventional medications, lifestyle changes, and even some alternative therapies without significant improvement. After consulting with Dr. Ayaan, he took a detailed history and prescribed a personalized homeopathic remedy. Within a month, I noticed a significant reduction in the frequency and intensity of my migraines. After three months of treatment, my episodes reduced by 90%. It's been a life-changing experience as I can now function normally without the constant fear of being hit by a migraine attack.",
      rating: 5,
      date: "15 January 2024"
    },
    {
      id: "story2",
      name: "Priya Patel",
      age: "35",
      location: "Mumbai",
      condition: "Skin Allergy",
      category: "skin",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "I had severe skin allergies that weren't responding to conventional treatments. Dr. Ayaan's personalized approach has cleared my skin completely in just 3 months.",
      fullStory: "For years, I struggled with persistent skin allergies that manifested as red, itchy patches all over my body. Despite seeing multiple dermatologists and using various steroid creams, the relief was always temporary. The allergies would return as soon as I stopped the medication, and I was concerned about the long-term effects of steroid use. When I visited Dr. Ayaan, he spent considerable time understanding my overall health, lifestyle, and potential triggers. His holistic approach focused not just on the skin symptoms but on strengthening my immune system. The homeopathic remedies he prescribed were gentle and caused no side effects. Gradually, my skin started healing, and within three months, the allergies had completely cleared. It's been a year now, and there's been no recurrence.",
      rating: 5,
      date: "3 March 2024"
    },
    {
      id: "story3",
      name: "Amit Kumar",
      age: "45",
      location: "Bangalore",
      condition: "Digestive Issues",
      category: "digestive",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: "I've struggled with IBS for years. Dr. Ayaan's holistic treatment plan not only addressed my symptoms but improved my overall gut health and wellbeing.",
      fullStory: "IBS had been affecting my quality of life for almost a decade. The unpredictable nature of the condition made social situations stressful, and dietary restrictions were limiting my enjoyment of food. Conventional treatments provided only symptomatic relief, and I was looking for a more permanent solution. Dr. Ayaan took a comprehensive approach, considering my emotional well-being alongside physical symptoms. He explained how stress and gut health are interconnected and prescribed a tailored homeopathic remedy along with lifestyle and dietary advice. The improvement was gradual but steady. After six months of treatment, my digestive system functions much better, and I can enjoy a wider variety of foods without discomfort. The most significant change has been the reduction in anxiety related to my condition.",
      rating: 4,
      date: "20 February 2024"
    },
    {
      id: "story4",
      name: "Neha Verma",
      age: "29",
      location: "Pune",
      condition: "Anxiety Disorder",
      category: "mental",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      quote: "Homeopathy has helped me manage my anxiety in a way that medications never could. It's been a transformative journey with Dr. Ayaan guiding me through it.",
      fullStory: "I was diagnosed with Generalized Anxiety Disorder in my early twenties. The conventional approach of medication left me feeling numb and disconnected, though it did reduce the anxiety. I was looking for an alternative that would help me address the root cause rather than just suppress symptoms. From my first consultation with Dr. Ayaan, I felt heard and understood. He took time to understand the patterns of my anxiety, triggers, and how it manifested physically. The homeopathic treatment was gentle but effective. Within weeks, I noticed I was handling stressful situations better. Over six months, my anxiety levels decreased significantly without the side effects I experienced with conventional medication. Dr. Ayaan also provided valuable guidance on mindfulness practices that complemented the homeopathic treatment. Today, I feel more balanced and in control of my mental health.",
      rating: 5,
      date: "10 April 2024"
    },
    {
      id: "story5",
      name: "Rajesh Malhotra",
      age: "52",
      location: "Chennai",
      condition: "Rheumatoid Arthritis",
      category: "chronic",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      quote: "The pain from arthritis was making everyday tasks impossible. Thanks to Dr. Ayaan's treatment, I've regained mobility and comfort in my joints.",
      fullStory: "Living with Rheumatoid Arthritis for over 15 years, I had accepted that pain and limited mobility would be constant companions. The conventional medications helped manage pain but came with concerning side effects. When a friend recommended Dr. Ayaan, I was skeptical but willing to try anything for relief. Dr. Ayaan's approach was refreshingly comprehensive. He not only focused on the joint pain but also on my overall immunity and inflammatory responses. The personalized homeopathic remedies, combined with dietary recommendations, led to gradual but remarkable improvements. Within four months, the morning stiffness that plagued me had reduced significantly. After six months, I was able to reduce my conventional medication doses (under supervision of both doctors). Today, I experience much less pain and have regained mobility that I thought was lost forever. While I still have some limitations, the quality of my life has improved tremendously.",
      rating: 4,
      date: "25 January 2024"
    },
    {
      id: "story6",
      name: "Aisha Khan",
      age: "38",
      location: "Hyderabad",
      condition: "Recurrent Infections",
      category: "immune",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      quote: "After years of frequent sinus and respiratory infections, Dr. Ayaan's treatment has strengthened my immunity. I haven't had a single infection in 8 months!",
      fullStory: "For most of my adult life, I suffered from recurrent sinus and respiratory infections. Every change in weather or slight exposure to allergens would trigger an infection, forcing me to take antibiotics multiple times a year. This cycle was affecting my overall health and work performance. When I consulted Dr. Ayaan, he suggested that the frequent use of antibiotics might actually be weakening my immune system further. His homeopathic approach focused on building my immunity rather than just fighting infections. He prescribed constitutional remedies that addressed my body's tendency toward infections. The change wasn't overnight, but gradually I noticed the infections becoming less frequent and less severe. It's been eight months since my last infection, which is the longest I've gone without getting sick in years. The improvement in my quality of life and the confidence in my health has been incredible.",
      rating: 5,
      date: "5 March 2024"
    },
    {
      id: "story7",
      name: "Sanjay Mehra",
      age: "48",
      location: "Kolkata",
      condition: "Insomnia",
      category: "mental",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      quote: "After struggling with sleep issues for years, I can finally enjoy restful nights without dependency on sleeping pills, thanks to homeopathic treatment.",
      fullStory: "Insomnia had been a part of my life for almost a decade. The struggle to fall asleep, staying asleep, and waking up feeling exhausted had become my normal. I had become dependent on sleeping pills, which worked initially but gradually lost their effectiveness. The side effects and morning grogginess were affecting my work performance. When I decided to try homeopathy, I was desperate but not very hopeful. Dr. Ayaan took a detailed history, including my sleep patterns, lifestyle, and emotional state. His approach was to address not just the insomnia but its underlying causes. The homeopathic remedies were complemented with sleep hygiene advice. It took about a month to notice the first improvements, but they were significant. I began falling asleep more easily and experiencing fewer nighttime awakenings. Now, six months into the treatment, I sleep well most nights without any medication. The quality of my sleep has improved dramatically, and I wake up feeling refreshed rather than groggy.",
      rating: 4,
      date: "18 February 2024"
    },
    {
      id: "story8",
      name: "Meera Reddy",
      age: "32",
      location: "Jaipur",
      condition: "Hormonal Imbalance",
      category: "hormonal",
      image: "https://randomuser.me/api/portraits/women/91.jpg",
      quote: "Dr. Ayaan's treatment has helped regulate my hormonal cycles naturally. After years of issues, my energy levels are up and symptoms have diminished significantly.",
      fullStory: "For years, I suffered from irregular cycles, severe premenstrual symptoms, and fatigue due to hormonal imbalances. Various gynecologists had prescribed hormonal medications which provided temporary relief but didn't address the underlying issues. The side effects of these medications were also concerning. When I decided to try homeopathy with Dr. Ayaan, I was looking for a more natural approach to regulating my hormones. Dr. Ayaan's thorough consultation process considered not just my physical symptoms but also emotional patterns and lifestyle factors. The individualized treatment plan included homeopathic remedies specific to my constitution and condition. Within three months, I noticed more regular cycles and reduced premenstrual symptoms. Six months into the treatment, my energy levels improved significantly, and the mood swings that used to affect my daily life had diminished. What impressed me most was how the treatment addressed the complete picture of my health rather than just isolating the hormonal aspect.",
      rating: 5,
      date: "1 April 2024"
    }
  ];

  const [filteredStories, setFilteredStories] = useState<Testimonial[]>(testimonials);
  const [filter, setFilter] = useState<string>('all');
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  const handleFilter = (category: string) => {
    setFilter(category);
    if (category === 'all') {
      setFilteredStories(testimonials);
    } else {
      setFilteredStories(testimonials.filter(story => story.category === category));
    }
  };

  const toggleStoryExpansion = (id: string) => {
    if (expandedStory === id) {
      setExpandedStory(null);
    } else {
      setExpandedStory(id);
    }
  };

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
              Patient <span className="text-primary-600">Success Stories</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Read real experiences from patients who have found healing through Dr. Ayaan's homeopathic treatments. These testimonials reflect diverse conditions and journeys toward wellness.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <div className="flex items-center mr-2 text-gray-700">
              <FaFilter className="mr-2 text-primary-600" />
              <span className="font-medium">Filter by condition:</span>
            </div>
            <button
              onClick={() => handleFilter('all')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Stories
            </button>
            <button
              onClick={() => handleFilter('chronic')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filter === 'chronic'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Chronic Diseases
            </button>
            <button
              onClick={() => handleFilter('skin')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filter === 'skin'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Skin Conditions
            </button>
            <button
              onClick={() => handleFilter('digestive')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filter === 'digestive'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Digestive Issues
            </button>
            <button
              onClick={() => handleFilter('mental')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filter === 'mental'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Mental Health
            </button>
            <button
              onClick={() => handleFilter('immune')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filter === 'immune'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Immune System
            </button>
            <button
              onClick={() => handleFilter('hormonal')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filter === 'hormonal'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hormonal Issues
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                className="bg-white rounded-xl shadow-md overflow-hidden card-hover-effect"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={fadeIn}
              >
                <div className="p-6">
                  <div className="flex items-start mb-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-200"
                    />
                    <div>
                      <h3 className="text-xl font-montserrat font-semibold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600 text-sm mb-1">{story.age} years, {story.location}</p>
                      <p className="text-primary-600 font-medium">{story.condition}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${i < story.rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 relative">
                    <FaQuoteLeft className="text-primary-100 text-4xl absolute -top-2 -left-1" />
                    <p className="text-gray-700 italic relative z-10 pl-6">
                      {story.quote}
                    </p>
                  </div>

                  {expandedStory === story.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-700 mb-4 bg-gray-50 p-4 rounded-lg"
                    >
                      <h4 className="font-montserrat font-semibold mb-2">Complete Story:</h4>
                      <p>{story.fullStory}</p>
                    </motion.div>
                  )}

                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => toggleStoryExpansion(story.id)}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                    >
                      {expandedStory === story.id ? 'Read Less' : 'Read Full Story'}
                      <FaArrowRight className={`ml-1 transition-transform ${expandedStory === story.id ? 'rotate-90' : ''}`} />
                    </button>
                    <span className="text-gray-500 text-sm">{story.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-montserrat font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Start Your Healing Journey Today
            </motion.h2>

            <motion.p
              className="text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join our growing list of patients who have found relief and healing through Dr. Ayaan's personalized homeopathic care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="/appointment"
                className="btn-hover-effect inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 rounded-md text-lg font-medium transition duration-300"
              >
                Book an Appointment
              </Link>
              <Link
                to="/contact"
                className="btn-hover-effect inline-flex items-center justify-center px-8 py-4 border border-white text-white hover:bg-primary-700 rounded-md text-lg font-medium transition duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-montserrat font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Share Your Success Story
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have you experienced healing through Dr. Ayaan's homeopathic treatment? We'd love to hear your story. Your experience could inspire others on their healing journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="btn-hover-effect inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-lg font-medium transition duration-300"
              >
                Submit Your Story <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
