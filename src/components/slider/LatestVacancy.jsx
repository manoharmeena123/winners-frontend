import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";

const data = [
  { 
    id: 1,
    name: "SSC CPO 2024",
    location: "SSC Foundation (S9) Offline Batch (SFO0324)",
    date: "20/03/2024",
    time: "08:00",
  },
  {
    id: 2,
    name: "SSC CHSL 2024",
    location: "Offline Batch",
    date: "08/02/2024",
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

function LatestVacancy({vacancies}) {
  const navigate = useNavigate();

  const sliderRef = useRef(null); // Create a reference to the Slider

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    // autoplay: true,
    // infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    nextArrow: <></>,
    prevArrow: <></>,
    ref: sliderRef, // Pass the ref to the Slider

    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container pt-[60px] relative">
        <Slider {...settings}>
          {vacancies?.map((e, i) => {
            return (
              <>
                <div key={i}>
                <Link to={e?.Link} className="no-underline" target="_blank" rel="noopener noreferrer">
                  <div className="border border-[#E3E3E3] mt-[7px] h-[290px] rounded-[6px] pt-[47px] pb-[46px] px-[25px] max-w-[232px] w-full bg-[#FFFFFF] relative">
                    {/* <div
                      style={{ backgroundImage: "url(assets/home/wrap7.svg)" }}
                      className="h-[32.48px] flex justify-center items-center w-[116px] object-cover absolute top-[-7px] right-[4px]"
                    >
                      <p className="font-sans m-0 font-[400] text-[16px] leading-[22px] text-[#FFFFFF]">
                        {e?.mode}
                      </p>
                    </div> */}
                    <h6 className="font-sans font-[700] text-[20px] leading-[22px] text-[#202020] pb-[23px]">
                     {e?.Discription}
                    </h6>
                    <div className="flex flex-wrap gap-y-[22px] gap-[8px]">
                      {/* <div className="flex items-center gap-[6px]">
                        <img src="assets/home/icon1.svg" alt="" />
                        <p className="font-sans text-[16px] font-[400] leading-[22px] text-[#121212]">
                          {e?.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <img src="assets/home/icon2.svg" alt="" />
                        <p className="font-sans text-[16px] font-[400] leading-[22px] text-[#121212]">
                          {e?.time}
                        </p>
                      </div> */}
                      <div className="flex items-start gap-[6px]">
                        <img src="assets/home/icon3.svg" alt="" />
                        <p className="font-sans m-0 text-[16px] font-[400] leading-[22px] text-[#121212]">
                        {e?.NotificationName}
                        </p>
                        </div>
                        <div>
                          View More
                        </div>
                        


                    </div>
                  </div>
                </Link>
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
          <button onClick={() => navigate("/student-zone")} className="font-sans font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[18px] py-[16px] md:px-[21px] px-[18px] border-[0.5px] hover:bg-transparent duration-300 ease-in md:bg-[#D0021B] bg-[#FFFFFF] border-[#D0021B] rounded-[10px] hover:text-[#D0021B] md:text-[#FFFFFF] text-[#D0021B]">
            Explore Vacancies 
          </button>
          <SampleNextArrow
            className="arrow"
            onClick={() => sliderRef.current.slickNext()} // Trigger next slide
          />
        </div>
      </div>
    </>
  );
}

export default LatestVacancy;
