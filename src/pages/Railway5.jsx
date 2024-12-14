import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons2 from "../components/buttons/ExamButtons2";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import axios from "axios";
import { Api_Url } from "../URL";

function Railway5() {

  // function handleDownload() {
  //   const pdfUrl = '/assets/cpdf/MPPSC.pdf';
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.setAttribute("download", "MPPSC Latest Exam Pattern 2024.doc");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }


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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/RAILWAY-RPF`);
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
              <h6 className="font-sans font-[700] pb-[10px] md:text-[36px] text-[24px] md:leading-[36.97px] leading-[30px] text-center text-[#D0021B]">
                Railway
              </h6>
              <img src="assets/video/line.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] md:h-[400px] relative">
        <div className="container m-auto">
          <div className="max-w-[1210px] md:absolute relative md:h-[232px] w-full left-[50%] translate-x-[-50%] md:top-[-72px] top-0">
            <ExamButtons2 />
            <div className="rounded-[30px] md:pl-[54px] pl-[20px] md:pr-[43px] pr-[20px] pt-[20px] md:pb-[20px] pb-[30px] w-full md:absolute relative md:top-[90px] top-0 bg-[#D0021B]">
              <div className="flex justify-between md:flex-row flex-col items-center gap-[32px]">
                <div>
                  <h6 className="font-sans font-[700] text-[32px] leading-[43.65px] text-[#FFFFFF] pb-[20px]">
                    RPF SI & CONSTABLE SYLLABUS - 2024
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    Age Limit - RPF SI-(20 - 25 Years) and CONSTABLE – (18 – 25
                    Years)
                    <br />
                    Qualification Required -RPF SI – Graduation and Constable –
                    10 Pass
                    <br />
                  </p>
                  <div className="bg-[#FFFFFF] h-[6px] rounded-[48px] mt-[24px] mb-[45px] w-full"></div>
                </div>
                <div className="w-[50%]">
                  <img src="assets/img2.png" className="pt-[18px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] overflow-hidden">
        <div className="container m-auto md:mt-[80px] mt-[20px]">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[540px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Pattern of Exam – Objective Type
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Note- There will be negative marking of 1/3 for Each Wrong
                Answer.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-[30px] gap-[12px]">
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-12 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    RPF SI & CONSTABLE (CBT)
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    विषय
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    प्रश्‍नों की संख्‍या
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    अंक
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    समय
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य जागरूकता / General Awareness
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        90 मिनट
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अंकगणित / Arithmetic
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        35
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        35
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        90 मिनट
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य बुद्धि एवं तर्क / General Intelligence &
                        reasoning
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        35
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        35
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        90 मिनट
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कुल
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        120
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        120
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        &nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[350px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                RPF SI & CONSTABLE SYLLABUS
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[400px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्य जागरूकताः / General Awareness:
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. संख्या पद्धति / Number System
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. कला और संस्कृति / Art & Culture
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. भूगोल / Geography
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. अर्थशास्त्र / Economics
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. सामान्य राजनीति / General Polity
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. भारतीय संविधान / Indian Constitution
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. खेल / Sports
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. सामान्य विज्ञान / General Science
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. इत्‍यादि। /etc.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                अंकगणित: / Arithmetic:
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. संख्या प्रणाली / Number systems
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. पूर्ण संख्या / whole numbers
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. दशमलव और भिन्न / decimal and fractions
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. मौलिक अंकगणितीय संचालन / fundamental arithmetical
                    operations
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. प्रतिशत / percentage
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. अनुपात और अनुपात / ratio and proportion
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. औसत / averages
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. ब्याज / interest
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. लाभ और हानि / profit and loss
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. छूट / discount
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. तालिकाओं और ग्राफ़ / tables and graphs
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. क्षेत्रमिति / mensuration
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    13. समय और दूरी / time and distance
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    14. अनुपात और समानुपात / ratio and proportion
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    15. इत्‍यादि। /etc.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[500px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्य बुद्धिमता एवं तर्क / General Intelligence and Reasoning
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. सादृश्य / analogies
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. वर्गीकरण / Classifications
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. स्थानिक दृश्य / spatial visualization
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. स्थानिक अभिविन्यास / spatial orientation
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. समस्या समाधान विश्लेषण / problem solving analysis
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. निर्णय / judgment
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. निर्णय लेना / decision making
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. दृश्य स्मृति / visual memory
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. भेदभावपूर्ण अवलोकन / discriminating observation
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. संबंध अवधारणाएं / relationship concepts
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. अंकगणितीय तर्क / arithmetical reasoning
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. मौखिक और आंकड़ा वर्गीकरण / verbal and figure
                    classification
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    13. अंकगणितीय संख्या श्रृंखला / arithmetic number series
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    14. गैर-मौखिक श्रृंखला / non-verbal series
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    15. कोडिंग पर प्रश्न और डिकोडिंग / coding and decoding
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    16. कथन और निष्कर्ष / statement and conclusion
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    17. न्यायसंगत तर्क / syllogistic reasoning
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    18. इत्‍यादि। /etc.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                PHYSICAL EFFICIENCY TEST (PET) & PHYSICAL MEASUREMENT (PMT)
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-12 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    PET & PMT
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Category
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    1600 meters
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    800 meters
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Long Jump
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    High Jump
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Sub Inspector (Male)
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      6 min. 30 sec.
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      ---
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      12 feet
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      3 feet 9 inch
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Sub Inspector (Female)
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      ---
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      4 min.
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      9 feet
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      3 feet
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Constable (Male)
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      5 min. 45 sec.
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      ---
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      14 feet
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      4 feet
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Constable (Female)
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      ---
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      3 min. 40 sec.
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      9 feet
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      3 feet
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                दस्तावेज़ सत्यापन / Document Verification and Empaneling of
                Candidates
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                मेडिकल / Medical
              </h6>
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

export default Railway5;
