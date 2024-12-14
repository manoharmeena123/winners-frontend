import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons3 from "../components/buttons/ExamButtons3";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import axios from "axios";
import { Api_Url } from "../URL";

function Mp3() {
  // function handleDownload() {
  //   const pdfUrl = "/assets/cpdf/MPPSC.pdf";
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/MP-PATWARI`);
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
                MP ESB
              </h6>
              <img src="assets/video/line.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] md:h-[400px] relative">
        <div className="container m-auto">
          <div className="max-w-[1210px] md:absolute relative md:h-[232px] w-full left-[50%] translate-x-[-50%] md:top-[-72px] top-0">
            <ExamButtons3 />
            <div className="rounded-[30px] md:pl-[54px] pl-[20px] md:pr-[43px] pr-[20px] pt-[20px] md:pb-[20px] pb-[30px] w-full md:absolute relative md:top-[150px] top-0 bg-[#D0021B]">
              <div className="flex justify-between md:flex-row flex-col items-center gap-[32px]">
                <div>
                  <h6 className="font-sans font-[700] text-[32px] leading-[43.65px] text-[#FFFFFF] pb-[20px]">
                    (समूह-2 उप समूह-4 सहायक समपरीक्षक, सहायक जनसंपर्क अधिकारी,
                    सहायक नगर निवेक्षक, सहायक राजस्‍व अधिकारी (पटवारी), सहायक
                    अग्निशमन एवं समकक्ष पद):-
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[28px] text-[#FFFFFF]">
                    Age Limit - 18-40 Years, आरक्षित श्रेणी (अनु.जाति/अ.ज.जा.
                    /अ.पि.व.) के अभ्यर्थी को 5 वर्ष की अधिकतम आयु सीमा में छूट
                    प्राप्त होगी
                    <br />
                    <br />
                    Qualification Required -Graduation (विभागों द्वारा निर्धारित
                    न्‍यूनतम शैक्षणिक अर्हता)
                  </p>
                  <div className="bg-[#FFFFFF] h-[6px] rounded-[48px] mt-[24px] mb-[45px] w-full"></div>
                </div>
                <div className="w-[50%]">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/ESB%20NEW%20logo-01.png?alt=media&token=b9a1180e-3335-40cd-a45c-46c0cbe76a9b" className="pt-[18px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] overflow-hidden pt-[80px]">
        <div className="container m-auto md:mt-[80px] mt-[20px]">
          {/* <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
            <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
              Note- There will be negative marking of 1/3 for Each Wrong Answer.
            </p>
          </div> */}
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[490px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Pattern of Exam – Objective (CBT):-
            </h6>
          </div>
          <div className="flex flex-col mt-[30px] gap-[12px]">
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    समूह
                  </p>
                </div>
                <div className="col-span-5 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    प्रश्‍न पत्र का विवरण
                  </p>
                </div>
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    कुल प्रश्न
                  </p>
                </div>
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    कुल अंक
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    कुल समय
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1.
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        समूह-2
                      </p>
                    </div>
                    <div className="col-span-5 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        (अ) सामान्‍य विज्ञान, सामान्‍य हिन्‍दी, सामान्‍य
                        अंग्रेजी, सामान्‍य गणित
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        180 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2.
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उपसमूह-4
                      </p>
                    </div>
                    <div className="col-span-5 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        (ब) सामान्‍य ज्ञान एवं अभिरूचि, सामान्‍य कम्‍प्‍यूटर
                        ज्ञान, सामान्‍य तार्किक योग्‍यता, सामान्‍य प्रबंधन
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        180 Minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              पाठ्यक्रम / Syllabus:-
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Reasoning Topics:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. कोडिंग-डिकोडिंग / Coding –Decoding
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. घन व घनाभ / Cube and Cuboid
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. कैलेंडर / Calendar
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. घड़ी / Clock
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. सांकेतिक भाषा / Sign language
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. अंग्रेजी वर्णमाला / English alphabet
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. रक्त संबंध / Blood Relations
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. रैंकिंग / Ranking
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. दिशा ज्ञान परीक्षण / Direction And Distance
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. वर्गीकरण / Classification
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. सादृश्यता / Analogy
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12. श्रृंखला / Series
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. लुप्त पद ज्ञात करना / Finding Missing Terms / Pattern
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. गणितीय संक्रियाएं / Mathematical Operations
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. शब्दों का तार्किक क्रम / Logical order of words
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. बैठने की व्यवस्था / Seating Arrangement
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. न्याय / Justice
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. कथन एवं पूर्वधारणा / Statements and Assumptions
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. कथन एवं कार्यवाही / Statement and Action
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  20. कथन एवं निष्कर्ष / Statement and Conclusion
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  21. कथन एवं तर्क / Statement and Argumentation
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  22. पहेली परीक्षण / Puzzle Test
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  23. असमानता / Inequality
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  24. संकेत व चिन्ह / Signs and Symbols
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  25. दर्पण प्रतिबिंब / Mirror Image
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  26. जल प्रतिबिंब / Water Reflection
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  27. पासा / Dice
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  28. सन्निहित आकृति / Contiguous figure
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  29. आकृति पूर्ण करना / Shape Completing
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  30. ज्यामितीय आकृति की गणना / Calculation of Geometric Shapes
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  31. चित्र निर्माण और स्थान परिकल्पना / Image making and space
                  visualization
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  32. वेन आरेख / Venn Diagram
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] md:mt-[80px] mt-[20px] max-w-[200px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Computer:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1.  कम्प्यूटर का सामान्य परिचय (Introduction to computer OR
                  Fundamentals of Computer)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (a) Basic of computer
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (b) History of computer
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (c) Generation of Computer
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (d) Classification of computer
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2.  कम्प्यूटर आर्किटेक्चर / कम्प्यूटर सिस्टम के भाग (Computer
                  Architecture /Component of Computer System)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3.  कम्प्यूटर हार्डवेयर (Computer Hardware)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (a) Input computer
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (b) Output computer
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4.  कम्प्यूटर मेमोरी (Computer Memory)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5.  कम्प्यूटर सॉफ्टवेयर (Computer Software)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6.  ऑपरेटिंग सिस्टम (Operating System)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7.  प्रोग्रामिंग अवधारणाऍं (Programming Concepts)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8.  डाटा संचार एवं नेटवर्किंग (Data Communication and
                  Networking)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9.  इंटरनेट तथा इसकी सेवाएँ (Internet and its Services)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10.  कम्‍प्यूटर सिक्‍योरिटी / Computer Security
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11.  माइक्रोसॉफ्ट ऑफिस (Microsoft Office)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (a) MS word
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (b) MS excel
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  (c) Ms Power point
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12.  डाटा बेस की धारणाएँ (Data Base Concepts)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13.  डाटा निरूपण (Data Representation)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14.  शब्दावली (Vocabulary)
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] md:mt-[80px] mt-[20px] max-w-[200px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              सामान्य ज्ञान:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1.  मध्य प्रदेश का सामान्य ज्ञान (General Knowledge of Madhya
                  Pradesh)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2.  समसमायिकी (Current Affairs)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3.  भारतीय अर्थव्यवस्था (Indian Economy)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4.  भूगोल (Geography)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5.  इतिहास (History)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6.  राजनीति शास्त्र (Political Science)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7.  खेल (Sports)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8.  कला और संस्कृति (Art and Culture)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9.  विविध (Miscellaneous)
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] md:mt-[80px] mt-[20px] max-w-[200px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              सामान्‍य प्रबंधन:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. प्रबंध का परिचय
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. प्रबंध के सिद्धांत
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. व्यावसायिक वातावरण
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. योजना
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. संगठन
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. नियुक्तीकरण
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. निर्देशन
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. नियंत्रण
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. मानव संसाधन प्रबंधन
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. उद्यमिता
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. लागत निर्धारण और इन्वेंट्री प्रबंधन की बुनियादी बातें
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12. उपभोक्ताओं की सुरक्षा
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. संगठनात्मक व्यवहार
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. व्यवसाय के विभिन्न रूप
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. लघु व्यवसाय
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. सार्वजनिक, निजी और वैश्विक उद्यम
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. व्यावसायिक नैतिकता
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. व्यवसाय वित्तीय के स्रोत
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. विपणन
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  20. लेखांकन
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  21. ई - कॉमर्स
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] md:mt-[80px] mt-[20px] max-w-[200px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Maths:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. अनुपात और समानुपात / Ratio and Proportion 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. आयु / Age 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. नाव और धारा / Boat & Stream
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. प्रतिशत / Percentage 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. संख्या पद्धति / Number System 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. क्षेत्रमिति / Mensuration
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. लाभ - हानि और छूट / Profit – Loss & Discount 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. लघुत्तम समापवर्त्य एवं महत्तम समापवर्तक / LCM & HCF 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. मिश्रण / Mixture & Allegation
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. साधारण ब्याज / Simple Interest 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. घातांक और करणी / Surds & Indices 
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12. बहुपद / Polynomials
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. चक्रवृद्धि ब्याज / Compound Interest 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. डेटा व्याख्या / Data Interpretation 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. साझेदारी / Partnership
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. समय और कार्य / Time and Work 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. सरलीकरण / Simplification
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. निर्देशांक ज्यामिति / Coordinate Geometry
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. श्रृंखला नियम / Chain Rule
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  20. प्रायिकता / Probability 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  21. क्रमचय, संचय / Permutation, accumulation
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  22. औसत / Average
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  23. पाइप और टंकी / Pipes & Cistern 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  24. बीजगणित / Algebra 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  25. सांख्यिकी / Statistics
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  26. समय और दूरी/ Time and Distance 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  27. ऊँचाई और दूरी / Height and Distance
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  28. त्रिकोणमिति / Trigonometry 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  29. दशमलव भाग / Decimal, Fractions
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  30. रेल गाड़ी / Train  
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  31. ज्यामिति गणना / Geometry Calculations
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] md:mt-[80px] mt-[20px] exam-btn max-w-[350px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              सामान्‍य विज्ञान (General Science):-
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              भौतिकी (PHYSICS):-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. भौतिक राशियाँ और मापन (Physical Quantities and Measurement)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2.यांत्रिकी (Mechanics)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. ऊष्‍मा एवं ऊष्‍मागतिकी (Heat and Thermodynamics)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. तरंगे (Waves)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. ध्‍वनि (Sound)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. प्रकाशिकी (Optics)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. विद्युत धारा एवं चुंबकत्‍व (Electric Current and Magnetism)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. मापक यंत्र (Measuring Instrument)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. महत्वपूर्ण आविष्कार (Important Inventions)
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              रसायन (Chemistry):-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. परमाणु संरचना (Atomic Structure)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. रासायनिक अभिक्रियाएँ (Chemical Reactions)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. तत्‍वों का वर्गीकरण (Classification of Elements)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. अम्‍ल, क्षार एवं लवण (Acids, Bases and Salts)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. तत्‍व एवं यौगिक (Elements and Compounds)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. कार्बन एवं उसके यौगिक (Carbon and its Compounds)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. पदार्थ एवं उसकी प्रकृति (Matter and its nature)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. धातु एवं अधातुएँ (Metals and non-metals)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. द्रव्‍य एवं उनके गुण (Matter and their properties)
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              जीवविज्ञान (Biology):-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  जीव एवं पादपों का वर्गीकरण (Classification of Animals and
                  Plants)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  कोशिका (Cell)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  ऊतक (Tissue)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  मानव शरीर के तंत्र (Human body Systems)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  a) पाचन तंत्र (Digestive System)   b) श्‍वसन तंत्र
                  (Respiratory System)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  c) परिसंचरण तंत्र (Circulatory System) d) तंत्रिका तंत्र
                  (Nervous system)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  e) उत्‍सर्जन तंत्र (Excretory System)  f) कंकाल तंत्र
                  (Skeletal System)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  अन्‍त: स्‍त्रावी ग्रंथि (Endocrine gland)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  मानव रोग (Human Disease)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  पादप कार्यिकी (Plant Physiology)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  विज्ञान के अध्‍ययन की महत्वपूर्ण शाखाएं (Important branches of
                  study of science)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  पोषण (Nutrition)
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[100px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              हिन्‍दी:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. वर्णमाला
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. संधि
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. समास
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. उपसर्ग
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. प्रत्‍यय
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. विलोम शब्‍द
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. पर्यायवाची शब्‍द
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. समोच्चारित भिन्‍नार्थक शब्‍द
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. तत्‍सम, तद्भव, देशज, विदेशज, संकर शब्‍द
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. अनेकार्थी शब्‍द
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. एकार्थी शब्‍द
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12. वर्तनी
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. वाक्‍यांश के लिए एक शब्‍द
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. मुहावरें, लोकोक्तियाँ
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. रस
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. छंद
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. अलंकार
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. लिंग, वचन, कारक
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. वाक्‍य विचार एवं वाक्‍य रचना पर आधारित
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  20. उपवाक्‍य
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  21. पदबंध
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  22. वाच्‍य
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  23. वाक्‍य शुद्धि / वाक्‍य अशुद्धि
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  24. संज्ञा,सर्वनाम, विशेषण
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  25. क्रिया
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  26. विराम चिह्न, शब्‍द शक्ति
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  27. हिंदी भाषा का विकास
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  28. राज भाषा हिन्‍दी के लिए संवैधानिक प्रावधान
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  29. बोली, विभाषा, उपभाषा, राष्‍ट्रभाषा, मानकभाषा, मातृभाषा,
                  लिपि
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  30. काव्‍य
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  31. महाकाव्‍य, खण्‍डकाव्‍य, चम्‍पूकाव्‍य, मुक्‍तक काव्‍य
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  32. काव्‍यगुण - माधुर्य, ओज, प्रसाद
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  33. हिन्‍दी साहित्‍य का इतिहास
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  34. रचना एवं लेखक
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  35. पत्र एवं पत्रिका
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[150px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              English:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 mb-[80px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. Noun
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. Pronoun
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. Adjective
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. Verb
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. Adverb
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. Preposition
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. Conjunction
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. Determiners
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. Voice / Narration
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. Article
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. Tense
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12. Subject verb Agreement
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. Para jumble
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. Idiom/phrase
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. Synonym/Antonym
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. one-word substitution
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. Incorrectly / correctly spelt word
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <div className="md:py-[72px] py-[30px] flex md:flex-row flex-col items-center justify-center gap-[16px]">
          <Link
            to="https://live.winnersinstitute.in/courses?categoryId="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[22px] bg-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF]"
          >
            Purchase Courses <img src="assets/home/round-right.svg" alt="" />
          </Link>
          {/* <button
            onClick={handleDownload}
            className="flex items-center gap-[22px] border border-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#D0021B]"
          >
            Download Details <img src="assets/video/download.svg" alt="" />
          </button> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mp3;
