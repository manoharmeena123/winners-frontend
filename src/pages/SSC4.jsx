import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons from "../components/buttons/ExamButtons";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function SSC4() {
  
  function handleDownload() {
    const pdfUrl = '/assets/pdf/SSCCPO.docx';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "SSC CPO.docx");
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/SSC-CPO`);
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
      <div className="bg-[#fffcf9] md:h-[350px] relative">
        <div className="container m-auto">
          <div className="max-w-[984px] md:absolute relative md:h-[232px] w-full left-[50%] translate-x-[-50%] md:top-[-72px] top-0">
            <ExamButtons />
            <div className="rounded-[30px] md:pl-[54px] pl-[20px] md:pr-[43px] pr-[20px] pt-[35px] md:pb-0 pb-[30px] w-full md:absolute relative md:top-[90px] top-0 bg-[#D0021B]">
              <div className="flex justify-between md:flex-row flex-col items-center gap-[32px] pb-[30px]">
                <div>
                  <h6 className="font-sans font-[700] text-[32px] leading-[43.65px] text-[#FFFFFF] pb-[20px]">
                    SSC CPO
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    SSC CPO exam has four different stages that candidates must
                    clear in order to get selected in the various positions in
                    organization such as the Delhi Police, CAPFs & CISFs. SSC
                    CPO Paper-I is a test which consists of objective multiple
                    choice questions. Paper-II exam is the English comprehension
                    test while the PET/PST test is conducted to evaluate & check
                    the candidate's endurance that is medical and physical
                    strength of the candidate.
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
                <div className="md:col-span-12">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    SSC CPO Exam Pattern 2023
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-4 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Tier/Stages
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Type of Examination
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Mode of examination
                  </p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-4 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Tier-I
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Objective Multiple Choice
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      CBT (Online)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-4 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      PET/PST
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Running, Long Jump, High Jump and Short Put
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Physical exam
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-4 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Tier-II
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Objective Multiple Choice
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      CBT (Online)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b border-l bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-4 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      DME
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-6 py-[20px] border-l border-[#D2D0D0]  md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Detailed Medical Examination
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] md:pl-[37px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Offline
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
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[354px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CPO Paper-I Exam Pattern
            </h6>
          </div>
          <div className="grid grid-cols-1 mb-[80px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
            <div className="flex flex-col gap-[20px]">
              <div data-aos="fade-up">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  SSC CPO Tier-I consists of 200 questions in total. For each
                  correct answer 1 mark will be given and there will be a
                  negative marking of 0.25 marks for each incorrect answer. The
                  time duration of Paper-I will be 2 hours i.e. 120 minutes.
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Let's have a closer look at the SSC CPO Paper-I exam pattern.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
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
                    Duration
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        General Intelligence & Reasoning
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2 hours
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        General Knowledge
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2 hours
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Quantitative Aptitude
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2 hours
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        English Comprehension
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2 hours
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Total
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        200
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        200
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
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
      </div>
      <div className="bg-[#fffcf9] overflow-hidden md:px-[100px] pb-[80px] px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[354px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CPO Paper-I Syllabus
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    General Reasoning
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    General Knowledge
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Quantitative Aptitude
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    English Comprehension
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Verbal Reasoning
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Current Affairs
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Percentage
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Reading Comprehension
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Syllogism
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Awards and Honours
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Ratio and Percentage
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Grammar
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Circular Seating Arrangement
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Books and Authors
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Data Interpretation
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Vocabulary
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Linear Seating Arrangement
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Sports
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Mensuration and Geometry
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Verbal Ability
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Double Lineup
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Entertainment
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Quadratic Equation
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Synonyms- Antonyms
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Scheduling
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Obituaries
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Interest
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Active and Passive Voice
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Problem-solving, analysis, judgment, decision making,
                        visual memory
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Important Dates
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Problems on Ages
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Para Jumbles
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Blood Relations
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Scientific Research
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Profit and Loss
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Fill in the Blanks
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Directions and Distances
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Indian Constitution & General Polity
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Algebra
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Error Correction
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Number Series
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l h-full border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Geography
                      </p>
                    </div>
                    <div className="md:col-span-6 col-span-4 border-l h-full border-[#D2D0D0]">
                      <div className="grid grid-cols-12">
                        <div className="col-span-6 flex flex-col gap-[20px] md:pl-[20px] pl-[14px] py-[14px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Time and Work
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Partnership
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Mixture & Alligation
                          </p>
                        </div>
                        <div className="col-span-6 flex flex-col h-full border-l border-[#D2D0D0] gap-[20px] py-[14px]">
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 py-[14px]">
                      <p className="font-sans font-[600] md:text-[18px] border-b md:pl-[22px] pb-[14px] pl-[10px] border-[#D2D0D0] text-[14px] md:leading-[24px] leading-[20px]">
                        Coding and Decoding
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] pt-[14px] md:leading-[24px] md:pl-[22px] pl-[10px] leading-[20px]">
                        Non-Verbal Reasoning
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l h-full border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Economics
                      </p>
                    </div>
                    <div className="md:col-span-6 col-span-4 border-l h-full border-[#D2D0D0]">
                      <div className="grid grid-cols-12">
                        <div className="col-span-6 flex flex-col py-[14px]">
                          <p className="font-sans font-[600] md:text-[18px] border-b md:pl-[22px] pb-[14px] pl-[10px] border-[#D2D0D0] text-[14px] md:leading-[24px] leading-[20px]">
                            Number System
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] pt-[14px] md:leading-[24px] md:pl-[22px] pl-[10px] leading-[20px]">
                            Trigonometry
                          </p>
                        </div>
                        <div className="col-span-6 flex flex-col h-full border-l border-[#D2D0D0] gap-[20px] py-[14px]">
                          &nbsp;
                        </div>
                      </div>
                    </div>
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
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[454px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CPO 2023 Physical Efficiency Test (PET)
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-6 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Male Candidates
                  </p>
                </div>
                <div className="md:col-span-6 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Female Candidates
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-6 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Verbal Reasoning
                      </p>
                    </div>
                    <div className="md:col-span-6 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Percentage
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b border-t-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-6 flex-col flex gap-[20px] col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. 100 metre race in 16 seconds
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. 1.6 Km Race in 6.5 minutes
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. Long Jump: 3.65 metres in 5 chances
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. High Jump: 1.2 metres in 3 chances
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. Short put 16 LBS: 4.5 metres in 3 chances
                      </p>
                    </div>
                    <div className="md:col-span-6 col-span-4 flex-col flex h-full gap-[20px] border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. 100 metre race in 18 second
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. 800 metre race in 4 minutes
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. Long Jump: 2.7 metres or 9 feet in 3 chances
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. High Jump: 0.9 metres or 3 feet in 3 chances
                      </p>
                    </div>
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
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[400px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CPO Physical Standard Test (PST)
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-5 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Category
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Height
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] pb-[14px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Chest
                  </p>
                  <div className="grid grid-cols-2 border-t pt-[14px] border-[#000000]">
                    <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Unexpanded
                    </p>
                    <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Expanded
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Male (Gen)
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        170
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        80
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        85
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Belonging to Hilly regions & areas of J&K, North East &
                        Sikkim
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        165
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        80
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        85
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Scheduled Tribes
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        162.5
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        77
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        82
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Female (Gen)
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        157
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        -
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        -
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Belonging to Hilly regions & areas of J&K, North East &
                        Sikkim
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        155
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        -
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        -
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Scheduled Tribes
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        154
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        -
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        -
                      </p>
                    </div>
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
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[354px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CPO Paper-II Exam Pattern
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 mb-[20px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Paper-II is evaluated for only those candidates who qualify
                  Paper-I and Physical Test. It consists of 200 multiple choice
                  questions with the maximum score of 200. The time duration for
                  SSC CPO Paper-II is 2 hours i.e. 120 minutes. There will be
                  negative marking of 0.25 marks for each incorrect answer.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-5 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Subjects
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    No. of Questions
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] pb-[14px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Marks
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] pb-[14px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Duration
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        English Language and Comprehension
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        200
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        200
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2 hours
                      </p>
                    </div>
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
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[354px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CPO Medical Test
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 mb-[20px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Minimum Near Vision: N6 (better eye) and N9 (worse eye)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Minimum Distant Vision: 6/6 (better eye) and 6/9 (worse eye)
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Must not have knock knee, flat foot, varicose vein or squint
                  in eyes
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  Eye standards should be without visual correction of any kind
                  even by glasses.
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

export default SSC4;
