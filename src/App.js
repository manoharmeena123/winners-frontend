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

import Railway2 from "./pages/Railway2";

import Railway4 from "./pages/Railway4";

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
import MPJAILPRAHARI from "./pages/mp-peb/MPJAILPRAHARI.jsx";
import MPPATWARI from "./pages/mp-peb/MPPATWARI.jsx";
import MPCONSTABLE from "./pages/mp-peb/MPCONSTABLE.jsx";
import MPSI from "./pages/mp-peb/MPSI.jsx";
import MPWOMENSUPERVISOR from "./pages/mp-peb/MPWOMENSUPERVISOR.jsx";
import RPF from "./pages/railway-subpages/RAILWAY-RPF.jsx";
import NTPC from "./pages/railway-subpages/RAILWAY-NTPC.jsx";
import RailwayALP from "./pages/railway-subpages/RAILWAY-ALP.jsx";
import RailwayTECHNICIAN from "./pages/railway-subpages/RAILWAY-TECHNICIAN.jsx";

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

          <Route path="/railway-alp" element={<RailwayALP />} />
          <Route path="/railway-technician" element={<RailwayTECHNICIAN />} />
          <Route path="/railway-ntpc" element={<NTPC />} />
          <Route path="/railway-group-d" element={<Railway4 />} />
          <Route path="/railway-rpf" element={<RPF />} />

          <Route path="/mp-jail" element={<MPJAILPRAHARI />} />
          <Route path="/mp-mahila" element={<MPWOMENSUPERVISOR />} />
          <Route path="/mp-patwari" element={<MPPATWARI />} />
          <Route path="/mp-police" element={<MPCONSTABLE />} />
          <Route path="/mp-sub-inspector" element={<MPSI />} />

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
