import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons2 from "../components/buttons/ExamButtons2";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";

function Railway1() {

  const [mppsc, setMppsc] = useState();
  const [loading, setLoading] = useState(true);

  const getSSCExamLinks = async () => {
    try {
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/RAILWAY-ALP`);
      setMppsc(response?.data);
      console.log(response?.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSSCExamLinks();
  }, []);


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
                    RRB ALP
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    Age Limit - (18-30 Years) <br />
                    Qualification Required -10/ITI/BE/B. Tech/Diploma/More
                    Eligibility Details Read the Notification.
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

      <div className="container overflow-hidden m-auto md:mt-[80px] mt-[20px]">
        <div data-aos="fade-right">
          <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[440px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
            Pattern of Exam – Objective (CBT-1, CBT-2)
          </h6>
        </div>
        <div data-aos="fade-up">
          <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
            <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
              Note- There will be negative marking of 1/3 for Each Wrong Answer.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div data-aos="fade-up">
            <div className="grid grid-cols-12 bg-[#F1F2F6]">
              <div className="md:col-span-12 border-b col-span-12 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  IBPS Clerk & SBI Clerk Prelims Syllabus
                </p>
              </div>
              <div className="col-span-4 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Subject
                </p>
              </div>
              <div className="col-span-3 p-[14px]">
                <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  No. of Questions
                </p>
              </div>
              <div className="col-span-3 p-[14px]">
                <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Marks
                </p>
              </div>
              <div className="col-span-2 p-[14px]">
                <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
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
                      Mathematics
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      20
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      20
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 Minutes
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Mental Ability
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      25
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      25
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 Minutes
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      General Science
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      20
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      20
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 Minutes
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
                      10
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      10
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 Minutes
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
                      75
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      75
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
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              RRB ALP Syllabus for CBT Stage I
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[234px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              गणितः / Mathematics:
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
                  12. चक्रवृद्धि ब्याज / Compound interest
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. ज्‍यामिति / Geometry
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. कागज काटना एवं मोड़ना / Paper Cutting & folding
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. आकृति की गिनती / Counting Of Figure
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. गैर मौखिक श्रृंखला / Non Verbal Series
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. अशाब्दिक वर्गीकरण / Non Verbal Classification
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. सन्निहित आकृति / Embedded Figure
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. आकृति को गिनना / Completion of Figure
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
                  23. घड़ी / Clock
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  24. आकृति का मैट्रिक्स / Matrix of Figure
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  25. इत्‍यादि / etc.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[400px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              मानसिक क्षमताः / Mental Ability:
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. वर्णमाला /Alphabet
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. कोडिंग-डिकोडिंग /Coding-Decoding
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. सादृश्य /Analogy 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. वर्गीकरण / Classification
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. शृंखला की संख्या / Alphabetical & Number Series
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
                  14. त्रिकोणमिति / Trigonometry
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. ऊँचाई एवं दूरी / Height and Distance
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. औसत / Average
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. समय और कार्य / Time and Work
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. समय और दूरी / Time and Distance
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. DI
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  20. क्षेत्रफल / Mensuration (2D & 3D)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  21. सांख्यिकी / Statistics
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  22. नल एवं टंकी / Pipe & Cistern
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  23. वर्ग मूल / Square Root
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  24. आयु / Age
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  25. बहुपद और समीकरण / Polynomials and Equations
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  26. इत्‍यादि / etc.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[334px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              सामान्य विज्ञानः / General Science:
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-1 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                1. इसके अंतर्गत पाठ्यक्रम में 10वीं कक्षा के स्तर के भौतिकी
              </p>
              <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                2. रसायन विज्ञान और जीवन विज्ञान शामिल होंगे।
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[434px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              सामान्य जागरूकताः / General Awareness:
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-1 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                1. समसामयिक मामले
              </p>
              <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                2. विज्ञान और प्रौद्योगिकी
              </p>
              <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                3. खेल
              </p>
              <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                4. संस्कृति
              </p>
              <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                5. व्यक्तित्व
              </p>
              <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                6. अर्थशास्त्र
              </p>
              <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                7. राजनीति और अन्य महत्व के विषय।
              </p>
              <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                8. इत्‍यादि / etc.
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn md:mt-[80px] mt-[20px] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Railway – ALP CBT-II
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mt-[20px] mb-[16px] max-w-[430px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Pattern of Exam – Objective Type (CBT-II)
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
          <div data-aos="fade-up">
            <div className="grid grid-cols-12 bg-[#F1F2F6]">
              <div className="md:col-span-12 border-b col-span-12 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Part-A CBT-II
                </p>
              </div>
              <div className="col-span-6 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Subject
                </p>
              </div>
              <div className="col-span-3 p-[14px]">
                <p className="font-sans md:pl-[10px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Questions
                </p>
              </div>
              <div className="col-span-3 p-[14px]">
                <p className="font-sans md:pl-[10px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Time
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-6 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Mathematics
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      100
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      90 Minutes
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-6 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      General Intelligence & Reasoning
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      100
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      90 Minutes
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-6 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      General Awareness and Current Affairs
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      100
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      90 Minutes
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-6 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Basic Science & Engineering
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      100
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      90 Minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-12 bg-[#F1F2F6]">
              <div className="md:col-span-12 border-b col-span-12 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Part-B CBT-II
                </p>
              </div>
              <div className="col-span-6 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Subject
                </p>
              </div>
              <div className="col-span-3 p-[14px]">
                <p className="font-sans md:pl-[10px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Questions
                </p>
              </div>
              <div className="col-span-3 p-[14px]">
                <p className="font-sans md:pl-[10px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Time
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-6 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Trade Test/Professional Knowledge
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      75
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60 minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn md:mt-[80px] mt-[20px] mb-[16px] max-w-[350px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              RRB ALP Syllabus for CBT Stage II
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mt-[0px] mb-[16px] max-w-[380px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Syllabus for CBT-II Part-A & Part-B:
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mt-[0px] mb-[16px] max-w-[230px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              गणितः / Mathematics:
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
                  12. चक्रवृद्धि ब्याज / Compound interest
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. ज्‍यामिति / Geometry
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. कागज काटना एवं मोड़ना / Paper Cutting & folding
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. आकृति की गिनती / Counting Of Figure
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. गैर मौखिक श्रृंखला / Non Verbal Series
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. अशाब्दिक वर्गीकरण / Non Verbal Classification
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. सन्निहित आकृति / Embedded Figure
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. आकृति को गिनना / Completion of Figure
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
                  23. घड़ी / Clock
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  24. आकृति का मैट्रिक्स / Matrix of Figure
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  25. इत्‍यादि / etc.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[600px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              सामान्य बु‌द्धिमत्ता और तर्कः / General Intelligence and Reasoning
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. वर्णमाला /Alphabet
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. कोडिंग-डिकोडिंग /Coding-Decoding
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. सादृश्य /Analogy 
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. वर्गीकरण / Classification
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. शृंखला की संख्या / Alphabetical & Number Series
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
                  14. त्रिकोणमिति / Trigonometry
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. ऊँचाई एवं दूरी / Height and Distance
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. औसत / Average
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. समय और कार्य / Time and Work
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. समय और दूरी / Time and Distance
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. DI
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  20. क्षेत्रफल / Mensuration (2D & 3D)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  21. सांख्यिकी / Statistics
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  22. नल एवं टंकी / Pipe & Cistern
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  23. वर्ग मूल / Square Root
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  24. आयु / Age
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  25. बहुपद और समीकरण / Polynomials and Equations
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  26. इत्‍यादि / etc.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[600px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              बुनियादी विज्ञान और इंजीनियरिंगः / Basic Science & Engineering
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[40px] gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. इसके अंतर्गत आने वाले व्यापक विषय इंजीनियरिंग ड्राइंग
                  (अनुमान, दृश्य, ड्राइंग उपकरण, रेखाएँ, ज्यामितीय आंकड़े,
                  प्रतीकात्मक प्रतिनिधित्व)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. इकाइयाँ
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. माप
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. द्रव्यमान वजन और घनत्व
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. कार्य शक्ति और ऊर्जा
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. गति और होंगे
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. वेग
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. गर्मी और तापमान
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. बुनियादी बिजली
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. लीवर और सरल मशीनें
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. व्यावसायिक सुरक्षा और स्वास्थ्य
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12. पर्यावरण शिक्षा
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. आईटी साक्षरता आदि।
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[400px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Computer based Aptitude Test (CBAT)
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mt-[0px] mb-[16px] max-w-[380px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Document Verification (DV)
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mt-[0px] mb-[16px] max-w-[280px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Medical Examination (ME)
            </h6>
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

export default Railway1;
