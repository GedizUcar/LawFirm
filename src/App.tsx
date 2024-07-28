import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LawFirmDetail from './pages/LawFirmDetail';
import LawyerDetail from './pages/LawyerDetail';
import Appointment from './pages/Appointment';
import Review from './pages/Review';
import AI from './pages/AI';
import HowItWorks from './pages/HowItWorks';
import JoinUs from './pages/JoinUs';
import FindBestMatch from './pages/FindBestMatch';
import Login from './pages/Login';
import LawFirms from './pages/LawFirms';
import Lawyers from './pages/Lawyers';
import Payment from './pages/Payment';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/law-firms" element={<LawFirms />} />
        <Route path="/law-firm-detail/:id" element={<LawFirmDetail />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/lawyer/:id" element={<LawyerDetail />} />
        <Route path="/appointment/:id" element={<Appointment />} />
        <Route path="/review" element={<Review />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/find-best-match" element={<FindBestMatch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
