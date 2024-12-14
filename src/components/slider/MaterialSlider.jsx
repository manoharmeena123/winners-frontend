// import React from "react";
// import Slider from "react-slick";

// const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

// function SampleNextArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       {/* <img src="assets/home/round-right.svg" alt="" /> */}
//       <img src="assets/home/s-right.svg" alt="" />
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       {/* <img src="assets/home/round-left.svg" alt="" /> */}
//       <img src="assets/home/s-left.svg" alt="" />
//     </div>
//   );
// }

// function MaterialSlider({studyMaterial}) {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     autoplay: true,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <Slider {...settings}>
//         {studyMaterial?.map((material, i) => {
//           return (
//             <>
//               <div
//                 key={i}
//                 className="bg-[#FFFFFF] mb-[10px] md:max-w-[94%] max-w-full w-full mr-auto border-[1px] border-[#0000004D] rounded-[10px] courses-card"
//               >
//                 <img
//                   src={material?.Img}
//                   className="w-full object-cover"
//                   alt=""
//                 />
//                 <div className="px-[16px] overflow-hidden">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <div data-aos="fade-up">
//                         <h6 className="font-sans pb-[6px] text-[#000000] font-[600] text-[16px] leading-[21.82px]">
//                           {/* E -Magazine 2024 */}
//                           {material?.Title}
//                         </h6>
//                       </div>
//                       <div data-aos="fade-up">
//                         <p className="text-[#616161] font-[Outfit] font-[400] text-[12px] leading-[20px]">
//                           {/* WINNERS PUBLICATION */}
//                           {material?.Publication}
//                         </p>
//                       </div>
//                     </div>
//                     <button className="pr-[16px]">
//                       <img src="/assets/i/pdf.svg" alt="" />
//                     </button>
//                   </div>
//                   <div className="bg-[#0000004D] h-[0.5px] my-[10px] w-full"></div>
//                   <div data-aos="fade-right">
//                     <div className="flex justify-center mb-[10px] items-center gap-[16px]">
//                       <h6 className="font-[Outfit] font-[500] text-[16px] leading-[16px] text-[#D0021B]">
//                         Download
//                       </h6>
//                       <img src="assets/about/right-arrow.svg" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </Slider>
//     </>
//   );
// }

// export default MaterialSlider;
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="assets/home/s-right.svg" alt="Next" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <img src="assets/home/s-left.svg" alt="Prev" />
    </div>
  );
}

function MaterialSlider({ studyMaterial }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    ref: sliderRef,
    nextArrow: <></>,
    prevArrow: <></>,
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
      <Slider {...settings}>
        {studyMaterial?.map((material, i) => (
          <div
            key={i}
            className="bg-[#FFFFFF] mb-[10px] md:max-w-[94%] max-w-full w-full mr-auto border-[1px] border-[#0000004D] rounded-[10px] courses-card"
          >
            <img
              src={material?.Img}
              className="w-full h-[200px] object-fit"
              alt={material?.Title || "Study Material Image"}
            />
            <div className="px-[16px] overflow-hidden">
              <div className="flex justify-between items-center">
                <div>
                  <div data-aos="fade-up">
                    <h6 className="font-sans pb-[6px] text-[#000000] font-[600] text-[16px] leading-[21.82px]">
                      {material?.Title || "No Title Available"}
                    </h6>
                  </div>
                  <div data-aos="fade-up">
                    <p className="text-[#616161] font-[Outfit] font-[400] text-[12px] leading-[20px]">
                      {material?.Publication || "No Publication Available"}
                    </p>
                  </div>
                </div>
                <Link
                  to={material?.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pr-[16px] no-underline"
                >
                  <img src="/assets/i/pdf.svg" alt="PDF" />
                </Link>
              </div>
              <div className="bg-[#0000004D] h-[0.5px] my-[10px] w-full"></div>
              <div data-aos="fade-right">
                <div className="flex justify-center mb-[10px] items-center gap-[16px]">
                  <a
                    href={material?.pdf}
                    download={material?.Title || "study-material.pdf"}
                    className="font-[Outfit] no-underline font-[500] text-[16px] leading-[16px] text-[#D0021B]"
                  >
                    Download
                  </a>
                  <img
                    src="assets/about/right-arrow.svg"
                    alt="Download Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
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
    </>
  );
}

export default MaterialSlider;
