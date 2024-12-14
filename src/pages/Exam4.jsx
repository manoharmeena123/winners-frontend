import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons1 from "../components/buttons/ExamButtons1";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";
import axios from "axios";

function Exam4() {
  function handleDownload() {
    const pdfUrl = "/assets/pdf/IBPSClerk&SBIClerk-Syllabus.docx";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "IBPS Clerk & SBI Clerk-Syllabus.docx");
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/SSC-CLERK`);
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
                IBPS RRB PO & Clerk
              </h6>
              <img src="assets/video/line.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] md:h-[340px] relative">
        <div className="container m-auto">
          <div className="max-w-[1160px] md:absolute relative md:h-[232px] w-full left-[50%] translate-x-[-50%] md:top-[-72px] top-0">
            <ExamButtons1 />
            <div className="rounded-[30px] md:pl-[54px] pl-[20px] md:pr-[43px] pr-[20px] pt-[35px] pb-[35px] w-full md:absolute relative md:top-[90px] top-0 bg-[#D0021B]">
              <div className="flex justify-between md:flex-row flex-col items-center gap-[32px]">
                <div>
                  <h6 className="font-sans font-[700] text-[32px] leading-[43.65px] text-[#FFFFFF] pb-[20px]">
                    IBPS Clerk & SBI Clerk
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    Age Limit - 20 - 28 Years <br />
                    Qualification Required - Any Graduate <br />
                    Pattern of Exam- Objective (Negative Marking 0.25)
                  </p>
                  <div className="bg-[#FFFFFF] h-[6px] rounded-[48px] mt-[24px] mb-[45px] w-full"></div>
                </div>
                <div className="w-[30%]">
                  <img
                    style={{
                      width: "210px",
                    
                    }}
                    src="https://firebasestorage.googleapis.com/v0/b/read-with-phonics-5cac5.appspot.com/o/Bank%20logo.png?alt=media&token=68081c87-9f25-4572-adf8-b15e2ae27bd9" className="pt-[18px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#fffcf9] md:px-[100px] px-[20px] overflow-x-auto">
        <div className="container m-auto">
          <div data-aos="fade-up">
            <h6 className="bg-[#1C2672] text-[#FFFFFF] px-[22px] py-[10px] border-[0.81px] border-[#000000] rounded-t-[24px] font-sans font-[700] text-[20px] leading-[35px]">
              PRELIMS
            </h6>
          </div>
          <div data-aos="fade-up">
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-xs bg-[#F1F2F6] mb-[12px] text-[#000000]">
                <tr>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] p-[19px]">
                    Section
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    Number of Questions
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    Marks
                  </th>
                  <th className="font-sans font-[600] text-[16px] leading-[24px] text-[#000000] py-[19px]">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="pt-[10px]">
                <tr className="bg-white border rounded-[4px] border-[#D2D0D0]">
                  <td className="py-[20px] pl-[22px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    English
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    30
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    30
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    20 Minutes
                  </td>
                </tr>
                <tr className="bg-white border rounded-[4px] border-[#D2D0D0]">
                  <td className="py-[20px] pl-[22px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    Numerical Ability
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    35
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    35
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    20 Minutes
                  </td>
                </tr>
                <tr className="bg-white border rounded-[4px] border-[#D2D0D0]">
                  <td className="py-[20px] pl-[22px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    Reasoning
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    35
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    35
                  </td>
                  <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                    20 Minutes
                  </td>
                </tr>
              </tbody>
              <tr className="bg-[#D0021B] border rounded-[4px] border-[#D9D9D9]">
                <th className="pl-[22px] py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]">
                  Total
                </th>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]">
                  100
                </td>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]">
                  100
                </td>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px] text-[#FFFFFF]">
                  60 Minutes
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="container m-auto overflow-hidden md:mt-[80px] mt-[20px]">
        <div data-aos="fade-right">
          <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[100px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
            Mains
          </h6>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div data-aos="fade-up">
            <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
              <div className="md:col-span-4 col-span-4">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Subject
                </p>
              </div>
              <div className="col-span-3">
                <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Questions
                </p>
              </div>
              <div className="col-span-3">
                <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Marks
                </p>
              </div>
              <div className="col-span-2">
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
                      Reasoning & Computer
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      50
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      60
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      45 Minute
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Quantitative Aptitude
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
                      45 Minute
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      English
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
                      35 Minute
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      General/Financial Awareness
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
                      35 Minute
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
                      190
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      200
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      160 Minute
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
                  IBPS Clerk & SBI Clerk Prelims Syllabus
                </p>
              </div>
              <div className="col-span-3 p-[14px]">
                <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Reasoning
                </p>
              </div>
              <div className="col-span-5 p-[14px]">
                <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  Numerical Ability
                </p>
              </div>
              <div className="col-span-4 p-[14px]">
                <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                  English Language
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Logical Reasoning
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Simplification
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Reading Comprehension
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Alphanumeric Series
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Profit & Loss
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Cloze Test
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Ranking/Direction/Alphabet Test
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      LoMixtures & Alligations
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Para jumbles
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Data Sufficiency
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Simple Interest & Compound Interest & Surds & Indices
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Miscellaneous
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Coded Inequalities
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Work & Time
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Fill in the blanks
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Seating Arrangement
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Time & Distance
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Multiple Meaning /Error Spotting
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Puzzle
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Mensuration – Cylinder, Cone, Sphere
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Paragraph Completion
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Tabulation
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Data Interpretation
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Syllogism
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Ratio & Proportion, Percentage
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Blood Relations
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Number Systems
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Input Output
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Sequence & Series
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      &nbsp;
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="md:col-span-3 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Coding Decoding
                    </p>
                  </div>
                  <div className="md:col-span-5 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Permutation, Combination &Probability
                    </p>
                  </div>
                  <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      &nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[634px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              IBPS Clerk & SBI Clerk Mains Syllabus
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-12 bg-[#F1F2F6] p-[19px]">
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Quantitative Aptitude
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    General English
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    General/Financial Awareness
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4">
                  <p className="font-sans font-[600] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Reasoning Ability
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4">
                  <p className="font-sans font-[600] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Computer Awareness
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div>
                  <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-2 col-span-4 md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Simplification
                      </p>
                    </div>
                    <div className="md:col-span-2 flex items-center border-[#D2D0D0] py-[14px] h-full border-l col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Reading comprehension including Synonyms and Antonyms
                      </p>
                    </div>

                    <div className="md:col-span-3 border-[#D2D0D0] h-full border-l pl-[10px] py-[14px] flex flex-col gap-[20px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Current Affairs
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        News on the banking industry
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Awards and honours
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Books and authors
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Latest appointments
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Obituaries
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        New schemes of central and state governments
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Sports, etc.
                      </p>
                    </div>
                    <div className="md:col-span-2 border-[#D2D0D0] flex items-center h-full border-l py-[14px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Internet
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-8 flex items-center border-[#D2D0D0] h-full border-l py-[14px]">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Basics of Computer: Hardware, Software, Generation of
                        Computers
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-2 col-span-4 md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Number Series
                      </p>
                    </div>
                    <div className="md:col-span-2 flex items-center border-[#D2D0D0] py-[14px] h-full border-l col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Sentence rearrangement or Para jumbles
                      </p>
                    </div>

                    <div className="md:col-span-3 border-[#D2D0D0] h-full border-l pl-[10px] py-[14px] flex flex-col gap-[20px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Static GK
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Country-capital
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Country-currency
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Headquarters of financial organizations (of insurance
                        companies)
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Constituencies of ministers
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Dance forms
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Nuclear and thermal power stations, etc.
                      </p>
                    </div>
                    <div className="md:col-span-2 border-[#D2D0D0] flex items-center h-full border-l py-[14px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Machine Input/Output
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-8 flex items-center border-[#D2D0D0] h-full border-l py-[14px]">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        DBMS
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-2 col-span-4 md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        NData Sufficiency
                      </p>
                    </div>
                    <div className="md:col-span-2 flex items-center border-[#D2D0D0] py-[14px] h-full border-l col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Sentence Correction/ Error Finding
                      </p>
                    </div>

                    <div className="md:col-span-3 border-[#D2D0D0] h-full border-l pl-[10px] py-[14px] flex flex-col gap-[20px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Banking/Financial terms
                      </p>
                    </div>
                    <div className="md:col-span-2 border-[#D2D0D0] flex items-center h-full border-l py-[14px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Syllogism
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-8 flex items-center border-[#D2D0D0] h-full border-l py-[14px]">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Networking
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b-0 bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-2 col-span-4 md:pl-[22px] pl-[10px]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Data Interpretation
                      </p>
                    </div>
                    <div className="md:col-span-2 flex items-center border-[#D2D0D0] py-[14px] h-full border-l col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Spell Checks
                      </p>
                    </div>

                    <div className="md:col-span-3 border-[#D2D0D0] h-full border-l pl-[10px] py-[14px] flex flex-col gap-[20px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Static Awareness
                      </p>
                    </div>
                    <div className="md:col-span-2 border-[#D2D0D0] flex items-center h-full border-l py-[14px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Blood Relation
                      </p>
                    </div>
                    <div className="md:col-span-3 col-span-8 flex items-center border-[#D2D0D0] h-full border-l py-[14px]">
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Internet
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                    <div className="md:col-span-2 col-span-4">
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Time & Distance, Work
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Partnership
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Profit & Loss
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Simple and Compound Interest
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Mixture and Allegations
                      </p>
                      <p className="font-sans font-[600] border-b-0 border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Ratio & Proportion, Averages, Percentages
                      </p>
                    </div>
                    <div className="md:col-span-2 border-[#D2D0D0] h-full border-l">
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Fillers
                      </p>
                      <p className="font-sans font-[600] md:text-[18px] pl-[10px] text-[14px] md:leading-[24px] leading-[20px]">
                        Cloze Test
                      </p>
                    </div>

                    <div className="md:col-span-3 border-[#D2D0D0] h-full border-l pl-[10px] py-[14px] flex flex-col gap-[20px] col-span-8">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Banking and Financial Awareness
                      </p>
                    </div>
                    <div className="md:col-span-2 col-span-4 border-[#D2D0D0] h-full border-l">
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Blood Relation
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Direction Sense
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Inequalities
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Puzzles
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Coding-Decoding
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Ranking
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Statement and Assumptions
                      </p>
                    </div>
                    <div className="md:col-span-3 border-[#D2D0D0] h-full border-l">
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        MS Office
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Input-Output Devices
                      </p>
                      <p className="font-sans font-[600] border-[#D2D0D0] py-[14px] md:pl-[22px] pl-[10px] border-b md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        Important Abbreviations
                      </p>
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

export default Exam4;
