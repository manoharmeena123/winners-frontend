import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Publications from "./pages/Publications";
import StudentZone from "./pages/StudentZone";
import VideoLecture from "./pages/VideoLecture";
import MPPSC from "./pages/MPPSC.jsx";
import SSC from "./pages/SSC";
// import Career from "./pages/Career";
import PhotoGallery from "./pages/PhotoGallery";
import ContactUS from "./pages/ContactUs";
// import Franchies from "./pages/Franchies";
import Scholarship from "./pages/Scholarship";
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
import Lenis from "lenis";
import "aos/dist/aos.css";
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
import SSCCGL from "./pages/ssc-subpages/SSCCGL";
import SSCCHSL from "./pages/ssc-subpages/SSCCHSL.jsx";
import SSCMTS from "./pages/ssc-subpages/SSCMTS.jsx";
import SSCCPO from "./pages/ssc-subpages/SSCCPO.jsx";
import SSCGD from "./pages/ssc-subpages/SSCGD.jsx";
import SSCStenographer from "./pages/ssc-subpages/SSCStenographer.jsx";
import IBPSPO from "./pages/banking-subpages/IBPS-PO.jsx";
import IBPSRRB from "./pages/banking-subpages/IBPS-RRB.jsx";
import IBPSRBI from "./pages/banking-subpages/IBPS-RBI.jsx";
import IBPSCLERK from "./pages/banking-subpages/IBPS-CLERK.jsx";
import BANKING from "./pages/banking-subpages/BANKING";
import MPJAILPRAHARI from './pages/MPESB/MPJAILPRAHARI.jsx';

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

          <Route path="/mp-psc" element={<MPPSC />} />
          <Route path="/ssc" element={<SSC />} />
          <Route path="/ssc-cgl" element={<SSCCGL />} />
          <Route path="/ssc-chsl" element={<SSCCHSL />} />
          <Route path="/ssc-mts" element={<SSCMTS />} />
          {/* <Route path="/ssc-cpo" element={<SSC4 />} /> */}
          <Route path="/ssc-cpo" element={<SSCCPO />} />
          {/* <Route path="/ssc-gd" element={<SSC5 />} /> */}
          <Route path="/ssc-gd" element={<SSCGD />} />
          <Route path="/ssc-stenographer" element={<SSCStenographer />} />

          {/* banking */}

          <Route path="/ibps-po" element={<IBPSPO />} />
          <Route path="/ibps-sbi" element={<IBPSRRB />} />
          <Route path="/ibps-rbi" element={<IBPSRBI />} />
          <Route path="/ibps-clerk" element={<IBPSCLERK />} />
          <Route path="/banking-exam-details" element={<BANKING />} />
          {/* <Route path="/applynow" element={<ApplyNow />} /> */}

          <Route path="/railway-alp" element={<Railway1 />} />
          <Route path="/railway-technician" element={<Railway2 />} />
          <Route path="/railway-ntpc" element={<Railway3 />} />
          <Route path="/railway-group-d" element={<Railway4 />} />
          <Route path="/railway-rpf" element={<Railway5 />} />

          <Route path="/mp-jail" element={<MPJAILPRAHARI />} />
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
          <Route
            path="/jabalpur-seminar-form"
            element={<JabalpurSeminarform />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
}

export default App;
