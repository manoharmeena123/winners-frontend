import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { GetApi } from "../../ApIcall";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <img src="assets/home/round-right.svg" alt="" /> */}
      <img src="assets/home/s-right.svg" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {/* <img src="assets/home/round-left.svg" alt="" /> */}
      <img src="assets/home/s-left.svg" alt="" />
    </div>
  );
}

function StudentSlider() {
  const [SelectedStudent, setSelectedStudent] = useState([]);
  const [Loading, setLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const getAllSelectedStudents = async () => {
      try {
        setLoading(true);
        const response = await GetApi("api/admin/getAllSelectedStudents");
        setSelectedStudent(response?.data?.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    getAllSelectedStudents();
  }, []);

  useEffect(() => {
    if (sliderRef.current && SelectedStudent.length > 0 && !Loading) {
      sliderRef.current.slickPrev();
    }
  }, [SelectedStudent, Loading]);

  const settings = {
    // className: "center",
    centerMode: true,
    dots: false,
    // autoplay: true,
    // infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    nextArrow: <></>,
    prevArrow: <></>,
    speed: 500,
    ref: sliderRef, // Pass the ref to the Slider

    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 4,
          centerMode: true
        },
        centerMode: true
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true
        },
        centerMode: true
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: true
        },
        centerMode: true
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
          centerMode: true
        },
        centerMode: true
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {SelectedStudent?.map((e, i) => {
          return (
            <div
              key={i}
              className="pb-[32px] gap-[20px] flex items-center justify-center"
              style={{ padding: "0 10px" }} // Add horizontal padding
            >
              <div className="relative s-card max-w-[313px] mx-auto w-full flex items-center justify-center flex-col">
                <img
                  src={e?.Image}
                  className="h-[130px] w-[130px] absolute left-[50%] translate-x-[-50%] top-[74px] rounded-full object-cover border-2 border-[#FFFFFF]"
                  alt=""
                />
                <div
                  className="flex absolute bottom-[28px] items-center flex-col w-[313px] h-[64px] bg-cover justify-start"
                  style={{ backgroundImage: "url(assets/home/wrap12.svg)" }}
                >
                  <div data-aos="fade-left">
                    <p className="text-center mb-0 pt-[6px] font-sans font-[600] text-[18px] leading-[22px] text-[#FFFFFF]">
                      {e?.Name?.length > 20
                        ? e?.Name.slice(0, 20) + " ..."
                        : e?.Name}
                    </p>
                  </div>
                  <div data-aos="fade-right">
                    <p className="text-center mb-0 font-sans font-[600] text-[14px] leading-[22px] text-[#FFFFFF]">
                      {e?.Post}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="flex  items-center justify-center w-full mt-[-19px]">
        <SamplePrevArrow
          className="arrow"
          onClick={() => sliderRef.current.slickPrev()}
        />
       
        <SampleNextArrow
          className="arrow"
          onClick={() => sliderRef.current.slickNext()} // Trigger next slide
        />
      </div>
    </>
  );
}

export default StudentSlider;
