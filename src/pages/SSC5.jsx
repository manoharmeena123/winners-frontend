import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons from "../components/buttons/ExamButtons";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function SSC5() {

  function handleDownload() {
    const pdfUrl = '/assets/pdf/SSCGD.docx';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "SSC GD.docx");
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


  const [sscCGL, setSSCCGL] = useState();
  const [loading, setLoading] = useState(true);


  const getSSCExamLinks = async () => {
    try {
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/SSC-GD`);
      setSSCCGL(response?.data);
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


















  return (
    <>
      <Header />
      <div className="mt-[82px] overflow-hidden relative">
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
                SSC
              </h6>
              <img src="assets/video/line.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] md:h-[300px] relative">
        <div className="container m-auto">
          <div className="max-w-[984px] md:absolute relative md:h-[232px] w-full left-[50%] translate-x-[-50%] md:top-[-72px] top-0">
            <ExamButtons />
            <div className="rounded-[30px] md:pl-[54px] pl-[20px] md:pr-[43px] pr-[20px] pt-[35px] md:pb-0 pb-[30px] w-full md:absolute relative md:top-[90px] top-0 bg-[#D0021B]">
              <div className="flex justify-between md:flex-row flex-col items-center gap-[32px] pb-[30px]">
                <div>
                  <h6 className="font-sans font-[700] text-[32px] leading-[43.65px] text-[#FFFFFF] pb-[20px]">
                    SSC GD
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    The Tier 1 exam is computer based (Online). It consists of 4
                    sections, each section has 20 questions. The time duration
                    for the SSC GD Constable Tier 1 exam is 60 minutes. There is
                    a negative marking of 0.50 marks for every incorrect answer.
                  </p>
                  <div className="bg-[#FFFFFF] h-[6px] rounded-[48px] mt-[24px] mb-[45px] w-full"></div>
                </div>
                <img
                  src="assets/video/photo2.svg"
                  className="pt-[18px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fffcf9] overflow-hidden md:px-[100px] px-[20px] md:pb-[110px] pb-[50px]">
        <div data-aos="fade-up">
          <div className="container m-auto">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Subject
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    No. of Questions
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Maximum Marks
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Exam Duration
                  </p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      General Intelligence & Reasoning
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      20
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      40
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 minutes (1 hour)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      General Knowledge & General Awareness
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      20
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      40
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 minutes (1 hour)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Elementary Mathematics
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      20
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      40
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 minutes (1 hour)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      English/ Hindi
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      20
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      40
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 minutes (1 hour)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Total
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      80
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      160
                    </p>
                  </div>
                  <div className="md:col-span-3 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] overflow-hidden md:px-[100px] pb-[80px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[200px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Pattern of Exam
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 mb-[80px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. Computer-based examination
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. PET [Physical Efficiency Test] / PST [Physical Standard
                  Test]
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. Medical Exam
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[350px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC GD CONSTABLE SYLLABUS
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    General Intelligence & Reasoning
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    General Knowledge & General Awareness
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Elementary Mathematics
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    English
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Hindi
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-start border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 flex flex-col gap-[20px] md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. Analogies
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. Similarities and differences
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. Spatial visualization
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. Spatial orientation
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. Visual memory
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6. Discrimination
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7. Observation
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8. Relationship concepts
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        9. Arithmetical reasoning and figural classification
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10. Arithmetic number series
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        11. Non-verbal series
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        12. Figural Classification
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        13. Coding and decoding
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 flex flex-col gap-[20px] h-full border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. Sports (खेल)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. History (इतिहास)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. India & its neighbouring countries
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. Culture (संस्कृति)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. Geography (भूगोल)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6. Economic Scene (आर्थिक परिदृश्य)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7. General Polity (सामान्य राजनीति)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8. Indian Constitution (भारतीय संविधान)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        9. Scientific Research (वैज्ञानिक अनुसंधान)
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 flex flex-col gap-[20px] h-full border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. Number Systems (संख्या प्रणाली)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. Problems Related to Numbers
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. Computation of Whole Numbers (पूर्ण संख्याओं की गणना)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. Decimals and Fractions (दशमलव और भिन्न)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. Relationship between Numbers (संख्याओं के बीच संबंध)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6. Fundamental arithmetical operations (मूल अंकगणितीय
                        संक्रियाएं)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7. Percentages (प्रतिशत)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8. Ratio and Proportion (अनुपात और समानुपात)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        9. Averages
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10. Interest (ब्याज)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        11. Profit and Loss (लाभ और हानि)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        12. Discount
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        13. Mensuration
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        14. Time and Distance (समय और दूरी)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        15. Ratio and Time (अनुपात और समय)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        16. Time and Work (समय और कार्य)
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 flex flex-col gap-[20px] h-full border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. Fill in the blanks
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. Error Spotting
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. Phrase Replacement
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. Synonyms & Antonyms
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. Cloze Test
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6. Phrase and idioms meaning
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7. Spellings
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8. One Word Substitution
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        9. Reading comprehension
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 flex flex-col gap-[20px] h-full border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. संधि और संधि विच्छेद
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. उपसर्ग
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. प्रत्यय
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. पर्यायवाची शब्द
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. मुहावरे और लोकोक्तियाँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6. सामासिक पदों की रचना और समास विग्रह
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7. विपरीतार्थक (विलोम) शब्द
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8. शब्द-युग्म
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        9. वाक्यांश के लिए एक सार्थक शब्द
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10. संज्ञा शब्दों से विशेषण बनाना
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        11. अनेकार्थक शब्द
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        12. वाक्य-शुद्धि : अशुद्ध वाक्यों का शुद्धिकरण और
                        वाक्यगत अशुद्धि का कारण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        13. वाच्य : कर्तृवाच्य, कर्मवाच्य और भाववाच्य प्रयोग
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        14. क्रिया : सकर्मक, अकर्मक और पूर्वकालिक क्रियाएँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        15. शब्द-शुद्धि : अशुद्ध शब्दों का शुद्धिकरण और शब्दगत
                        अशुद्धि का कारण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        16. अंग्रेजी के पारिभाषिक (तकनीकी) शब्दों के समानार्थक
                        हिंदी शब्द
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        17. सरल, संयुक्त और मिश्र अंग्रेजी वाक्यों का हिंदी में
                        रूपांतरण और हिंदी वाक्यों का अंग्रेजी में रूपांतरण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        18. कार्यालयी पत्रों से संबंधित ज्ञान
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="md:py-[72px] py-[30px] flex md:flex-row flex-col items-center justify-center gap-[16px]">
            <Link
              to={sscCGL?.link1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[22px] bg-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF]"
            >
              Purchase Courses <img src="assets/home/round-right.svg" alt="" />
            </Link>
            <a
              href={sscCGL?.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[22px] border border-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#D0021B]"
            >
              Download Details <img src="assets/video/download.svg" alt="" />
            </a>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SSC5;
