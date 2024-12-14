import React from "react";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    img: "/assets/career/icon1.svg",
    text: "Best & Experienced Faculty Team",
  },
  {
    id: 2,
    img: "/assets/career/icon2.svg",
    text: "Chapter-wise Advanced level assignment sheet based on the latest pattern",
  },
  {
    id: 3,
    img: "/assets/about/item1.svg",
    text: "Unlimited online & offline test series",
  },
  {
    id: 4,
    img: "/assets/career/icon3.svg",
    text: "Problem Solving and doubt clearing Session",
  },
  {
    id: 5,
    img: "/assets/career/icon4.svg",
    text: "Weekly current affairs classes",
  },
  {
    id: 6,
    img: "/assets/career/icon5.svg",
    text: "Portal for current affairs and government job updates",
  },
];

function WhySlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {data?.map((e, i) => {
          return (
            <>
              <div key={i}>
                <div
                  className="relative max-w-[232px] mt-[71px] h-[137px] w-full rounded-[6px] mb-[10px] pt-[52px] px-[10px] bg-[#FFFFFF]"
                  style={{ boxShadow: "0px 4px 0px 0px #D0021B" }}
                >
                  <img
                    src={e?.img}
                    className="absolute left-[50%] translate-x-[-50%] top-[-71px]"
                    alt=""
                  />
                  <div data-aos="fade-up">
                    <p className="text-center font-sans font-[400] text-[16px] leading-[20px] text-[#000000]">
                      {e?.text}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}

export default WhySlider;
