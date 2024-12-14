import Aos from "aos";
import React, { useEffect, useRef } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";

function Scholarship() {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

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
          <div className="flex justify-between items-center py-[20px]">
            <div data-aos="fade-up">
              <p className="font-sans text-[#FFFFFF] font-[400] text-[16px] leading-[20px]">
                Scholarship Form
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div data-aos="fade-up">
          <img
            src="assets/contact/bg-1.png"
            className="bg-cover w-full"
            alt=""
          />
        </div>
      </div>
      <div className="md:pt-[62px] pt-[30px] md:pb-[86px] pb-[30px]">
        <div className="container m-auto">
          <div className="max-w-[921px] m-auto w-full bg-[#FFFFFF] border border-[#000000] rounded-[30px]">
            <p className="bg-[#FBE596] py-[22px] md:px-[50px] px-[20px] font-sans font-[700] text-[#000000] text-[20px] leading-[20.54px] border-b border-[#000000] rounded-t-[30px]">
              Scholarship Form
            </p>
            <div className="md:pt-[58px] pt-[20px] md:px-[58px] px-[20px] grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[20px]">
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  First Name
                </h6>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Last Name
                </h6>
                <input
                  type="text"
                  placeholder="Last Name "
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Father's Name
                </h6>
                <input
                  type="text"
                  placeholder="Father's Name"
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Mobile No
                </h6>
                <input
                  type="text"
                  placeholder="Mobile No"
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  WhatsApp No
                </h6>
                <input
                  type="text"
                  placeholder="WhatsApp No"
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Email
                </h6>
                <input
                  type="text"
                  placeholder="Email"
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Date Of Birth
                </h6>
                <input
                  type="date"
                  placeholder="Date Of Birth"
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Qualification
                </h6>
                <select
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                  name=""
                  id=""
                >
                  <option value="">Select Qualification</option>
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">C</option>
                </select>
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Desired Test
                </h6>
                <select
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                  name=""
                  id=""
                >
                  <option value="">Select Desired Test</option>
                  <option value="">A</option>
                  <option value="">B</option>
                  <option value="">C</option>
                </select>
              </div>
              <div className="flex flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Exam Center *
                </h6>
                <input
                  type="text"
                  placeholder="Exam Center"
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="md:flex hidden flex-1"></div>
              <div className="max-w-[150px] w-full">
                <label
                  htmlFor="upload-img"
                  className="flex gap-[8px] items-center justify-center border border-dashed border-[#AEB3BA] rounded-[54px] py-[15px] px-[30px] text-[#616161] font-[Outfit] font-[400] text-[16px] leading-[23px]"
                >
                  Upload <img src="assets/contact/upload.svg" alt="" />
                </label>
                <input
                  type="file"
                  id="upload-img"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </div>
              <div className="md:pb-[60px] pb-[30px] md:col-span-2 col-span-1 flex items-center justify-center gap-[16px]">
                {/* <div data-aos="fade-up">
                  <button className="flex items-center gap-[22px] bg-transparent border border-[#D0021B] py-[17px] px-[37px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#D0021B]">
                    Cancel
                  </button>
                </div> */}
                <div data-aos="fade-up">
                  <button className="flex items-center gap-[22px] bg-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF]">
                    Submit
                    <img src="assets/home/round-right.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Scholarship;
