import Aos from "aos";
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import WhySlider from "../components/slider/WhySlider";
import Loading from "../components/loading/Loading";

function About() {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 1.5 seconds
    }, 1500);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    Aos.init({
      duration: 1000,
    });

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return <Loading message="Loading About Page..." />;
  }

  return (
    <>
      <Header />
      <div className="about-section">
        <div className="container m-auto">
          <div className="md:pt-[125px] pt-[90px] relative z-1">
            <div data-aos="fade-right">
              <h6 className="font-sans text-center pb-[20px] font-[700] text-[36px] leading-[45px] text-[#FFFFFF]">
                About WiNNERS Institute
              </h6>
            </div>
            <div data-aos="fade-right">
              <p className="max-w-[778px] w-full m-auto font-sans font-[400] text-[18px] leading-[28px] text-center pb-[35px] text-[#FFFFFF]">
                Established in 2017 by a dedicated. committed and enthusiastic
                team of Education Service Professionals, The WiNNERS Institute
                has proved it’s mettle as a place of growth and change for many
                youth.
              </p>
            </div>
            <div data-aos="fade-right">
              <p className="max-w-[777px] w-full m-auto px-[30px] pt-[35px] py-[50px] bg-[#FFFFFF] outline outline-[1px] outline-offset-[8px] rounded-[14px] outline-[#FFFFFF] font-sans font-[400] text-[18px] leading-28px] text-center text-[#000000]">
                We provide guidance for courses of MPPSC, SSC, BANKING, VYAPAM,
                and other Central and State Government jobs at our place. We
                believe in the idea of Participatory learning through discussion
                and innovative teaching, A team of committed faculty is always
                there for any kind of help.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden mt-[-1px] md:bg-[#0D1266] bg-transparent">
        <div className="h-[340px] bg-[#0D1266] md:block hidden w-full"></div>
        <div className="h-[304px] bg-[#FFFFFF] md:block hidden w-full"></div>
        <div className="container m-auto">
          <div
            style={{
              background: "url(assets/about/bg-2.svg)",
              backgroundSize: "cover",
              width: "100%",
            }}
            className="md:absolute relative max-w-[1405px] w-full md:pt-[100px] pt-[30px] md:pl-[73px] pl-[20px] md:pr-[94px] pr-[20px] md:top-[90px] top-auto left-[50%] translate-x-[-50%] rounded-t-[50px] z-1"
          >
            <img
              src="assets/about/wrap1.svg"
              className="absolute md:bottom-[81px] bottom-auto md:top-auto top-[230px] left-0"
              alt=""
            />
            <div
              style={{
                background: "url(assets/about/wrap2.svg)",
                backgroundSize: "cover",
                width: "100%",
                maxWidth: "733px",
              }}
              className="z-[1] absolute md:bottom-[6rem] bottom-auto md:top-auto top-[480px] md:left-[134px] left-[-1px] h-[67px] max-sm:top-[35%]"
            >
              <h6 className="absolute right-[93px] font-[Poppins] top-[50%] translate-y-[-50%] font-[600] text-[18px] leading-[27px] text-center text-[#FFFFFF] max-sm:text-sm">
              WiNNERS - जहाँ ज़िद है सफलता की
              </h6>
            </div>
            <div
              style={{
                background: "url(assets/about/wrap3.svg)",
                backgroundSize: "cover",
                width: "640px",
              }}
              className="absolute md:block hidden bottom-[43px] md:bottom-[6rem] right-0 h-[67px]"
            >
              <h6 className="absolute right-[92px] font-sans top-[50%] translate-y-[-50%] font-[400] text-[28px] leading-[35px] text-center text-[#FFFFFF]">
                Aditya Patel (Founder and Director)
              </h6>
            </div>
            <div className="relative pb-0">
              <div className="grid md:grid-cols-12 grid-cols-1">
                <div className="col-span-4 z-[2]">
                  <img src="assets/home/Aditya_sir.png" alt="" />
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-7 md:pt-0 pt-[100px]">
                  <div className="flex justify-between items-center w-full mb-[15px]">
                    <div>
                      <h6 className="font-sans font-[600] text-[36px] leading-[40px] text-[#000000]">
                        About Founder
                      </h6>
                    </div>
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
                  <div>
                    <p className="font-sans font-[400] text-[18px] leading-[22px] text-[#000000] pb-[18px]">
                      Aditya Patel is the Founder of the WiNNERS Institute with
                      more than a decade of experience. He has led the Trust and
                      faith in students since its inception. Aditya Sir is
                      passionate about the Growth and Success of students and
                      young people who came from various communities across the
                      country and this vision has guided the philosophy of the
                      Trust and his work in particular. Aditya Sir is also the
                      faculty of mathematics, In this role, he has contributed
                      to the student’s development of strategies and math
                      fundamentals.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans font-[400] text-[18px] leading-[22px] text-[#000000]">
                      He also provides guidance to faculties as diverse as
                      teacher training, leadership development, community
                      cohesion, curriculum reform, and social mobility. He is
                      committed to the development of a strong and world-class
                      institute and actively works to improve its reputation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] md:px-[60px] px-[20px] overflow-hidden md:pt-[192px] pt-[70px] relative">
        <div className="container m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 relative gap-[23px]">
            <img
              src="assets/about/icon3.svg"
              className="absolute rotating left-[35%] md:left-[46%] z-10 md:top-[40%] top-[41%] translate-x-[-50%] translate-y-[-50%] "
              alt=""
            />
            <div data-aos="flip-left">
              <div
                
                className="relative bg-cover our-card rounded-[14px] md:px-[46px] px-[20px] md:pt-[70px] pt-[30px] md:pb-[108px] pb-[60px] min-h-[386px]"
                style={{
                  backgroundImage: "url(assets/about/photo2.png)"
                 }}
              >
                <h6 className="font-sans font-[800] text-[32px] relative z-1 leading-[60px] text-[#FFFFFF]">
                  Our Mission
                </h6>
                <p className="font-sans font-[400] text-[18px] relative z-1 leading-[28px] text-[#FFFFFF]">
                  We strive to provide our students with an academic foundation
                  that will enable them to clear competitive exams of their
                  choice Like MPPSC, SSC, BANKING, VYAPAM and other
                  Central/State government jobs as well as to succeed in those
                  careers.
                </p>
              </div>
            </div>
            <div data-aos="flip-right">
              <div
                className="relative bg-cover our-card rounded-[14px] md:px-[46px] px-[20px] md:pt-[70px] pt-[30px] md:pb-[108px] pb-[60px] min-h-[386px]"
                style={{ backgroundImage: "url(assets/about/photo3.png)"}}
              >
                <h6 className="font-sans font-[800] text-[32px] relative z-1 leading-[60px] text-[#FFFFFF]">
                  Our Vision
                </h6>
                <p className="font-sans font-[400] text-[18px] relative z-1 leading-[28px] text-[#FFFFFF]">
                  Our vision is to develop well rounded, confident and
                  responsible individuals who aspire to achieve their full
                  potential. We will do this by providing a welcoming, happy,
                  safe, and supportive learning environment in which everyone is
                  equal and all achievements are celebrated.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <h6 className="md:pt-[174px] pt-[60px] text-center font-sans font-[700] text-[36px] leading-[45px] text-[#2E2E2E] pb-[13px]">
              Core Values
            </h6>
          </div>
          <div data-aos="fade-left">
            <p className="font-sans font-[400] text-[18px] leading-[28px] text-center md:pb-[386px] pb-[230px] text-[#2E2E2E]">
              Supporting a learning environment that continuously motivates all
              individuals to excel.
            </p>
          </div>
          <img
            src="assets/about/photo1.svg"
            className="absolute left-[50%] translate-x-[-50%] md:bottom-[-290px] bottom-[-150px]"
            alt=""
          />
        </div>
      </div>
      <div className="why-section">
        <div className="container m-auto">
          <div data-aos="fade-up">
            <h6 className="font-sans font-[700] md:text-[40px] text-[30px] md:leading-[54px] leading-[38px] text-[#000000] md:pb-[92px] pb-[40px] text-center">
              Why WiNNERS Institute
            </h6>
          </div>
          <div className="why-slider overflow-hidden">
            <WhySlider />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
