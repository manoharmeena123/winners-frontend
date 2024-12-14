import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import { Api_Url } from "../URL";

function Career2() {
  const [submitted, setSubmitted] = useState(false);
  const [career, setCareer] = useState("Teaching");
  const [isloading, setisloading] = useState(false);

  function openMailbox() {
    window.open("mailto:support@winnersinstitute.in");
  }

  const [formData, setFormData] = useState({
    Name: "",
    // Resume: null,
    PositionApplyFor: career,
    Number: "",
    Email: "",
    City: "",
    Gender: "",
    DOB: "",
    district: "",
    State: "",
    EducationQualification: "",
    competitiveExam: false,
    // Teach: [],
    Teachingexprience: "",
    Totalexprience: "",
    Presentorganization: "",
    CurrentSalary: "",
    soonjoinus: "",
    SalaryExpectation: "",
    videoUrl: "",
  });

  console.log(formData, "aa");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === "Resume" ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = `${key} is required`;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors);
      setErrors(validationErrors);
      return;
    }
    try {
      setisloading(true);
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      const response = await axios.post(
        `${Api_Url}/api/admin/CreateCarrer`,
        formDataToSend
      );
      alert("Form submitted successfully!");
      console.log("Form submitted successfully:", response.data);
      setisloading(false);
      setSubmitted(true);
    } catch (error) {
      setisloading(false);
      alert("Error submitting form!");
      console.error("Error submitting form:", error);
    }
  };
  // function openMailbox() {
  //   window.open("mailto:support@winnersinstitute.in");
  // }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [teaching, setTeaching] = useState(true);

  const selectTeaching = (event) => {
    setCareer(event.target.value);
  };

  const selectnonTeaching = () => {
    setCareer("Non Teaching");
    setTeaching(false);
  };

  return (
    <>
      <Header />
      <div className="career-section">
        <img
          src="/assets/i/Career_Image.jpg"
          className="w-full object-cover"
          alt=""
        />
        <div className="absolute top-[50%] z-10 translate-x-[-50%] max-w-[817px] w-full m-auto translate-y-[-50%] left-[50%]">
          <h6 className="text-center font-sans font-[800] md:text-[46px] text-[34px] md:leading-[47.24px] leading-[40px] text-[#FFFFFF] pb-[18px]">
            Career 
          </h6>
          <p className="font-[Outfit] text-[#FFFFFF] font-[400] md:text-[18px] text-[12px] text-center md:leading-[28px] leading-[16px]">
            If you are interested in being a part of our team, we have job
            possibilities for you. We are always looking for exceptional
            candidates. If you are passionate, you can send us your resume at
            <Link className="underline" onClick={openMailbox}> ho@winnersinstitute.in </Link> or Apply
            Online
          </p>
        </div>
      </div>
      <div className="bg-[#1C2672] md:px-[80px] px-[20px]">
        <div className="bg-[#FFFFFF] relative md:top-[-133px] top-0 rounded-[8px] py-[44px] md:px-[52px] px-[10px]">
          <h6 className="font-sans text-[#E31E24] pb-[48px] font-[700] md:text-[24px] text-[14px] md:leading-[32px] leading-[24px]">
            Position Apply For
          </h6>
          <div className="flex pb-[60px] gap-4">
            <label
              htmlFor="teaching"
              className={`relative flex items-center justify-start gap-[9px] py-[15.69px] pr-[7px] pl-[20px] font-[Outfit] font-[600] text-[18.31px] leading-[26.16px] cursor-pointer ${
                career === "Teaching" ? "text-[#D0021B]" : "text-[#616161]"
              }`}
            >
              <input
                type="radio"
                id="teaching"
                className="hidden"
                name="career"
                value="Teaching"
                checked={career === "Teaching"}
                onChange={selectTeaching}
              />
              <span
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 outline outline-offset-2 mr-[20px] w-[14px] h-[14px] rounded-full ${
                  career === "Teaching"
                    ? "bg-[#D0021B] outline-[#D0021B]"
                    : "bg-transparent outline-[#616161]"
                }`}
              ></span>
              <p className="ml-[10px]">Teaching</p>
            </label>
            <label
              htmlFor="nonTeaching"
              className={`relative flex items-center gap-[9px] py-[15.69px] pr-[7px] pl-[20px] font-[Outfit] font-[600] text-[18.31px] leading-[26.16px] cursor-pointer ${
                career === "Non Teaching" ? "text-[#D0021B]" : "text-[#616161]"
              }`}
            >
              <input
                type="radio"
                id="nonTeaching"
                name="career"
                className="hidden"
                value="Non Teaching"
                checked={career === "Non Teaching"}
                onChange={selectTeaching}
              />
              <span
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 outline outline-offset-2 mr-[20px] w-[14px] h-[14px] rounded-full ${
                  career === "Non Teaching"
                    ? "bg-[#D0021B] outline-[#D0021B]"
                    : "bg-transparent outline-[#616161]"
                }`}
              ></span>
              <p className="ml-[10px]">Non Teaching</p>
            </label>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 items-end md:gap-y-[45px] gap-y-[16px] gap-[21px]">
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                Full Name *
              </p>
              <input
                type="text"
                name="Name"
                value={formData?.Name}
                onChange={handleChange}
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                placeholder="Full Name"
              />
              {errors?.Name && (
                <p className="error text-[#D0021B]">{errors?.Name}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                Gender*
              </p>
              <select
                name="Gender"
                id=""
                value={formData?.Gender}
                onChange={handleChange}
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
              >
                <option value="Select Gander">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Women">Women</option>
                <option value="Other">Other</option>
              </select>
              {errors.Gender && (
                <p className="error text-[#D0021B]">{errors?.Gender}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                DOB *
              </p>
              <input
                type="date"
                name="DOB"
                placeholder="DOB"
                value={formData.DOB}
                onChange={handleChange}
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
              />
              {errors?.DOB && (
                <p className="error text-[#D0021B]">{errors?.DOB}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                Current District *
              </p>
              <input
                type="text"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                name="district"
                placeholder="Enter  District Here"
                value={formData?.district}
                onChange={handleChange}
              />
              {errors?.district && (
                <p className="error text-[#D0021B]">{errors?.district}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                Email *
              </p>
              <input
                type="text"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                name="Email"
                placeholder="Enter  Email Here"
                value={formData.Email}
                onChange={handleChange}
              />
              {errors?.Email && (
                <p className="error text-[#D0021B]">{errors?.Email}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                Mobile Number 
              </p>
              <input
                type="text"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                name="Number"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                maxLength={10}
                placeholder="Enter  Number Here"
                value={formData?.Number}
                onChange={handleChange}
              />
              {errors?.Number && (
                <p className="error text-[#D0021B]">{errors?.Number}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                Work-Station Preference *
              </p>
              <input
                type="text"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                placeholder="Work-Station Preference"
                name="City"
                value={formData?.City}
                onChange={handleChange}
              />
              {errors.City && (
                <p className="error text-[#D0021B]">{errors?.City}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                State *
              </p>
              <input
                type="text"
                name="State"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                placeholder="Current State"
                value={formData.State}
                onChange={handleChange}
              />
              {errors.State && (
                <p className="error text-[#D0021B]">{errors?.State}</p>
              )}
            </div>
            {career === "Teaching" && (
              <>
                <div className="flex flex-col gap-[7px]">
                  <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                    Highest Educational Qualification *
                  </p>
                  <input
                    type="text"
                    name="EducationQualification"
                    className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                    placeholder="Education Qualification"
                    value={formData.EducationQualification}
                    onChange={handleChange}
                  />
                  {errors.EducationQualification && (
                    <p className="error text-[#D0021B]">
                      {errors?.EducationQualification}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                    Have you appeared in any state/national level competitive
                    exam? *
                  </p>
                  <select
                    name="competitiveExam"
                    value={formData?.competitiveExam}
                    className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                    onChange={handleChange}
                  >
                    <option value="">Select </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  {errors?.competitiveExam && (
                    <p className="error text-[#D0021B]">
                      {errors?.competitiveExam}
                    </p>
                  )}
                </div>
              </>
            )}
            {career === "Teaching" && (
              <>
                <div className="flex flex-col gap-[7px]">
                  <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                    Teaching Experience *
                  </p>
                  <input
                    type="text"
                    name="Teachingexprience"
                    className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                    placeholder="Teaching Experience"
                    value={formData.Teachingexprience}
                    onChange={handleChange}
                  />
                  {errors.Teachingexprience && (
                    <p className="error text-[#D0021B]">
                      {errors?.Teachingexprience}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                    Total Work Experience *
                  </p>
                  <input
                    type="text"
                    name="Totalexprience"
                    className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                    placeholder="Total Experience"
                    value={formData.Totalexprience}
                    onChange={handleChange}
                  />
                  {errors.Totalexprience && (
                    <p className="error text-[#D0021B]">
                      {errors?.Totalexprience}
                    </p>
                  )}
                </div>
              </>
            )}
            {career === "Non Teaching" && (
              <>
                <div className="flex flex-col gap-[7px]">
                  <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                    Highest Educational Qualification *
                  </p>
                  <input
                    type="text"
                    name="EducationQualification"
                    className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                    placeholder="Education Qualification"
                    value={formData.EducationQualification}
                    onChange={handleChange}
                  />
                  {errors.EducationQualification && (
                    <p className="error text-[#D0021B]">
                      {errors?.EducationQualification}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-[7px]">
                  <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                    Total Work Experience *
                  </p>
                  <input
                    type="text"
                    name="Totalexprience"
                    className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                    placeholder="Total experience"
                    value={formData.Totalexprience}
                    onChange={handleChange}
                  />
                  {errors.Totalexprience && (
                    <p className="error text-[#D0021B]">
                      {errors?.Totalexprience}
                    </p>
                  )}
                </div>
              </>
            )}
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                Your present orgnisation? *
              </p>
              <input
                type="text"
                name="Presentorganization"
                placeholder="Present organization"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                value={formData.Presentorganization}
                onChange={handleChange}
              />
              {errors.Presentorganization && (
                <p className="error text-[#D0021B]">
                  {errors?.Presentorganization}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                What is your current monthly salary/remuneration? *
              </p>
              <input
                type="text"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                name="CurrentSalary"
                placeholder="Current Salary"
                value={formData.CurrentSalary}
                onChange={handleChange}
              />
              {errors.CurrentSalary && (
                <p className="error text-[#D0021B]">{errors?.CurrentSalary}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                if selected, how soon can you join us? *
              </p>
              <select
                type="text"
                name="soonjoinus"
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                value={formData.soonjoinus}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="10 - 15 days">10 - 15 days</option>
                <option value="15 -30 days">15 -30 days</option>
                <option value="30 - 45 days">30 - 45 days</option>
                <option value="45 - 60 days">45 - 60 days</option>
                <option value="45 - 60 days">More Than 60 days</option>
              </select>
              {errors.soonjoinus && (
                <p className="error text-[#D0021B]">{errors?.soonjoinus}</p>
              )}
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                What is your monthly salary/remuneration expectation? *
              </p>
              <input
                type="text"
                name="SalaryExpectation"
                placeholder="Salary Expectation"
                value={formData.SalaryExpectation}
                onChange={handleChange}
                className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
              />
              {errors.SalaryExpectation && (
                <p className="error text-[#D0021B]">
                  {errors?.SalaryExpectation}
                </p>
              )}
            </div>
            {career === "Teaching" && (
              <>
                <div className="flex flex-col gap-[7px]">
                  <p className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                    Please share your demo lectures video link. (If Available)*
                  </p>
                  <input
                    type="text"
                    name="videoUrl"
                    placeholder="Video Url"
                    value={formData.videoUrl}
                    className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                    onChange={handleChange}
                  />
                  {errors.videoUrl && (
                    <p className="error text-[#D0021B]">{errors?.videoUrl}</p>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="flex pt-[78px] pb-[26px] justify-center items-center">
            <button
              onClick={() => handleSubmit()}
              className="flex items-center gap-[22px] bg-[#D0021B] py-[4px] pr-[7px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF]"
            >
              Submit
              <img
                className="btn-arrow"
                src="assets/home/round-right.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="container m-auto">
        <div className="mt-[28px] mb-[46px] max-w-[447.26px] m-auto rounded-[41.85px] bg-[#F7F7FE] flex items-center justify-center gap-[16px]">
          <button
            onClick={() => selectTeaching()}
            className={`flex items-center justify-center gap-[22px] py-[15.69px] pr-[7px] pl-[20px] w-full rounded-full font-[Outfit] font-[600] text-[18.31px] leading-[26.16px] ${
              career === "Teaching"
                ? "text-[#FFFFFF] bg-[#D0021B]"
                : "text-[#545454] bg-transparent"
            } `}
          >
            Teaching
          </button>
          <button
            onClick={() => selectnonTeaching()}
            className={`flex items-center justify-center gap-[22px] py-[15.69px] pr-[7px] pl-[20px] w-full rounded-full font-[Outfit] font-[600] text-[18.31px] leading-[26.16px] ${
              career === "Non Teaching"
                ? "text-[#FFFFFF] bg-[#D0021B]"
                : "text-[#545454] bg-transparent"
            } `}
          >
            Non Teaching
          </button>
        </div>
    
      </div> */}

      <Footer />
    </>
  );
}

export default Career2;
