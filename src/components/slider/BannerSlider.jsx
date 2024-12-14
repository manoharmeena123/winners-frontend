import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GetApi } from "../../ApIcall";
import { Link } from "react-router-dom";

import { Carousel } from "flowbite-react";

// const data = [
//   { bannerImg: "assets/home/banner1.png" },
//   { bannerImg: "assets/home/banner2.png" },
//   { bannerImg: "assets/home/banner3.png" },
//   { bannerImg: "assets/home/banner4.png" },
// ];

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

function BannerSlider() {
  const [Banners, setBanners] = useState([]);
  const [Loading, setLoading] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const Dummy = [
    {
      _id: "65f54c148f6703818ff270b3",
      Name: "Winner",
      Image:
        "https://winnerassets.s3.eu-north-1.amazonaws.com/Images/banner1.png",
      Discription: "Search and find your best",
      __v: 0,
    },
    {
      _id: "65f54c148f6703818ff270b3",
      Name: "Winner",
      Image:
        "https://winnerassets.s3.eu-north-1.amazonaws.com/Images/banner1.png",
      Discription: "Search and find your best",
      __v: 0,
    },
  ];

  // console.log(Banners);

  const GetAllbanners = async () => {
    try {
      setLoading(true);
      const response = await GetApi("api/admin/GetAllBanners");
      setBanners(response?.data?.data || Dummy);
      setLoading(false);
    } catch (error) {
      setBanners(Dummy);
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetAllbanners();
  }, []);
  return (
    <>
      {Banners?.length === 1 ? (
        <>
          <div>
            <Link to={Banners?.link} target="_blank" rel="noopener noreferrer">
              <img
                src={Banners[0]?.Image}
                className="w-full object-cover"
                alt=""
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="slider-container">
            {/* <Slider {...settings}> */}
              <Carousel slideInterval={5000}>
              {Banners?.map((e, i) => {
                return (
                  <>
                    <div key={i}>
                      <Link to={e?.link} target="_blank" rel="noopener noreferrer">
                        <img
                          src={e?.Image}
                          className="w-full object-cover"
                          alt=""
                        />
                      </Link>
                    </div>
                  </>
                );
              })}
              </Carousel>
          </div>
        </>
      )}
    </>
  );
}

export default BannerSlider;
