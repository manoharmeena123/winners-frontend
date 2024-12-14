import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetApi } from "../ApIcall";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import VideoSlider from "../components/slider/VideoSlider";

const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];

function VideoLecture() {
  const [Loading, setLoading] = useState(false);
  const [getVideolecture, setGetVideolecture] = useState([]);

  const GetVideolecture = async () => {
    try {
      setLoading(true);
      const response = await GetApi("api/admin/getAllVideolecture");
      setGetVideolecture(response?.data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetVideolecture();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="bg-[#0D1266] pt-[80px]">
        <div className="container m-auto">
          <div className="flex justify-between items-center py-[20px]">
            <div data-aos="fade-up">
              <p className="font-sans text-[#FFFFFF] font-[400] text-[16px] leading-[20px]">
                Video Lectures
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[40px] overflow-hidden px-[30px]">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] title-btn mb-[28px] max-w-[186px] w-full font-sans font-[700] text-[24px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              Latest Videos
            </h6>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <div className="video-slider">
          <VideoSlider getVideolecture={getVideolecture} />
        </div>
      </div>
      <div className="md:mt-[80px] mt-[40px] md:pb-[100px] pb-[50px] w-full">
        <div className="container m-auto">
          <div data-aos="fade-right">
            <h6 className="bg-[#D0021B] title-btn mb-[48px] max-w-[245px] w-full font-sans font-[700] text-[24px] leading-[32px] text-[#FFFFFF] rounded-[4px] py-[6px] px-[16px]">
              All Video Lectures
            </h6>
          </div>
          <div className="md:px-[42px] px-[20px]">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-[16px]">
              {getVideolecture?.map((e, i) => {
                return (
                  <>
                    <div className="video-card overflow-hidden" key={i}>
                      <Link
                        to={e?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="video-img">
                          <img src={e?.thumbnail} className="w-full" alt="" />
                          <img
                            src="assets/video/icon1.svg"
                            className="yt-icon"
                            alt=""
                          />
                        </div>
                      </Link>
                      <div data-aos="fade-up">
                        <h6 className="font-[Outfit] font-[600] text-[18px] leading-[22px] mt-[18px]">
                          {e?.Discription}
                        </h6>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VideoLecture;
