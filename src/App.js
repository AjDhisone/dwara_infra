import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header'; // Adjust path as per your file structure
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div > 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
