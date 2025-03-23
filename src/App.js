import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import JobRolePage from './components/JobRolePage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="//Analysis" element={<JobRolePage/>} />
        <Route path="/about" element={<AboutPage/>}/>
        {/* You can add more routes here */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
