import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";

function Franchies() {
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
      alert('Form submitted successfully.')
      console.log("Form submitted successfully:", response.data);
      } catch (error) {
      alert('Error submitting form.')
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
      <div className="bg-[#0D1266] pt-[80px] overflow-hidden">
        <div className="container m-auto">
          <div className="flex justify-between items-center py-[20px] md:px-[86px] px-[20px]">
            <div data-aos="fade-up">
              <p className="font-sans text-[#FFFFFF] font-[400] text-[16px] leading-[20px]">
                Franchies
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pl-[106px] pl-[20px] md:pr-[136px] pr-[20px] overflow-hidden relative">
        <img
          src="assets/contact/wrap1.svg"
          className="absolute right-[-54px] top-[-46px]"
          alt=""
        />
        <img
          src="assets/contact/vector1.svg"
          className="absolute md:block btn-arrow hidden left-[-5px] top-[114px]"
          alt=""
        />
        <div className="container m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="pt-[124px]">
              <div data-aos="fade-right">
                <h6 className="font-sans font-[700] text-[36px] leading-[36px] text-[#000000] pb-[18px]">
                  Franchise opprtunity for education
                </h6>
                <p className="font-[Outfit] font-[400] text-[18px] leading-[28px] text-[#616161]">
                  If you are an academician or an individual professional with
                  clear <br /> track record of business with right entrepreneurial
                  attitude, <br /> adequate knowledge, and experience in the coaching
                  industry, <br /> you can be a part of&nbsp;
                  <span className="text-[#D0021B] font-[500]">
                    THE WiNNERS INSTITUTE.
                  </span>
                </p>
              </div>
            </div>
            <div className="pt-[56px] flex justify-center relative z-10">
              <div data-aos="fade-left">
                <img src="assets/contact/photo1.png" alt="" />
              </div>
            </div>
            <img
              src="assets/contact/wrap2.svg"
              className="absolute left-[0px] w-full bottom-[0px] z-1"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative md:pt-[123px] pt-[50px] md:pb-[177px] pb-[50px] md:px-[100px] px-[20px] overflow-hidden">
        <img
          src="assets/contact/wrap3.svg"
          className="absolute rotating top-[29px] left-[0px]"
          alt=""
        />
        <div className="container m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[52px]">
            <div data-aos="fade-right">
              <div className="">
                <img src="assets/contact/photo2.svg" alt="" />
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="">
                <h6 className="font-sans font-[700] text-[36px] leading-[37px] text-[#000000] pb-[14px]">
                  About the WiNNERS Institute
                </h6>
                <p className="font-[Outfit] font-[400] text-[18px] leading-[28px] text-[#616161]">
                WiNNERS is an institute preparing students for MPPSC, SSC,
                  BANKING, VYAPAM, and other Central and State Government jobs
                  since 2017.
                </p>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-start gap-[17px] pt-[20px]">
                    <img
                      src="assets/contact/wrap4.svg"
                      className="mt-[6px]"
                      alt=""
                    />
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[23px] text-[#616161]">
                      An institute with Classroom programme available for MPPSC,
                      SSC, BANKING, VYAPAM, and other Central and State
                      Government jobs.
                    </p>
                  </div>
                  <div className="flex items-start gap-[17px]">
                    <img src="assets/contact/wrap4.svg" alt="" />
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[23px] text-[#616161]">
                      An institute with more than 100000 successful coaching to
                      students.
                    </p>
                  </div>
                  <div className="flex items-start gap-[17px]">
                    <img src="assets/contact/wrap4.svg" alt="" />
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[23px] text-[#616161]">
                      An Institute Established, Run and Managed by Academician.
                    </p>
                  </div>
                  <div className="flex items-start gap-[17px]">
                    <img src="assets/contact/wrap4.svg" alt="" />
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[23px] text-[#616161]">
                      An institute that has witnessed a decade of successful
                      results.
                    </p>
                  </div>
                  <div className="flex items-start gap-[17px]">
                    <img src="assets/contact/wrap4.svg" alt="" />
                    <p className="font-[Outfit] font-[400] text-[16px] leading-[23px] text-[#616161]">
                      Expertise in both classroom education and online classes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "url(assets/about/bg-2.svg)",
          backgroundSize: "cover",
          width: "100%",
        }}
        className="relative max-w-[1405px] overflow-hidden w-full md:pt-[100px] pt-[30px] md:pl-[73px] pl-[20px] md:pr-[94px] pr-[20px] left-[50%] translate-x-[-50%] rounded-t-[50px] z-1"
      >
        <img
          src="assets/about/wrap1.svg"
          className="absolute md:bottom-[81px] bottom-auto md:top-auto top-[230px] left-0"
          alt=""
        />
        <div
          style={{
            background: "url(assets/contact/wrap5.svg)",
            backgroundSize: "cover",
            width: "100%",
            maxWidth: "710px",
          }}
          className="absolute md:bottom-[43px] bottom-auto md:top-auto top-[480px] md:left-[134px] left-[-1px] h-[67px]"
        >
          <h6 className="absolute right-[126px] font-sans top-[50%] translate-y-[-50%] font-[600] text-[18px] leading-[27px] text-center text-[#FFFFFF]">
            Aditya Patel (Founder & Director)
          </h6>
        </div>
        <div className="relative">
          <div className="grid grid-cols-12">
            <div className="md:col-span-4 col-span-12">
              <img src="assets/about/photo1.png" alt="" />
            </div>
            <div className="col-span-1 md:block hidden"></div>
            <div className="md:col-span-7 col-span-12 md:pt-0 pt-[110px] md:pb-0 pb-[40px]">
              <div data-aos="fade-left">
                <div className="flex justify-between items-center w-full mb-[15px]">
                  <h6 className="font-sans font-[600] text-[36px] leading-[40px] text-[#000000]">
                    Let's Share the Success
                  </h6>
                  <div className="flex gap-[12px]">
                    <Link
                      to="https://www.linkedin.com/in/adityapatelwinners/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="assets/about/icon1.svg" alt="" />
                    </Link>
                    <Link
                      to="https://x.com/The_AdityaPatel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="assets/about/icon2.svg" alt="" />
                    </Link>
                  </div>
                </div>
                <p className="font-sans font-[400] text-[18px] leading-[22px] text-[#000000] pb-[18px]">
                  Aditya Patel Sir is the Founder of the WiNNERS Institute with
                  more than a decade of experience. He has led the Trust and
                  faith in students since its inception. Aditya Sir is
                  passionate about the Growth and Success of students and young
                  people who came from various communities across the country
                  and this vision has guided the philosophy of the Trust and his
                  work in particular. Aditya Sir is also the faculty of
                  mathematics, In this role, he has contributed to the student’s
                  development of strategies and math fundamentals.
                </p>
                <p className="font-sans font-[400] text-[18px] leading-[22px] text-[#000000]">
                  He also provides guidance to faculties as diverse as teacher
                  training, leadership development, community cohesion,
                  curriculum reform, and social mobility. He is committed to the
                  development of a strong and world-class institute and actively
                  works to improve its reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-section">
        <div className="container m-auto">
          <div data-aos="fade-up">
            <h6 className="font-sans font-[700] text-[36px] leading-[37px] text-[#000000] text-center pb-[80px]">
              Benefits you get as our franchise
            </h6>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-[50px] gap-[10px]">
            <div data-aos="fade-up">
              <div className="md:pb-[20px] pb-0 flex flex-col items-center max-w-[267px] m-auto">
                <img src="assets/contact/item1.svg" alt="" />
                <p className="bg-[#D0021B] rounded-[8px] py-[5px] px-[17px] font-[Outfit] font-[500] text-[16px] leading-[20px] text-center text-[#FFFFFF] relative bottom-[20px] left-[50%] translate-x-[-50%] w-full">
                  Huge Product Basket
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="md:pb-[20px] pb-0 flex flex-col items-center max-w-[267px] m-auto">
                <img src="assets/contact/item2.svg" alt="" />
                <p className="bg-[#D0021B] rounded-[8px] py-[5px] px-[17px] font-[Outfit] font-[500] text-[16px] leading-[20px] text-center text-[#FFFFFF] relative bottom-[20px] left-[50%] translate-x-[-50%] w-full">
                  Quick & easy Return on Investment
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="md:pb-[20px] pb-0 flex flex-col items-center max-w-[267px] m-auto">
                <img src="assets/contact/item3.svg" alt="" />
                <p className="bg-[#D0021B] rounded-[8px] py-[5px] px-[17px] font-[Outfit] font-[500] text-[16px] leading-[20px] text-center text-[#FFFFFF] relative bottom-[20px] left-[50%] translate-x-[-50%] w-full">
                  Redoubtable Reputation in the Industry
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="md:pb-[20px] pb-0 flex flex-col items-center max-w-[267px] m-auto">
                <img src="assets/contact/item4.svg" alt="" />
                <p className="bg-[#D0021B] rounded-[8px] py-[5px] px-[17px] font-[Outfit] font-[500] text-[16px] leading-[20px] text-center text-[#FFFFFF] relative bottom-[20px] left-[50%] translate-x-[-50%] w-full">
                  Reduced risk of Failure
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="md:pb-[20px] pb-0 flex flex-col items-center max-w-[267px] m-auto">
                <img src="assets/contact/item5.svg" alt="" />
                <p className="bg-[#D0021B] rounded-[8px] py-[5px] px-[17px] font-[Outfit] font-[500] text-[16px] leading-[20px] text-center text-[#FFFFFF] relative bottom-[20px] left-[50%] translate-x-[-50%] w-full">
                  Marketing support for both offline & online Campaigns
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="md:pb-[20px] pb-0 flex flex-col items-center max-w-[267px] m-auto">
                <img src="assets/contact/item6.svg" alt="" />
                <p className="bg-[#D0021B] rounded-[8px] py-[5px] px-[17px] font-[Outfit] font-[500] text-[16px] leading-[20px] text-center text-[#FFFFFF] relative bottom-[20px] left-[50%] translate-x-[-50%] w-full">
                  Technological support for Business Intelligence & monitoring.
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="md:pb-[20px] pb-0 flex flex-col items-center max-w-[267px] m-auto">
                <img src="assets/contact/item7.svg" alt="" />
                <p className="bg-[#D0021B] rounded-[8px] py-[5px] px-[17px] font-[Outfit] font-[500] text-[16px] leading-[20px] text-center text-[#FFFFFF] relative bottom-[20px] left-[50%] translate-x-[-50%] w-full">
                  Consistent Support in setting an action plan & measurable
                  targets
                </p>
              </div>
            </div>
            <div data-aos="fade-up">
              <div className="md:pb-[20px] pb-0 flex flex-col items-center max-w-[267px] m-auto">
                <img src="assets/contact/item1.svg" alt="" />
                <p className="bg-[#D0021B] rounded-[8px] py-[5px] px-[17px] font-[Outfit] font-[500] text-[16px] leading-[20px] text-center text-[#FFFFFF] relative bottom-[20px] left-[50%] translate-x-[-50%] w-full">
                  Huge Product Basket
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-[468px] h-auto bg-[#D0021B] relative">
        <div className="container m-auto">
          <div className="max-w-[921px] w-full bg-[#FFFFFF] border border-[#000000] rounded-[30px] md:absolute relative md:top-[-322px] top-[0px] left-[50%] translate-x-[-50%]">
            <div data-aos="fade-up">
              <p className="bg-[#FBE596] py-[22px] md:px-[50px] px-[20px] font-sans font-[700] text-[#000000] text-[20px] leading-[20.54px] border-b border-[#000000] rounded-t-[30px]">
                SO, WHAT ARE YOU WAITING FOR?
              </p>
            </div>
            <div className="md:pt-[58px] pt-[30px] md:px-[58px] px-[20px] grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[20px]">
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
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
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
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
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
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
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
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                />
              </div>
              <div className="flex md:col-span-2 col-span-1 flex-col gap-[7px]">
                <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                  Message *
                </h6>
                <textarea
                  className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                  name="Remark"
                  placeholder="Enter Message"
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
                    <img src="assets/home/round-right.svg" className="btn-arrow" alt="" />
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

export default Franchies;
