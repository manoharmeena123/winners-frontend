import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons2 from "../components/buttons/ExamButtons2";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function Railway2() {
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/RAILWAY-TECHNICIAN`);
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
                    RRB Technician
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    Technician Grade-I Signal <br />
                    Age Limit - (18-36 Years)
                    <br />
                    Technician Grade-I Signal
                    <br />
                    Qualification Required -Bachelor Degree of Science/BE/B.
                    Tech/More Eligibility Details Read the Notification.
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
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[440px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Pattern of Exam – Objective (CBT-1, CBT-2)
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
          <div className="flex flex-col gap-[12px]">
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="md:col-span-12 border-b col-span-12 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    तकनीशियन ग्रेड- । सिग्नल
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
                        सामान्य जागरूकता
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
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य बुद्धि और तर्क
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        15
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        15
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
                        कंप्यूटर और अनुप्रयोगों की मूल बातें
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
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अंक शास्त्र
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
                        90 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        बुनियादी विज्ञान और इंजीनियरी
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
                        कुल
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
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सीबीटी के लिए आरआरबी तकनीशियन ग्रेड-I सिग्नल पाठ्यक्रम
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[234px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्य जागरूकताः
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. वर्तमान मामलों का ज्ञान
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. भारतीय भूगोल
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. संस्कृति और भारत के इतिहास का ज्ञान जिसमें स्वतंत्रता
                    संघर्ष
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. भारतीय राजनीति और संविधान
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. भारतीय अर्थव्यवस्था
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. भारत और विश्व से संबंधित पर्यावरणीय मुद्दे
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. खेल
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. सामान्य वैज्ञानिक और तकनीकी विकास आदि शामिल हैं।
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[400px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्य बुद्धि और तर्कः
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. उपमाएँ
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. वर्णमाला और संख्या श्रृंखला
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. कोडिंग और डिकोडिंग
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. गणितीय संचालन
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. संबंध
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. सिलेगिज्म
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. जंबलिंग
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. वेन आरेख
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. डेटा व्याख्या और पर्याप्तता
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. निष्कर्ष और निर्णय लेने
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. समानताएं और अंतर
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. विश्लेषणात्मक तर्क
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    13. वर्गीकरण
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    14. निर्देश
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    15. विवरण
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    16. विवरण-तर्क और धारणा आदि।
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
                कंप्यूटर और अनुप्रयोगों की मूल बातें:
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. कंप्यूटर की वास्तुकला
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    2. इनपुट और आउटपुट डिवाइस
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    3. स्टोरेज डिवाइस
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    4. नेटवर्किंग
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    5. ऑपरेटिंग सिस्टम जैसे विंडोज
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    6. यूनिक्स
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    7. लिनक्स
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    8. एमएस ऑफिस
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    9. विभिन्न डेटा प्रतिनिधित्व
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    10. इंटरनेट और ईमेल
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    11. वेबसाइट और वेब ब्राउज़र
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    12. कंप्यूटर वायरस।
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[80px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                गणितः
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. संख्या प्रणाली
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    2. तर्कसंगत और तर्कहीन संख्या
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    3. बोडमास नियम
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    4. द्विघात समीकरण
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    5. अंकगणितीय प्रगति
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    6. समान त्रिकोण
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    7. पाइथागोरस प्रमेय
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    8. समन्वय ज्यामिति
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    9. त्रिकोणमितीय अनुपात
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    10. ऊंचाइयों और दूरी
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    11. सतह क्षेत्र और मात्रा
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    12. सेटः सेट और उनके अभ्यावेदन
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    13. खाली सेट
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    14. परिमित और अनंत सेट
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    15. समान सेट
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    16. सबसेट
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    17. वास्तविक संख्याओं के एक सेट के सबसेट
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    18. यूनिवर्सल सेट
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    19. वेन आरेख
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    20. संघ और सेट के चौराहे
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    21. सेट का अंतर
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    22. एक सेट का पूरक
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    23. गुण पूरक की
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    24. सांख्यिकी: फैलाव के उपाय: सीमा
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    25. माध्य विचलन
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    26. विचरण और अनग्रुप/समूहीकृत डेटा का मानक विचलन
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    27. घटनाओं की संभावना घटना
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    28. संपूर्ण घटनाओं
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    29. पारस्परिक रूप से अनन्य घटनाओं।
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[350px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                बुनियादी विज्ञान और इंजीनियरिंग:
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. भौतिकी बुनियादी बातों इकाइयाँ
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    2. माप
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    3. द्रव्यमान
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    4. वजन
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    5. घनत्व
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    6. कार्य
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    7. शक्ति और ऊर्जा
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    8. गति और वेग
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    9. गर्मी और तापमान
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    10. बिजली और चुंबकत्व-इलेक्ट्रिक चार्ज
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    11. फील्ड
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    12. तीव्रता
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    13. विद्युत क्षमता और संभावित अंतर
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    14. सरल इलेक्ट्रिक सर्किट
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    15. कंडक्टर
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    16. गैर-कंडक्टर/इंसुलेटर
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    17. ओम के कानून और इसकी सीमाएं
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    18. श्रृंखला में प्रतिरोध और एक सर्किट और विशिष्ट प्रतिरोध
                    के समानांतर संबंध
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    19. विद्युत क्षमता
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    20. ऊर्जा
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    21. शक्ति (वाटेज)
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    22. एम्पीयर का नियम
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    23. चलती चार्ज कण पर चुंबकीय बल और लंबे सीधे कंडक्टर
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    24. विद्युत चुम्बकीय प्रेरण
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    25. फैराडे का नियम
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    26. विद्युत चुम्बकीय प्रवाह
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    27. चुंबकीय क्षेत्र
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    28. चुंबकीय प्रेरण
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    29. इलेक्ट्रॉनिक्स और माप-बुनियादी इलेक्ट्रॉनिक्स
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    30. डिजिटल इलेक्ट्रॉनिक्स
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    31. इलेक्ट्रॉनिक डिवाइस और सर्किट
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    32. माइक्रोकंट्रोलर
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    33. माइक्रोप्रोसेसर
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    34. इलेक्ट्रॉनिक माप
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    35. माप प्रणाली और सिद्धांत
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    36. रेंज एक्सटेंशन विधियाँ
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    37. कैथोड रे ऑसिलोस्कोप
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    38. एलसीडी
                  </p>
                  <p className="font-[Outfit] font-[400] pt-[14px] text-[16px] leading-[22px] text-[#000000]">
                    39. एलईडी पैनल ट्रांसड्यूसर ।
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] exam-btn md:mt-[80px] mt-[20px] mb-[16px] max-w-[450px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                RRB TECHNICIAN SYLLABUS Grade-III (CBT)
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mt-[20px] mb-[16px] max-w-[430px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                Technician Grade-III
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Age Limit - (18-33 Years)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Qualification Required -10+2 PCM / ITI
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Pattern of Exam – Objective Type (CBT)
                </p>
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
                    तकनीशियन ग्रेड- III (सीबीटी)
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    विषय
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans md:pl-[10px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    प्रश्‍नों की संख्‍या
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans md:pl-[10px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    अंक
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans md:pl-[10px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
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
                        सामान्य जागरूकता
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
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
                        सामान्य बुद्धि और तर्क
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        25
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        25
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
                        अंक शास्त्र
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        25
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        25
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
                        सामान्‍य विज्ञान
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40
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
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
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
              <h6 className="bg-[#D0021B] exam-btn md:mt-[80px] mt-[20px] mb-[16px] max-w-[430px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सीबीटी तकनीशियन ग्रेड-III के लिए पाठ्यक्रमः
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
                    1. संख्या प्रणाली
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. बोडमास
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. दशमलव
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. भिन्न
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. एलसीएम
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. एचसीएफ
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. अनुपात और समानुपात
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. प्रतिशत
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. क्षेत्रमिति
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. समय और कार्य
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. समय और दूरी
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. सरल और चक्रवृद्धि ब्याज
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    13. लाभ और हानि
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    14. बीजगणित
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    15. ज्यामिति और त्रिकोणमिति
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    16. प्राथमिक सांख्यिकी
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    17. वर्गमूल
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    18. आयु गणना
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    19. कैलेंडर और घड़ी
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    20. पाइप और टंकी आदि।
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[300px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्य बु‌द्धिमत्ता और तर्कः
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. सादृश्य
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. वर्णमाला और संख्या श्रृंखला
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. कोडिंग और डिकोडिंग
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. गणितीय संचालन
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. रिश्ते, सिलोगिज़्म
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. जंबलिंग
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. वेन आरेख
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. डेटा व्याख्या और पर्याप्तता
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. निष्कर्ष और निर्णय लेना
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. समानताएं और अंतर
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. विश्लेषणात्मक तर्क
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. वर्गीकरण
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    13. दिशाएं
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    14. कथन तर्क और धारणाएं आदि।
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
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[200px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्य जागरूकताः
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-1 grid-cols-1 md:gap-[40px] gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. समसामयिक मामले
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. विज्ञान और प्रौद्योगिकी
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. खेल
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. संस्कृति
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. व्यक्तित्व
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. अर्थशास्त्र
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. राजनीति और अन्य महत्व के विषय।
                  </p>
                </div>
              </div>
            </div>
            {/* <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[450px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                दस्तावेज़ सत्यापन / Document Verification (DV)
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mt-[0px] mb-[16px] max-w-[450px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                मेडिकल परीक्षा / Medical Examination (ME)
              </h6>
            </div> */}
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

export default Railway2;
