import React, { useRef } from "react";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    name: "For SSC Exam",
    location: "SSC Foundation (S9) Offline Batch (SFO0324)",
    date: "20/03/2024",
    time: "08:00",
  },
  {
    id: 2,
    name: "For MPPSC Exam",
    location: "Offline Batch",
    date: "08/02/2024",
    time: "08:00",
  },
  {
    id: 3,
    name: "For RAILWAY Exam",
    location: "Railway Foundation Offline Batch (RFO0324)",
    date: "12/03/2024",
    time: "14:00",
  },
  {
    id: 4,
    name: "For Bank Exams",
    location: "Banking Foundation Offline Batch (BFO0324)",
    date: "02/04/2024",
    time: "08:00",
  },
];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="assets/home/s-right.svg" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="assets/home/s-left.svg" alt="" />
    </div>
  );
}

function OurSlider({ Upcomingexam }) {
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    autoplay: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 6,
    speed: 500,
    ref: sliderRef,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          centerPadding: "100px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "60px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {Upcomingexam?.length > 1 && (
        <div className="slider-container pt-[60px] relative">
          <Slider {...settings}>
            {Upcomingexam?.map((e, i) => {
              return (
                <>
                  <div key={i}
                  
                  
                  >
                    <div
                      

                      style={{
                        border: "1px solid green",
                        height: "290px"
                      }}

                      className="border border-[#E3E3E3] mt-[7px] rounded-[6px] pt-[47px] pb-[46px] px-[25px] max-w-[232px] w-[95%] bg-[#FFFFFF] relative">
                      <div
                        style={{
                          backgroundImage: "url(assets/home/wrap7.svg)",
                        }}
                        className="h-[32.48px] flex justify-center items-center w-[116px] object-cover absolute top-[-7px] right-[4px]"
                      >
                        <p className="font-sans font-[400] text-[16px] leading-[22px] text-[#FFFFFF]">
                        {e?.mode}
                        </p>
                      </div>
                      <h6 className="font-sans font-[700] text-[20px] leading-[22px] text-[#202020] pb-[23px]">
                        {e?.ExamName}
                      </h6>
                      <div className="flex flex-wrap gap-y-[22px] gap-[8px]">
                        <div className="flex items-center gap-[6px]">
                          <img src="assets/home/icon1.svg" alt="" />
                          <p className="font-sans text-[16px] m-0 font-[400] leading-[22px] text-[#121212]">
                            {e?.Date}
                          </p>
                        </div>
                        <div className="flex items-center gap-[6px]">
                          <img src="assets/home/icon2.svg" alt="" />
                          <p className="font-sans m-0 text-[16px] font-[400] leading-[22px] text-[#121212]">
                            {e?.Time}
                          </p>
                        </div>
                        <div className="flex items-start gap-[6px]">
                          <img src="assets/home/icon3.svg" alt="" />
                          <p className="font-sans m-0 text-[16px] font-[400] leading-[22px] text-[#121212]">
                            {e?.Location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
          <div className="flex items-center justify-center w-full mt-8">
            <SamplePrevArrow
              className="arrow"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <SampleNextArrow
              className="arrow"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
          <div className="flex pt-[44px] md:pb-[50px] pb-[50px] justify-center items-center">
            {/* <button className="font-sans font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[18px] py-[16px] md:px-[21px] px-[16px] border-[0.5px] hover:bg-transparent duration-300 ease-in md:bg-[#D0021B] bg-[#FFFFFF] border-[#D0021B] rounded-[10px] hover:text-[#D0021B] md:text-[#FFFFFF] text-[#D0021B]">
              Explore Vacancies
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

export default OurSlider;