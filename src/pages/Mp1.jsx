import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons3 from "../components/buttons/ExamButtons3";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";

function Mp1() {


  const [mppsc, setMppsc] = useState();
  const [loading, setLoading] = useState(true);

  const getSSCExamLinks = async () => {
    try {
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/MP-JAIL`);
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
          <div className="absolute flex items-center flex-col top-20 left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
                    वन रक्षक एवं क्षेत्र रक्षक एवं जेल प्रहरी एवं सहायक जेल
                    अधीक्षक:-
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[28px] text-[#FFFFFF]">
                    Age Limit - 18-33 Years, आरक्षित श्रेणी (महिला (अनारक्षित
                    वर्ग) / अनु.जाति / अ.ज.जा. / अ.पि.व.) के अभ्यर्थी को 5 वर्ष
                    की अधिकतम आयु सीमा में छूट प्राप्त होगी
                    <br />
                    <br />
                    Qualification Required - वनरक्षक/क्षेत्ररक्षक/जेलप्रहरी–
                    मध्‍यप्रदेश माध्‍यमिक शिक्षा मण्‍डल से अथवा मान्‍यता
                    प्राप्‍त संस्‍था से पुरानी पद्धति से हायर सेकेण्डरी अथवा
                    10+2 पद्धति से दसवीं कक्षा उत्तीर्ण (हाईस्‍कूल)। 10 Pass
                    <br />
                    <br />
                    सहायक जेलअधीक्षक– आवेदक को किसी मान्‍यता प्राप्‍त
                    विश्‍वविद्यालय से स्‍नातक उपाधि उत्तीर्ण होना चाहिए।
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
      <div className="bg-[#fffcf9] overflow-hidden md:pt-[80px] pt-[0px]">
        <div className="container m-auto md:mt-[80px] mt-[20px]">
          {/* <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
            <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
              Note- There will be negative marking of 1/3 for Each Wrong Answer.
            </p>
          </div> */}
          <div className="flex flex-col mt-[30px] gap-[12px]">
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                {/* <div className="col-span-12 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  RPF SI & CONSTABLE (CBT)
                </p>
              </div> */}
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    प्रश्‍न पत्र का विवरण
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    कुल प्रश्न
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
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
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1.
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य ज्ञान / General Knowledge
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        120 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2.
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य हिन्‍दी / General Hindi
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        120 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3.
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य अंग्रेजी / General English
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        120 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4.
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य गणित / General Mathematics
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        120 Minutes
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5.
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य विज्ञान / General Science
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        20
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        120 Minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[490px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                शारीरिक मापदंड परीक्षण / Physical Parameters Test:-
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[200px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                वनरक्षक/क्षेत्ररक्षक:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    शारीरिक माप
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    ऊँचाई
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    सीना सामान्‍य
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    सीने का न्‍यूनतम फुलाव
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पुरुष
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        163 से.मी.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        79 से.मी.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        05 से.मी.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        महिला
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        150 से.मी.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अपेक्षित नहीं
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अपेक्षित नहीं
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  i. अनुसूचित जनजाति/अनुसूचित जाति के लिये पुरुष अभ्‍यर्थी की
                  न्‍यूनतम ऊँचाई 152 से.मी. तथा महिला अभ्‍यार्थी की 145 से.मी.
                  होना चाहिये।
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  ii. मध्‍यप्रदेश के नक्‍सल प्रभावित क्षेत्रों में सीने के फुलाव
                  (Chest Relaxation) में 5 से.मी. का (बिना फुलाए 74 से.मी. /
                  फुलाने के पश्‍चात 79 से.मी.) शिथिलीकरण किया जाएगा।
                </p>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[130px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                जेलप्रहरी:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    शारीरिक माप
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    ऊँचाई
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    सीना सामान्‍य
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
                        पुरुष
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        165 से.मी.
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        83 से.मी.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        महिला
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        158 से.मी.
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अपेक्षित नहीं
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सहायक जेल अधीक्षक:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    पुरुष
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    ऊँचाई
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    सीना सामान्‍य
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    सीना फुलाने के पश्‍चात
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पुरुष
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        168 से.मी.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        84 से.मी.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        89 से.मी.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        महिला
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        155 से.मी.
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अपेक्षित नहीं
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अपेक्षित नहीं
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] mb-[16px] max-w-[600px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                द्वितीय चरण परीक्षा योजना / Second phase examination scheme:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    पैदल चाल - पुरुष अभ्‍यार्थियों को 4 घंटे में 25 किलोमीटर एवं
                    महिला अभ्‍यार्थियों को 4 घंटे में 14 किलोमीटर की दूरी पैदल
                    पूर्ण करनी होगी। यह केवल अर्हता के लिए है इसके लिए कोई अंक
                    नहीं दिये जाएंगे। प्रत्‍येक अभ्यार्थी से यह अपेक्षित होगा कि
                    वह पैदल चाल प्रारम्‍भ होने के 60 मिनट पूर्व स्‍थल पर उपस्थित
                    होगा। पैदल चाल प्रारम्‍भ होने के पश्‍चात अधिकतम 30 मिनट बाद
                    तक ही किसी अभ्‍यार्थी को पैदल चाल में भाग लेने की अनुमति दी
                    जा सकेगी, परन्‍तु पैदल चाल के लिए पूर्व से निर्धारित समय तक
                    पैदल चाल पूर्ण करना होगा। विलम्‍ब से पैदल चाल प्रारम्‍भ करने
                    पर अतिरिक्‍त समय नहीं दिया जायेगा। पैदल चाल प्रारम्‍भ होने
                    के 30 मिनट बाद उपस्थित होने पर पैदल चाल में भाग लेने की
                    अनुमति नहीं दी जावेगी। पैदल चाल निर्धारित समय सीमा में पूर्ण
                    करना अनिवार्य होगा।
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    i. शारीरिक क्षमता परीक्षण एवं पैदल चाल में अभ्‍यर्थी का
                    उपस्थित होना अनिवार्य है। इसके अभाव में नियुक्ति की पात्रता
                    नहीं होगी।
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    ii. प्रत्‍येक अभ्‍यार्थी को शारीरिक क्षमता परीक्षण एवं पैदल
                    चाल में भाग लेने के लिए उन्‍हें जारी Admit Card लाना
                    अनिवार्य होगा।
                  </p>
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
                सामान्य ज्ञान:-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. मध्य प्रदेश का सामान्य ज्ञान (General Knowledge of Madhya
                    Pradesh)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. समसमायिकी (Current Affairs)
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
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] mb-[16px] max-w-[100px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
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
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[350px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                सामान्‍य विज्ञान (General Science):-
              </h6>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                भौतिकी (PHYSICS):-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. पदार्थ एवं उसकी प्रकृति (Matter and its nature)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. भौतिक राशियाँ और मापन (Physical Quantities and
                    Measurement)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3.यांत्रिकी (Mechanics)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. ऊष्‍मा एवं ऊष्‍मागतिकी (Heat and Thermodynamics)
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. तरंगे (Waves)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. ध्‍वनि (Sound)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. प्रकाशिकी (Optics)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    8. विद्युत धारा एवं चुंबकत्‍व (Electric Current and
                    Magnetism)
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    9. मापक यंत्र (Measuring Instrument)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    10. महत्वपूर्ण आविष्कार (Important Inventions)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    11. धातु एवं अधातुएँ (Metals and non-metals)
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                रसायन (Chemistry):-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    1. द्रव्‍य एवं उनके गुण (Matter and their properties)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    2. परमाणु संरचना (Atomic Structure)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    3. रासायनिक अभिक्रियाएँ (Chemical Reactions)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    4. तत्‍वों का वर्गीकरण (Classification of Elements)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    5. अम्‍ल, क्षार एवं लवण (Acids, Bases and Salts)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    6. तत्‍व एवं यौगिक (Elements and Compounds)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    7. कार्बन एवं उसके यौगिक (Carbon and its Compounds)
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
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
                    a) पाचन तंत्र (Digestive System) &nbsp; &nbsp;b) श्‍वसन
                    तंत्र (Respiratory System)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    c) परिसंचरण तंत्र (Circulatory System) &nbsp; &nbsp;d)
                    तंत्रिका तंत्र (Nervous system) (Respiratory System)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    e) उत्‍सर्जन तंत्र (Excretory System) &nbsp; &nbsp;f) कंकाल
                    तंत्र (Skeletal System)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    अन्‍त: स्‍त्रावी ग्रंथि (Endocrine gland)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    प्रजनन तंत्र (Reproductive System)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    मानव रोग (Human Disease)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    पादप कार्यिकी (Plant Physiology)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    विज्ञान के अध्‍ययन की महत्वपूर्ण शाखाएं (Important branches
                    of study of science)
                  </p>
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    पोषण (Nutrition)
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[130px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                English :-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid md:grid-cols-3 grid-cols-1 mb-[40px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
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
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                    12. Subject verb Agreement
                  </p>
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

export default Mp1;
