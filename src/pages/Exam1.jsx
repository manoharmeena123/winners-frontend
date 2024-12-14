import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExamButtons1 from "../components/buttons/ExamButtons1";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";

function Exam1() {
  const [mppsc, setMppsc] = useState();
  const [loading, setLoading] = useState(true);

  const getSSCExamLinks = async () => {
    try {
      const response = await axios.get(`${Api_Url}/api/admin/getSingleExamLink/IBPS-PO`);
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

  const handleDownload = () => {
    const pdfUrl = '/assets/pdf/IBPSPO&SBIPO-Syllabus.docx';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "IBPS PO & SBI PO-Syllabus.docx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <div className="absolute flex items-center flex-col top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div data-aos="fade-up">
              <p className="font-sans font-[700] text-[24px] leading-[24px] text-center text-[#000000]">
                Exam
              </p>
              <h6 className="font-sans font-[700] pb-[10px] md:text-[36px] text-[24px] md:leading-[36.97px] leading-[30px] text-center text-[#D0021B]">
                IBPS PO & SBI PO
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
                    IBPS PO & SBI PO
                  </h6>
                  <p className="font-[Outfit] font-[600] text-[16px] leading-[22px] text-[#FFFFFF]">
                    Age Limit – SBI (21-30 Years) IBPS (20-30 Years) <br />
                    Qualification Required – Any Graduate <br />
                    Pattern of Exam- Prelims + Mains + Interview
                  </p>
                  <div className="bg-[#FFFFFF] h-[6px] rounded-[48px] mt-[24px] mb-[45px] w-full"></div>
                </div>
                <div className="w-[30%]">
                  <img
                  
                    
                    src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/Bank%20logo.png?alt=media&token=2cc994da-2448-44a3-8b61-9730766840ed" className="pt-[18px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-y-hidden bg-[#fffcf9] md:px-[100px] px-[20px] overflow-x-auto">
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
                  20 Minute
                </td>
              </tr>
              <tr className="bg-white border rounded-[4px] border-[#D2D0D0]">
                <td className="py-[20px] pl-[22px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                  Maths
                </td>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                  35
                </td>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                  35
                </td>
                <td className="py-[20px] font-[Outfit] font-[400] text-[18px] leading-[22px]">
                  20 Minute
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
                  20 Minute
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
                60 Minute
              </td>
            </tr>
          </table>
        </div>
        </div>
      </div>
      <div className="container overflow-hidden m-auto md:mt-[80px] mt-[30px]">
      <div data-aos="fade-right">
        <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[100px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
          Mains
        </h6>
      </div>
     
        <div className="flex flex-col gap-[12px] w-full overflow-x-scroll">
        <div data-aos="fade-up">
          <div className="grid w-full grid-cols-12 bg-[#F1F2F6] p-[19px]">
            <div className="md:col-span-4 col-span-4">
              <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                Section
              </p>
            </div>
            <div className="md:col-span-8 col-span-4">
              <div className="grid grid-cols-12 pb-[14px]">
                <div className="col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Number of Questions
                  </p>
                </div>
                <div className="col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Maximum Marks
                  </p>
                </div>
                <div className="col-span-4">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Time Allotted
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 border-t border-[#000000]">
                <div className="col-span-2 pt-[14px]">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    SBI
                  </p>
                </div>
                <div className="col-span-2 border-l border-[#000000] pt-[14px]">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    IBPS
                  </p>
                </div>
                <div className="col-span-2 border-l border-[#000000] pt-[14px]">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    SBI
                  </p>
                </div>
                <div className="col-span-2 border-l border-[#000000] pt-[14px]">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    IBPS
                  </p>
                </div>
                <div className="col-span-2 border-l border-[#000000] pt-[14px]">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    SBI
                  </p>
                </div>
                <div className="col-span-2 border-l border-[#000000] pt-[14px]">
                  <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    IBPS
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
                <div className="md:col-span-4 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Reasoning & Computer Aptitude
                  </p>
                </div>
                <div className="md:col-span-8 col-span-4 border-l border-[#D2D0D0]">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50 Minute
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        60 Minute
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 col-span-4 border-t md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Economics/Banking Awareness
                  </p>
                </div>
                <div className="md:col-span-8 col-span-4 border-t border-l border-[#D2D0D0]">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        60
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45 Minute
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        35 Minute
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 col-span-4 border-t md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    English Language
                  </p>
                </div>
                <div className="md:col-span-8 col-span-4 border-t border-l border-[#D2D0D0]">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        35
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        35
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
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
                        40 Minute
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        40 Minute
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 col-span-4 border-t md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Data Analysis And Interpretation
                  </p>
                </div>
                <div className="md:col-span-8 col-span-4 border-t border-l border-[#D2D0D0]">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        30
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        35
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        50
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        60
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45 Minute
                      </p>
                    </div>
                    <div className="col-span-2 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        45 Minute
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 col-span-4 border-t md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Total
                  </p>
                </div>
                <div className="md:col-span-8 col-span-4 border-t border-l border-[#D2D0D0]">
                  <div className="grid grid-cols-12">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        155
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        200
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        3 Hours
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 col-span-4 border-t md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    DESCRIPTIVE (English – Letter Writing & Essay)
                  </p>
                </div>
                <div className="md:col-span-8 col-span-4 border-t border-l border-[#D2D0D0]">
                  <div className="grid grid-cols-12">
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        02
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        25
                      </p>
                    </div>
                    <div className="col-span-4 border-r py-[14px] pl-[14px] border-[#D2D0D0]">
                      <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                        30 Minute
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="grid grid-cols-1 md:mb-[80px] mb-[20px] md:gap-0 gap-[20px] bg-[#FFFFFF] rounded-[4px] border border-[#D2D0D0] py-[30px] px-[28px]">
            <div className="flex flex-col gap-[20px]">
              <p className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                The Interview Process will constitute of 100 marks and the
                minimum marks for qualifying this round will be 40% which is
                reduced to 35% for candidates belonging to SC/ST/OBC/PWD
                categories.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-right">
          <h6 className="bg-[#D0021B] exam-btn mb-[16px] max-w-[500px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
            Common Prelims Syllabus for IBPS PO & SBI PO
          </h6>
        </div>
        <div data-aos="fade-up">
          <div className="grid grid-cols-12 bg-[#F1F2F6]">
            <div className="md:col-span-12 border-b col-span-12 p-[14px]">
              <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                IBPS PO & SBI PO Prelims Syllabus
              </p>
            </div>
            <div className="col-span-5 p-[14px]">
              <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                Quantitative Aptitude Syllabus
              </p>
            </div>
            <div className="col-span-3 p-[14px]">
              <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                Reasoning Syllabus
              </p>
            </div>
            <div className="col-span-4 p-[14px]">
              <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                English Syllabus
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Simplification/ Approximation
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Alphanumeric Series
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Reading Comprehension
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Profit & Loss
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Directions
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Fill in the blanks
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Mixtures & Alligations
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Logical Reasoning
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Cloze Test
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Permutation, Combination & Probability
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Data Sufficiency
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Para jumbles
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Work & Time
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Ranking & Order
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Vocabulary
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Sequence & Series
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Alphabet Test
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Paragraph Completion
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Simple Interest & Compound Interest
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Seating Arrangement
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Multiple Meaning /Error Spotting
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Surds & Indices
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Coded Inequalities
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Sentence Completion
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Mensuration – Cylinder, Cone, Sphere
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Puzzle
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Tenses Rules
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Time & Distance
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Syllogism
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Data Interpretation
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Blood Relations
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Ratio & Proportion
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Coding-Decoding
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Number Systems
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Input-Output
                  </p>
                </div>
                <div className="md:col-span-4 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-5 col-span-4 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Percentage
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Tabulation
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
          <h6 className="bg-[#D0021B] exam-btn mb-[16px] md:mt-[80px] mt-[30px] max-w-[500px] w-full font-sans font-[600] text-[20px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
            Common Mains Syllabus for IBPS PO & SBI PO
          </h6>
        </div>
        <div data-aos="fade-up">
          <div className="grid grid-cols-12 bg-[#F1F2F6]">
            <div className="md:col-span-12 border-b col-span-12 p-[14px]">
              <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                IBPS PO & SBI PO Mains Syllabus
              </p>
            </div>
            <div className="col-span-2 p-[14px]">
              <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                Data Analysis & Interpretation
              </p>
            </div>
            <div className="col-span-2 p-[14px]">
              <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                Reasoning
              </p>
            </div>
            <div className="col-span-3 p-[14px]">
              <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                General/Economy/Banking Awareness
              </p>
            </div>
            <div className="col-span-3 p-[14px]">
              <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                English Language
              </p>
            </div>
            <div className="col-span-2 p-[14px]">
              <p className="font-sans md:pl-[40px] pl-[10px] font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                Computer
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] mb-[80px]">
            <div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Tabular Graph
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Verbal Reasoning
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Current Affairs
                  </p>
                </div>
                <div className="md:col-span-2 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Reading Comprehension
                  </p>
                </div>
                <div className="md:col-span-3 col-span-4 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Internet
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Line Graph
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Syllogism
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Financial Awareness
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Grammar
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Memory
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Bar Graph
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Circular Seating Arrangement
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    General Knowledge
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Verbal Ability
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Keyboard Shortcuts
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Charts & Tables
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Linear Seating Arrangement
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Static Awareness
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Vocabulary
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Computer Abbreviation
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Missing Case DI
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Double Lineup
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Banking Terminologies Knowledge
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Sentence Improvement
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Microsoft Office
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Radar Graph Caselet
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Scheduling
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Banking Awareness
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Word Association
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Computer Hardware
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Probability
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Input Output
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Principles of Insurance
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Para Jumbles
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Computer Software
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Data Sufficiency
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Blood Relations
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Error Spotting
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Computer Fundamentals /Terminologies
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Let it Case DI
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Directions and Distances
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Cloze Test
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Networking
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Permutation and Combination
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Ordering and Ranking
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Fill in the blanks
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Number System
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Pie Charts
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Data Sufficiency
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Operating System
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Coding and Decoding
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Basic of Logic Gates
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Code Inequalities
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Course of Action
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Critical Reasoning
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-12 items-center border-b bg-[#ffffff] border border-[#D2D0D0]">
                <div className="md:col-span-2 col-span-2 md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px] border-[#D2D0D0]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    Analytical and Decision Making
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-2 col-span-2 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
                  <p className="font-sans font-[600] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px]">
                    &nbsp;
                  </p>
                </div>
                <div className="md:col-span-3 col-span-3 h-full border-l md:pl-[22px] py-[14px] pl-[10px]">
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

export default Exam1;
