import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Homeopathy from './pages/Homeopathy';
import Services from './pages/Services';
import SuccessStories from './pages/SuccessStories';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="homeopathy" element={<Homeopathy />} />
            <Route path="services" element={<Services />} />
            <Route path="success-stories" element={<SuccessStories />} />
            {/* <Route path="blog" element={<Blog />} /> */}
            <Route path="contact" element={<Contact />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
