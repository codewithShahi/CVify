import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Contact from './pages/Contact';
import About from './pages/About';
import SplashScreen from './components/SplashScreen'; // Splash Screen import ki hai

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 3000ms matlab 3 seconds tak splash screen dikhegi
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer to avoid memory leaks
  }, []);

  return (
    <ResumeProvider>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      )}
    </ResumeProvider>
  );
}

export default App;