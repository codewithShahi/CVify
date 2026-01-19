import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ResumeProvider } from './context/ResumeContext';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <ResumeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ResumeProvider>
  );
}

export default App;

