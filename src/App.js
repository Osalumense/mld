import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';



function App() {

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        // disable: 'phone',
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    // AOS.refresh();
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;