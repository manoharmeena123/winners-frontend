import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";


function Exam() {

  const [mppsc, setmppsc] = useState();
  const [loading, setLoading] = useState(true);

  const getSSCExamLinks = async () => {
    try {
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/MPPSC`);
      setmppsc(response?.data);
      console.log(response?.data) 
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSSCExamLinks();
  }, []);

  function handleDownload() {
    const pdfUrl = '/assets/pdf/MPPSC.pdf';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "MPPSC Latest Exam Pattern 2024.doc");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



  useEffect(() => {
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
      <div className="mt-[82px] relative">
        <img
          src="assets/video/photo1.png"
          className="w-full md:h-auto h-[150px] object-cover"
          alt=""
        />
        <div className="container m-auto">
          <div className="absolute flex items-center flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div data-aos="fade-up">
              <p className="font-sans font-[700] text-[24px] leading-[24px] text-center text-[#000000]">
                Exam
              </p>
              <h6 className="font-sans font-[700] pb-[10px] text-[36px] leading-[36.97px] text-center text-[#D0021B]">
                MPPSC
              </h6>
            </div>
            <div data-aos="fade-right">
              <img src="assets/video/line.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] md:h-[232px] relative">
        <div className="container m-auto">
          <div className="max-w-[984px] md:absolute relative md:h-[232px] w-full left-[50%] translate-x-[-50%] md:top-[-72px] top-0 rounded-[30px] bg-[#D0021B]">
            <div className="flex md:flex-row flex-col justify-between md:px-[54px] px-[20px]">
              <div data-aos="fade-right">
                <div>
                  <h6 className="font-sans font-[700] md:text-[32px] text-[24px] md:leading-[43.65px] leading-[30px] text-[#FFFFFF] pt-[74px] pb-[20px]">
                    MPPSC <br /> PAPER-I GENERAL STUDIES
                  </h6>
                  <div className="bg-[#FFFFFF] h-[6px] rounded-[48px] max-w-[512px] w-full"></div>
                </div>
              </div>
              <div data-aos="fade-left">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/mppsc.png?alt=media&token=1a021a68-29f8-4505-9ba3-ddc57a8a1c9b"
                  className="pt-[18px] w-[190px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[46px] pb-[35px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[249px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              1. History of India
            </h6>
          </div>
          <div data-aos="fade-left">
            <p className="font-[Outfit] font-[400] text-[16px] pb-[30px] leading-[22px] text-[#000000]">
              Concepts and Ideas - Ancient Indian Knowledge Tradition,
              Bharatvarsha, Vedas, Upanishad, Aranyaka, Brahman Granth,
              Shaddarshan, Smritiyan, Rit, Sabha-Samiti, Gantantra (Republic),
              Varnashrama, Purushartha, Rin Sanskara, Panch Mahayagya/Yagya,
              Principle of Karma, Bodhisatva, Teerthankar.
            </p>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] max-w-[520px] w-full font-[400] text-[16px] leading-[22px] text-[#000000]">
                Salient features, Events and their administrative, Social and
                Economic Systems of Ancient and Medieval India.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] max-w-[520px] w-full font-[400] text-[16px] leading-[22px] text-[#000000]">
                India's Cultural Heritage- Art forms, literature, festivals and
                events
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] max-w-[520px] w-full font-[400] text-[16px] leading-[22px] text-[#000000]">
                Social and Religious Reform Movements in 19th and 20th century.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] max-w-[520px] w-full font-[400] text-[16px] leading-[22px] text-[#000000]">
                Independence Struggle and Indian National Movement.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] max-w-[520px] w-full font-[400] text-[16px] leading-[22px] text-[#000000]">
                Integration and Reorganization of India after Independence.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:py-[55px] py-[20px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[635px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              2. History, Culture and Literature of Madhya Pradesh
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] max-w-[520px] w-full font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Events and Major Dynasties of Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] max-w-[520px] w-full font-[400] text-[16px] leading-[22px] text-[#000000]">
                Contribution of Madhya Pradesh in Freedom Movement.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] max-w-[520px] w-full font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Arts and Sculpture of Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Tribes and Dialects of Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Festivals, Folk Music, Folk Arts and Folk literature of
                Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Important literary Creators of Madhya Pradesh and their Literary
                Creations.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Tourist Places of Religious, Cultural and Archaeological
                Importance in Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                World Heritage sites in Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Important Tribal Personalities of Madhya Pradesh.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:pt-[46px] pt-[20px] md:pb-[35px] pb-[20px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[294px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              3. Geography of India
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Mountains, Hills, Plateaus, Rivers and Lakes.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Climate Phenomena- El Nino, La Nina, Southern Oscillation,
                Western Disturbance, Consequences of Climate Change.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Natural Resources - Forest, Minerals, Water Resources.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Crops, Food Security, Green Revolution, Strategies for the
                Second Green Revolution.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Conventional and Non-Conventional sources of energy.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Natural hazards and disasters in India, Major cyclones in India.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Population growth, distribution and Density, Rural-Urban
                Migration.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:py-[55px] py-[20px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[425px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              4. Geography of Madhya Pradesh
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Forest, Forest Produce, Rivers, Hills and Plateaus.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Climate - Seasons, Temperature, Rainfall.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Natural Resources- Soils and Major Mineral resources.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Crops, Water Resources, Irrigation and Irrigation Projects
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Conventional and Non-Conventional Sources of Energy
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Industries of Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Population Growth, Distribution and Density, Urbanisation
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:pt-[46px] pt-[20px] md:pb-[35px] pb-[20px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[644px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              5. Constitutional System of India and Madhya Pradesh
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Constituent Assembly.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Federal Executive, President and Parliament.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Supreme Court and Judicial System.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Constitutional Amendments.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Fundamental Rights and Duties of Citizens, Duties and Directive
                Principle of State.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                National and Regional Constitutional/Statutory Commissions and
                Institutions.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Constitutional System of Madhya Pradesh (Governor, Cabinet,
                Legislative Assembly, High Court).
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Three-Tier Panchayati Raj and Civil Administration system in
                Madhya Pradesh
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Good Governance in Madhya Pradesh (Governance System).
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:py-[55px] py-[20px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[499px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              6. Economy of India and Madhya Pradesh
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Current Situation of Madhya Pradesh in Indian Economy.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Population and Human Resources Development- Education, Health
                and Skills in Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Progress in Sustainable Development Goals in Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Development of Agriculture, Industry, MSME and Infrastructure
                Development in Madhya Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Self-Reliant/Atma Nirbhar Madhya Pradesh, One District One
                Product (ODOP)
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Progress of Intellectual Property Rights (IPR) in Madhya
                Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Recent Trends in Indian Economy- Agriculture, Industry and
                Service sectors.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Financial Institutions- Reserve Bank, Commercial Banks, SEBI,
                Non- Banking Financial Institutions.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                India's foreign Trade Policies G-20, SAARC and ASEAN.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:pt-[46px] pt-[20px] md:pb-[35px] pb-[20px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[441px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              7. Science, Environment and Health
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Preliminary Knowledge of Main Branches of Science.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Important Indian Scientific Research Institutions and their
                Achievements.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Satellite and Space Technology Achievement of India in the Field
                of Space Science.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Structure of Human Body.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Nutrition, Food, Nutrient and Malnutrition.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Genetic Disease, Sickle Cell Anemia- Cause, Effect, Diagnosis
                and Program.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Health Policy and Programmes, Infectious disease and its
                Prevention and Health Indicator.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Concept of Sustainable Development and SDG's.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Environmental Factors, Biodiversity and Ecosystem.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Pollution, Natural Calamities and Management.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:py-[55px] py-[20px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[764px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              8. International, National and Current Events of Madhya Pradesh
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                International Current Events
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                National Current Events.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Current Events of Madhya Pradesh.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:pt-[46px] pt-[20px] md:pb-[35px] pb-[20px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[564px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              9. Information and Communication Technology
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Basic Knowledge of Computer.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Electronics, Information and Communication Technology.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Robotics, Artificial Intelligence and Cyber Security
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                E-Governance.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Internet and Social Networking Platforms.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="md:py-[55px] py-[20px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[30px] max-w-[865px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              10. Tribes of Madhya Pradesh- Heritage, Folk Culture and Folk
              Literature
            </h6>
          </div>
          <ul className="flex pl-[18px] flex-col gap-[20px] list-disc">
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                The Geographical distribution of the Tribes in Madhya Pradesh,
                Constitutional Provisions Related to Tribes.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Major Tribes of Madhya Pradesh, Particularly Vulnerable Tribal
                Groups (PVTG) and Tribal Welfare Programs.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Tribal Culture of Madhya Pradesh- Customs, Traditions, Special
                Arts Festivals, Dialects and Literature.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Madhya Pradesh Tribals Contribution to the Freedom Movement of
                India and Tribal Personalities of Madhya Pradesh, Important
                Institutes, Museums and Publications related to tribes of Madhya
                Pradesh.
              </li>
            </div>
            <div data-aos="fade-left">
              <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Folk Culture and Literature of Madhya Pradesh.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-[#FAF9F9] overflow-hidden md:px-[110px] px-[20px] md:pt-[64px] pt-[20px] md:pb-[91px] pb-[20px]">
        <div className="container m-auto">
          <div className="border rounded-[30px] !border-[#000000]">
            <div data-aos="fade-right">
              <h6 className="font-sans font-[700] md:text-[24px] text-[20px] md:leading-[44px] leading-[30px] border-b !border-[#000000] text-[#ffffff] rounded-t-[30px] bg-[#1C2672] py-[12px] px-[26px]">
                PAPER-II GENERAL APTITUDE TEST
              </h6>
            </div>
            <div data-aos="fade-left">
              <p className="md:py-[24px] py-[14px] md:px-[26px] px-[16px] font-[Outfit] font-[400] md:text-[20px] text-[14px] md:leading-[22px] leading-[18px] text-[#000000] border-b !border-[#000000]">
                1. Comprehension.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="md:py-[24px] py-[14px] md:px-[26px] px-[16px] font-[Outfit] font-[400] md:text-[20px] text-[14px] md:leading-[22px] leading-[18px] text-[#000000] border-b !border-[#000000]">
                2. Life Style and Counter Force
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="md:py-[24px] py-[14px] md:px-[26px] px-[16px] font-[Outfit] font-[400] md:text-[20px] text-[14px] md:leading-[22px] leading-[18px] text-[#000000] border-b !border-[#000000]">
                3. Communication Skill.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="md:py-[24px] py-[14px] md:px-[26px] px-[16px] font-[Outfit] font-[400] md:text-[20px] text-[14px] md:leading-[22px] leading-[18px] text-[#000000] border-b !border-[#000000]">
                4. Logical Reasoning and Analytical Ability.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="md:py-[24px] py-[14px] md:px-[26px] px-[16px] font-[Outfit] font-[400] md:text-[20px] text-[14px] md:leading-[22px] leading-[18px] text-[#000000] border-b !border-[#000000]">
                5. Decision Making and Problem Solving.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="md:py-[24px] py-[14px] md:px-[26px] px-[16px] font-[Outfit] font-[400] md:text-[20px] text-[14px] md:leading-[22px] leading-[18px] text-[#000000] border-b !border-[#000000]">
                6. General Mental Ability.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="md:py-[24px] py-[14px] md:px-[26px] px-[16px] font-[Outfit] font-[400] md:text-[20px] text-[14px] md:leading-[22px] leading-[18px] text-[#000000] border-b !border-[#000000]">
                7. Basic Numeracy (Numbers and their Relations, order of
                magnitude etc- Class X level) Data interpretation (charts,
                graphs, tables, data sufficiency etc.) of Class X level.
              </p>
            </div>
            <div data-aos="fade-left">
              <p className="md:py-[24px] py-[14px] md:px-[26px] px-[16px] font-[Outfit] font-[400] md:text-[20px] text-[14px] md:leading-[22px] leading-[18px] text-[#000000]">
                8. Hindi Language Comprehension Skill (Class X level).
              </p>
            </div>
          </div>
          <div className="border rounded-[30px] !border-[#000000] py-[18px] px-[22px] flex items-start mt-[10px] gap-[14px]">
            <img src="assets/video/i.svg" alt="" />
            <div data-aos="fade-left">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#868282]">
                Note- Question related to Hindi Language Comprehension skill
                will be of Class X level and will be tested through passages
                from Hindi language only without providing English Translation
                thereof in the question paper.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[108px] pt-[50px] md:pb-[75px] pb-[35px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[37px] max-w-[423px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              FIRST PAPER PART-(A) HISTORY
            </h6>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="bg-[#FFEEF0] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-left">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-I
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc overflow-hidden">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Indian History- Political, Economic, Social and Cultural
                    History of India from Harappan civilization to 10th Century
                    A.D
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Political, Economic, Social and Cultural History of India
                    from 11th to 18th Century A.D.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Sultanate and Mughal Rulers and their Administration and
                    Evolution of Medieval Culture
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F0F2FF] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-II
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc overflow-hidden">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Pre-historic and Protohistoric Madhya Pradesh, Major
                    Dynasties of Madhya Pradesh- Gardbhill, Nag, Olinkar and
                    Parivrajak, Uccha Kalp, Gurjar Pratihara, Kalchuri, Chandel,
                    Parmar, Tomar, Gond and Kacchapghaat Dynasty.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FFFAE9] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-III
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Impact of British Rule on Indian Economy and Society.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Reactions of Indians against British Colonial Rule- Peasant
                    and Tribal Revolts, the First Freedom Movement of
                    Independence. Indian Renaissance- National Freedom Movement
                    and its leaders.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Freedom Movement in Madhya Pradesh.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F7FFD7] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-IV
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Emergence of India as a Republic Nation, Reorganization of
                    States, Formation of Madhya Pradesh. Major events of the
                    post independence period.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Indian Cultural Heritage (with special reference to Madhya
                    Pradesh) - Salient aspects of Art Forms, Literature,
                    Festivals and Architecture from ancient to modern time.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    World Heritage Sites and Tourism in Madhya Pradesh.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FDE8FF] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-V
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Princely States of Madhya Pradesh- Gondwana, Bundeli,
                    Bagheli, Holkar, Scindia and Bhopal State (till
                    independence).
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Struggle of Tribal Heroes of Madhya Pradesh and contribution
                    in History- Shankar Shah, Raghunath Shah, Bhimaji Nayak,
                    Khajya Nayak, Tantya Bhil, Ganjan Singh Korku, Badal Bhoi,
                    Pema Falya.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[108px] pt-[50px] md:pb-[75px] pb-[35px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[37px] max-w-[430px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              FIRST PAPER PART- (B) GEOGRAPHY
            </h6>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="bg-[#FFEEF0] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-left">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-I Physical Features and Climate of India
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Geographical Knowledge in Ancient India.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Physiographic (Physical) Divisions of India- The
                    Himalayan Mountains, The Great Plain of North India, The
                    Peninsular Plateau.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Hills, Plateaus, Rivers and Lakes.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Soils of India- Types and distribution.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Climate- Seasons, Temperature, Rainfall, Origin of Monsoon,
                    Upper Air Circulation- Jet Stream
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Climatic Phenomena- El-Nino, La-Nina, Southern Oscillation,
                    Western Disturbances, Indian Ocean Dipole (IOD),
                    Consequences of Climate Change
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F0F2FF] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-II India- Agriculture and Water Resources
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Agriculture- Production and Distribution of Major crops and
                    Millets
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Irrigation- Types of Irrigation Techniques, Sources of
                    Irrigation and Multipurpose Projects.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Food Security, Green Revolution, Strategies for Second Green
                    Revolution and Sustainable Agriculture.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Conservation and Augmentation of Water Resources- Rainwater
                    Harvesting, Methods of Water Conservation, Interlinking the
                    Rivers, National Water Policy.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FFFAE9] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-III India- Natural Resources and Industries
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Forest Resources- Their Types and Distribution.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Minerals and Energy Resources.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Energy Crises and Non-Conventional Sources of Energy.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major industries- Iron and Steel, Cement, Paper, Sugar,
                    Cotton Textile Industry.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Food Processing Industries.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F7FFD7] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-IV Disasters and Techniques
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Natural Hazards and Disasters in India- Earthquake,
                    Tsunamis, Droughts, Floods, Hailstorm, Fog, Cloud burst,
                    Thunderstorm, Tropical Cyclones in India.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Environmental Pollution- Air Pollution, Water Pollution,
                    Soil or Land Pollution and their Prevention, Control and
                    Management, Measures to Mitigate Pollution.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Population Growth in India, Population Pressure on
                    Resources, Rural-urban Migration.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FDE8FF] md:col-span-2 col-span-1 exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-V Geography of Madhya Pradesh
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc overflow-hidden">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Princely States of Madhya Pradesh- Gondwana, Bundeli,
                    Bagheli, Holkar, Scindia and Bhopal State (till
                    independence).
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Rivers and Their Tributaries.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Climate- Seasons, Temperature, Rainfall.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Soils of Madhya Pradesh- Types and Distribution, Soil
                    Erosion and Soil Conservation.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Natural Vegetation- Types and Distribution of Forests, Major
                    Forest Produce.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Crops, Irrigation and Irrigation Projects.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Minerals and Energy Resources, Non-Conventional
                    Sources of Energy.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Industries, Small and Cottage Industries.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Population Growth, Distribution and Density, Urbanisation.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[108px] pt-[50px] md:pb-[75px] pb-[35px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[37px] max-w-[1061px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SECOND PAPER PART-(A) Constitution, Governance, Political and
              Administrative Structure
            </h6>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="bg-[#FFEEF0] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px] overflow-hidden">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-I
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Constitution of India- Its Formation, characteristics, Basic
                    Structure and important amendments.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Conceptual elements- Objectives, Fundamental Rights,
                    fundamental Duties and directive principles of state policy.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Federalism- Central-State Relations, Supreme Court, High
                    Court, Judicial Review, Judicial Activism, Lok Adalat and
                    Public Interest Litigation
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F0F2FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px] overflow-hidden">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-II
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Election Commission of India, Comptroller and Auditor
                    General of India, Union Public Service Commission, Madhya
                    Pradesh Public Service Commission and NITI Aayog.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Role of Caste, Religion, Class, Ethnicity, Language and
                    Gender in Indian politics, Political parties and voting
                    behavior in Indian politics, civil society and Mass
                    movement, Issues related to National Integrity and security
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FFFAE9] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px] overflow-hidden">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-III
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Salient Features of democracy- Political Representations,
                    Participation of Citizens in the Decision making Process
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Community Based Organizations (CBO), Non-Government
                    Organizations (NGOs) and Self Help Groups (SHG).
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Role of Media and Problems (Electronic, Print and Social
                    Media).
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Indian Political Thinkers- Kautilya, Devi Ahilya Bai Holkar,
                    Mahatma Gandhi, Jawaharlal Nehru, Sardar Vallabh Bhai Patel,
                    Ram Manohar Lohia, Dr. Bhimrao Ambedkar, Pandit Deendayal
                    Upadhyaya, Jayaprakash Narayan.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F7FFD7] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px] overflow-hidden">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-IV
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Reorganization of State 1956 and Foundation of Madhya
                    Pradesh, Partition of Madhya Pradesh (2000).
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Governor- Appointment, Powers, Status, Chief Minister and
                    Council of Ministers- Structure, Function and Role.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    The State Legislature of Madhya Pradesh- Constitution and
                    Powers, Role of Speaker, Role of Opposition.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    High Court of Madhya Pradesh, Constitution Jurisdiction and
                    Role.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Accountability and Rights- Competition Commission, Scheduled
                    Caste Commission, Scheduled Tribes Commission and Other
                    Backward Caste Commission, Central Vigilance Commission,
                    Human Rights Commission, Information Commission, Consumer
                    Forum, Children's Commission, Women's Commission.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FDE8FF] overflow-hidden exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-left">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-V
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Administration of Madhya Pradesh- Secretariat, Chief
                    Secretary, Secretary and Commissioner, District
                    Administration in Madhya Pradesh, Role of District
                    Collector.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Rural Local Self Government in Madhya Pradesh- Panchayati
                    Raj organization and Powers, Urban Local Self Government-
                    Organization and Power, Finance Bureaucracy in Local Self
                    Government and importance of autonomy.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Political Scenario of Madhya Pradesh- Upliftment of Tribal,
                    Backward and Deprived classes and issues related to Naxalite
                    problem.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Contribution of Women in Politics of Madhya Pradesh.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Current Issues in the Politics of Madhya Pradesh.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[108px] pt-[50px] md:pb-[75px] pb-[35px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[37px] max-w-[450px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SECOND PAPER PART-(B) SOCIOLOGY
            </h6>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="bg-[#FFEEF0] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-I Basic Consepts of Sociology
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Indian Concept of Society- Joint Family, Family, Kinship,
                    Lineage, Clan, Gotra tradition.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Community, Institution, Association, Culture, Norms and
                    Values.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Elements of Social Harmony, Concept of Civilisation and
                    Culture. Salient Features of Indian Culture.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Social Institutions- Family, Education, Religion, Varna,
                    Rin, Yagya, Sanskar.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Rituals- Various references, Caste system. Ashram,
                    Purushartha, Impact of Religion and Sects on society and
                    marriage.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F0F2FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-II Diversity and Challenges in Indian Society
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Conceptualizing Indian Society- People of India, Unity in
                    diversity.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Cultural diversity- Regional, Linguistic, Religious, and
                    Tribal.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Changing Scenario of Crime- Drug addiction, Suicide, Cyber
                    Crime, Crimes against Women and Domestic Violence.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Current Debate- Tradition and Modernity in India.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Problems of Nation Building- Secularism, Pluralism and
                    Nation building.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FFFAE9] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-III Rural and Urban Sociology
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Approaches to the study of Rural Society- Rural-Urban
                    differences, Ruralism, and Urbanism.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Peasant studies, Panchayati Raj System before and after the
                    73rd Amendment, Rural Leadership, Factionalism, Empowerment
                    of People.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Social issues and Strategies for Rural Development- Bonded
                    and Migrant labours, Trends of changes in rural society.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Characteristics of Urban Community, Changes in Urban
                    Community, Causes and Impact of Urbanization
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Concept of Town Planning, Factors affecting to Urban
                    Planning, Problems of Urban Management in India.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F7FFD7] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-IV Industrialization, Globalization, Social Development
                  and Population
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Industrialization and Social Change in India- Impact on
                    Family, Education, Stratification. Class and Class Conflict
                    in Industrial Society.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    The Challenges of Globalization, Indianization of Sociology,
                    Privatization of Education.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Social Structure and Development, Facilitators, Inhibitors,
                    Development and Socio-Economic disparities.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Culture and Development- Culture as aid and impediment,
                    Post-Modernization, Westernization.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Population Growth and Distribution in India- Growth since
                    1901, Causes and Effects.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Concepts- Fertility, Mortality, Morbidity, Migration, Age
                    and Sex composition.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FDE8FF] md:col-span-2 col-span-1 exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-V Human Resource Development and Social Welfare Schemes
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    National Education Policy 2020- Vision, Principles, School
                    Education, Higher Education, Professional Education, Online
                    and Digital Education, Adult Education and Lifelong
                    learning.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Issues related to Social Classes and their Welfare
                    Programmes- Senior Citizens, Children, Women, Under
                    Privileged Classes and Displaced groups arising out of
                    Developmental Projects. Issues related to Girl's Education.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Community Development Programme, Extension Education,
                    Panchayati Raj, Role of Non-Governmental Organizations
                    (NGO's) in Community Development.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Status of Tribes in Madhya Pradesh and their Social
                    Structure, Customs. Beliefs, Marriage, Kinship, Religious
                    Beliefs, Traditions, Festivals and Celebrations among tribe
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Folk Culture of Madhya Pradesh.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[108px] pt-[50px] md:pb-[75px] pb-[35px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-left">
            <h6 className="bg-[#D0021B] exam-btn mb-[37px] max-w-[484px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              THIRD PAPER PART-(A) ECONOMICS
            </h6>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="bg-[#FFEEF0] md:col-span-2 col-span-1 exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px] overflow-hidden">
              <div data-aos="fade-left">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-I Fundamental Aspects of the Indian Economy
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Salient features of Indian economy.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Viksit Bharat @2047.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Sectoral contribution of Agriculture, Industry and Service
                    Sector.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Different concepts of National Income.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Crops and Cropping Patterns.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Challenges- Declining Productivity, Farmer Distress, and
                    Weather Dependency.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Government Initiatives- PM-KISAN, NMSA and various schemes.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Agriculture Price Policy, Marketing and Finance.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Agri Start-ups and Agro-Processing for Value Addition.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Industrial Policies and Industrial Development in India.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Manufacturing and Infrastructure- Make in India and
                    Infrastructure Projects.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Hospitality and Tourism- Contribution to Foreign Exchange
                    Earnings.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Standandisation of Goods and Services in India.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F0F2FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-II Taxation and Policy Landscape
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Fiscal Policy- Public Expenditure, Revenue Taxation and
                    Deficit Management.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Monetary Policy and Financial Inclusion in India.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Impact of Cash Transactions on Informal Economy.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Food Security and Public Distribution System
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Poverty, Unemployment and Regional Imbalances
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    India's Foreign trade: Value, Composition and Direction
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Export Promotion, Import Substitution and Foreign Capital.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Role of International Financial Institutions: IMF, World
                    Bank, ADB and WTO.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FFFAE9] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-III Overview of Madhya Pradesh Economy
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Growth in State Domestic Product and Per Capita Income in
                    Madhya Pradesh. Self Reliant/Aatm Nirbhar Madhya Pradesh
                    (ANMP). One District One Product. (ODOP).
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Major Crops, Cropping Patterns and Holdings
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Food Security, Distribution Systems and Storage.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Horticulture, Livestock, Dairy and Fisheries.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Industrial Sector's Status, Infrastructure Development.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    MSME and Growth of Traditional Industries and Support.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Rural and Urban Development in Madhya Pradesh, Tribal
                    Economy- Farming Methods, Major Forest Produce, Handicrafts
                    and Haat Bazaar.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Tourism, Trade and Investment Promotion.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F7FFD7] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-IV Social and Economic Development in Madhya Pradesh
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Health Infrastructure, Education and Skill Development.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Policies for Natural Resource Management- Forests, Water and
                    Minerals.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Financial and Social Inclusion and Welfare Schemes
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Influence of Demography of Madhya Pradesh.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Productivity of Human Resources and Employment.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Progress of Intellectual Property Rights (IPR) in Madhya
                    Pradesh
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    State Revenue, Expenditure, Debt and Financial Discipline.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FDE8FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit- V Statistics, Data Analysis and Probability
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Data collection techniques.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Mean, Median and Mode- Calculations and Interpretations
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Types of Data Analysis- Descriptive vs. Inferential.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Sampling techniques.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Data Presentation Techniques- Tables, charts, graphs.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Basic concepts of probability.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[108px] pt-[50px] md:pb-[75px] pb-[35px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[37px] max-w-[863px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              THIRD PAPER PART- (B) SCIENCE, TECHNOLOGY AND PUBLIC HEALTH
            </h6>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="bg-[#FFEEF0] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px] overflow-hidden">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-I General Science
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Simple Application of Science.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Micro-organism- Structure and types and Organic Farming.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Cell- Structure, Types, Division and Function,
                    Classification of Animals and Plants.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Nutrition in Plants, Animals and Human beings, Balanced
                    Diet, Vitamins, Deficiency Diseases, Hormones, Body Organs
                    of Human Beings- Structure and Functioning.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Application of Ethnobiology.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Contribution in Astronomy by Arya Bhatta, Varahmihir,
                    Brahmagupta and Bhaskar First and Second. Initial
                    Information of Ancient and Modern Observatories.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Patents and Intellectual Property Rights (Trips, Trims).
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F0F2FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-II Computer Science
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Types of Computers, Characteristics and Generation.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Memory, Input and Output Devices, Storage Devices, Software
                    and Hardware, Operating systems, Windows, Uses of Microsoft
                    office.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Fundamental Knowledge of Computer Languages (C, C++, Java),
                    Translators, Interpreters and Assemblers.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Internet and E-mail.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Social Media.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    E-Governance.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Fundamental Knowledge of Artificial Intelligence (AI), Cloud
                    Computing, Different useful Portals, Websites and Webpages.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Mathematical Science
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Numbers and its type, Methods of Unit Measurement, Equations
                    and Factors, Profit loss, Percentage, Simple and Compound
                    Interest, Ratio- Proportion.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Area and Volume of Geometric shapes and Surface area.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FFFAE9] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-III
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    AYUSH- Basic Principle of Ayurveda, Yoga and Naturopathy,
                    Unani, Siddha, Sowa-rigpa, Basic Principles of Homeopathic
                    Treatment.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    One Nation One Health System/Policy-2030.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Ayurveda- Basic knowledge of Tridosh, Panchamahabhut,
                    (Aakash, Vayu, Agni, Jal, Prathvi) Dincharya, Ritucharaya,
                    Panchkarma. Biological Clock.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Health Management including AYUSH at the Central, State,
                    District and Village level. National Health Policy (NHP) and
                    scope of Ayurveda in NHP.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Yoga- Preliminary knowledge of Panchkosh Principles,
                    Ashtanga Yoga, Shatkarma, Mudra. Naturopathy- Therepeutic
                    effect of Soil treatment, Sun Bath, Hydrotherapy and its
                    types.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Shodasha Sanskar- General Knowledge of Namkarana,
                    Nishkramana, Karnavedha etc and its scientific importance.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F7FFD7] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-left">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-IV
                </p>
              </div>

              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    National Health Programme- Health Hygiene and Disease,
                    Leprosy (NLEP), AIDS (NACP), Blindness (NPCB), Polio,
                    National TB Elimination Program, Vector Born Disease Control
                    Program, Reproductive and Child Health (RCH) Program,
                    Integrated Child Development Scheme (ICDS), Universal and
                    National Immunization Program, National Ayush Mission (NAM),
                    National Family Health Survey (NFHS).
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Swachh Bharat Mission, Ayushmana Bharat Yojana, National
                    Health Mission (NRHM and NUHM), Maternal Mortality Rate in
                    Madhya Pradesh.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Different Biomarkers such as normal range of Hematology,
                    Biochemistry, Serology.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Primary Health Care- Principles and Elements of Primary
                    Health Care, levels of Health Care, Structure of Primary
                    Health Care at Village and Sub center, Primary Health Center
                    (PHC), Community Health Center (CHC) and levels of Rural
                    Hospitals.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FDE8FF] md:col-span-2 col-span-1 exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit- V
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Concept of Environment in Indian Tradition and Culture.
                    Janapadodhvansh- Distortions of Air, Water, land, Time.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Impact of Human activities on Environment, Ethics and Values
                    related to environment, bio-diversity (especially in the
                    context of Madhya Pradesh), Environment- Pollution, Climate
                    change. Endangered and Extinct Species.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Problems and Challenges Related to Environment, Causes and
                    Effects of Environmental Degradation.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Environmental Education- Public Awareness Programs,
                    Environmental Education and its Relationship with Health and
                    Safety.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Environment friendly Technology, Constitutional Provisions
                    for Environmental Protection. Environmental Protection
                    Policies and Regulatory Framework.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Role of tribes of Madhya Pradesh (Baiga, Sahariya, Bhariya,
                    Bhil, Gond. etc.) in Environmental Conservation.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Solid Waste Management- Causes, Effects and Control measures
                    of Urban and Industrial Waste.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Cleanliness Survey Campaign- Objective, Various Stages,
                    Achievements and Future.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Water Security.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Various efforts in the field of Water Conservation.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[108px] pt-[50px] md:pb-[75px] pb-[35px] bg-[#FFFFFF] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-left">
            <h6 className="bg-[#D0021B] exam-btn mb-[37px] max-w-[1208px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              FOURTH PAPER PART- (A) PHILOSOPHY, PSYCHOLOGY, PUBLIC
              ADMINISTRATION AND CASE STUDY
            </h6>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="bg-[#FFEEF0] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-I Indian Shaddarshan, Philosophers/Thinkers, Social
                  Reformers
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-right">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Indian Shaddarshan.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Socrates, Plato, Aristotle.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Food Security, Mahavir, Buddha, Acharya Shankar, Charwak,
                    Bharthari. Systems and Storage.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Gurunanak, Kabir, Tulsidas, Sant Ravidas.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Ravindra Nath Tagore, Raja Rammohan Roy, Devi Ahilyabai
                    Holkar, Savitribai Phule
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Swami Dayanand Saraswati, Swami Vivekanand, Maharshi Arvind
                    and Sarvpalli Radhakrishnan, Dr. Bhimrao Ambedkar, Pandit
                    Deendayal Upadhyay.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F0F2FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-II Nation Building and Moral Concepts
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Concept of Nation, Powers and Constituents.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    National Security, Interests and Character.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    National Security Operations, Armed forces, Bodies,
                    Divisions and Spy Agencies.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Basic Morality Concepts- Goodness, Virtues, Non-Violence,
                    Responsibility.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Role of Bhagawat Geeta in Ethics and Administration.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FFFAE9] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-III Human Behaviour and Psychotherapy
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Attitude- Subject-matter, Elements, Function, Formation of
                    Attitude, Attitudinal Change, Persuasive Communication,
                    Prejudice and Discrimination, Stereotypeness in Indian
                    context.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Aptitude- Aptitude and fundamental values for Civil Service,
                    Integrity, Impartiality and Non-partnership, Objectivity,
                    Dedication to Public Service, Empathy, Tolerance and
                    Compassion towards the weaker-Sections.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Emotional Intelligence- Concepts, their utilities and
                    application in Administration and Governance.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Individual Differences- Factors, Theories and Behaviour
                    Differences.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Mental Disorders and Psychotherapy- Depression, Social
                    anxiety Disorder, Schizophrenia, Social Phobia, Bipolar
                    Disorder. Psychotherapy- Person Centered Therapy, Behaviour
                    Therapy, Rational Emotive Behaviour Therapy, Cognitive
                    Behaviour Therapy, Positive Therapy and Family Therapy.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F7FFD7] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-IV Moral Value in Public Administration
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Human Need and Motivation- Elements affecting Human
                    Personalities, dutifulness, sense of Values, Lifevalue,
                    Sensitivity, Technology and Moral Value
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Ethics and Values in Public Administration- Ethical elements
                    in governance Integrity, Accountability and Transparency,
                    Ethical Reasoning and Moral Dilemmas, Conscience as a source
                    of ethical guidance. Code of Conduct for Civil Servants,
                    Implementation of Higher Values in Governance.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Corruption- Types and Causes of Corruption, Effects of
                    Corruption, Approaches to minimizing Corruption, Role of
                    Society, Media, Family and Whistleblower, United Nation
                    Convention on Corruption, Measuring corruption, Transparency
                    International, Lokpal and Lokayukt.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FDE8FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-V Case Study
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Based on the contents of the syllabus in Part-A of question
                    Paper.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[108px] pt-[50px] md:pb-[75px] pb-[35px] bg-[#FFEEF0] overflow-hidden md:px-[100px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[37px] max-w-[1143px] w-full font-sans font-[600] md:text-[24px] text-[18px] md:leading-[32px] leading-[26px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              FOURTH PAPER PART (B) ENTREPRENEURSHIP, MANAGEMENT, PERSONALITY
              DEVELOPMENT AND CASE STUDY
            </h6>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
            <div className="bg-[#FFEEF0] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit- I Entrepreneurship Concept and Development
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Concept and Significance of Entrepreneurship,
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Symptoms of Entrepreneurship, Principles, Characteristics
                    and Importance of Innovation.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Process of Entrepreneurship- Creativity, Idea Generation,
                    Analysis and Business Plan.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Important factors and statutory requirements for new
                    Enterprise Management, Challenges faced by Women
                    Entrepreneurs.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Development of Entrepreneurship in India- Startup India,
                    Make in India, Organizations for promoting Entrepreneurial
                    development in India.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F0F2FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-II Business Organizations and Management
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Business- Concept and Significance, Scope, Administration
                    and Management, Purchase and Material, Management.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Management Process, Resource Management and functions of
                    Management- Plan, Organization, Direction, Control,
                    Coordination, Decision Making, Motivation, Leadership and
                    Communication.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Time Management and Organization.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Branding, Marketing and Networking.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FFFAE9] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-III Administration and Management
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Important dimensions of Management in Public Administration.
                    Human Resource Management.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Financial Management- Its scope and significance in Public
                    Administration.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Stress and Conflict Management Techniques and their
                    significance in Public Service Domain.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Administration and Management of Plurality, Opportunities
                    and Challenges in Public Administration.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Disaster Management..
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#F7FFD7] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  Unit-IV Overall Personality Development
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Overall Personality and National Development.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Different component of Personality Development.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Concepts of successfulness.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Impediments in achieving success.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Factors responsible for success.
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Learning from failure- accepting failure as an opportunity
                    for continuous improvement and valuable introspection
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Implementation of Government Programme- Planning effective
                    strategy to ensure successful implementation of Government
                    Programm
                  </li>
                </div>
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Approach and facts regarding following issues- Civic Sense,
                    Loyalty to the Institution, Voter Awareness Programme.
                    Transport Management, Trend of Drug abuse, Adulteration in
                    food items, Night Culture, Value based life and Legal
                    Awareness Programme.
                  </li>
                </div>
              </ul>
            </div>
            <div className="bg-[#FDE8FF] exam-card-s border-[2px] pb-[20px] border-[#FFFFFF] rounded-[8px]">
              <div data-aos="fade-right">
                <p className="bg-[#1C2672] py-[14px] rounded-[8px] text-[#FFFFFF] font-[Outfit] font-[600] text-[20px] leading-[22px]  px-[17px]">
                  UNIT-V Case Study
                </p>
              </div>
              <ul className="flex pl-[18px] flex-col gap-[22px] pt-[28px] mx-[13px] list-disc">
                <div data-aos="fade-left">
                  <li className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    Based on the contents of the syllabus in Part-B of question
                    Paper.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <div className="md:py-[72px] py-[30px] flex md:flex-row flex-col items-center justify-center gap-[16px]">
          <Link
            to={mppsc?.link1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[22px] bg-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF]"
          >
            Purchase Courses <img src="assets/home/round-right.svg" alt="" />
          </Link>
          <a
            href={mppsc?.link2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[22px] border border-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#D0021B]"
          >
            Download Details <img src="assets/video/download.svg" alt="" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Exam;
