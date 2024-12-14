import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      <img src="assets/home/s-left.svg" alt="Previous" />
    </div>
  );
}

function CourseSlider({ filteredCourses }) {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [expandedCourses, setExpandedCourses] = useState({});
  const [showMoreCourses, setShowMoreCourses] = useState({});

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    centerPadding: "0px",
    slidesToShow: 5,
    speed: 500,
    ref: sliderRef,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      { breakpoint: 1450, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { centerPadding: "20px", slidesToShow: 1 } },
    ],
  };

  const toggleExpand = (courseId) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const checkContentOverflow = () => {
    const updatedShowMore = {};
    document.querySelectorAll(".course-title").forEach((element) => {
      const courseId = element.dataset.courseId;
      if (element.scrollHeight > element.offsetHeight) {
        updatedShowMore[courseId] = true;
      }
    });
    setShowMoreCourses(updatedShowMore);
  };

  useEffect(() => {
    checkContentOverflow();
    window.addEventListener("resize", checkContentOverflow);

    return () => window.removeEventListener("resize", checkContentOverflow);
  }, [filteredCourses]);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="slider-container relative">
      {filteredCourses?.length > 1 ? (
        <>
          <Slider {...settings}>
            {filteredCourses?.map((e) => (
              <div key={e?.id}>
                <div
                  className="course-card relative grid"
                  style={{
                    height: "auto",
                    gridTemplateRows: "1fr auto",
                  }}
                >
                  {/* Image */}
                  <img
                    src={e?.image}
                    className="absolute h-[100px] w-[100px] top-[-70px] left-[50%] translate-x-[-50%]"
                    alt=""
                  />

                  {/* Content */}
                  <div className="content px-[12px] pb-[33px] pt-[56px]">
                    <h6
                      className={`font-sans text-center font-[600] text-[18px] leading-[24px] pb-[13px] text-[#000000] course-title min-h-[85px]`}
                      data-course-id={e?.id}
                      style={{
                        // overflow: expandedCourses[e?.id] ? "visible" : "hidden",
                        // maxHeight: expandedCourses[e?.id]
                        //   ? "none"
                        //   : "calc(2 * 24px)", // Adjust for two lines of text
                        // display: "-webkit-box",
                        // WebkitLineClamp: expandedCourses[e?.id] ? "none" : "2",
                        // WebkitBoxOrient: "vertical",
                      }}
                    >
                      {e?.title}
                    </h6>

                    {/* "Show More" Button */}
                    {/* {showMoreCourses[e?.id] && (
                      <div className="text-center mt-2">
                        <button
                          onClick={() => toggleExpand(e?.id)}
                          className="text-[#1C2672] bg-[#087AFF17] no-underline rounded-[6px] py-[4px] px-[20px] cursor-pointer font-[Roboto] font-[500] text-[12px] leading-[14.06px]"
                        >
                          {expandedCourses[e?.id] ? "Show Less" : "Show More"}
                        </button>
                      </div>
                    )} */}
                  </div>

                  {/* Footer */}
                  <div
                    className="footer-container"
                    style={{
                      padding: "12px",
                    }}
                  >
                    <div className="border-[1px] my-[12px] border-[#0000004D]"></div>
                    <div
                      onClick={() => {
                        if (e?.courselink && isValidUrl(e.courselink)) {
                          window.open(e.courselink, "_blank");
                        } else {
                          navigate(`/courses/${e?.category}`);
                        }
                      }}
                      className="flex items-center justify-center w-full"
                    >
                      <Link className="text-[#1C2672] bg-[#087AFF17] no-underline rounded-[6px] py-[4px] px-[20px] cursor-pointer font-[Roboto] font-[500] text-[12px] leading-[14.06px]">
                        Get Details
                      </Link>
                      <img src="assets/home/right.svg" alt="" />
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
            <button
              onClick={() =>
              (window.location.href =
                "https://live.winnersinstitute.in/courses?categoryId=")
              }
              className="font-sans font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px] md:py-[16px] py-[16px] md:px-[21px] px-[14px] border-[0.5px] hover:bg-transparent duration-300 ease-in md:bg-[#D0021B] bg-[#FFFFFF] border-[#D0021B] rounded-[10px] hover:text-[#D0021B] md:text-[#FFFFFF] text-[#D0021B]"
            >
              See All Courses
            </button>
            <SampleNextArrow
              className="arrow"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        </>
      ) : (
        <p>No Course Available!</p>
      )}
    </div>
  );
}

export default CourseSlider;
