import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons1 from "../components/buttons/ExamButtons1";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import axios from "axios";
import { Api_Url } from "../URL";

function Exam3() {

  function handleDownload() {
    const pdfUrl = '/assets/pdf/RBIAssistant-Syllabus.docx';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "RBI Assistant-Syllabus.docx");
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
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/SSC-RBI`);
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
        <div className="container overflow-hidden m-auto">
          <div className="absolute flex items-center flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div data-aos="fade-up">
              <p className="font-sans font-[700] text-[24px] leading-[24px] text-center text-[#000000]">
                Exam
              </p>
              <h6 className="font-sans font-[700] pb-[10px] md:text-[36px] text-[24px] md:leading-[36.97px] leading-[30px] text-center text-[#D0021B]">
                RBI Assistant
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
                    RBI Assistant
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    Age Limit - 20-28 Years <br />
                    Qualification – Any Graduate (Minimum 50%) <br />
                    Pattern of Exam- Objective (Negative Marking 0.25)
                  </p>
                  <div className="bg-[#FFFFFF] h-[6px] rounded-[48px] mt-[24px] mb-[45px] w-full"></div>
                </div>
                <div className="w-[30%]">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/Bank%20logo.png?alt=media&token=2cc994da-2448-44a3-8b61-9730766840ed" className="pt-[18px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#fffcf9] overflow-hidden md:px-[100px] px-[20px] overflow-x-auto">
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
      <div className="container overflow-hidden m-auto md:mt-[80px] mt-[20px]">
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
                  Number of Questions
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
                      Test of English Language
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
                      30 Minute
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Test of Reasoning
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
                      30 Minute
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Test of Computer Knowledge
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
                      20 Minute
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Test of General Awareness
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
                      25 Minute
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                  <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      Test of Numerical Ability
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
                      30 Minute
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
                      200
                    </p>
                  </div>
                  <div className="col-span-3 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      200
                    </p>
                  </div>
                  <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                    <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                      135 Minute
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] md:mt-[80px] mt-[20px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              English Language:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-12 grid-cols-1 md:mb-[80px] mb-[20px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. Reading Comprehension
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. Synonyms
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. Antonyms
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. Sentence Correction
                </p>
              </div>
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. Word Meanings
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. Cloze Test
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. One Word Substitution
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. Sentence Rearrangement
                </p>
              </div>
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. Sentence Completion
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. Phrases
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. Active & Passive Voice
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[250px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Quantitative Aptitude:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-12 grid-cols-1 md:mb-[80px] mb-[20px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. Time and Distance
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. Time and Work
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. HCF and LCM
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. Simple and Compound Interest
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. Problems on Trains
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. Average
                </p>
              </div>
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. Probability
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. Allegations and Comparison
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. Permutation and Combination
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. Pipes& Cistern
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  11. Number System
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  12. Geometry
                </p>
              </div>
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  13. Mensuration
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  14. Percentage
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  15. Algebra
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  16. Trigonometry
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[150px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Reasoning:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-12 grid-cols-1 md:mb-[80px] mb-[20px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. Number Series
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. Blood Relations
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. Analogy
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. Odd Man Out
                </p>
              </div>
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. Number Series
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. Coding and Decoding
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. Directions Based Concept
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. Row Arrangements
                </p>
              </div>
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. Symbols
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  10. Statement Reading, Understanding
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[300px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Computer Knowledge:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-12 grid-cols-1 md:mb-[80px] mb-[20px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="col-span-12 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. Languages
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. Basic Hardware and Software
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. History of Computers
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. Devices
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. Viruses and Hacking
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] mb-[16px] max-w-[300px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              General Awareness:-
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="grid md:grid-cols-12 grid-cols-1 md:mb-[80px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  1. Current World News
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  2. Current India News
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  3. Geography Concepts
                </p>
              </div>
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  4. History Concepts
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  5. Political Science
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  6. Banking Awareness
                </p>
              </div>
              <div className="col-span-4 flex flex-col gap-[20px]">
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  7. RBI Terms
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  8. Emoluments and Other Benefits
                </p>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                  9. Acts and Laws related to Bank (RBI)
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

export default Exam3;
