import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons3 from "../components/buttons/ExamButtons3";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function Mp4() {
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/MP-POLICE`);
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
                    म.प्र. पुलिस आरक्षक / MP Police Constable:-
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[28px] text-[#FFFFFF]">
                    Age Limit - 18-33 Years, आरक्षित श्रेणी (अनु.जाति/अ.ज.जा.
                    /अ.पि.व.) के अभ्यर्थी को 5 वर्ष की अधिकतम आयु सीमा में छूट
                    प्राप्त होगी
                    <br />
                    <br />
                    Qualification Required आरक्षक (जीडी) -10+2 प्रणाली के
                    अन्तर्गत 10 वीं कक्षा की परीक्षा अथवा हायर सेकेण्डरी अथवा
                    समकक्ष परीक्षा उत्तीर्ण
                    <br />
                    <br />
                    आरक्षक (रेडियो- ऑपरेटर) - मान्यता प्राप्त किसी मण्डल/संस्था
                    से उच्चतर माध्यमिक प्रमाण पत्र परीक्षा (10+2) प्रणाली
                    (12वीं) उत्तीर्ण। इसके अतिरिक्त सरकार द्वारा मान्यता प्राप्त
                    किसी भी पॉलीटेक्निक/संस्थान/कॉलेज / विश्वविद्यालय/ आईटीआई से
                    तथा इलेक्ट्रॉनिक्स / इलेक्ट्रीकल्स और हार्डवेयर, कम्प्यूटर
                    हार्डवेयर (कम्प्यूटर एप्लीकेशन नहीं), टेलीकम्युनिकेशन,
                    इंस्ट्रूमेंट मैकेनिक या सूचना-प्रोद्यौगिकी इंजीनियरिंग के
                    क्षेत्र में 2 वर्ष का पाठ्यक्रम पास कर लिया हो।
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
      <div className="bg-[#fffcf9] overflow-hidden md:pt-[80px] pt-0">
        <div className="container m-auto md:mt-[80px] mt-[20px]">
          {/* <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
            <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
              Note- There will be negative marking of 1/3 for Each Wrong Answer.
            </p>
          </div> */}
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[490px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Pattern of Exam – Computer-Based Test (CBT):-
            </h6>
          </div>
          <div className="flex flex-col mt-[30px] gap-[12px]">
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
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
                        सामान्य ज्ञान और तर्कशक्ति / General Knowledge &
                        Reasoning
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
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
                        बौद्धिक क्षमता और मानसिक क्षमता / Intellectual Ability &
                        Mental Ability
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        30
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
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
                        विज्ञान एवं सरल अंकगणित / Science & Simple Arithmetic
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        30
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        100
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
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[500px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              शारीरिक मापदंड परीक्षण / Physical Parameters Test:-
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              i. केवल विशेष सशस्‍त्र बल के लिए (विशेष सशस्‍त्र बल नियम 1973 के
              नियम 21 एवं 22 अनुसार):-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-12 bg-[#F1F2F6]">
              <div className="col-span-1 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  क्रं.
                </p>
              </div>
              <div className="col-span-4 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  आरक्षक पदों के लिए
                </p>
              </div>
              <div className="col-span-1 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  वर्ग
                </p>
              </div>
              <div className="col-span-2 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  ऊँचाई
                </p>
              </div>
              <div className="col-span-4 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  सीना (केवल पुरुषों के लिए)
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-12 bg-[#F1F2F6]">
              <div className="col-span-8 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  &nbsp;
                </p>
              </div>
              <div className="col-span-2 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  बिना फुलाव
                </p>
              </div>
              <div className="col-span-2 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  फुलाव सहित
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      1.
                    </p>
                  </div>
                  <div className="col-span-4 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      क. अनारक्षित <br />
                      ख. अन्‍य पिछडा़ वर्ग
                    </p>
                  </div>
                  <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      पुरुष
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      168 से.मी.
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      79 से.मी.
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      84 से.मी.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      2.
                    </p>
                  </div>
                  <div className="col-span-4 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      क. गोरखा <br />
                      ख. गढ़वाली <br />
                      ग. कुमाऊँ के मामले में
                    </p>
                  </div>
                  <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      पुरुष
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      157 से.मी.
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      79 से.मी.
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      84 से.मी.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      3.
                    </p>
                  </div>
                  <div className="col-span-4 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      क. मराठा <br />
                      ख. अनुसूचित जाति <br />
                      ग. अनुसूचित जनजाति
                    </p>
                  </div>
                  <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      पुरुष
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      165 से.मी.
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      79 से.मी.
                    </p>
                  </div>
                  <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      84 से.मी.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mt-[80px] mb-[16px] exam-btn max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              ii. अन्य 'विशेष सशस्त्र बल छोड़कर संवर्गों के अभ्यर्थियों की भर्ती
              के लिए:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-12 bg-[#F1F2F6]">
              <div className="col-span-1 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  क्रं.
                </p>
              </div>
              <div className="col-span-4 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  संवर्ग
                </p>
              </div>
              <div className="col-span-1 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  वर्ग
                </p>
              </div>
              <div className="col-span-2 p-[14px]">
                <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  ऊँचाई
                </p>
              </div>
              <div className="col-span-4 p-[14px]">
                <div className="grid grid-cols-2">
                  <div className="col-span-2 mb-[10px]">
                    <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      सीना (केवल पुरुषों के लिए)
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      बिना फुलाए
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      फुलाव सहित
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      1.
                    </p>
                  </div>
                  <div className="col-span-4 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      आरक्षक ‘विशेष सशस्‍त्र बल छोड़कर' अन्‍य सभी संवर्ग: <br />
                      क. अनारक्षित <br />
                      ख. अनुसूचितजाति <br />
                      ग. अन्‍य पिछड़ावर्ग <br />
                    </p>
                  </div>
                  <div className="col-span-7">
                    <div className="grid grid-cols-4">
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          पुरुष
                        </p>
                      </div>
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          168 से.मी.
                        </p>
                      </div>
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          81 से.मी.
                        </p>
                      </div>
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          86 से.मी.
                        </p>
                      </div>
                    </div>
                    <div className="grid border-t grid-cols-4">
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          महिला
                        </p>
                      </div>
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          155 से.मी.
                        </p>
                      </div>
                      <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          लागू नहीं
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      2.
                    </p>
                  </div>
                  <div className="col-span-4 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      आरक्षक ‘विशेष सशस्‍त्र बल छोड़कर' अन्‍य सभी संवर्ग:
                      अनुसूचित जनजाति
                    </p>
                  </div>
                  <div className="col-span-7">
                    <div className="grid grid-cols-4">
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          पुरुष
                        </p>
                      </div>
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          160 से.मी.
                        </p>
                      </div>
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          76 से.मी.
                        </p>
                      </div>
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          81 से.मी.
                        </p>
                      </div>
                    </div>
                    <div className="grid border-t grid-cols-4">
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          महिला
                        </p>
                      </div>
                      <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          155 से.मी.
                        </p>
                      </div>
                      <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                        <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          लागू नहीं
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                i. जहाँ भी लागू हो, यदि सीने का माप न्‍यूनतम निर्धारित माप से
                अधिक है तो उसे कम से कम 5 सेमी फुलाना अनिवार्य होगा ।
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                ii. शारीरिक मापदण्‍डों में किसी भी स्‍तर पर छूट नहीं दी जाएगी ।
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] mt-[20px] max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              द्वितीय चरण परीक्षा योजना / Second phase examination scheme:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                i. आरक्षक (जीडी) के पदों हेतु शारीरिक दक्षता परीक्षण होगा जिसके
                अंक अंतिम प्रवीणता सूची के लिए, प्रथम चरण के अंकों के साथ जोड़े
                जाएँगे ।
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                ii. आरक्षक (ऑपरेटर-रेडियो) के पदों हेतु शारीरिक दक्षता परीक्षण
                के लिए चुना जाएगा जिसके अंक अंतिम प्रवीणता सूची के लिए, प्रथम
                चरण के अंकों के साथ नहीं जोड़े जाएँगे तथा शारीरिक दक्षता परीक्षण
                केवल क्वालिफाइंग प्रकृति का होगा ।
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] mt-[20px] max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              1. शारीरिक दक्षता परीक्षण – PPT – अधिकतम 100 अंक:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                i. पुरुषों के लिए गोला- गोले का वजन 7.26 कि.ग्रा.
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                ii. महिलाओं के लिए गोला- गोले का वजन 4.00 कि.ग्रा.
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                iii. 800 मीटर दौड़ हेतु एक अवसर तथा लम्‍बी कूद एवं गोला फेंक
                हेतु 3 अवसर प्रदान किये जायेंगे।
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] mt-[20px] max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              2. शिथिल मापदण्‍डों के साथ होमगार्ड/भूतपूर्व सैनिक: सभी तीन विधाओं
              में तथा, आरक्षक (रेडियो-ऑपरेटर) – केवल 800 मी. में:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                i. पुरुषों के लिए गोला- गोले का वजन 7.26 कि.ग्रा.
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                ii. महिलाओं के लिए गोला- गोले का वजन 4.00 कि.ग्रा.
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                iii. 800 मीटर दौड़ हेतु एक अवसर तथा लम्‍बी कूद एवं गोला फेंक
                हेतु 3 अवसर प्रदान किये जायेंगे।
              </p>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] mt-[20px] max-w-[230px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              पाठ्यक्रम / Syllabus:-
            </h6>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[350px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Reasoning Topics (मौखिक / Verbal):-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. सादृश्य परीक्षण / Analogy Test
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. वर्गीकरण / Classification
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. वर्णमाला / Alphabet
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. कोडिंग-डिकोडींग / Coding-Decoding
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. दिशा-दूरी / Direction-Distance
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. रक्त संबंध / Blood Relation
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. पदानुक्रम / Ranking
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. पदों का व्यवस्थीकरण / Arrangement of Terms
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. लुप्त पद / क्विज टेबल / Missing Term / Quiz Table
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. अक्षर-श्रृंखला / Alphabet-Series
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. संख्या-श्रृंखला / Number-Series
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12. गणितीय संक्रियाएं / Mathematical Operations
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. वर्ण-अंक श्रृंखला / Letter-Number Series
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. शब्दों का तार्किक क्रम / Logical Sequence of Words
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. असमानता / Inequality
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. पंचांग / Calendar
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  17. घड़ी / Clock
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  18. पासा / Dice
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  19. घन और घनाभ / Cube and Cuboid
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  20. न्याय-निगमन / Syllogism
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  21. तार्किक कथन / Logical Statement
                </p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  22. कथन और पूर्वधारणाएँ / Statements and Assumptions
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  23. कथन और तर्क / Statements and Arguments
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  24. कथन और कार्यवाही / Course of Action
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  25. कारण और कथन / Cause and Statements
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  26. आव्यूह (मेट्रिक्स) / Metrics
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  27. आकृतियों की गिनती / Counting of Figures
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  28. अंकगणितीय तर्कशक्ति / Arithmetical Reasoning
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  29. पहेली / Puzzle
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  30. कथन और निष्कर्ष / Statements and Conclusions
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  31. वेन-आरेख / Venn-Diagram
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
            <h6 className="bg-[#D0021B] mb-[16px] md:mt-[80px] mt-[20px] max-w-[150px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
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

export default Mp4;
