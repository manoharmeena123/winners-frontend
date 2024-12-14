import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SSCcourses } from "./courseObj";

function ExamButtons() {
  const path = useLocation();
  const navigate = useNavigate();

  const pathName = path?.pathname;

  return (
    <>
      <div className="bg-[#FBE69A] pt-[18px] px-[43px] pb-[80px] relative top-[-88px] rounded-t-[30px] flex md:flex-row flex-col gap-[12px]">
        {SSCcourses?.map((e, i) => {
          return (
            <>
              <button
                key={i}
                onClick={() => navigate(e?.link)}
                className={`px-[48px] py-[12px] rounded-[30px] font-[Outfit] font-[400] text-[18px] leading-[28px] border text-center ${
                  pathName === e?.link
                    ? "bg-[#D0021B] text-[#FFFFFF] border-transparent"
                    : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
                }`}
              >
                {e?.courseName}
              </button>
            </>
          );
        })}
        {/* <button
          onClick={() => navigate("/ssc-chsl")}
          className={`px-[48px] py-[12px] rounded-[30px] font-[Outfit] font-[400] text-[18px] leading-[28px] border text-center ${
            pathName === "/ssc-chsl"
              ? "bg-[#D0021B] text-[#FFFFFF] border-transparent"
              : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
          }`}
        >
          SSC CHSL
        </button>
        <button
          onClick={() => navigate("/ssc-mts")}
          className={`px-[48px] py-[12px] rounded-[30px] font-[Outfit] font-[400] text-[18px] leading-[28px] border text-center ${
            pathName === "/ssc-mts"
              ? "bg-[#D0021B] text-[#FFFFFF] border-transparent"
              : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
          }`}
        >
          SSC MTS
        </button>
        <button
          onClick={() => navigate("/ssc-cpo")}
          className={`px-[48px] py-[12px] rounded-[30px] font-[Outfit] font-[400] text-[18px] leading-[28px] border text-center ${
            pathName === "/ssc-cpo"
              ? "bg-[#D0021B] text-[#FFFFFF] border-transparent"
              : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
          }`}
        >
          SSC CPO
        </button>
        <button
          onClick={() => navigate("/ssc-gd")}
          className={`px-[48px] py-[12px] rounded-[30px] font-[Outfit] font-[400] text-[18px] leading-[28px] border text-center ${
            pathName === "/ssc-gd"
              ? "bg-[#D0021B] text-[#FFFFFF] border-transparent"
              : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
          }`}
        >
          SSC GD
        </button> */}
      </div>
    </>
  );
}

export default ExamButtons;
