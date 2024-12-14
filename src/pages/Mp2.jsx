import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons3 from "../components/buttons/ExamButtons3";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function Mp2() {
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/MP-MAHILA`);
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
                    संचालनालय एकीकृत बाल विकास सेवा के अंतर्गत पर्यवेक्षक
                    (महिला) भर्ती एवं पर्यवेक्षक (महिला) ऑगनवाडी कार्यकर्ता
                    भर्ती:-
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[28px] text-[#FFFFFF]">
                    Age Limit -18-45 Years मध्य प्रदेश के बाहर के अभ्यर्थी के
                    लिए 35 वर्ष से अधिक नहीं होना चाहिए ।
                    <br />
                    <br />
                    Qualification Required –12th / Graduation
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
      <div className="bg-[#fffcf9] md:pt-[80px] pt-[20px]">
        <div className="container m-auto md:mt-[80px] mt-[20px]">
          {/* <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
            <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
              Note- There will be negative marking of 1/3 for Each Wrong Answer.
            </p>
          </div> */}
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[490px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Pattern of Exam – Objective (CBT) & Typing Test:-
            </h6>
          </div>

          <div className="flex flex-col overflow-hidden mt-[30px] gap-[12px]">
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    खण्‍ड
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    विषय
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    कुल अंक
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    कुल प्रश्न
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
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        01
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        प्रथम खण्‍ड
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पोषण एवं स्‍वास्‍थ्‍य
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        55
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        55
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        180 मिनट
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        02
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        द्वितीय खण्‍ड
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य ज्ञान एवं तर्क शक्ति
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        55
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        55
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        180 मिनट
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        03
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        तृतीय खण्‍ड
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        प्रबंधकीय गुण
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        180 मिनट
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        04
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        चतुर्थ खण्‍ड
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शिशु की प्रारम्भिक देखभाल एवं शिक्षा
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        180 मिनट
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-6 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कुल योग
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        200
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        200
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
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                पर्यवेक्षक (महिला) भर्ती एवं पर्यवेक्षक (महिला) ऑगनवाडी
                कार्यकर्ता – विस्‍तृत पाठ्यक्रम प्रथम खण्‍ड - पोषण एवं
                स्‍वास्‍थ्‍य:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    विषय
                  </p>
                </div>
                <div className="col-span-6 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    उप विषय
                  </p>
                </div>
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    अंक -55
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पोषण
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        संतुलित आहार, मैक्रो एवं माइको न्यूट्रिएण्टस (कैलोरी,
                        प्रोटीन, विटामिन, सूक्ष्म खनिज तत्व जैसे- आयोडीन,
                        विटामिन ए, आयरन, जिंक विटामिन्स तथा कैल्सियम) की कमी से
                        होने वाली बीमारियां एवं उनकी रोकथाम,
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        जीवन की विभिन्न अवस्थाओं में पोषण का महत्व
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        किशोरावस्था, गर्भावस्था, धात्री माताएं, नवजात, शिशु,
                        बाल्यावस्था, वयस्क
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        08
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गर्भवती की देखभाल
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गर्भावस्था में वजन की निगरानी, मातृ शिशु रक्षा,
                        गर्भावस्था में खतरों से बचाव, गर्भावस्था में प्रसव पूर्व
                        स्वास्थ्य जाँच
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        07
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        टीकाकरण
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        राष्ट्रीय टीकाकरण कार्यक्रम के अंतर्गत लगने वाले टीके,
                        टीकाकरण का महत्व, टीकाकरण न होने का दुष्प्रभाव
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        08
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        स्वास्थ्य के विभिन्न राष्ट्रीय कार्यक्रम
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        एनआरएचएम एवं आईसीडीएस अंतर्गत संचालित योजनाएं-
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        06
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कुपोषण
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        जन्म के पूर्व - कारण एवं संरक्षण के उपाय, जन्म के बाद -
                        कारण एवं संरक्षण के उपाय
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        08
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य बीमारियों की जानकारी
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        दस्त, उल्टी, आंखों एवं नाल का संक्रमण, खसरा, गलघोटू
                        टिटनेस, कालीखांसी, टी.बी., निमोनिया
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        08
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        &nbsp;
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        &nbsp;
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कुल योग :
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        55
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[380px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                द्वितीय खंड - सामान्य ज्ञान एवं तर्क शक्ति:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    विषय
                  </p>
                </div>
                <div className="col-span-6 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    उप विषय
                  </p>
                </div>
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    अंक -55
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य ज्ञान एवं विभागों की योजनायें
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        महिला एवं बाल विकास विभाग की योजनाएँ, स्वास्थ्य विभाग की
                        योजनायें, पंचायत एवं ग्रामीण विकास विभाग की योजनाएँ,
                        सामाजिक न्याय विभाग की योजनाएँ, आदिवासी विकास विभाग की
                        योजनाएँ
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        नियम, अधिनियम एवं अधिकार,
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        बच्चों के कानूनी अधिकार एवं संबंधित नियम – अधिनियम,
                        शिक्षा का अधिकार, महिलाओं के कानूनी अधिकार एवं संबंधित
                        नियम - अधिनियम, यौन उत्पीडन, घरेलू हिंसा, दहेज प्रतिरोध,
                        संपत्ति का अधिकार, बाल विवाह रोक अधिनियम, खाद्य सुरक्षा
                        अधिनियम
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शारीरिक संरचना एवं सामान्य ज्ञान
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पाचन तंत्र, ग्रन्थियाँ, प्रजनन तंत्र, किशोरावस्था विकास,
                        प्राथमिक उपचार
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        08
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कम्प्यूटर का सामान्य ज्ञान
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        एम.एस.ऑफिस का सामान्य ज्ञान, इंटरनेट, मोबाईल संचालन का
                        ज्ञान
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        07
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य गणित 8 वीं
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य अंक गणित, दशमलव, प्रतिशत, अनुपात एवं ब्याज,
                        आंकड़ों की व्याख्या, ग्राफ पढ़ना एवं बनाना
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य तर्कशक्ति
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य प्रश्न, श्रेणी, आकृति
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        &nbsp;
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        &nbsp;
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कुल योग :
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        55
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[280px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                तृतीय खंड - प्रबंधकीय गुण:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-6 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    विषय
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    उप विषय
                  </p>
                </div>
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    अंक -55
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1.
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        संचार एवं परामर्श कौशल से संबंधित दो अपठित गद्यांश पर
                        आधारित प्रश्‍न
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        ………
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        12
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2.
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        विकास की अवधारणा एवं उसकी मुख्‍य चुनौतियां-पंचवर्षीय
                        योजनाओं में विकास, समकालीन सामाजिक चुनौतियां एवं सरोकार,
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        ………
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3.
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        नेतृत्‍व विकास- नेतृत्‍व क्षमता, गुण एवं कौशल, आंतरिक
                        गवर्नेंस- समन्‍वय, समूह कार्य, टीम वर्क
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        ………
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        08
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4.
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सम्‍प्रेषण की परिभाषा, प्रकृति, माध्‍यम एवं अवरोध
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        ………
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        07
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5.
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामुदायिक संगठन एवं मोबिलाइजेशन – समुदाय एवं सामुदायिक
                        संगठन की समझ, सामुदायिक संगठन के सिद्धांत, सामुदायिक
                        विकास एवं जन भागीदारी, सामुदिक मोबिलाइजेशन
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        ………
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        08
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-11 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कुल योग
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[470px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                चतुर्थ खंड - शिशु की प्रारम्भिक देखभाल एवं शिक्षा:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    विषय
                  </p>
                </div>
                <div className="col-span-6 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    उप विषय
                  </p>
                </div>
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    अंक -55
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px] mb-[80px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        बाल विकास का परिचय
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        बुनियादी अवधारणाएं, वृद्धि एवं विकास को परिलक्षित करने
                        वाले सिद्धांत, विकास के महत्‍वपूर्ण चरण, अनुवांशिकता और
                        पर्यावरण का बाल विकास पर प्रभाव, प्रि-नेटल विकास, प्रथम
                        तीन वर्ष में विकास, 3 से 6 वर्ष के मध्‍य विकास
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        12
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शाला - पूर्व शिक्षा परिचय
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शाला पूर्व शिक्षा-अवधारणा एवं औचित्‍य, आयु अनुरूप सीखने
                        की श्रेणियां और स्‍तर, बच्‍चे के सीखने की प्रक्रिया और
                        मानसिक क्षमताएं, शारीरिक एवं गत्‍यात्‍मक विकास,
                        संज्ञानात्‍मक विकास, भाषा विकास, सामाजिक एवं भावनात्‍मक
                        विकास, सृजनात्‍मक एवं सौन्‍दर्य बोध का विकास
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        12
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        विशेष आवश्‍यकता वाले बच्‍चे
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पहचान, सुविधाएं, संस्‍थाएं, राष्‍ट्रीय एवं राज्‍य
                        स्‍तरीय कार्यक्रम
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        बाल देखभाल एवं संरक्षण
                      </p>
                    </div>
                    <div className="col-span-6 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        बच्‍चे की देखभाल और संरक्षण की अवधारणा, संस्‍थागत और गैर
                        संस्‍थागत देखभाल, अनाथ बेसहारा, नि:शक्‍त, एड्स प्रभावित
                        बच्‍चों के लिए योजनाएं, बच्‍चे और कानून, एकीकृत बाल
                        सुरक्षा योजना
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        07
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-11 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कुल योग :
                      </p>
                    </div>
                    <div className="col-span-1 border-r py-[14px] h-full pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45
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

export default Mp2;
