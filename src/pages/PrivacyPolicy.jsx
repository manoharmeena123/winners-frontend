import Aos from "aos";
import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";

function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
        </div>
      </div>
      <div className="bg-[#FFFFFF] md:px-[60px] px-[20px] overflow-hidden md:pt-[60px] pt-[40px] pb-[60px]">
        <div className="container m-auto">
          <div data-aos="fade-up">
            <div className="max-w-[1000px] m-auto">
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>

              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                We use Your Personal data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Definitions
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                - You: The individual accessing or using the Service
                <br />
                - Company: Refers to live.winnersinstitute.in
                <br />
                - Website: Refers to live.winnersinstitute.in
                <br />
                - Service: Refers to the Website
                <br />- Personal Data: Any information relating to an identified
                or identifiable individual
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Types of Data Collected
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                While using Our Service, We may collect:
                <br />
                - Personal Data (email, name, phone number)
                <br />
                - Usage Data (IP address, browser info, pages visited)
                <br />- Cookies and tracking data
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Use of Your Personal Data
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                We may use Your Personal Data to:
                <br />
                - Provide and maintain our Service
                <br />
                - Manage Your account
                <br />
                - Contact You about updates or changes
                <br />
                - Provide support and respond to requests
                <br />- Improve our Service
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Security of Your Personal Data
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet is
                100% secure. While We strive to protect Your Personal Data, We
                cannot guarantee its absolute security.
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Changes to this Privacy Policy
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                We may update our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
