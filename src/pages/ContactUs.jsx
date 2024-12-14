import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";

function ContactUS() {
  const [formData, setFormData] = useState({
    Name: "",
    lastName: "",
    number: "",
    Email: "",
    EnquiryFor: "",
    Remark: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
        `${Api_Url}/api/admin/CreateEnquiry`,
        formData
      );
      setSubmitted(true);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  // const handleClick = () => {
  //   window.location.href = "https://api.whatsapp.com/send?phone=9009335533";
  // };
  function openMailbox() {
    window.open("mailto:support@winnersinstitute.in");
  }
  const sendMessage = () => {
    const phoneNumber = "9009335533";
    const message = "Hello!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  const handlePhoneCall = () => {
    const phoneNumber = "9009335533";
    const phoneUrl = `tel:${phoneNumber}`;
    window.location.href = phoneUrl;
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
          src="/assets/i/photo3.svg"
          className="w-full object-cover"
          alt=""
        />
        <div className="absolute md:top-[192px] top-[50px] z-10 translate-x-[-50%] max-w-[1092px] w-full m-auto left-[50%]">
          <h6 className="text-center font-sans font-[800] md:text-[46px] text-[34px] md:leading-[47.24px] leading-[40px] text-[#FFFFFF] pb-[18px]">
            Contact Us
          </h6>
          <p className="font-[Outfit] text-[#FFFFFF] font-[400] md:text-[18px] text-[12px] text-center md:leading-[28px] leading-[16px] pb-[84px]">
            Get in touch and let us know how we can help.
          </p>
          <div className="max-w-[1092px] md:block hidden md:mt-[0px] mt-[50px] w-full md:absolute relative left-[50%] translate-x-[-50%] m-auto">
            <div className="grid md:grid-cols-3 md:justify-items-start justify-items-center grid-cols-1 md:gap-[80px] gap-[100px] md:pb-0 pb-[30px]">
              <div className="contact-card">
                <img
                  src="assets/video/item1.svg"
                  className="absolute top-[50%] left-[-40px] translate-y-[-50%]"
                  alt=""
                />
                <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] pb-[4px]">
                  Address
                </h6>
                <p className="font-[Outfit] font-[400] text-[16px] leading-[20px] text-left text-[#545454]">
                  The WiNNERS Institute, Opposite Vishnupuri iBus Stop, Indore (MP)
                </p>
                <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
                <button
                  className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]"
                  onClick={() => window.open('https://www.google.com/maps/dir//The+Winners+Institute+Winners+New+Campus,+Opposite+Vishnupuri-bus+stop+Near+Bholaram+Gate+AB+Rd+Indore,+Madhya+Pradesh+452001/@22.6887898,75.8638694,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fce48cd5ed1b:0x3e981f0ba5111eef!2m2!1d75.8638694!2d22.6887898?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D', '_blank')}
                >
                  View on map
                  <img src="assets/about/right.svg" alt="" />
                </button>

              </div>
              <div className="contact-card relative cursor-pointer">
                <img
                  src="assets/icon3.svg"
                  className="absolute top-[50%] left-[-40px] translate-y-[-50%]"
                  alt=""
                />
                <div className="">
                  <div>
                    <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] pb-[7px]">
                      Contact
                    </h6>
                    <p className="
                    w-[full]
                    font-[Outfit] font-[400] text-[18px] leading-[22.68px] text-[#545454] pb-0 mb-0">
                      +91 9009335533
                    </p>
                  </div>
                  
                  <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
                    <button
                      onClick={handlePhoneCall}
                      className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]"
                    >
                      Call <img src="assets/about/right.svg" alt="" />
                    </button>
                  
                </div>
              </div>
              <div className="contact-card cursor-pointer">
                <img
                  src="assets/video/item3.svg"
                  className="absolute top-[50%] left-[-40px] translate-y-[-50%]"
                  alt=""
                />
                <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] mb-0 pb-[4px]">
                  Email
                </h6>
                <p className="font-[Outfit] font-[400] text-[18px] leading-[22.68px] text-left text-[#545454] pb-[0px]">
                  support@winnersinstitute.in
                </p>
                <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
                <button
                  onClick={openMailbox}
                  className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]"
                >
                  Email Now  <img src="assets/about/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1C2672] pt-[28px] md:pb-[247px] pb-[30px] md:px-0 px-[20px]">
        <div className="md:hidden grid md:grid-cols-3 md:justify-items-start justify-items-center grid-cols-1 md:gap-[30px] gap-[100px] md:pb-0 pb-[30px]">
          <div className="contact-card">
            <img
              src="assets/video/item1.svg"
              className="absolute top-[-56px] left-[50%] translate-x-[-50%]"
              alt=""
            />
            <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] pb-[27px]">
              Address
            </h6>
            <p className="font-[Outfit] font-[400] text-[18px] leading-[22.68px] text-center text-[#545454] pb-[34px]">
              The WiNNERS Institute, Opposite Vishnupuri iBus Stop, Indore (MP)
            </p>
            <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
            <button
              className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]"
              onClick={() => window.open('https://www.google.com/maps/dir//The+Winners+Institute+Winners+New+Campus,+Opposite+Vishnupuri-bus+stop+Near+Bholaram+Gate+AB+Rd+Indore,+Madhya+Pradesh+452001/@22.6887898,75.8638694,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fce48cd5ed1b:0x3e981f0ba5111eef!2m2!1d75.8638694!2d22.6887898?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D', '_blank')}
            >
              View on map
              <img src="assets/about/right.svg" alt="" />
            </button>

          </div>
          <div className="contact-card cursor-pointer max-md:[height:190px!important]">
            <img
              src="assets/icon3.svg"
              className="absolute top-[-56px] left-[50%] translate-x-[-50%]"
              alt=""
            />
            <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] pb-[27px]">
              Contact
            </h6>
            <p className="font-[Outfit] h-[124px] font-[400] text-[18px] leading-[22.68px] text-center text-[#545454] md:pb-[34px] pb-0">
              +91 9009335533
            </p>
            <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
            <button
              onClick={handlePhoneCall}
              className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]"
            >
              Call <img src="assets/about/right.svg" alt="" />
            </button>
          </div>
          <div className="contact-card cursor-pointer max-md:[height:190px!important]">
            <img
              src="assets/video/item3.svg"
              className="absolute top-[-56px] left-[50%] translate-x-[-50%]"
              alt=""
            />
            <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] pb-[27px]">
              Email
            </h6>
            <p className="font-[Outfit] h-[124px] font-[400] text-[18px] leading-[22.68px] text-center text-[#545454] md:pb-[34px] pb-0">
              support@winnersinstitute.in
            </p>
            <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
            <button
              onClick={openMailbox}
              className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]"
            >
              Email Now  <img src="assets/about/right.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="max-w-[921px] m-auto w-full bg-[#FFFFFF] px-[56px] py-[54px] rounded-[8px]">
          <p className="font-sans font-[800] text-[#D0021B] text-[20px] leading-[20.54px]">
            Ready To Get Started
          </p>
          <div className="md:pt-[58px] pt-[30px] grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[20px]">
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
                required
                className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                Last Name *
              </h6>
              <input
                type="text"
                name="lastName"
                value={formData?.lastName}
                required
                onChange={handleChange}
                placeholder="Last Name"
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
                name="Email"
                value={formData?.Email}
                required
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
                name="number"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                maxLength={10}
                required
                value={formData?.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                Enquiry For *
              </h6>
              <input
                type="text"
                name="EnquiryFor"
                required
                value={formData?.EnquiryFor}
                onChange={handleChange}
                placeholder="Enquiry For"
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
                value={formData?.Remark}
                placeholder="Enter Message"
                onChange={handleChange}
                id=""
              ></textarea>
            </div>

            <div className="md:col-span-2 col-span-1 flex md:flex-row flex-col items-center justify-center gap-[16px]">
              {/* <button className="flex items-center gap-[22px] bg-transparent border border-[#D0021B] py-[17px] px-[37px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#D0021B]">
                Cancel
              </button> */}
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
      {/* <div className="contact-section">
        <div className="flex flex-col items-center md:px-0 px-[20px] md:pt-[117px] pt-[50px]">
          <div data-aos="fade-up">
            <h6 className="font-sans font-[700] pb-[12px] text-[46px] leading-[47px] text-[#FFFFFF]">
              Contact Us
            </h6>
            <img src="assets/video/line-red.svg" alt="" />
          </div>
          <div data-aos="fade-down">
            <p className="font-sans font-[400] text-[18px] leading-[24px] text-[#FFFFFF] pt-[12px]">
              Get in touch and let us know how we can help.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="contact-bg w-full md:pb-[270px] pb-[50px]">
        <div className="md:h-[350px] w-full h-auto relative">
          <div className="max-w-[921px] md:mt-[0px] mt-[50px] w-full md:absolute relative left-[50%] translate-x-[-50%] md:top-[-120px] top-0 m-auto">
            <div className="grid md:grid-cols-3 md:justify-items-start justify-items-center grid-cols-1 md:gap-[30px] gap-[100px] md:pb-0 pb-[30px]">
              <div className="contact-card">
                <img
                  src="assets/video/item1.svg"
                  className="absolute top-[-56px] left-[50%] translate-x-[-50%]"
                  alt=""
                />
                <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] pb-[27px]">
                  Address
                </h6>
                <p className="font-[Outfit] font-[400] text-[18px] leading-[22.68px] text-center text-[#545454] pb-[34px]">
                  The WiNNERS Institute, infront of Vishnupuri iBus stop, A.B.
                  Road, Indore, Madhya Pradesh 452001
                </p>
                <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
                <button className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]">
                  View on map <img src="assets/about/right.svg" alt="" />
                </button>
              </div>
              <div className="contact-card cursor-pointer">
                <img
                  src="assets/icon3.svg"
                  className="absolute top-[-56px] left-[50%] translate-x-[-50%]"
                  alt=""
                />
                <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] pb-[27px]">
                  Contact
                </h6>
                <p className="font-[Outfit] h-[124px] font-[400] text-[18px] leading-[22.68px] text-center text-[#545454] pb-[34px]">
                  +91 9009335533
                </p>
                <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
                <button
                  onClick={handlePhoneCall}
                  className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]"
                >
                  Call <img src="assets/about/right.svg" alt="" />
                </button>
              </div>
              <div className="contact-card cursor-pointer">
                <img
                  src="assets/video/item3.svg"
                  className="absolute top-[-56px] left-[50%] translate-x-[-50%]"
                  alt=""
                />
                <h6 className="font-[Outfit] font-[600] text-[20px] leading-[25.2px] pb-[27px]">
                  Email
                </h6>
                <p className="font-[Outfit] h-[124px] font-[400] text-[18px] leading-[22.68px] text-center text-[#545454] pb-[34px]">
                  support@winnersinstitute.in
                </p>
                <div className="bg-[#0000004D] h-[1px] w-full mb-[21px]"></div>
                <button
                  onClick={openMailbox}
                  className="flex items-center gap-[24px] justify-center text-[#D0021B] font-[Outfit] font-[500] text-[16px] leading-[16px]"
                >
                  Visit Now <img src="assets/about/right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[921px] m-auto w-full bg-[#FFFFFF] border border-[#000000] rounded-[30px]">
          <p className="bg-[#FBE596] py-[22px] md:px-[50px] px-[14px] font-sans font-[700] text-[#000000] text-[20px] leading-[20.54px] border-b border-[#000000] rounded-t-[30px]">
            Enquiry
          </p>
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
                required
                className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                Last Name *
              </h6>
              <input
                type="text"
                name="lastName"
                value={formData?.lastName}
                required
                onChange={handleChange}
                placeholder="Last Name"
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
                name="Email"
                value={formData?.Email}
                required
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
                name="number"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                maxLength={10}
                required
                value={formData?.number}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                Enquiry For *
              </h6>
              <input
                type="text"
                name="EnquiryFor"
                required
                value={formData?.EnquiryFor}
                onChange={handleChange}
                placeholder="Enquiry For"
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
                value={formData?.Remark}
                onChange={handleChange}
                id=""
              ></textarea>
            </div>

            <div className="pb-[60px] md:col-span-2 col-span-1 flex md:flex-row flex-col items-center justify-center gap-[16px]">
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
      </div> */}
      <div className="h-[553px] bg-[#1C2672] px-[0px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.0604165584036!2d75.86129447590517!3d22.68879472870042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce48cd5ed1b%3A0x3e981f0ba5111eef!2sThe%20Winners%20Institute!5e0!3m2!1sen!2sin!4v1707987250139!5m2!1sen!2sin"
          title="map"
          style={{
            border: 0,
            // boxShadow: "0px 0px 10px 0px #00000040",
            // borderRadius: "20px",
          }}
          loading="lazy"
          className="md:absolute w-full relative md:top-[0px] top-auto h-[553px]"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <img
            src="assets/video/photo6.png"
            alt=""
          /> */}
      </div>
      <Footer />
    </>
  );
}

export default ContactUS;
