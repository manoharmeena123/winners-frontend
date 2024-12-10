import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import SSC from './components/Ssc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ssc" element={<SSC />} />

   {/*  <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/student-zone" element={<StudentZone />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/mppsc" element={<MPPSC />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/railway" element={<Railway />} />
        <Route path="/mp-esb" element={<MPESB />} />
        <Route path="/defence" element={<Defence />} />
        <Route path="/tet-exams" element={<TETExams />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
