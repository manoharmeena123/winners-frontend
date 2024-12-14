import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RailwayCourse } from "./courseObj";

function ExamButtons2() {
  const path = useLocation();
  const navigate = useNavigate();

  const pathName = path?.pathname;

  return (
    <>
      <div className="bg-[#FBE69A] pt-[18px] px-[43px] absolute top-[-88px] pb-[80px] rounded-t-[30px] flex md:flex-row flex-col gap-[12px]">
        {RailwayCourse?.map((e, i) => {
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
      </div>
    </>
  );
}

export default ExamButtons2;
