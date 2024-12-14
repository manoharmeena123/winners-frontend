import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons from "../components/buttons/ExamButtons";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

const data = [
  {
    id: 1,
    section: "Tier – I",
    module1: "Objective Multiple Choice",
    subject1: "Computer Based (online)",
  },
  {
    id: 2,
    section: "Tier – II",
    module1: "Objective Multiple Choice + Skill Test & Typing Test",
    subject1: "Computer-Based (online)",
  },
];
const data1 = [
  {
    subjects: "General Intelligence",
    question: "25",
    marks: "50",
    duration: "60 minutes (80 Minutes for PWD candidates)",
  },
  {
    Subjects: "General Awareness",
    question: "25",
    marks: "50",
    duration: "60 minutes (80 Minutes for PWD candidates)",
  },
  {
    Subjects: "Quantitative Aptitude (Basic Arithmetic Skill)",
    question: "25",
    marks: "50",
    duration: "60 minutes (80 Minutes for PWD candidates)",
  },
  {
    Subjects: "English Language (Basic Knowledge)",
    question: "25",
    marks: "50",
    duration: "60 minutes (80 Minutes for PWD candidates)",
  },
];
const data2 = [
  {
    general: "Logical Reasoning",
    quantitative: "Simplification",
    language: "Reading Comprehension",
    awareness: "History",
  },
  {
    general: "Alphanumeric Series",
    quantitative: "Profit and Loss",
    language: "Cloze Test",
    awareness: "Culture",
  },
  {
    general: "Ranking/Direction/Alphabet Test",
    quantitative: "Mixtures & Allegations",
    language: "Para jumbles",
    awareness: "Geography",
  },
  {
    general: "Data Sufficiency",
    quantitative: "Simple Interest & Compound Interest & Surds & Indices",
    language: "Miscellaneous",
    awareness: "Economic Scene",
  },
  {
    general: "Coded Inequalities",
    quantitative: "Work & Time",
    language: "Fill in the blanks",
    awareness: "General Policy",
  },
  {
    general: "Seating Arrangement",
    quantitative: "Time & Distance",
    language: "Multiple Meaning/Error Spotting",
    awareness: "Scientific Research",
  },
  {
    general: "Puzzle",
    quantitative: "Mensuration  – Cylinder, Cone, Sphere",
    language: "Paragraph Completion",
    awareness: "Awards and Honors",
  },
  {
    general: "Tabulation",
    quantitative: "Data Interpretation",
    language: "One Word Substitution",
    awareness: "Books and Authors",
  },
  {
    general: "Syllogism",
    quantitative: "Ratio and Proportion , Percentage",
    language: "Active and Passive Voice",
    awareness: "",
  },
  {
    general: "Blood Relations",
    quantitative: "Number Systems",
    language: "",
    awareness: "",
  },
  {
    general: "Input-Output Coding-Decoding",
    quantitative: "Sequence & Series",
    language: "",
    awareness: "",
  },
  {
    general: "Coding Decoding",
    quantitative: "Permutation, Combination & Probability",
    language: "",
    awareness: "",
  },
];

function SSC2() {
  function handleDownload() {
    const pdfUrl = "/assets/pdf/SSCCHSL.docx";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "SSC CHSL.docx");
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/SSC-CHSL`);
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
      <div className="bg-[#fffcf9] relative">
        <div className="container m-auto">
          <div className="max-w-[984px] relative md:h-[300px] w-full left-[50%] translate-x-[-50%] top-[-72px] md:top-0">
            <ExamButtons />
            <div className="rounded-[30px] md:pl-[54px] pl-[20px] md:pr-[43px] pr-[20px] pt-[35px] md:pb-0 pb-[30px] w-full md:absolute relative md:top-[90px] top-0 bg-[#D0021B]">
              <div className="flex justify-between md:flex-row flex-col items-center gap-[32px] pb-[30px]">
                <div>
                  <h6 className="font-sans font-[700] text-[32px] leading-[43.65px] text-[#FFFFFF] pb-[20px]">
                    SSC CHSL
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    SSC CHSL Exam has two different phases; Tier – 1 & Tier – 2.
                    In order to get selected for the various posts in government
                    offices, the candidates have to clear both the phases.
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
      <div className="overflow-y-hidden bg-[#fffcf9] md:px-[100px] px-[20px] overflow-x-auto">
        <div data-aos="fade-up">
          <div className="container m-auto">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs bg-[#F1F2F6] mb-[12px] text-[#000000]">
                <tr>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] p-[19px]">
                    Tier
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    Type
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    Mode
                  </th>
                </tr>
              </thead>
              <tbody className="pt-[10px]">
                {data?.map((e, i) => {
                  return (
                    <>
                      <tr
                        key={i}
                        className="bg-white border rounded-[4px] border-[#D2D0D0]"
                      >
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.section}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.module1}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.subject1}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] overflow-y-hidden md:px-[100px] px-[20px] md:pt-[100px] pt-[50px] md:pb-[110px] pb-[50px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CHSL Tier-1
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 mb-[80px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. The SSC CHSL Tier-1 paper consists of 100 questions.
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. Each question carries 2 marks.
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. There is a negative marking of 0.50 marks for each
                  incorrect answer.
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. The time duration to complete the Tier-1 paper is 60
                  minutes.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs bg-[#F1F2F6] mb-[12px] text-[#000000]">
                <tr>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] p-[19px]">
                    Sections
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] p-[19px]">
                    Subjects
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    No of Questions
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    Max Marks
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    Exam Duration
                  </th>
                </tr>
              </thead>
              <tbody className="pt-[10px]">
                {data1?.map((e, i) => {
                  return (
                    <>
                      <tr
                        key={i}
                        className="bg-white border rounded-[4px] border-[#D2D0D0]"
                      >
                        <td className="py-[20px] px-[10px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {i + 1}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.subjects}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.question}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.marks}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.duration}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
              <tr className="bg-[#D0021B] border rounded-[4px] border-[#D9D9D9]">
                <th className="pl-[22px] py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]">
                  Total
                </th>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]"></td>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]">
                  100
                </td>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]">
                  200
                </td>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]"></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] overflow-hidden md:px-[100px] pb-[80px] px-[20px] ">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CHSL Tier-1 Syllabus
            </h6>
          </div>
          <div data-aos="fade-up">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs bg-[#F1F2F6] mb-[12px] text-[#000000]">
                <tr>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] p-[19px]">
                    General Intelligence
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] p-[19px]">
                    Quantitative Aptitude
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    English Language
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    General Awareness
                  </th>
                </tr>
              </thead>
              <tbody className="pt-[10px]">
                {data2?.map((e, i) => {
                  return (
                    <>
                      <tr
                        key={i}
                        className="bg-white border rounded-[4px] border-[#D2D0D0]"
                      >
                        <td className="py-[20px] pl-[16px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.general}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.quantitative}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.language}
                        </td>
                        <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                          {e?.awareness}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div className="bg-[#fffcf9] overflow-hidden md:px-[100px] pb-[80px] px-[20px]">
          <div className="container m-auto">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] overflow-x-scroll p-[19px]">
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Session
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Subject
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    No. of Questions
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Marks
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Time
                  </p>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-2 col-span-4 md:pl-[22px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Session-I (2 hours & 15 Minutes)
                    </p>
                    <p className="font-sans font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      1 Mark Negative marking for each wrong answer.
                    </p>
                  </div>
                  <div className="md:col-span-9 col-span-8">
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0] border-b">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-3 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Mathematical Abilities
                          </p>
                        </div>
                        <div className="md:col-span-2 col-span-4 py-[20px] border-l border-r border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            30
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Reasoning & General Intelligence
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            English Language & Comprehension
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            General Awareness
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Computer Knowledge (Qualifying)
                          </p>
                        </div>

                        <div className="md:col-span-2 col-span-4 py-[20px] h-full justify-between flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            30 × 3 = 90
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            30
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            40
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            20
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            15
                          </p>
                        </div>
                        <div className="md:col-span-3 col-span-4 py-[20px] border-l h-full justify-between border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            60 Minutes (1 hour)
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            &nbsp;
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            40 × 3 = 120
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            20 × 3 = 60
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            15 × 3 = 45
                          </p>
                        </div>
                        <div className="md:col-span-2 col-span-4 py-[20px] border-l border-r h-full justify-between border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            &nbsp;
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            30 × 3 = 90
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            60 Minutes (1 hour)
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            &nbsp;
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            20 × 3 = 60
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            15 Minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-2 col-span-4 pl-[22px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Session-II (25 Minutes)
                    </p>
                    <p className="font-sans font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      No negative marking
                    </p>
                  </div>
                  <div className="md:col-span-9 overflow-hidden col-span-8">
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0] border-b">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-3 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Skill Test/Typing Test
                          </p>
                        </div>
                        <div className="md:col-span-2 col-span-6 py-[20px] border-l border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Part A : Skill Test for DEOs
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            &nbsp;
                          </p>
                        </div>
                        <div className="md:col-span-2 col-span-6 py-[20px] border-l h-full border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            -
                          </p>
                        </div>
                        <div className="md:col-span-2 col-span-6 py-[20px] border-l h-full border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            15 Minutes
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Part B : Typing Test for LDC/JSA
                          </p>
                        </div>
                        <div className="md:col-span-2 col-span-6 py-[20px] border-l h-full border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            &nbsp;
                          </p>
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            -
                          </p>
                        </div>
                        <div className="md:col-span-1 col-span-6 py-[20px] border-l border-r h-full border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            10 Minutes
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0] border-b">
                      <div className="grid grid-cols-12 items-center">
                        <div className="md:col-span-3 col-span-6 py-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            Total
                          </p>
                        </div>
                        <div className="md:col-span-2 col-span-6 py-[20px] border-l border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            135
                          </p>
                        </div>
                        <div className="md:col-span-2 col-span-6 py-[20px] border-l border-r border-[#D2D0D0] flex flex-col gap-[20px] md:pl-[37px] pl-[10px]">
                          <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                            405
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
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              SSC CHSL Tier-II Syllabus
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-12 col-span-4">
                  <p className="font-sans font-[600] pb-[20px] md:pl-[40px] pl-[10px] border-b border-[#000000] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Mathematical Abilities
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 pt-[20px]">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Chapter
                  </p>
                </div>
                <div className="md:col-span-8 col-span-4 pt-[20px]">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Topics
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Number Systems
                      </p>
                    </div>
                    <div className="md:col-span-8 col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0] border-b">
                        <div className="grid grid-cols-12 items-center">
                          <div className="md:col-span-4 col-span-6 flex flex-col gap-[20px] py-[20px] md:pl-[37px] pl-[10px]">
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Computation of Whole Number
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Decimal and Fractions
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Relationship between numbers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Fundamental arithmetical operations
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Percentages
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Ratio and Proportion
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Square roots
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Averages
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Interest (Simple and Compound)
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Profit and Loss
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Discount
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Partnership Business
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Mixture and Alligation
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Time and distance
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Time and work
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Algebra
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Basic algebraic identities of School Algebra and
                          Elementary surds (simple problems)
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Graphs of Linear Equations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Geometry
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Familiarity with elementary geometric figures and
                          facts:
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Triangle and its various kinds of centres
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Congruence and similarity of triangles
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Circle and its chords
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Tangents
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Angles subtended by chords of a circle
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Common tangents to two or more circles.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Mensuration
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Triangle
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Quadrilaterals
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Regular Polygons
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Circle
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Right Prism
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Right Circular Cone
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Right Circular Cylinder
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Sphere
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Hemispheres
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Rectangular Parallelepiped
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Regular Right Pyramid with triangular or square Base
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Trigonometry
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Trigonometry
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Trigonometric ratios
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Complementary angles
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Height and distances (simple problems only) Standard
                          Identities like sin2𝜃 + Cos2𝜃=1 etc.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Statistics and probability
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Use of Tables and Graphs
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Histogram
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Frequency polygon
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Bar-diagram
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Pie-chart
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Measures of central tendency: mean, median, mode,
                          standard deviation
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          calculation of simple probabilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fffcf9] md:pt-[100px] pt-[50px]">
            <div className="container m-auto">
              <div data-aos="fade-right">
                <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                  Reasoning and General Intelligence: Verbal and non-verbal type
                </h6>
              </div>
              <div data-aos="fade-up">
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      1. Semantic Analogy
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      2. Symbolic operations
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      3. Symbolic/ Number Analogy
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      4. Trends, Figural Analogy
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      5. Space Orientation
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      6. Semantic Classification
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      7. Venn Diagrams
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      8. Symbolic/ Number Classification
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      9. Drawing inferences
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      10. Figural Classification
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      11. Punched hole/ pattern-folding & unfolding
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      12. Semantic Series
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      13. Figural Pattern-folding and completion
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      14. Number Series
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      15. Embedded figures
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      16. Figural Series
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      17. Critical Thinking
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      18. Problem Solving
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      19. Emotional Intelligence
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      20. Word Building
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      21. Social Intelligence
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      22. Coding and de-coding
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      23. Numerical operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fffcf9] md:pt-[100px] pt-[50px]">
            <div className="container m-auto">
              <div data-aos="fade-right">
                <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                  English Language and Comprehension
                </h6>
              </div>
              <div data-aos="fade-up">
                <div className="grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      1. Vocabulary
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      2. Grammar
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      3. Sentence structure
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      4. Synonyms/Homonyms
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      5. Antonyms
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      6. Spot the Error
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      7. Fill in the Blanks
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      8. Spellings/ Detecting mis-spelt words
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      9. Idioms and Phrases
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      10. One-word substitution
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      11. Improvement of Sentences
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      12. Active/ Passive Voice of Verbs
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      13. Conversion into Direct/ Indirect narration
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      14. Shuffling of Sentence parts
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      15. Shuffling of Sentences in a passage
                    </p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      16. Cloze Passage
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      17. Comprehension Passage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fffcf9] md:pt-[100px] pt-[50px]">
            <div className="container m-auto">
              <div data-aos="fade-right">
                <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                  General Awareness
                </h6>
              </div>
              <div data-aos="fade-up">
                <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      1. History
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      2. Culture
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      3. Geography
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      4. Economic Scene
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      5. General policy
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      6. Scientific research
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col mt-[100px] gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] py-[20px]">
                <div className="md:col-span-12 col-span-4">
                  <p className="font-sans font-[600] pb-[20px] md:pl-[40px] pl-[10px] border-b border-[#000000] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Computer Proficiency
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 pt-[20px]">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Chapters
                  </p>
                </div>
                <div className="md:col-span-8 col-span-4 pt-[20px]">
                  <p className="font-sans font-[600] md:pl-[40px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Topics
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Computer Basics
                      </p>
                    </div>
                    <div className="md:col-span-8 col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l border-[#D2D0D0] border-b">
                        <div className="grid grid-cols-12 items-center">
                          <div className="md:col-span-4 col-span-6 flex flex-col gap-[20px] py-[20px] md:pl-[37px] pl-[10px]">
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Organization of a computer
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Central Processing Unit (CPU)
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Input/ output devices
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Computer memory
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Memory organization
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Back- up devices
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              PORTs
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Windows Explorer
                            </p>
                            <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                              Keyboard shortcuts
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Software
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Windows Operating system including basics of <br />
                          Microsoft Office like MS word, MS Excel and Power
                          Point etc
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Working with Internet and e-mails
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Web Browsing & Searching
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Downloading & Uploading
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Managing an E-mail Account
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          e-Banking
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-4 col-span-4 pl-[22px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Basics of networking and cyber security
                      </p>
                    </div>
                    <div className="md:col-span-8 overflow-hidden col-span-8">
                      <div className="md:col-span-9 col-span-8 border-l py-[20px] flex flex-col gap-[20px] border-[#D2D0D0] border-b">
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Networking devices and protocols
                        </p>
                        <p className="font-sans md:pl-[37px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                          Network and information security threats (like
                          hacking, virus, worms, Trojan etc.) and preventive
                          measures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fffcf9] md:pt-[100px] pt-[50px]">
            <div className="container m-auto">
              <div data-aos="fade-right">
                <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[450px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                  Skill test for the post of Data Entry Operator:
                </h6>
              </div>
              <div data-aos="fade-up">
                <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      In this test, a candidate should have a typing speed of
                      8,000 key depressions per hour.
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      The time duration of the Test is 15 minutes and the
                      candidates are required to type an English document having
                      about 2000-2200 strokes/key-depressions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fffcf9] md:pt-[100px] pt-[50px]">
            <div className="container m-auto">
              <div data-aos="fade-right">
                <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[934px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                  Skill test for the post of DEO in the Office of the
                  Comptroller and Auditor General of India (C&AG):
                </h6>
              </div>
              <div data-aos="fade-up">
                <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      The ‘speed of 15000 key depressions per hour will be
                      evaluated on the basis of the accurate entry of words/key
                      depressions according to the given passage.
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      The time duration of the test will be 15 minutes and each
                      candidate will be given printed matter in English
                      containing about 3700-4000 key-depressions will be given
                      to each candidate who will enter the same in the test
                      computer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fffcf9] md:pt-[100px] pt-[50px]">
            <div className="container m-auto">
              <div data-aos="fade-right">
                <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[934px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
                  Skill test for the post of Lower Division Clerk/ Junior
                  Secretariat Assistant (LDS/JSA) and Postal Assistants/ Sorting
                  Assistants (PA/SA):
                </h6>
              </div>
              <div data-aos="fade-up">
                <div className="grid grid-cols-1 md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      The speed of 10500 key depressions per hour will be
                      evaluated on the basis of the accurate entry of words/key
                      depressions as per the given passage.
                    </p>
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                      The time duration of the test will be 15 minutes and each
                      candidate will be given an English printed matter
                      containing about 9000 key-depressions/hour will be given
                      to each candidate who will enter the same in the test
                      computer.
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

export default SSC2;
