import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api_Url } from "../URL";
// import FormBanner from "../Components/FormBanner";
import { DeleteApi, PostApi, PutApi } from "../ApIcall";
import CarrerBanner from "../components/CarrerBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";

function CareerGuidanceSeminarform() {
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
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    DOB: "",
    City: "",
    Qualification: "",
    Exam: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
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
    for (const key in formData) {
      if (formData[key] === "") {
        alert("Please fill all fields!");
        return;
      }
      if (key === "MobileNo" && formData[key].length !== 10) {
        alert("Mobile number should be exactly 10 digits!");
        return false;
      }
    }
    e.preventDefault();

    const newformdata = {
      Name: formData?.Name,
      Email: formData?.Email,
      Mobile: formData?.Mobile,
      DOB: formData?.DOB,
      City: formData?.City,
      Qualification: formData?.Qualification,
      Exam: formData?.Exam,
    };

    try {
      const response = await PostApi(`api/admin/AddSeminar`, newformdata);
      if (response?.data?.statusCode === 200) {
        let responceId = response?.data?.data?._id;
        initializePayment(e, responceId);
      }
      await deleteresponse(response?.data?.data?._id);
    } catch (error) {
      alert(error?.response?.data?.message);
      console.error("Error submitting form:", error);
    }
  };

  const updatestatus = async (id) => {
    try {
      const response = await PutApi(
        `api/admin/UpdateSaminarpaymentstatus/${id}`,
        {}
      );
      console.log(response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error updating payment status:", error);
    }
  };
  const deleteresponse = async (id) => {
    try {
      const response = await DeleteApi(`api/admin/DeleteSeminar/${id}`, {});
      console.log(response.data);
    } catch (error) {
      console.error("Error updating payment status:", error);
    }
  };

  const initializePayment = async (e, userOrderId) => {
    let amount = 2500;
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
          name: formData?.Name,
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
      console.error("Error verifying payment:", error);
      setPaymentMessage("An error occurred while verifying payment.");
    }
  };
  return (
    <>
      <Header bgColor="#FFF" color="#000" />
      {formSubmitted ? (
        <>
          <CarrerBanner />
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
          <CarrerBanner />
          <div className="result-cards-container">
            <div className="personal-info-form">
              <div className="personal-info-form-a">
                <div className="container">
                  <div className="md:pt-[58px] pt-[30px] md:px-[58px] px-[20px] grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[20px]">
                    <div className="flex flex-col gap-[7px]">
                      <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                        Email *
                      </h6>
                      <input
                        type="text"
                        className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                        name="Email"
                        value={formData?.Email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                        First Name *
                      </h6>
                      <input
                        type="text"
                        className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                        name="Name"
                        value={formData?.Name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                        Mobile No
                      </h6>
                      <input
                        type="text"
                        className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                        name="Mobile"
                        value={formData?.Mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                        Date Of Birth
                      </h6>
                      <input
                        type="text"
                        className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                        name="DOB"
                        value={formData?.DOB}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                        City / Village
                      </h6>
                      <input
                        type="text"
                        className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                        name="City"
                        value={formData?.City}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                        Qualification
                      </h6>
                      <select
                        className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                        name="Qualification"
                        onChange={handleChange}
                        required
                      >
                        <option value="">Please Select</option>
                        <option value="10th Pass">10th Pass</option>
                        <option value="12th Pass">12th Pass</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-[7px]">
                      <h6 className="font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">
                        आप किस परीक्षा की तैयारी कर रहे है या भविष्य में करना
                        चाहते हैं ?
                      </h6>
                      <select
                        className="border border-[#D2D0D0] bg-[#FFFFFF] rounded-[8px] font-[Outfit] font-[400] text-[16px] leading-[20.16px] text-[#545454] md:py-[20px] py-[12px] md:px-[33px] px-[20px]"
                        name="Exam"
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

                <div className=" mt-4 flex justify-center">
                  <button
                    className="flex items-center gap-[22px] bg-[#D0021B] py-[14px] pr-[28px] pl-[20px] rounded-full font-[Outfit] font-[500] text-[16px] leading-[16.43px] text-[#FFFFFF]"
                    onClick={(e) => {
                      SubmitTheForm(e);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default CareerGuidanceSeminarform;
