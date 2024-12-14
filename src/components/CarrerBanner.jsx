import React, { useEffect, useState } from "react";
// import DownArrow from "./DownArrow";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import BannerImage from "../Assets/about/carrergauidance.jpeg";
import { GetApi } from "../ApIcall";

function CarrerBanner() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [Banners, setBanners] = useState([]);
  const [Loading, setLoading] = useState(false);

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
  console.log(Banners);

  return (
    <>
      <div className="banner" style={{ width: "100%" }}>
        <img
          src="/assets/about/item1.jpeg"
          alt=""
          className="cursor-pointer w-full"
        />
      </div>
      {/* <Slider {...settings}> */}
      {/* </Slider> */}
    </>
  );
}

export default CarrerBanner;
