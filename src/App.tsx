import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LawFirmDetail from './pages/LawFirmDetail';
import LawyerDetail from './pages/LawyerDetail';
import Appointment from './pages/Appointment';
import Review from './pages/Review';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/law-firm/:id" element={<LawFirmDetail />} />
        <Route path="/lawyer/:id" element={<LawyerDetail />} />
        <Route path="/appointment/:id" element={<Appointment />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
