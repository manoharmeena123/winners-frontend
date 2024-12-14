import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";

const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

function Publications() {
  useEffect(() => {
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
          <div className="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-[18px] py-[20px] md:px-[86px] px-[14px]">
            <div className="flex overflow-hidden flex-row gap-[7px]">
              <div data-aos="fade-up">
                <Link
                  to="https://facebook.com/thewinnersinstituteindore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/footer/icon2.svg" alt="" />
                </Link>
              </div>
              <div data-aos="fade-up">
                <Link
                  to="https://instagram.com/thewinnersinstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/footer/icon1.svg" alt="" />
                </Link>
              </div>
              <div data-aos="fade-up">
                <Link
                  to="https://twitter.com/WinnersIndore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/footer/icon3.svg" alt="" />
                </Link>
              </div>
              <div data-aos="fade-up">
                <Link
                  to="https://youtube.com/@WiNNERSInstituteIndore?si=GkvlJJfMBYDC9QVs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/footer/icon5.svg" alt="" />
                </Link>
              </div>
            </div>
            <div data-aos="fade-right">
              <p className="font-sans text-[#FFFFFF] font-[400] text-[16px] leading-[20px]">
                Welcome to WiNNERS ONLINE EDUTECH PRIVATE LIMITED
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[24px] md:px-[20px] px-[6px]">
        <div className="container m-auto">
          <div className="flex w-full md:gap-[34px] gap-[10px]">
            <div className="bg-[#EFF0F5] overflow-hidden rounded-[14px] md:max-w-[281px] max-w-[100px] w-full md:py-[26px] py-[13px] md:px-[24px] px-[12px]">
              <div data-aos="fade-up">
                <h6 className="font-sans font-[700] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px] md:pb-[26px] pb-[14px] text-[#0D1266]">
                  Choose Categories
                </h6>
              </div>
              <div className="flex flex-col">
                <div data-aos="fade-right">
                  <h6 className="text-[#000000] pl-[8px] font-sans font-[400] md:text-[18px] text-[12px] leading-[24px] md:py-[12px] py-[6px] md:px-[8px] px-[4px]">
                    English
                  </h6>
                </div>
                <div className="bg-[#0000004D] h-[0.5px] w-full"></div>
                <div data-aos="fade-right">
                  <h6 className="text-[#000000] pl-[8px] font-sans font-[400] md:text-[18px] text-[12px] leading-[24px] md:py-[12px] py-[6px] md:px-[8px] px-[4px]">
                    Hindi
                  </h6>
                </div>
                <div className="bg-[#0000004D] h-[0.5px] w-full"></div>
                <div data-aos="fade-right">
                  <h6 className="text-[#000000] pl-[8px] font-sans font-[400] md:text-[18px] text-[12px] leading-[24px] md:py-[12px] py-[6px] md:px-[8px] px-[4px]">
                    Mathematics
                  </h6>
                </div>
                <div className="bg-[#0000004D] h-[0.5px] w-full"></div>
                <div data-aos="fade-right">
                  <h6 className="text-[#000000] pl-[8px] font-sans font-[400] md:text-[18px] text-[12px] leading-[24px] md:py-[12px] py-[6px] md:px-[8px] px-[4px]">
                    MPPSC
                  </h6>
                </div>
                <div className="bg-[#0000004D] h-[0.5px] w-full"></div>
                <div data-aos="fade-right">
                  <h6 className="text-[#000000] pl-[8px] font-sans font-[400] md:text-[18px] text-[12px] leading-[24px] md:py-[12px] py-[6px] md:px-[8px] px-[4px]">
                    SSC
                  </h6>
                </div>
                <div className="bg-[#0000004D] h-[0.5px] w-full"></div>
                <div data-aos="fade-right">
                  <h6 className="text-[#000000] pl-[8px] font-sans font-[400] md:text-[18px] text-[12px] leading-[24px] md:py-[12px] py-[6px] md:px-[8px] px-[4px]">
                    Reasonings
                  </h6>
                </div>
              </div>
            </div>
            <div className="grid pb-[72px] md:grid-cols-4 grid-cols-1 gap-[28px]">
              {data?.map((e, i) => {
                return (
                  <>
                    <div
                      key={i}
                      className="bg-[#FFFFFF] border-[1px] border-[#0000004D] rounded-[10px] courses-card"
                    >
                      <img src="assets/about/photo2.svg" alt="" />
                      <div className="px-[16px] overflow-hidden">
                        <div data-aos="fade-up">
                          <h6 className="font-sans pb-[6px] text-[#000000] font-[600] text-[16px] leading-[21.82px]">
                            Advance Maths Book
                          </h6>
                        </div>
                        <div data-aos="fade-up">
                          <p className="text-[#616161] font-[Outfit] font-[400] text-[12px] leading-[20px]">
                          WiNNERS PUBLICATION
                          </p>
                        </div>
                        <div className="bg-[#0000004D] h-[0.5px] my-[10px] w-full"></div>
                        <div data-aos="fade-right">
                          <div className="flex justify-between items-center">
                            <h6 className="font-[Outfit] font-[500] text-[16px] leading-[16px] text-[#D0021B]">
                              View Details
                            </h6>
                            <img src="assets/about/right-arrow.svg" alt="" />
                          </div>
                        </div>
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

export default Publications;
