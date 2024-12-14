import Aos from "aos";
import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";

function RefundPolicy() {
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
      <div className="mt-[100px]">
        <div data-aos="fade-right">
          <h1 className="font-sans text-center pb-[20px] font-[700] text-[36px] leading-[45px] text-black">
            Refund and Cancellation Policy
          </h1>
        </div>
      </div>
      <div className="bg-[#FFFFFF] md:px-[60px] px-[20px] overflow-hidden md:pt-[60px] pt-[40px] pb-[60px]">
        <div className="container m-auto">
          <div data-aos="fade-up">
            <div className="max-w-[1000px] m-auto">
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                You are entitled to a refund in the case of the purchased course not being assigned to you within the expiration date from your date of purchase or if you have paid twice for the same course. Under any other circumstance, we will not consider any requests for refund as this is a digital course purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RefundPolicy;