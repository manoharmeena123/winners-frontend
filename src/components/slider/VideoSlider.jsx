import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({ onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <img src="assets/home/round-right.svg" alt="Next" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <img src="assets/home/round-left.svg" alt="Previous" />
    </div>
  );
}

function VideoSlider({ getVideolecture }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const sliderRef = React.useRef();

  const sliderSettings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    ref: sliderRef,
    arrows: false, // Disable built-in arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative">
      <Slider ref={sliderRef} {...sliderSettings}>
        {getVideolecture?.map((e, i) => (
          <div className="video-card overflow-hidden" key={i}>
            <Link
              to={e?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={e?.thumbnail}
                  className="w-full h-auto object-cover rounded-lg"
                  alt=""
                />
                <img
                  src="assets/youtube.png"
                  className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12"
                  alt="YouTube icon"
                />
              </div>
            </Link>

            <div data-aos="fade-up">
              <h6 className="font-[Outfit] font-[600] text-[18px] leading-[22px] mt-[18px]">
                {e?.Discription}
              </h6>
            </div>
          </div>
        ))}
      </Slider>
      {/* Explore button and arrows */}
      <div className="flex justify-center items-center space-x-4 -mt-6">
        <SamplePrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <button
          className="font-[Outfit] font-[500] text-[16px] leading-[16.43px] py-[16px] px-[66px] border-[0.5px] hover:bg-transparent duration-300 ease-in md:bg-[#D0021B] bg-[#FFFFFF] border-[#D0021B] rounded-[40px] hover:text-[#D0021B] md:text-[#FFFFFF] text-[#D0021B]"
          onClick={() =>
            window.open('https://www.youtube.com/@WiNNERSInstituteIndore', '_blank')
          }
        >
          Explore
        </button>
        <SampleNextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
}

export default VideoSlider;
