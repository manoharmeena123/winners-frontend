import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Publications from "./pages/Publications";
import StudentZone from "./pages/StudentZone";
import VideoLecture from "./pages/VideoLecture";
import Exam from "./pages/Exam";
import ExamCenter from "./pages/ExamCenter";
// import Career from "./pages/Career";
import PhotoGallery from "./pages/PhotoGallery";
import ContactUS from "./pages/ContactUs";
// import Franchies from "./pages/Franchies";
import Scholarship from "./pages/Scholarship";
import SSC2 from "./pages/SSC2";
import SSC3 from "./pages/SSC3";
import SSC4 from "./pages/SSC4";
import SSC5 from "./pages/SSC5";
import Exam1 from "./pages/Exam1";
import Exam2 from "./pages/Exam2";
import Exam3 from "./pages/Exam3";
import Exam4 from "./pages/Exam4";
import Railway1 from "./pages/Railway1";
import Railway2 from "./pages/Railway2";
import Railway3 from "./pages/Railway3";
import Railway4 from "./pages/Railway4";
import Railway5 from "./pages/Railway5";
import Mp1 from "./pages/Mp1";
import Mp2 from "./pages/Mp2";
import Mp3 from "./pages/Mp3";
import Mp4 from "./pages/Mp4";
import Mp5 from "./pages/Mp5";
import Lenis from 'lenis'
import 'aos/dist/aos.css';
import Marathonform from "./pages/Marathonform";
import CareerGuidanceSeminarform from "./pages/CareerGuidanceSeminarform";
import Career2 from "./pages/Career2";
import Franchies2 from "./pages/Franchies2";
import SagarseminarForm from "./pages/SagarseminarForm";
import JabalpurSeminarform from "./pages/JabalpurSeminarform";
import Ticket from "./pages/Ticket";
import ApplyNow from "./pages/ApplyNow";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import SSCCGL from './pages/sub-pages/SSCCGL';
import SSCCHSL from './pages/sub-pages/SSCCHSL.jsx';
import SSCCPO from "./pages/sub-pages/SSCCPO.jsx";


function App() {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/student-zone" element={<StudentZone />} />
          <Route path="/video-lecture" element={<VideoLecture />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />



          
          <Route path="/exam" element={<Exam />} />
          <Route path="/ssc" element={<ExamCenter />} />
          <Route path="/ssc-cgl" element={<SSCCGL />} />
          <Route path="/ssc-chsl" element={<SSCCHSL />} />
          <Route path="/ssc-cpo" element={<SSCCPO/>} />
          <Route path="/ssc-mts" element={<SSC3 />} />
          <Route path="/ssc-cpo" element={<SSC4 />} />
          <Route path="/ssc-gd" element={<SSC5 />} />



          <Route path="/ibps-po" element={<Exam1 />} />
          <Route path="/ibps-sbi" element={<Exam2 />} />
          <Route path="/ibps-rbi" element={<Exam3 />} />
          <Route path="/ibps-clerk" element={<Exam4 />} />


          {/* <Route path="/applynow" element={<ApplyNow />} /> */}
          














          <Route path="/railway-alp" element={<Railway1 />} />
          <Route path="/railway-technician" element={<Railway2 />} />
          <Route path="/railway-ntpc" element={<Railway3 />} />
          <Route path="/railway-group-d" element={<Railway4 />} />
          <Route path="/railway-rpf" element={<Railway5 />} />








          <Route path="/mp-jail" element={<Mp1 />} />
          <Route path="/mp-mahila" element={<Mp2 />} />
          <Route path="/mp-patwari" element={<Mp3 />} />
          <Route path="/mp-police" element={<Mp4 />} />
          <Route path="/mp-sub-inspector" element={<Mp5 />} />




          {/* <Route path="/career" element={<Career />} /> */}
          <Route path="/career" element={<Career2 />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/contact" element={<ContactUS />} />
          {/* <Route path="/franchise" element={<Franchies />} /> */}
          <Route path="/franchise" element={<Franchies2 />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/marathon" element={<Marathonform />} />
          <Route path="/career-form" element={<CareerGuidanceSeminarform />} />
          {/* <Route path="/ticket-page/:id" element={<Ticket />} /> */}
          <Route path="/sagar-seminar-form" element={<SagarseminarForm />} />
          <Route path="/jabalpur-seminar-form" element={<JabalpurSeminarform />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
