import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";

function Franchies2() {
  const [formData, setFormData] = useState({
    Name: "",
    Number: "",
    Email: "",
    City: "",
    Remark: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = `${key} is required`;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await axios.post(
        `${Api_Url}/api/admin/CreateFranchise`,
        formData
      );
      setFormData(formData);
      alert("Form submitted successfully.");
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      alert("Error submitting form.");
      console.error("Error submitting form:", error);
    }
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
      <div className="career-section">
        <img
          src="/assets/i/photo2.png"
          className="w-full object-cover"
          alt=""
        />
        <div className="absolute top-[50%] z-10 translate-x-[-50%] max-w-[817px] w-full m-auto translate-y-[-50%] left-[50%]">
          <h6 className="text-center font-sans font-[800] text-[46px] leading-[47.24px] text-[#FFFFFF] pb-[18px]">
          Be a Partner
          </h6>
        </div>
      </div>
      <div className="bg-[#1C2672] md:pb-[88px] pb-[20px] md:px-[80px] px-[20px]">
        <div className="bg-[#FFFFFF] relative top-[-10px] rounded-[8px] py-[44px] md:px-[52px] px-[14px]">
          <h6 className="font-sans text-[#E31E24] uppercase pb-[48px] font-[700] md:text-[24px] text-[14px] md:leading-[32px] leading-[24px]">
            Please fill up the form 
          </h6>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[20px]">
            <div className="flex flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                First Name *
              </h6>
              <input
                type="text"
                name="Name"
                value={formData?.Name}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                Email *
              </h6>
              <input
                type="email"
                placeholder="Email"
                required
                name="Email"
                value={formData?.Email}
                onChange={handleChange}
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                Phone Number *
              </h6>
              <input
                type="text"
                name="Number"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                maxLength={10}
                value={formData?.Number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                City *
              </h6>
              <input
                type="text"
                placeholder="City"
                name="City"
                value={formData?.City}
                onChange={handleChange}
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
              />
            </div>
            <div className="flex md:col-span-2 col-span-1 flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                Message *
              </h6>
              <textarea
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                name="Remark"
                value={formData?.Remark}
                onChange={handleChange}
                id=""
              ></textarea>
            </div>
            <div className="md:pb-[60px] pb-[30px] md:col-span-2 col-span-1 flex items-center justify-center gap-[16px]">
              <div data-aos="fade-up">
                {/* <button className="flex items-center gap-[22px] bg-transparent border border-[#D0021B] py-[17px] px-[37px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#D0021B]">
                    Cancel
                  </button> */}
              </div>
              <div data-aos="fade-up">
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-[22px] bg-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF]"
                >
                  Submit
                  <img
                    src="assets/home/round-right.svg"
                    className="btn-arrow"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Franchies2;
