import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons3 from "../components/buttons/ExamButtons3";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function Mp5() {
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/MP-SUB-INSPECTOR`);
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
                    मध्यप्रदेश पुलिस सब इंस्पेक्टर परीक्षा पाठ्यक्रम व योग्यता:-
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[28px] text-[#FFFFFF]">
                    आयु सीमा :-अनारक्षित श्रेणी के अभ्यार्थियों 18 से कम और 25
                    से अधिक नहीं होनी चाहिए ।
                  </p>
                  <div className="bg-[#FFFFFF] h-[6px] rounded-[48px] mt-[24px] mb-[45px] w-full"></div>
                </div>
                <div className="w-[40%]">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/ESB%20NEW%20logo-01.png?alt=media&token=b9a1180e-3335-40cd-a45c-46c0cbe76a9b" className="pt-[18px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] md:pt-[80px] pt-0">
        <div className="container m-auto md:mt-[80px] mt-[20px]">
          {/* <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
            <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
              Note- There will be negative marking of 1/3 for Each Wrong Answer.
            </p>
          </div> */}
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[300px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              न्यूनतम शैक्षणिक अर्हता :-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col mt-[30px] gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    पदनाम
                  </p>
                </div>
                <div className="col-span-2 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    पद का प्रकार
                  </p>
                </div>
                <div className="col-span-7 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    शैक्षणिक अर्हताएँ
                  </p>
                </div>
              </div>
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
                        सूबेदार
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गैर तकनीकी पद
                      </p>
                    </div>
                    <div className="col-span-7 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शासन द्वारा मान्यता प्राप्त विश्वविद्यालय से स्नातक की
                        उपाधि या उसके समतुल्य
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2.
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उपनिरीक्षक <br />
                        (जिला पुलिस बल)
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गैर तकनीकी पद
                      </p>
                    </div>
                    <div className="col-span-7 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शासन द्वारा मान्यता प्राप्त विश्वविद्यालय से स्नातक की
                        उपाधि या उसके समतुल्य
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3.
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उप निरीक्षक <br />
                        (विशेष शाखा)
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गैर तकनीकी पद
                      </p>
                    </div>
                    <div className="col-span-7 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शासन द्वारा मान्यता प्राप्त विश्वविद्यालय से स्नातक की
                        उपाधि या उसके समतुल्य
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4.
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उप निरीक्षक (आयुध)
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        तकनीकी पद
                      </p>
                    </div>
                    <div className="col-span-7 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        मान्यता प्राप्त तकनीकी विश्वविद्यालय से मैकेनिकल
                        इंजीनियरिंग में 3 वर्षीय डिप्लोमा
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5.
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उप निरीक्षक <br />
                        (क्यू. डी.)
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        तकनीकी पद
                      </p>
                    </div>
                    <div className="col-span-7 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शासन द्वारा मान्यता प्राप्त विश्वविद्यालय से गणित, भौतिक
                        शास्त्र तथा रसायन शास्त्र के विषय के साथ स्नातक या उसके
                        समतुल्य उपाधि।
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6.
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उप निरीक्षक (रेडियो)
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        तकनीकी पद
                      </p>
                    </div>
                    <div className="col-span-7 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शासन द्वारा मान्यता प्राप्त किसी भी संस्था/विश्वविद्यालय
                        से इलेक्ट्रॉनिक / इलेक्ट्रिकल, टेली कम्यूनिकेशन
                        इंजीनियरिंग में 03 वर्ष का डिप्लोमा।
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7.
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उप निरीक्षक <br />
                        (अंगुली चिन्ह)
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        तकनीकी पद
                      </p>
                    </div>
                    <div className="col-span-7 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शासन द्वारा मान्यता प्राप्त विश्वविद्यालय से गणित, भौतिक
                        शास्त्र तथा रसायन शास्त्र के विषय के साथ स्नातक या उसके
                        समकक्ष या उसके समतुल्य उपाधि ।
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8.
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उप निरीक्षक (विसबल)
                      </p>
                    </div>
                    <div className="col-span-2 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गैर तकनीकी पद
                      </p>
                    </div>
                    <div className="col-span-7 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        शासन द्वारा मान्यता प्राप्त विश्वविद्यालय से स्नातक की
                        उपाधि या उसके समतुल्य
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                आयु सीमा में छूट :- निम्न संवर्गों के अन्तर्गत आने वाले
                अभ्यार्थियों को निम्नानुसार छूट दी जाएगी ।
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                • SC, ST व OBC के अभ्यार्थियों को अधिकतम आयु सीमा में 13 वर्ष तक
                की छूट प्राप्त होगी । इस जाति वर्ग के अभ्यार्थी की आयु 18 से कम
                एवं 38 वर्ष से अधिक नही होनी चाहिए ।
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                • विधवा, परित्यकत्ता एवं तलाकशुदा महिला अभ्यार्थियों के लिए
                अधिकतम आयु सीमा 38 वर्ष होगी ।
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                • विक्रम पुरस्कार प्राप्त अभ्यार्थियों के मामले में भी उच्चतर
                आयु सीमा में अधिकतम 5 वर्ष की छूट दी जाएगी ।
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                • केन्द्र शासन अथवा अन्य राज्यों के सेवारत अथवा भूतपूर्व सेवकों
                को आयु में किसी ऐसी छूट की पात्रता नहीं है, जो इन नियमों में
                नहीं दी गई । सी.आर.पी.एफ., बी.एस.एफ., आई.टी.बीपी. आद केन्द्र
                शासन के अर्द्ध सैनिक या पुलिस बलों के सदस्यों को आयु में छूट की
                पात्रता नहीं है।
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                • उन अभ्यार्थियों को जो भूतपूर्व सैनिक संवर्ग के अन्तर्गत आते
                हैं उसकी वर्तमान आयु में से उसके द्वारा पहले की गई समस्त
                प्रतिरक्षा सेवा की कालावधि कम करने की पात्रता होगी, बशर्ते इसके
                परिणामस्वरूप उनकी आयु अधिकतम आयु से 3 वर्ष से अधिक नहीं होगी,
                अर्थात् 36 वर्ष से अधिक नहीं होगी ।
              </p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="bg-[#FFFFFF] my-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                अधिकतम आयु सीमा में उपरोक्त छूटें मध्यप्रदेश के मूल निवासी
                अभ्यार्थियों को ही उपलब्ध होंगे इस हेतु मध्यप्रदेश राज्य का मूल
                निवासी प्रमाण-पत्र अनिवार्य है। किसी भी स्थिति में सभी प्रकार की
                छूटें प्राप्त होने पर अभ्यार्थियों की वर्तमान आयु 45 वर्ष से
                अधिक नहीं होनी चाहिए ।
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-[30px] gap-[12px]">
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    भर्ती का तरीका
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    म.प्र. लोक सेवा आयोग से भरे जाने वाले पदों (राजपत्रित /
                    अराजपत्रित / कार्यपालिक) के लिए
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    लोक सेवा आयोग की परिधि से बाहर के तृतीय/चतुर्थ श्रेणी पदों
                    के लिए
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
                        &nbsp;
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        &nbsp;
                      </p>
                    </div>
                    <div className="col-span-8 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        न्यूनतम / अधिकतम आयु सीमा (वर्ष में)
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1.
                      </p>
                    </div>
                    <div className="col-span-3 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        खुली प्रतियोगिता से सीधी भर्ती के भरे जाने वाले पदों के
                        लिए
                      </p>
                    </div>
                    <div className="col-span-4 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        21 से 28
                      </p>
                    </div>
                    <div className="col-span-4 border-r h-full py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        18 से 25
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                मध्यप्रदेश के मूल निवासियों के लिए आयु-सीमा में अधिकतम छूट :-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-1 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    क्र.
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    भर्ती का तरीका
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    म.प्र. लोक सेवा आयोग से भरे जाने वाले पदों (राजपत्रित /
                    अराजपत्रित / कार्यपालिक) के लिए
                  </p>
                </div>
                <div className="col-span-4 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    लोक सेवा आयोग की परिधि से बाहर के तृतीय/चतुर्थ श्रेणी पदों
                    के लिए
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
                    <div className="col-span-5 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पुरुष आवेदक (अनारक्षित वर्ग)
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        28 + 05 = 33
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        25 + 08 = 33
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-1 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2.
                      </p>
                    </div>
                    <div className="col-span-5 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        महिला आवेदक (अनारक्षित वर्ग) <br />
                        पुरुष / महिला आवेदक <br />
                        (आरक्षित वर्ग- अनुसूचित जाति / अनुसूचित जनजाति / अन्य
                        पिछड़ा वर्ग) <br />
                        शासकीय / निगम / मण्डल / स्वशासी संस्था के कर्मचारी तथा
                        नगर सैनिक / नि:शक्तजन
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        28 + 10 = 38
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        25 + 13 = 38
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                परीक्षा योजना :-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  मध्यप्रदेश पुलिस सब इंसपेक्टर की परीक्षा 3 चरणों में आयोजित की
                  जाती है। इसका प्रथम चरण लिखित परीक्षा और दूसरा चरण शारीरिक
                  दक्षता तथा तीसरा चरण व्यक्तिगत साक्षात्कार होता है ।
                </p>
              </div>
            </div>
            <div data-aos="flip-left">
              <div className="flex items-center justify-center">
                <img src="/assets/about/img1.png" alt="" />
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[100%] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                लिखित परीक्षा :-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  मध्यप्रदेश पुलिस सब इंसपेक्टर परीक्षा में दो पेपर का आयोजित
                  किया जाता है जिसमें तकनीकी पदों के उम्मीदवारों के लिए पेपर – I
                  व पेपर – II दोनों अनिवार्य रहते हैं तथा गैर तकनीकी पदों के
                  उम्मीदवारों के लिए सिर्फ पेपर – II अनिवार्य रहता है ।
                </p>
              </div>
            </div>
            <div data-aos="flip-left">
              <div className="flex items-center justify-center">
                <img src="/assets/about/img2.png" alt="" />
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 mt-[40px] bg-[#F1F2F6]">
                <div className="col-span-12 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    तकनीकी पदों के लिए पाठ्यक्रम (पेपर – I) कुल अंक - 100
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-1 border-r flex flex-col gap-[14px] py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        भौतिक विज्ञान :- <br />
                        मापक इकाइयाँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        भौतिकी की भूमिका
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        दाब / बल
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सदिश अदिश राशियाँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        घर्षण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        तापमान
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पदार्थ के गुण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        आयाम
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गणना
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        विद्युत धारा
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गुरुत्वाकर्षण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        ऊष्मा, ऊष्मागतिकी एवं ताप
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गति
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कार्य ऊर्जा शक्ति
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        आंतरिक ऊर्जा
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        दोलन
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        तरंग
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        वृत्तीय गति
                      </p>
                    </div>
                    <div className="md:col-span-4 col-span-1 border-r flex flex-col h-full gap-[14px] py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        रसायन विज्ञान :- <br />
                        विश्लेषी रसायन
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अकार्बनिक रसायन
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        चयापचयी
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        कार्बनिक रसायन
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        ड्रग्स तथा पॉलिमर
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        जैविक अणुओं
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        भौतिक रसायन
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        रासायनिक अभिक्रियाएँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गैसों का आचरण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        ईंधन का दहन
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अम्ल, लवण एवं क्षार
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        तत्व, यौगिक एवं मिश्रण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पदार्थ और उनकी प्रकृति
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        परमाणु संरचना
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        धातु, अधातु और मिश्रधातु
                      </p>
                    </div>
                    <div className="md:col-span-4 col-span-1 border-r flex flex-col gap-[14px] py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        गणित :-
                        <br />
                        सरलीकरण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        औसत
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        समय और कार्य
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        समय और गति
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        लाभ और हानि
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        HCF और LCM
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        साधारण और चक्रवृद्धि ब्याज
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अनुपात और अनुपात
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पाई चार्ट
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        बार ग्राफ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        डेटा इंटरप्रिटेशन
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        प्रतिशत
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        आयु संबंधी
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        क्षेत्रमिति
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 mt-[40px] bg-[#F1F2F6]">
                <div className="col-span-12 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    तकनीकी और गैर तकनीकी पदों के लिए पाठ्यक्रम (पेपर – 2) कुल
                    अंक - 200
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-1 border-r flex flex-col gap-[14px] py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        हिन्दी :- <br />
                        वर्णमाला
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        संधि
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        समास
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        उपसर्ग
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        प्रत्यय
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अनेकार्थी
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        विलोम शब्द
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पर्यायवाची
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        वाक्यांश के लिए एक शब्द
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        समोच्चारित भिन्नार्थक
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        वाक्य भेद
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        वाक्य अशुद्धि
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        मुहावरें / लोकोक्तियाँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        भाव पल्लवन
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        भाषा बोली
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        काव्य
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        रस
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        छंद
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अलंकार
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        क्षेत्रीय बोलियाँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पत्रिकाएँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पहेलियाँ
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        प्रशासनिक शब्दावली
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अपठित बोध
                      </p>
                    </div>
                    <div className="md:col-span-4 col-span-1 border-r flex flex-col h-full gap-[14px] py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अंग्रेजी :- <br />
                        Articles
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Noun
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Pronoun
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Adjective
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Preposition
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Punctuation
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Conjunction
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Tense
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Adverb
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Voice
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Direct & Indirect Speech
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Subject Verb Agreement
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Determiners
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Question Tag
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Reading Comprehension
                      </p>
                    </div>
                    <div className="md:col-span-4 col-span-1 border-r flex flex-col gap-[14px] py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य ज्ञान :- <br />
                        गणित
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        रीजनिंग
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        सामान्य विज्ञान
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        इतिहास
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        राजव्यवस्था
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        भूगोल
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        पर्यावरण
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        मध्यप्रदेश सामान्य ज्ञान
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        अर्थव्यवस्था
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        करेंट अफेयर्स राष्ट्रीय और अंतर्राष्ट्रीय
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        विविध
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
              <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[300px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                न्यूनतम शारीरिक अर्हता :-
              </h6>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  • अभ्यार्थी के पास निम्नलिखित शारीरिक अर्हतायें अवश्य होनी
                  चाहिए-
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  • ऊँचाई पुरुष – 167.5 सेंटीमीटर या उससे अधिक
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  • ऊँचाई महिला – 152.4 सेंटीमीटर या उससे अधिक
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  • सीना पुरुष – सीना बिना फुलाये 81 सेंटीमीटर/फुलाने पर 86
                  सेंटीमीटर (अभ्यार्थी का सीना फुलाने एवं बिना फुलाने में कम से
                  कम 5 सेमी का अन्तर होना आवश्यक हैं इस विषय पर कीस प्रकार की
                  छूट नहीं दी जाएगी।)
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  • अभ्यार्थी को शारीरिक रूप से अपंग नहीं होना चाहिये।
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  • अभ्यार्थी में ‘नॉक-नी' अथवा ‘फ्लेट फुट' एवं कोई दृष्टि दोष
                  नहीं होना चाहिये। अभ्यर्थी को चिकित्सक दृष्टि से पूर्णत: योग्य
                  (मेडिकली) फीट होना आवश्यक है ।
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  • इसमें पुरुष, महिला, पूर्व सैनिकों के लिए लम्बी दौड़, जम्प,
                  शॉटपुट आदि मापदण्ड शामिल होते हैं ।
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="grid grid-cols-12 bg-[#F1F2F6]">
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    वर्ग
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    800 मीटर लंबी दौड़
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    लंबवत छलांग
                  </p>
                </div>
                <div className="col-span-3 p-[14px]">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    शॉट पुट
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
                        2 मिनट 40 सेकण्ड
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        13 फीट
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        19 फीट (7.260 किलोग्राम)
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
                        3 मिनट 30 सेकण्ड
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10 फीट
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        15 फीट (4 किलोग्राम)
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        भूतपूर्व सैनिकों
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3 मिनट 15 सेकण्ड
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10 फीट
                      </p>
                    </div>
                    <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        15 फीट (7.260 किलोग्राम)
                      </p>
                    </div>
                  </div>
                  <h6 className="bg-[#D0021B] md:mt-[80px] mt-[20px] exam-btn mb-[16px] max-w-[300px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                    न्व्यक्तिगत साक्षात्कार :-
                  </h6>
                  <div className="bg-[#FFFFFF] mb-[20px] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      जब उम्मीदवार पहले दो चरणों को पास करता है तब उसे व्यक्तिगत
                      साक्षात्कार के लिए बुलाया जाता है, जो कि 10 अंकों के लिए
                      आयोजित किया जाता है , जिसमें सॉफ्ट स्किल्स, व्यक्तित्व,
                      चरित्र आदि के आधार पर एक पैनल द्वारा आंका जाएगा ।
                    </p>
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

export default Mp5;
