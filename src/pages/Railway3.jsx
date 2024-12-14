import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons2 from "../components/buttons/ExamButtons2";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function Railway3() {

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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/RAILWAY-NTPC`);
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
                    Railway NTPC
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    Age Limit - 12th (18-30 Years) Graduate (18-33 Years) <br />
                    Qualification Required -12th / Graduation
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
              Pattern of Exam – Objective CBT-1, CBT-2 & Typing Test
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                Note- There will be negative marking of 0.33 for Each Wrong
                Answer.
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] mt-[20px] max-w-[240px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Railway – NTPC CBT-1
            </h6>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Subject
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Questions
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Marks
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Time
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
                        General Intelligence & Reasoning
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        30
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        30
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        General Awareness
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Mathematics
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        30
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        30
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Total
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
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
                RRB NTPC Syllabus for CBT Stage I
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[234px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                गणित / Mathematics
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. संख्या पद्धति / Number System
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. सरलीकरण / Simplification
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. दशमलव और भिन्न / Decimals and Fraction
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. महत्त्तम समापवर्तक और लघुत्तम समापवर्तक / Highest common
                    factor and lowest common multiple
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. अनुपात और समानुपात / Ratio and Proportion
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. भागीदारी / Partnership
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. प्रतिशतता / Percentage
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. लाभ और हानि / Profit and Loss
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. छूट / Discount
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. बीज गणित / Algebra
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. साधारण ब्याज / Simple interest
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. चक्रवृद्धि ब्याज Compound interest
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    13. ज्‍यामिति (Geometry)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    14. त्रिकोणमिति (Trigonometry)/ऊँचाई एवं दूरी (Height and
                    Distance)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    15. औसत (Average)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    16. समय और कार्य (Time and Work)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    17. समय और दूरी (Time and Distance)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    18. DI
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    19. क्षेत्रफल (Mensuration)/ 2D & 3D
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    20. सांख्यिकी (Statistics)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    21. नल एवं टंकी (Pipe & Cistern)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    22. वर्ग मूल (Square Root)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    23. आयु (Age)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    24. बहुपद और समीकरण (Polynomials and Equations)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    25. इत्‍यादि / etc.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[600px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्य बुद्धिमता एवं तर्क / General Intelligence and Reasoning
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. वर्णमाला / Alphabet
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. कोडिंग-डिकोडिंग / Coding-Decoding
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. सादृश्य / Analogy  
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. वर्गीकरण / Classification
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. अक्षर, संख्या एवं मिश्रण श्रृंखला / Letter, Number & Mix
                    Series
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. न्यायवाक्य / Syllogism
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. दिशा एवं दूरी / Direction & Distance
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. रक्‍त संबंध / Blood Relation
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. कैलेंडर / Calendar
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. वेन आरेख / Venn Diagram
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. गणितीय संक्रिया / Mathematical Operation
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. जंबलिंग / Jumbling
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    13. दर्पण छवि / Mirror Image
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    14. श्रेणीबद्ध / Ranking
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    15. आकृति की गिनती / Counting Of Figure
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    16. गैर मौखिक श्रृंखला / Non Verbal Series
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    17. बैठक व्यवस्था / Seating Arrangement
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    18. सन्निहित आकृति / Embedded Figure
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    19. कथन एवं कार्यवाही / Statement & Action
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    20. कथन एवं निष्कर्ष / Statement & Conclusion
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    21. कथन एवं तर्क, मान्यता / Statement & Argument, Assumption
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    22. डेटा पर्याप्तता / Data Sufficiency
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    23. पहेली / Puzzle
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    24. घड़ी / Clock
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    25. पासा, घन और घनाभ / Dice, Cube & Cuboid
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    26. इत्‍यादि / etc.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[400px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्य जागरूकता / General Awareness
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. आविष्कार और खोज / Inventions and Discoveries
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. भारत के पड़ोसी देश / Neighboring Countries of India
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. राष्ट्रीय और अंतर्राष्ट्रीय महत्व की वर्तमान घटनाएँ /
                    Current Events of National and International Importance
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. क्रीडा और खेल / Games and Sports
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. देश, राजधानियाँ और मुद्रा / Countries, Capitals, and
                    Currency
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. भारत की कला और संस्कृति / Art and Culture of India
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. भारतीय साहित्य / Indian Literature
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. भारत के महत्वपूर्ण स्मारक एवं स्थान / Important Monuments
                    and Places of India
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. सामान्य विज्ञान एवं जीवन विज्ञान (CBSE 10वीं तक) /
                    General Science and Life Science (up to 10th CBSE)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. राज्य सभा के सदस्य / Members of Rajya Sabha
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. भारत का इतिहास और स्वतंत्रता संग्राम / History of India
                    and Freedom Struggle
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. भारत और विश्व का भौतिक, सामाजिक और आर्थिक भूगोल /
                    Physical, Social and Economic Geography of India and World
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    13. फोबिया की सूची / List of Phobias
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    14. भारतीय राजव्यवस्था और शासन-संविधान और राजनीतिक व्यवस्था
                    / Indian Polity and Governance- constitution and political
                    system
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    15. सामान्य वैज्ञानिक और तकनीकी विकास / General Scientific
                    and Technological Developments
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    16. आईपीएल विजेताओं की सूची / List of IPL WiNNERS
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    17. संयुक्त राष्ट्र और अन्य महत्वपूर्ण विश्व संगठन, भारत और
                    विश्व से संबंधित पर्यावरणीय मुद्दे / UN and Other important
                    World Organizations, Environmental Issues Concerning India
                    and World
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    18. भारत के हवाई अड्डों की सूची / List of Airports of India
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    19. कंप्यूटर और कंप्यूटर अनुप्रयोगों की मूल बातें / Basics
                    of Computers and Computer Applications
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    20. खेल अवधि की सूची / List of Sports term
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    21. सामान्य संक्षिप्ताक्षर / Common Abbreviations
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    22. अर्जुन पुरस्कार विजेताओं की सूची / List of Arjuna Award
                    WiNNERS
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    23. भारत में परिवहन प्रणालियाँ / Transport Systems in India
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    24. भारतीय अर्थव्यवस्था / Indian Economy
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    25. भारत और विश्व की प्रसिद्ध हस्तियाँ / Famous
                    Personalities of India and World
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    26. प्रमुख सरकारी कार्यक्रम / Flagship Government Programs
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    27. भारत की वनस्पति और जीव / Flora and Fauna of India
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    28. भारत के महत्वपूर्ण सरकारी एवं सार्वजनिक क्षेत्र के संगठन
                    / Important Government and Public Sector Organizations of
                    India
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    29. करंट जीके आदि। / Current GK etc.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[240px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                Railway – NTPC CBT-2
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[400px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                Pattern of Exam – Objective Type (CBT)
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Note- There will be negative marking of 0.33 for each wrong
                  answer.
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Subject
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Questions
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Marks
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Time
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
                        Maths
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
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        General Intelligence & Reasoning
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
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        General Awareness
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
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Total
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
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[370px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                RRB NTPC Syllabus for CBT Stage II
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                गणित / Mathematics
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. संख्या पद्धति / Number System
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    2. सरलीकरण / Simplification
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    3. दशमलव और भिन्न / Decimals and Fraction
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    4. महत्त्तम समापवर्तक और लघुत्तम समापवर्तक, / Highest common
                    factor and lowest common multiple
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    5. अनुपात और समानुपात / Ratio and Proportion
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    6. भागीदारी / Partnership
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    7. प्रतिशतता / Percentage
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    8. लाभ और हानि / Profit and Loss
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    9. छूट / Discount
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    10. बीज गणित / Algebra
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    11. साधारण ब्याज / Simple interest
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    12. चक्रवृद्धि ब्याज / Compound interest
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    13. ज्‍यामिति / Geometry
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    14. त्रिकोणमिति / Trigonometry
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    15. ऊँचाई एवं दूरी / Height and Distance
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    16. औसत / Average
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    17. समय और कार्य / Time and Work
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    18. समय और दूरी / Time and Distance
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    19. DI
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    20. क्षेत्रफल / Mensuration (2D & 3D)
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    21. सांख्यिकी / Statistics
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    22. नल एवं टंकी / Pipe & Cistern
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    23. प्रायिकता / Probability
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    24. आयु / Age
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    25. बहुपद और समीकरण / Polynomials and Equations
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    26. इत्‍यादि / etc.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[380px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                General Intelligence and Reasoning
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. वर्णमाला / Alphabet
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    2. कोडिंग-डिकोडिंग / Coding-Decoding
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    3. सादृश्य / Analogy  
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    4. वर्गीकरण / Classification
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    5. अक्षर, संख्या एवं मिश्रण श्रृंखला / Letter, Number & Mix
                    Series
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    6. न्यायवाक्य / Syllogism
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    7. दिशा एवं दूरी / Direction & Distance
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    8. रक्‍त संबंध / Blood Relation
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    9. कैलेंडर / Calendar
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    10. वेन आरेख / Venn Diagram
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    11. गणितीय संक्रिया / Mathematical Operation
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    12. जंबलिंग / Jumbling
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    13. दर्पण छवि / Mirror Image
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    14. श्रेणीबद्ध / Ranking
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    15. आकृति की गिनती / Counting Of Figure
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    16. गैर मौखिक श्रृंखला / Non Verbal Series
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    17. बैठक व्यवस्था / Seating Arrangement
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    18. सन्निहित आकृति / Embedded Figure
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    19. कथन एवं कार्यवाही / Statement & Action
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    20. कथन एवं निष्कर्ष / Statement & Conclusion
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    21. कथन एवं तर्क, मान्यता / Statement & Argument, Assumption
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    22. डेटा पर्याप्तता / Data Sufficiency
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    23. पहेली / Puzzle
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    24. घड़ी / Clock
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    25. पासा, घन और घनाभ / Dice, Cube & Cuboid
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    26. इत्‍यादि / etc.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                General Awareness
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. आविष्कार और खोज / Inventions and Discoveries
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    2. भारत के पड़ोसी देश / Neighboring Countries of India
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    3. राष्ट्रीय और अंतर्राष्ट्रीय महत्व की वर्तमान घटनाएँ /
                    Current Events of National and International Importance
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    4. क्रीडा और खेल / Games and Sports
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    5. देश, राजधानियाँ और मुद्रा / Countries, Capitals, and
                    Currency
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    6. भारत की कला और संस्कृति / Art and Culture of India
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    7. भारतीय साहित्य / Indian Literature
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    8. भारत के महत्वपूर्ण स्मारक एवं स्थान / Important Monuments
                    and Places of India
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    9. सामान्य विज्ञान एवं जीवन विज्ञान (CBSE 10वीं तक) /
                    General Science and Life Science (up to 10th CBSE)
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    10. राज्य सभा के सदस्य / Members of Rajya Sabha
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    11. भारत का इतिहास और स्वतंत्रता संग्राम / History of India
                    and Freedom Struggle
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    12. भारत और विश्व का भौतिक, सामाजिक और आर्थिक भूगोल /
                    Physical, Social and Economic Geography of India and World
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    13. फोबिया की सूची / List of Phobias
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    14. भारतीय राजव्यवस्था और शासन-संविधान और राजनीतिक व्यवस्था
                    / Indian Polity and Governance- constitution and political
                    system
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    15. सामान्य वैज्ञानिक और तकनीकी विकास / General Scientific
                    and Technological Developments
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    16. आईपीएल विजेताओं की सूची / List of IPL WiNNERS
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    17. संयुक्त राष्ट्र और अन्य महत्वपूर्ण विश्व संगठन, भारत और
                    विश्व से संबंधित पर्यावरणीय मुद्दे / UN and Other important
                    World Organizations, Environmental Issues Concerning India
                    and World
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    18. भारत के हवाई अड्डों की सूची / List of Airports of India
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    19. कंप्यूटर और कंप्यूटर अनुप्रयोगों की मूल बातें / Basics
                    of Computers and Computer Applications
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    20. खेल अवधि की सूची / List of Sports term
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    21. सामान्य संक्षिप्ताक्षर / Common Abbreviations
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    22. अर्जुन पुरस्कार विजेताओं की सूची / List of Arjuna Award
                    WiNNERS
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    23. भारत में परिवहन प्रणालियाँ / Transport Systems in India
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    24. भारतीय अर्थव्यवस्था / Indian Economy
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    25. भारत और विश्व की प्रसिद्ध हस्तियाँ / Famous
                    Personalities of India and World
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    26. प्रमुख सरकारी कार्यक्रम / Flagship Government Programs
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    27. भारत की वनस्पति और जीव / Flora and Fauna of India
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    28. भारत के महत्वपूर्ण सरकारी एवं सार्वजनिक क्षेत्र के संगठन
                    / Important Government and Public Sector Organizations of
                    India
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    29. करंट जीके आदि। / Current GK etc.  
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[550px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                दस्तावेज़ सत्यापन (डीवी) / Document Verification (DV)
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[430px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                मेडिकल परीक्षा / Medical Examination (ME)
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                Computer Based Aptitude Test (CBAT) Only for candidates who have
                opted for Traffic Assistant and Station Master
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

export default Railway3;
