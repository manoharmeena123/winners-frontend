import Aos from "aos";
import React, { useEffect, useState } from "react";
import { GetApi } from "../ApIcall";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import Vacancies from "../components/slider/Vacancies";
import VideoSlider from "../components/slider/VideoSlider";
import ZoneSlider from "../components/slider/ZoneSlider";

import AdmitCardSlider from "../components/slider/AdmitCardSlider";
import MaterialSlider from "../components/slider/MaterialSlider";
import ApplyNow from "./ApplyNow";

const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];

function StudentZone() {
  const [activeBtn, setActiveBtn] = useState("Vacancies");
  // const navigate = useNavigate()
  const [Notification, setNotification] = useState([]);
  const [AdmitCard, setAdmitCard] = useState([]);
  const [result, setresult] = useState([]);
  const [getVideolecture, setGetVideolecture] = useState([]); 
  const [Getallforms, setGetallforms] = useState([]);
  const [studyMaterial, setStudyMaterial] = useState([]);
  const [Loading, setLoading] = useState(false);
  
  
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        
        // Fetch all data concurrently using Promise.all
        const [
          notificationRes,
          admitCardRes,
          resultRes,
          formsRes,
          videoLectureRes,
          studyMaterialRes
        ] = await Promise.all([
          GetApi("api/admin/getLatestVacancies"),
          GetApi("api/admin/GetAllAdmitcard"),
          GetApi("api/admin/GetAllResult"),
          GetApi("api/hod/GetAllForms"),
          GetApi("api/admin/getAllVideolecture"),
          GetApi("api/admin/getAllStudyMaterial")
        ]);

        // Set all state at once
        setNotification(notificationRes?.data?.data || []);
        setAdmitCard(admitCardRes?.data?.data || []);
        setresult(resultRes?.data?.data || []);
        setGetallforms(formsRes?.data?.data || []);
        setGetVideolecture(videoLectureRes?.data?.data || []);
        setStudyMaterial(studyMaterialRes?.data?.data || []);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchAllData();

    // Initialize AOS
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    Aos.init({
      duration: 1000,
    });
  }, []); // Single useEffect for all data fetching

  return (
    <>
      <Header />
      <div className="bg-[#0D1266] pt-[80px]">
        <div className=" mx-auto">
          <div className="flex justify-between items-center py-[20px] md:px-[86px] px-[14px]">
            <h6
              data-aos="fade-right"
              className="text-center font-sans font-bold md:text-4xl text-2xl py-[40px] md:leading-[47.24px] leading-[40px] text-white"
            >
              Student Zone
            </h6>
          </div>
        </div>
      </div>

      <div className="bg-white md:pt-[40px] pt-[20px] mb-[40px] md:px-[90px] px-[20px]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row overflow-hidden">
            <button
              data-aos="fade-up"
              onClick={() => setActiveBtn("Vacancies")}
              className={`border border-[#D7D7D7] px-[55px] py-[14px] rounded-[16px] font-sans font-bold text-lg leading-[27px] ${activeBtn === "Vacancies"
                  ? "bg-white text-[#0D1266]"
                  : "bg-[#cecdcd] text-black"
                }`}
            >
              Vacancies
            </button>
            <button
              data-aos="fade-up"
              onClick={() => setActiveBtn("Admit Cards")}
              className={`border border-[#D7D7D7] px-[55px] py-[14px] rounded-[16px] font-sans font-bold text-lg leading-[27px] ${activeBtn === "Admit Cards"
                  ? "bg-white text-[#0D1266]"
                : "bg-[#cecdcd] text-black"
                }`}
            >
              Admit Cards
            </button>
            <button
              data-aos="fade-up"
              onClick={() => setActiveBtn("Results")}
              className={`border border-[#D7D7D7] px-[55px] py-[14px] rounded-[16px] font-sans font-bold text-lg leading-[27px] ${activeBtn === "Results"
                  ? "bg-white text-[#0D1266]"
                : "bg-[#cecdcd] text-black"
                }`}
            >
              Results
            </button>
          </div>

          {activeBtn === "Vacancies" && (
            <div className="border zone-slider flex flex-wrap md:justify-start justify-center gap-[14px] overflow-hidden border-[#D2D0D0] md:py-[55px] py-[26px] md:px-[47px] px-[20px] rounded-[16px] bg-white">
              <Vacancies Notification={Notification} />
            </div>
          )}
          {activeBtn === "Admit Cards" && (
            <div className="border zone-slider flex flex-wrap md:justify-start justify-center gap-[14px] overflow-hidden border-[#D2D0D0] md:py-[55px] py-[26px] md:px-[47px] px-[20px] rounded-[16px] bg-white">
              <ZoneSlider AdmitCard={AdmitCard} />
            </div>
          )}
          {activeBtn === "Results" && (
            <div className="border zone-slider flex flex-wrap md:justify-start justify-center gap-[14px] overflow-hidden border-[#D2D0D0] md:py-[55px] py-[26px] md:px-[47px] px-[20px] rounded-[16px] bg-white">
              <AdmitCardSlider result={result} />
            </div>
          )}
        </div>
      </div>

      <div className="md:px-[87px] mt-[40px] pt-[80px] pb-[110px] px-[20px]">
        <div data-aos="fade-up">
          <h6 className="font-sans pb-[50px] font-bold text-3xl leading-[44px] text-black">
            Study Material
          </h6>
        </div>
        <div className="material-slider">
          <MaterialSlider studyMaterial={studyMaterial} />
        </div>

        {/* <div className="pt-[80px]">
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-[10px]">
              <h6 data-aos="fade-up" className="font-sans font-bold text-3xl leading-[44px] text-black">
                Video Lectures
              </h6> 
            </div>
          </div>
        </div> */}

        <div className="pt-[40px] overflow-hidden px-[30px]">
          <div className="container mx-auto">
            <h6
              data-aos="fade-right"
              className="bg-[#D0021B] title-btn mb-[28px] max-w-[186px] w-full font-sans font-bold text-xl leading-[32px] text-white rounded-[4px] py-[6px] px-[16px]"
            >
              Latest Videos
            </h6>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="">
            <VideoSlider getVideolecture={getVideolecture} />
          </div>

          {/* <div className="md:mt-[80px] mt-[40px] md:pb-[100px] pb-[50px]">
            <div className="container mx-auto">
              <h6
                data-aos="fade-right"
                className="bg-[#D0021B] title-btn mb-[48px] max-w-[245px] w-full font-sans font-bold text-xl leading-[32px] text-white rounded-[4px] py-[6px] px-[16px]"
              >
                All Video Lectures
              </h6>
              <div className="md:px-[42px] px-[20px]">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-[16px]">
                  {getVideolecture?.map((e, i) => (
                    <div className="video-card overflow-hidden" key={i}>
                      <Link
                        to={e?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="relative">
                          <img
                            src={e?.thumbnail}
                            className="w-full h-auto object-cover rounded-lg"
                            alt=""
                          />
                          <img
                            src="assets/youtube.png"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
                            alt=""
                          />
                        </div>
                      </Link>

                      <div data-aos="fade-up">
                        <h6 className="font-sans font-semibold text-lg leading-[22px] mt-[18px]">
                          {e?.Discription}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="container mx-auto mt-[100px]">
          <h6
            data-aos="fade-right"
          
            className="bg-[#D0021B] title-btn mb-[28px] max-w-[226px] w-full font-sans font-bold text-xl leading-[32px] text-white rounded-[4px] py-[6px] px-[16px]"
          >
           Apply For Lottery
          </h6>
        </div>
        <div>
       <ApplyNow />
      </div>
      </div>


      <Footer />
    </>
  );
}

export default StudentZone;
