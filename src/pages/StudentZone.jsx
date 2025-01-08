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
import Loading from "../components/loading/Loading";

const StudentZone = () => {
  const [activeBtn, setActiveBtn] = useState("Vacancies");
  const [notification, setNotification] = useState([]);
  const [admitCard, setAdmitCard] = useState([]);
  const [result, setResult] = useState([]);
  const [getVideoLecture, setGetVideoLecture] = useState([]);
  const [getAllForms, setGetAllForms] = useState([]);
  const [studyMaterial, setStudyMaterial] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true); // Start loading

        // Fetch all data concurrently using Promise.all
        const [
          notificationRes,
          admitCardRes,
          resultRes,
          formsRes,
          videoLectureRes,
          studyMaterialRes,
        ] = await Promise.all([
          GetApi("api/admin/getLatestVacancies"),
          GetApi("api/admin/GetAllAdmitcard"),
          GetApi("api/admin/GetAllResult"),
          GetApi("api/hod/GetAllForms"),
          GetApi("api/admin/getAllVideolecture"),
          GetApi("api/admin/getAllStudyMaterial"),
        ]);

        // Set all state at once
        setNotification(notificationRes?.data?.data || []);
        setAdmitCard(admitCardRes?.data?.data || []);
        setResult(resultRes?.data?.data || []);
        setGetAllForms(formsRes?.data?.data || []);
        setGetVideoLecture(videoLectureRes?.data?.data || []);
        setStudyMaterial(studyMaterialRes?.data?.data || []);

        setIsLoading(false); // Stop loading after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Stop loading in case of an error
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
  }, []);

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

      {isLoading ? (
        <Loading message="Fetching data, please wait..." />
      ) : (
        <div className="bg-white md:pt-[40px] pt-[20px] mb-[40px] md:px-[90px] px-[20px]">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row overflow-hidden">
              <button
                data-aos="fade-up"
                onClick={() => setActiveBtn("Vacancies")}
                className={`border border-[#D7D7D7] px-[55px] py-[14px] rounded-[16px] font-sans font-bold text-lg leading-[27px] ${
                  activeBtn === "Vacancies"
                    ? "bg-white text-[#0D1266]"
                    : "bg-[#cecdcd] text-black"
                }`}
              >
                Vacancies
              </button>
              <button
                data-aos="fade-up"
                onClick={() => setActiveBtn("Admit Cards")}
                className={`border border-[#D7D7D7] px-[55px] py-[14px] rounded-[16px] font-sans font-bold text-lg leading-[27px] ${
                  activeBtn === "Admit Cards"
                    ? "bg-white text-[#0D1266]"
                    : "bg-[#cecdcd] text-black"
                }`}
              >
                Admit Cards
              </button>
              <button
                data-aos="fade-up"
                onClick={() => setActiveBtn("Results")}
                className={`border border-[#D7D7D7] px-[55px] py-[14px] rounded-[16px] font-sans font-bold text-lg leading-[27px] ${
                  activeBtn === "Results"
                    ? "bg-white text-[#0D1266]"
                    : "bg-[#cecdcd] text-black"
                }`}
              >
                Results
              </button>
            </div>

            {activeBtn === "Vacancies" && (
              <div className="border zone-slider flex flex-wrap md:justify-start justify-center gap-[14px] overflow-hidden border-[#D2D0D0] md:py-[55px] py-[26px] md:px-[47px] px-[20px] rounded-[16px] bg-white">
                <Vacancies Notification={notification} />
              </div>
            )}
            {activeBtn === "Admit Cards" && (
              <div className="border zone-slider flex flex-wrap md:justify-start justify-center gap-[14px] overflow-hidden border-[#D2D0D0] md:py-[55px] py-[26px] md:px-[47px] px-[20px] rounded-[16px] bg-white">
                <ZoneSlider AdmitCard={admitCard} />
              </div>
            )}
            {activeBtn === "Results" && (
              <div className="border zone-slider flex flex-wrap md:justify-start justify-center gap-[14px] overflow-hidden border-[#D2D0D0] md:py-[55px] py-[26px] md:px-[47px] px-[20px] rounded-[16px] bg-white">
                <AdmitCardSlider result={result} />
              </div>
            )}
          </div>
        </div>
      )}

      <div className="md:px-[87px] mt-[40px] pt-[80px] pb-[110px] px-[20px]">
        <div data-aos="fade-up">
          <h6 className="font-sans pb-[50px] font-bold text-3xl leading-[44px] text-black">
            Study Material
          </h6>
        </div>
        <div className="material-slider">
          <MaterialSlider studyMaterial={studyMaterial} />
        </div>

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
            <VideoSlider getVideolecture={getVideoLecture} />
          </div>
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
};

export default StudentZone;
