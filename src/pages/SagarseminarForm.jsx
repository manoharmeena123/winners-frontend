import axios from "axios";
import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
// import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { DeleteApi, GetApi, PutApi } from "../ApIcall";
import MarathonBanner from "../components/MarathonBanner";
import { Api_Url } from "../URL";
function SagarseminarForm() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  const [PaymentMessage, setPaymentMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    Gender: "",
    FatherName: "",
    Mobile: "",
    AlternateNumber: "",
    Email: "",
    City: "",
    Qualification: "",
    ExamName: "",
    // Image: null,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };
    // Load Razorpay script
    loadScript("https://checkout.razorpay.com/v1/checkout.js")
      .then(() => {
        // Script loaded successfully
        console.log("Razorpay script loaded");
      })
      .catch((error) => {
        // Error while loading script
        console.error("Error loading Razorpay script:", error);
      });
  }, []);
  const SubmitTheForm = async (e) => {
    e.preventDefault();
    for (const key in formData) {
      if (formData[key] === "" || formData[key] === null) {
        alert("Please fill all fields!");
        return;
      }
      if (key === "Mobile" && formData[key].length !== 10) {
        alert("Mobile number should be exactly 10 digits!");
        return;
      }
    }
    const newFormData = new FormData();
    newFormData.append("FullName", formData.FullName);
    newFormData.append("Gender", formData.Gender);
    newFormData.append("FatherName", formData.FatherName);
    newFormData.append("Mobile", formData.Mobile);
    newFormData.append("AlternateNumber", formData.AlternateNumber);
    newFormData.append("Email", formData.Email);
    newFormData.append("City", formData.City);
    newFormData.append("Qualification", formData.Qualification);
    newFormData.append("ExamName", formData.ExamName);
    //newFormData.append("Image", formData.Image);
    try {
      setIsSubmitting(true);
      const response = await axios.post(
        `https://apis.winnersinstitute.in/api/admin/AddSagarSeminar`,
        newFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response?.data?.statusCode === 200) {
        let responseId = response?.data?.data?._id;
        initializePayment(e, responseId);
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Error submitting form");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const updatestatus = async (id) => {
    try {
      const response = await PutApi(
        `api/admin/updatesagarseminarPaymentStatus/${id}`,
        {}
      );
      console.log(response.data);
      await Sendmail(id);
    } catch (error) {
      console.error("Error updating payment status:", error);
    }
  };
  const Sendmail = async (id) => {
    try {
      const response = await GetApi(`api/admin/sendMailregistration/${id}`);
      console.log(response);
      setFormSubmitted(true);
      navigate(`/ticket-page/${id}`);
    } catch (error) {
      console.error("Error updating payment status:", error);
    }
  };
  const deleteresponse = async (id) => {
    try {
      const response = await DeleteApi(
        `api/admin/DeleteSingleFormdata/${id}`, 
        {}
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error updating payment status:", error);
    }
  };
  const initializePayment = async (e, userOrderId) => {
    let amount = 5000;
    const response = await axios.post(
      `${Api_Url}/rzp/Payment`,
      {
        amount: amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response?.data?.id);
    if (!response) {
      alert("Server error. Are you online?");
      return;
    }
    try {
      console.log(userOrderId);
      if (!userOrderId) {
        return;
      }
      const options = {
        key: "rzp_live_ixpg2h0aPfqalP",
        amount: amount,
        currency: "INR",
        name: "Winner's Institute",
        description: "Winner's Institute Form",
        image:
          "https://www.winnersinstitute.in/static/media/logo-.216f713dd801927c2afed370ba584bd8.svg",
        order_id: response?.data?.id,
        handler: async function (response) {
          console.log(response);
          verifyPayment(e, userOrderId, response);
        },
        prefill: {
          name: formData?.FullName,
          email: formData?.Email,
          contact: formData?.Mobile,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#F37254",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      await deleteresponse(userOrderId);
      console.log(error);
    }
  };
  const verifyPayment = async (e, orderid, ids) => {
    try {
      console.log(orderid, ids);
      const response = await fetch(`${Api_Url}/rzp/payment-verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpayPaymentId: ids?.razorpay_payment_id,
          razorpayOrderId: ids?.razorpay_order_id,
          razorpaySignature: ids?.razorpay_signature,
          orderid,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        await updatestatus(orderid);
        console.log("Payment Successfully");
        setPaymentMessage("Payment verified successfully!");
      } else {
        await deleteresponse(orderid);
        setPaymentMessage("Payment verification failed.");
      }
    } catch (error) {
      await deleteresponse(orderid);
      console.log("Payment failed");
      console.error("Error verifying payment:", error);
      setPaymentMessage("An error occurred while verifying payment.");
    }
  };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const [showotpModal, setShowotpModal] = useState(false);
  const handleShowotpModal = () => setShowotpModal(true);
  const handleCloseotpModal = (e) => {
    e.preventDefault();
    setShowotpModal(false);
  };
  const [Number, setNumber] = useState("");
  const [Otp, setotp] = useState("");
  const [inputotp, setinputotp] = useState("");
  const generateOTP = () => {
    const randomOTP = Math.floor(1000 + Math.random() * 9000);
    return randomOTP;
  };
  const Sendotp = async (e) => {
    for (const key in formData) {
      if (formData[key] === "" || formData[key] === null) {
        alert("Please fill all fields!");
        return;
      }
      if (key === "Mobile" && formData[key].length !== 10) {
        alert("Mobile number should be exactly 10 digits!");
        return;
      }
    }
    e.preventDefault();
    try {
      if (!formData?.Mobile) {
        alert("Number is Missing");
        return;
      }
      let generatedotp = generateOTP();
      setotp(generatedotp);
      const response = await axios.post(`${Api_Url}/api/User/SendOtp`, {
        Number: "+91" + formData?.Mobile,
        otp: generatedotp,
      });
      if (response?.data?.statusCode === 200) {
        handleShowotpModal();
        setShowotpModal(true);
      } else {
        alert("Invalid Number");
      }
    } catch (error) {
      alert(error?.response?.data?.reason);
    }
  };
  const Verifyotp = async (e) => {
    e.preventDefault();
    if (Otp == inputotp) {
      handleCloseModal();
      handleCloseotpModal(e);
      setinputotp("");
      SubmitTheForm(e);
    } else {
      alert("invalid Otp");
    }
  };

  return (
    <>
      {/* <Navbar bgColor="#FFF" color="#000" /> */}
      <Header bgColor="#FFF" color="#000" />
      {formSubmitted ? (
        <>
          <MarathonBanner />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
            className="alert alert-success"
            role="alert"
          >
            Thank you for submitting the form. Please check your email for a
            confirmation message and details.
          </div>
        </>
      ) : (
        <>
          <MarathonBanner />
          <div className="result-cards-container">
            <div className="personal-info-form">
              <div className="personal-info-form-a">
                <div className="container">
                  <div className="grid md:grid-cols-3 grid-cols-1 md:gap-y-[45px] gap-y-[16px] gap-[21px]">
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        {" "}
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Full Name
                        </label>
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                          name="FullName"
                          value={formData?.FullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Gender
                        </label>
                        <div className="relative mt-[4px]">
                          {/* <div className="absolute right-[30px] top-[50%] translate-y-[-50%]">
                            <img src={downImg} alt="" />
                          </div> */}
                          <select
                            className="bg-[#FFFFFF] w-full border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                            name="Gender"
                            onChange={handleChange}
                            required
                          >
                            <option value="">Please Select</option>
                            <option value="SSC">Male</option>
                            <option value="BANK">Female</option>
                            <option value="MPSI/VYAPAM">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Gender
                        </label>
                        <div className="relative mt-[4px]">
                          {/* <div className="absolute right-[30px] top-[50%] translate-y-[-50%]">
                            <img src={downImg} alt="" />
                          </div> */}
                          <select
                            className="bg-[#FFFFFF] w-full border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                            name="Gender"
                            onChange={handleChange}
                            required
                          >
                            <option value="">Please Select</option>
                            <option value="SSC">Male</option>
                            <option value="BANK">Female</option>
                            <option value="MPSI/VYAPAM">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Father's Name
                        </label>
                        <input
                          type="text"
                          className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                          name="FatherName"
                          value={formData?.FatherName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Mobile No
                        </label>
                        <input
                          type="text"
                          className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                          name="Mobile"
                          value={formData?.Mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Alternate Number
                        </label>
                        <input
                          type="text"
                          className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                          name="AlternateNumber"
                          value={formData?.AlternateNumber}
                          onChange={handleChange}
                          required
                        />{" "}
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Email
                        </label>
                        <input
                          type="text"
                          className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                          name="Email"
                          value={formData?.Email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        {" "}
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          City
                        </label>
                        <input
                          type="text"
                          className="bg-[#FFFFFF] border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                          name="City"
                          value={formData?.City}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        {" "}
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Qualification
                        </label>
                        <label className="font-[Outfit] font-[400] text-[18px] leading-[24px] text-[#000000]">
                          Qualification
                        </label>
                        <div className="relative mt-[4px]">
                          {/* <div className="absolute right-[30px] top-[50%] translate-y-[-50%]">
                            <img src={downImg} alt="" />
                          </div> */}
                          <select
                            className="bg-[#FFFFFF] w-full border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                            name="Qualification"
                            onChange={handleChange}
                            required
                          >
                            <option value="">Please Select</option>
                            <option value="10th pass">10th pass</option>
                            <option value="12th pass">12th pass</option>
                            <option value="Under Graduate">
                              Under Graduate
                            </option>
                            <option value="Graduate">Graduate</option>
                            <option value="Post Graduate">Post Graduate</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-col gap-[10px]">
                        <label className="font-[Outfit] font-[400] text-[16px] leading-[22px] text-[#000000]">
                          आप किस सरकारी नौकरी की तैयारी करे रहे या करना चाहते है
                          ?*
                        </label>
                        <div className="relative mt-[4px]">
                          {/* <div className="absolute right-[30px] top-[50%] translate-y-[-50%]">
                            <img src={downImg} alt="" />
                          </div> */}
                          <select
                            className="bg-[#FFFFFF] w-full border border-[#D2D0D0] transition-all duration-300 hover:border-[#D0021B] md:py-[21px] py-[12px] md:px-[33px] px-[20px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] hover:text-[#D0021B] rounded-[8px] outline-[#D0021B]"
                            name="ExamName"
                            onChange={handleChange}
                            required
                          >
                            <option value="">Please Select</option>
                            <option value="MPPSC">MPPSC</option>
                            <option value="SSC">SSC</option>
                            <option value="BANK">BANK</option>
                            <option value="RAILWAY">RAILWAY</option>
                            <option value="DEFENCE/ARMY">DEFENCE/ARMY</option>
                            <option value="MPSI/VYAPAM">MPSI/VYAPAM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-6 col-sm-12 mt-4">
                      <div className="flex flex-col gap-[10px]">
                        <label className="form-label pt-3">
                          आपका फोटो या सेल्फी अपलोड करे !*
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="Image"
                          onChange={handleChange}
                          required
                        />   </div>
                    </div> */}
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    className="flex items-center gap-[22px] bg-[#D0021B] py-[14px] px-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF]"
                    onClick={(e) => {
                      Sendotp(e);
                    }}
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <NumberInputModal
            show={showModal}
            handleClose={handleCloseModal}
            Sendotp={Sendotp}
            Number={Number}
            setNumber={setNumber}
          />
          <OtpInputModal
            show={showotpModal}
            handleClose={handleCloseotpModal}
            Verifyotp={Verifyotp}
            inputotp={inputotp}
            setinputotp={setinputotp}
          />
        </>
      )}
      <Footer />
    </>
  );
}
export default SagarseminarForm;

function NumberInputModal({ show, handleClose, Number, setNumber, Sendotp }) {
  if (!show) return null;
  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg  w-1/3">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Number Input Modal</h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              {" "}
              &times;
            </button>
          </div>
          <div className="p-6">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="numberInput"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter a Number:
                </label>
                <input
                  id="numberInput"
                  type="number"
                  value={Number}
                  onChange={handleInputChange}
                  placeholder="Enter a number"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end mt-6 space-x-3">
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    Sendotp(e);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function OtpInputModal({
  show,
  handleClose,
  inputotp,
  setinputotp,
  Verifyotp,
}) {
  if (!show) return null;
  const handleInputChange = (event) => {
    setinputotp(event.target.value);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            OTP Verification
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="numberInput"
                className="block text-sm font-medium text-gray-700"
              >
                Enter OTP:
              </label>
              <input
                id="numberInput"
                type="number"
                value={inputotp}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-3"
                onClick={(e) => {
                  handleClose(e);
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={(e) => {
                  Verifyotp(e);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>{" "}
          </form>
        </div>
      </div>
    </>
  );
}
