import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { GetApi } from "../../ApIcall";

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

function StoriesSlider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({}); // Track expanded state for each card
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    ref: sliderRef,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  useEffect(() => {
    const get_all_testimonials = async () => {
      try {
        const response = await GetApi("api/admin/getAllTestimonial");
        setData(response?.data?.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };

    get_all_testimonials();
  }, []);

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Slider {...settings}>
        {data.map((testimonial, index) => (
          <div key={index} className="testimonial-card-container md:pb-[62px]">
            <div
              className="testimonial-card max-w-[605px] rounded-[9.72px] p-[18px] m-auto w-[95%] flex md:flex-row flex-col gap-[26px]"
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <div className="pt-[7px] w-full">
                <img src="/assets/home/icon11.svg" alt="Icon" />
                <p
                  className="pt-[6px] font-[Outfit] font-[400] text-[18px] leading-[26px] text-[#454545]"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: expanded[index] ? "unset" : 3, // Expand or clamp
                    overflow: "hidden",
                  }}
                >
                  {testimonial?.Discription}
                </p>
                {testimonial?.Discription?.length > 150 && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-[#D0021B] mt-2 underline"
                  >
                    {expanded[index] ? "Show Less" : "Show More"}
                  </button>
                )}
                <div className="flex justify-end">
                  <img src="/assets/home/icon12.svg" alt="Icon" />
                </div>
                <div className="md:pt-[52px] pt-[16px]">
                  <p className="font-[Roboto] font-[600] text-[14px] leading-[16.41px] text-[#D0021B] pb-[3px]">
                    {testimonial?.Name}
                  </p>
                  <p className="font-[Roboto] font-[400] text-[14px] leading-[20px] text-[#454545] pb-[8px]">
                    {testimonial?.Post}
                  </p>
                  <div className="flex gap-[4.30px]">
                    <img src="assets/home/star.svg" alt="Star" />
                    <img src="assets/home/star.svg" alt="Star" />
                    <img src="assets/home/star.svg" alt="Star" />
                    <img src="assets/home/star.svg" alt="Star" />
                    <img src="assets/home/star.svg" alt="Star" />
                  </div>
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

export default StoriesSlider;
