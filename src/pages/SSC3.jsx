import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons from "../components/buttons/ExamButtons";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function SSC3() {

  function handleDownload() {
    const pdfUrl = '/assets/pdf/SSCMTS.docx';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "SSC MTS.docx");
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/SSC-MTS`);
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
      <div className="bg-[#fffcf9] md:h-[330px] relative">
        <div className="container m-auto">
          <div className="max-w-[984px] md:absolute relative md:h-[232px] w-full left-[50%] translate-x-[-50%] md:top-[-72px] top-0">
            <ExamButtons />
            <div className="rounded-[30px] md:pl-[54px] pl-[20px] md:pr-[43px] pr-[20px] pt-[35px] md:pb-0 pb-[30px] w-full md:absolute relative md:top-[90px] top-0 bg-[#D0021B]">
              <div className="flex justify-between md:flex-row flex-col items-center gap-[32px] pb-[30px]">
                <div>
                  <h6 className="font-sans font-[700] text-[32px] leading-[43.65px] text-[#FFFFFF] pb-[20px]">
                    SSC MTS
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    It is the computer based examination (Online). It consists
                    of two sessions- Session 1 & Session 2, it is mandatory for
                    candidates to attempts both the session. There is no
                    negative marking in Session 1 while there is a negative
                    marking of 1 mark for each wrong answer in session 2.
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
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[334px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Paper 1 : Objective Type Paper
            </h6>
          </div>
          <div data-aos="fade-left">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[334px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Paper 2 : Descriptive Paper
            </h6>
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
                    No. Of Questions
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Marks
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Duration
                  </p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-12 p-[14px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Session 1 (No Negative Marking)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Numerical and Mathematical Ability
                    </p>
                  </div>
                  <div className="md:col-span-9 col-span-8">
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0]">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-4 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            20
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            60
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l h-full justify-between border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            45 minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Reasoning Ability and Problem-Solving
                    </p>
                  </div>
                  <div className="md:col-span-9 col-span-8">
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0]">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-4 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            20
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            60
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r h-full justify-between border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            45 minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Total
                    </p>
                  </div>
                  <div className="md:col-span-9 col-span-8">
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0]">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-4 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            40
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            120
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r h-full justify-between border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            45 minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-12 p-[14px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Session 2 (Negative Marking)
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      General Awareness
                    </p>
                  </div>
                  <div className="md:col-span-9 col-span-8">
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0]">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-4 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            25
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            75
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l h-full justify-between border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            45 minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      English Language and Comprehension
                    </p>
                  </div>
                  <div className="md:col-span-9 col-span-8">
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0]">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-4 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            25
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            75
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r h-full justify-between border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            45 minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Total
                    </p>
                  </div>
                  <div className="md:col-span-9 col-span-8">
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0]">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-4 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            50
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            150
                          </p>
                        </div>
                        <div className="md:col-span-4 col-span-4 py-[20px] border-l border-r h-full justify-between border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            45 minutes
                          </p>
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
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[254px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC MTS 2024 Syllabus
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Numerical Aptitude
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Reasoning Ability
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    English Language
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    General Awareness
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Number Systems
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Number Systems
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Number Systems
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-4 border-l border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Number Systems
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-3 col-span-4 flex flex-col gap-[20px] pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Integers and Whole Numbers,
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        LCM and HCF
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Decimals and Fractions
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Relationship between numbers
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Fundamental Arithmetic Operations
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        BODMAS
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Percentage
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Ratio and Proportions
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Work and Time
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Direct and inverse Proportions
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Averages
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Simple Interest
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Profit and Loss
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Discount
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Area and Perimeter of Basic Geometric Figures
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Distance and Time
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Lines and Angles
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Interpretation of simple
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Graphs and Data
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Square and Square roots etc.
                      </p>
                    </div>
                    <div className="md:col-span-3 h-full border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b col-span-8">
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. Alpha-Numeric Series
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. Coding and Decoding
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. Analogy
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. Following Directions
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. Similarities and Differences
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6. Jumbling
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7. Problem Solving and Analysis
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8. Nonverbal Reasoning based on diagrams, Age
                        Calculations, Calendar and Clock, etc.
                      </p>
                    </div>
                    <div className="md:col-span-3 h-full border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b col-span-8">
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. Spot the error
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. Fill in the blanks
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. Synonyms
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. Antonyms
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. Spelling/detecting mis-spelt words
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6. Idioms and Phrases
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7. One word substitution
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8. Improvement of sentences
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        9. Comprehension Passage
                      </p>
                    </div>
                    <div className="md:col-span-3 h-full border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b col-span-8">
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        1. India and its neighbouring countries
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        2. General Polity including Indian Constitution
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3. Economic scene
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        4. Scientific Research
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        5. Static GK
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        6. Geography
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        7. History
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        8. Sports
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        9. Culture
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        10. Science & Technology
                      </p>
                      <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        11. Current Affairs etc.
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

export default SSC3;
