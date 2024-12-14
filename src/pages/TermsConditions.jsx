import Aos from "aos";
import React, { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";

function TermsConditions() {
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
            Terms and Conditions
          </h1>
        </div>
      </div>
      <div className="bg-[#FFFFFF] md:px-[60px] px-[20px] overflow-hidden md:pt-[60px] pt-[40px] pb-[60px]">
        <div className="container m-auto">
          <div data-aos="fade-up">
            <div className="max-w-[1000px] m-auto">
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                Welcome, if you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern The Winners Institute relationship with you in relation to this website.
              </p>

              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                The term 'The Winners Institute' or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website.
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Terms of Use
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                - The content of the pages of this website is for your general information and use only. It is subject to change without notice.<br/>
                - Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.<br/>
                - You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.<br/>
                - Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.<br/>
                - It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Intellectual Property
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Website Usage
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                - All trademarks reproduced in this website which is not the property of, or licensed to, the operator is acknowledged on the website.<br/>
                - Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.<br/>
                - From time to time this website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We take no responsibility for the content of the linked website(s).<br/>
                - You may not create a link to this website from another website or document without The Winners Institute prior consent.<br/>
                - Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.
              </p>

              <h2 className="font-sans font-[600] text-[24px] leading-[32px] text-[#000000] mb-[20px]">
                Additional Terms
              </h2>
              <p className="font-sans font-[400] text-[16px] leading-[24px] text-[#2E2E2E] mb-[30px]">
                - Credit Card orders will commence on receiving the authorization/confirmation from the Credit Card/respective Payment Gateway companies.<br/>
                - We also provide books for competitive exams. Additionally, we have our own publication and offer only prepaid orders. Our delivery time ranges between 5 to 7 days.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsConditions;