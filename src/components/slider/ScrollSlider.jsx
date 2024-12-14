import React from "react";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="assets/home/round-right.svg" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="assets/home/round-left.svg" alt="" />
    </div>
  );
}

function ScrollSlider({Getallforms}) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* <Slider {...settings}> */}
        {Getallforms?.map((e, i) => {
          return (
            <>
              <div key={i} className="w-full">
                <div className="outline outline-[1px] md:ml-[10px] ml-0 mt-[10px] mb-[10px] md:max-w-[218px] max-w-full flex flex-col items-center w-full rounded-[8px] bg-[#FFFFFF] outline-offset-[5px] outline-[#D2D0D0] py-[18px]">
                  <img src="assets/about/photo3.svg" alt="" />
                  <div className="pt-[30px]">
                    <div data-aos="fade-up">
                      <p className="text-center pt-[6px] font-sans font-[700] text-[18px] leading-[24px] text-[#000000]">
                        {e?.FormName}
                      </p>
                    </div>
                    {/* <div className="border-[#0000004D] border-b max-w-[172px] w-full m-auto mt-[17px] mb-[27px]"></div>
                    <div data-aos="fade-up">
                      <p className="flex justify-center items-center font-[Outfit] font-[600] text-[14px] leading-[22px] text-[#D0021B] gap-[10px]">
                        Know More <img src="assets/about/right.svg" alt="" />
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      {/* </Slider> */}
    </>
  );
}

export default ScrollSlider;
