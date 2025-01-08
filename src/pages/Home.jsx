import Aos from "aos";
import React, { useEffect, useState } from "react";
import { GetApi } from "../ApIcall";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import BannerSlider from "../components/slider/BannerSlider";
import CourseSlider from "../components/slider/CourseSlider";
import LatestVacancy from "../components/slider/LatestVacancy";
import OurSlider from "../components/slider/OurSlider";
import StoriesSlider from "../components/slider/StoriesSlider";
import StudentSlider from "../components/slider/StudentSlider";
// import { useSpring, animated, config } from "react-spring";
import { Link } from "react-router-dom";
import ReactHelmet from "../utils/ReactHelmet";
import Loading from "../components/loading/Loading";

function Home() {
  // const navigate = useNavigate();
  const [our, setOur] = useState("Upcoming Batches");
  const [loading, setLoading] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [Upcomingexam, setUpcomingExam] = useState([]);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [courseName, setCourseName] = useState("All");

  console.log(filteredCourses, "allllllllll");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    Aos.init({ duration: 1000 });
    const fetchData = async () => {
      try {
        setLoading(true);
        const [notifications, exams, allCourses] = await Promise.all([
          GetApi("api/admin/GetAllNotification"),
          GetApi("api/admin/getAllUpcomingexam"),
          GetApi("api/course/getAllCourses"),
        ]);
        setVacancies(notifications?.data?.data || []);

        console.log(notifications?.data?.data);
        setUpcomingExam(exams?.data?.data || []);
        setCourses(allCourses?.data?.data || []);
        setFilteredCourses(allCourses?.data?.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function ResetFilter() {
    setFilteredCourses(courses);
    setCourseName("All");
  }

  const filterCoursesByCategory = (category) => {
    if (!category || category.length === 0) {
      setCourseName("All");
      setFilteredCourses(courses);
    } else {
      setCourseName(Array.isArray(category) ? category.join(", ") : category);
      const filtered = courses.filter((course) =>
        Array.isArray(category)
          ? category.includes(course.category)
          : course.category === category
      );
      setFilteredCourses(filtered);
    }
  };

  function handleOur(e) {
    setOur(e);
  }
  if (loading) {
    return <Loading variant="danger" message="Fetching data..." />;
  }
  return (
    <>
      <Header />
      <ReactHelmet title="The Winners Institute" canonicalLink="/" />
      <div className="hero-section overflow-hidden">
        <div className="container-fluid m-auto">
          <div className="wrap-1"></div>
          <div className="grid md:px-[100px] px-[20px] md:grid-cols-2 grid-cols-1">
            <div className="relative md:pt-[85px] pt-[30px] my-auto">
              <div data-aos="fade-right">
                <div className="left-[-100px] w-full items-center pb-[11px] flex gap-[9px] absolute">
                  <div className="h-[1px] bg-[#FFFFFF] max-w-[100px] w-full"></div>
                  <p className="font-[Outfit] font-[500] text-sm sm:text-[20px] leading-[25px] text-[#FFFFFF]">
                    Learn at your own pace
                  </p>
                </div>
              </div>
              <div data-aos="fade-right">
                <h1 className="font-sans font-[800] md:text-[46px] text-[30px] md:pt-[36px] pt-[66px] md:leading-[57px] leading-[38px] text-[#FFFFFF] md:pb-[40px] pb-[20px]">
                  Search and find your best
                  <span className="text-[#D0021B]"> COURSES</span> with easy way
                </h1>
              </div>
              <div data-aos="fade-right">
                <p className="font-[Outfit] font-[400] text-[18px] leading-[28px] text-[#FFFFFF] md:pb-[40px] pb-[10px]">
                  WiNNERS Institute - Best Learning Platform to prepare
                  Government Competitive Exams along with Top Educators and
                  structured crash courses, mock tests, and practice section.
                </p>
              </div>
              {/* Uncomment and adjust button if needed */}
              {/* <div data-aos="fade-right">
          <button onClick={() => navigate('/publications')} className="flex items-center gap-[26px] rounded-[30px] font-sans font-[500] text-[18px] leading-[24px] py-[4px] pl-[26px] pr-[7px] border-[0.5px] hover:bg-transparent duration-300 ease-in bg-[#D0021B] border-[#D0021B] hover:text-[#ffffff] text-[#FFFFFF]">
            Get Started <img src="/assets/home/right-arrow.svg" className="btn-arrow" alt="" />
          </button>
        </div> */}
            </div>
            <div className="md:pt-[103px] pt-[20px] md:pl-[106px] pl-[0px]">
              <img src="assets/home/Aditya_sir.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden md:px-0 px-[20px] md:pt-[128px] pt-[60px] relative">
        <div className="container m-auto">
          <img
            src="assets/home/wrap2.svg"
            className="absolute top-[48px] circle left-[55px]"
            alt=""
          />
          <img
            src="assets/home/wrap3.svg"
            className="roll md:block hidden"
            alt=""
          />
          <div data-aos="flip-left">
            <h6 className="font-sans font-[700] text-[36px] leading-[36.97px] text-center text-[#000000] pb-[18px]">
              Explore Our <span className="text-[#D0021B]"> Courses</span>
            </h6>
          </div>
          <div data-aos="fade-up">
            <p className="max-w-[778px] w-full m-auto text-[#616161] font-[Outfit] font-[400] text-[18px] leading-[28px] text-center pb-[40px]">
              These course categories can provide a comprehensive range of
              topics for learners on our e learning platform, catering to a
              diverse audience with varying interests and educational needs.
            </p>
          </div>
          <div data-aos="fade-up">
            <div className="flex flex-wrap justify-center items-center md:pb-[76px] pb-[20px] gap-[16px]">
              <button
                className={`font-[Outfit] font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px] md:py-[12px] py-[8px] md:px-[49px] px-[16px] border-[1px] duration-300 ease-in hover:bg-[#D0021B] hover:border-[#D0021B] rounded-[30px] hover:text-[#ffffff]  ${
                  courseName === "All"
                    ? "bg-[#D0021B] text-[#ffffff] border-[#D0021B]"
                    : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
                }`}
                onClick={ResetFilter}
              >
                All
              </button>
              <button
                className={`font-[Outfit] font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px] md:py-[12px] py-[8px] md:px-[49px] px-[16px] border-[1px] duration-300 ease-in hover:bg-[#D0021B] hover:border-[#D0021B] rounded-[30px] hover:text-[#ffffff]  ${
                  courseName === "MPPSC "
                    ? "bg-[#D0021B] text-[#ffffff] border-[#D0021B]"
                    : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
                }`}
                onClick={() => filterCoursesByCategory("MPPSC ")}
              >
                MPPSC
              </button>
              <button
                className={`font-[Outfit] font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px] md:py-[12px] py-[8px] md:px-[49px] px-[16px] border-[1px] duration-300 ease-in hover:bg-[#D0021B] hover:border-[#D0021B] rounded-[30px] hover:text-[#ffffff]  ${
                  courseName === "SSC"
                    ? "bg-[#D0021B] text-[#ffffff] border-[#D0021B]"
                    : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
                }`}
                onClick={() => filterCoursesByCategory("SSC")}
              >
                SSC
              </button>
              <button
                className={`font-[Outfit] font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px] md:py-[12px] py-[8px] md:px-[49px] px-[16px] border-[1px] duration-300 ease-in hover:bg-[#D0021B] hover:border-[#D0021B] rounded-[30px] hover:text-[#ffffff]  ${
                  courseName === "Bank"
                    ? "bg-[#D0021B] text-[#ffffff] border-[#D0021B]"
                    : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
                }`}
                onClick={() => filterCoursesByCategory("Bank")}
              >
                BANK
              </button>
              <button
                className={`font-[Outfit] font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px] md:py-[12px] py-[8px] md:px-[49px] px-[16px] border-[1px] duration-300 ease-in hover:bg-[#D0021B] hover:border-[#D0021B] rounded-[30px] hover:text-[#ffffff]  ${
                  courseName === "Railway"
                    ? "bg-[#D0021B] text-[#ffffff] border-[#D0021B]"
                    : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
                }`}
                onClick={() => filterCoursesByCategory("Railway")}
              >
                RAILWAY
              </button>
              <button
                className={`font-[Outfit] font-[400] md:text-[18px] text-[14px] md:leading-[24px] leading-[20px] md:py-[12px] py-[8px] md:px-[49px] px-[16px] border-[1px] duration-300 ease-in hover:bg-[#D0021B] hover:border-[#D0021B] rounded-[30px] hover:text-[#ffffff]  ${
                  courseName === "ESB/Vyapam"
                    ? "bg-[#D0021B] text-[#ffffff] border-[#D0021B]"
                    : "bg-[#FFFFFF] text-[#616161] border-[#D8D2D2]"
                }`}
                onClick={() => filterCoursesByCategory("ESB/Vyapam")}
              >
                Vyapam/ESB
              </button>
            </div>
          </div>
          <div className="course-slider md:pb-[106px] pb-[50px]">
            <CourseSlider filteredCourses={filteredCourses} />
          </div>
        </div>
      </div>
      <div className="banner-slider overflow-hidden">
        <div data-aos="fade-up">
          <BannerSlider />
        </div>
      </div>
      <div className="bg-[#1c2672] relative z-20 overflow-hidden pt-[75px]">
        <div className="container m-auto">
          <img
            src="assets/home/wrap4.svg"
            className="absolute circle1 top-[29px] -z-1 left-[0px]"
            alt=""
          />
          <img
            src="assets/home/wrap5.svg"
            className="absolute line top-[-12px] -z-1 right-[-56px]"
            alt=""
          />
          <img
            src="assets/home/wrap6.svg"
            className="absolute line bottom-[0px] -z-1 left-[-130px]"
            alt=""
          />
          <div data-aos="fade-down">
            <h6 className="font-sans font-[700] relative z-30 md:text-[40px] text-[30px] pb-[25px] md:px-0 px-[20px] md:leading-[54px] leading-[34px] text-[#FFFFFF] text-center">
              Discover Our Latest Updates
            </h6>
          </div>
          <div data-aos="fade-up">
            <div className="max-w-[328px] mb-[48px] relative z-30 w-full m-auto flex justify-between items-center bg-[#F7F7FE] p-[4px] rounded-full">
              <button
                onClick={() => handleOur("Upcoming Batches")}
                className={`font-[Outfit] font-[600] text-[14px] ease-in duration-500 leading-[20px] py-[12px] px-[16px] rounded-full ${
                  our === "Upcoming Batches"
                    ? "text-[#FFFFFF] bg-[#1C2672]"
                    : "text-[#1C2672] bg-transparent"
                }`}
              >
                Recent Batches
              </button>
              <button
                onClick={() => handleOur("Latest Vacancies")}
                className={`font-[Outfit] font-[600] text-[14px] ease-in duration-500 leading-[20px] py-[12px] px-[16px] rounded-full ${
                  our === "Latest Vacancies"
                    ? "text-[#FFFFFF] bg-[#1C2672]"
                    : "text-[#1C2672] bg-transparent"
                }`}
              >
                Latest Vacancies
              </button>
            </div>
          </div>
          <div className="up-slider relative z-30">
            {our === "Upcoming Batches" && (
              <OurSlider Upcomingexam={Upcomingexam} />
            )}
          </div>
          <div className="our-slider relative z-30">
            {our === "Latest Vacancies" && (
              <LatestVacancy vacancies={vacancies} />
            )}
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="relative bg-[#1c2672] w-full h-[88px]">
          <img
            src="assets/home/wrap8.svg"
            className="absolute left-[-88px] top-[12px]"
            alt=""
          />
          <img
            src="assets/home/wrap8.svg"
            className="absolute right-[-88px] rotate-[333deg] top-[12px]"
            alt=""
          />
        </div>
        <div className="md:pt-[185px] pt-[40px] relative z-1 bg-[#EFF0F5] md:pl-[64px] pl-[20px] md:pr-[100px] pr-[20px]">
          <div className="container m-auto">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[42px] items-center">
              <div data-aos="fade-right">
                <div>
                  <h6 className="font-sans pb-[7px] font-[700] md:text-[40px] text-[24px] md:leading-[44px] leading-[30px] text-[#1D1D45]">
                    WiNNERS Institute -
                    <span className="text-[#D0021B]">
                      India's Best Institute
                    </span>
                    &nbsp;for Competitive Exams & Online Courses
                  </h6>
                  <p className="text-[#222222] font-sans font-[400] text-[18px] leading-[22px]">
                    WiNNERS Institute- Best Learning Platform to prepare
                    Government Competitive Exams along with Top Educators and
                    structured crash courses, mock tests and practicee section.{" "}
                  </p>
                </div>
              </div>
              <div>
                <div data-aos="fade-left">
                  <img src="assets/home/Winners_GIF.gif" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-[#EFF0F5] pt-[40px] relative">
        <div className="container m-auto">
          <img
            src="assets/home/wrap9.svg"
            className="absolute top-[220px] circle1 right-[114px]"
            alt=""
          />
          <img
            src="assets/home/wrap9.svg"
            className="absolute top-[476px] circle1 left-[52px]"
            alt=""
          />
          <img
            src="assets/home/wrap10.svg"
            className="absolute top-[531px] roll2 right-[-76px]"
            alt=""
          />
          <img
            src="assets/home/wrap10.svg"
            className="absolute bottom-[73px] roll1 left-[-89px]"
            alt=""
          />
          <div data-aos="fade-up">
            <h6 className="font-sans font-[700] text-[36px] leading-[44px] text-[#000000] text-center pb-[18px]">
              Interesting Facts
            </h6>
            <p className="max-w-[813px] md:pb-[0px] pb-[30px] w-full m-auto text-[#616161] font-[Outfit] font-[400] text-[18px] leading-[26px] text-center">
              We provide guidance for courses of MPPSC, SSC, BANKING, VYAPAM and
              other Central and State Government jobs at our place. We believe
              in the idea of Participatory learning through discussion and
              innovative teaching, A team of committed faculty is always there
              for any kind of help.
            </p>
          </div>
          <div className="md:pb-[110px] md:pt-[110px] pt-[30px] pb-[50px]">
            <div className="grid md:max-w-[434px] max-w-[310px] w-full m-auto justify-center z-10 items-center mt-[94px] grid-cols-2 gap-[10px] relative">
              <div className="absolute top-[-51px] left-[-41px]">
                <img src="assets/home/wrap11.svg" alt="" />
              </div>
              <div className="absolute bottom-[-49px] md:block hidden rotate-180 z-[-1] right-[-31px]">
                <img src="assets/home/wrap11.svg" alt="" />
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="flex b-1 flex-col gap-[13px]">
                  <div className="flex justify-center md:mt-[24px] mt-[14px]">
                    <img
                      src="assets/home/icon4.svg"
                      className="md:h-full h-[27px]"
                      alt=""
                    />
                  </div>
                  <div className="flex-items-center justify-center">
                    <h6 className="font-sans font-[800] text-[24px] leading-[26px] text-center text-[#FFFFFF]">
                      4.5M +
                    </h6>
                    <p className="font-sans font-[400] text-[18px] leading-[26px] text-center text-[#FFFFFF]">
                      Youtube Subscribers
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="2000">
                <div className="flex b-2 flex-col gap-[13px]">
                  <div className="flex justify-center md:mt-[29px] mt-[14px]">
                    <img
                      src="assets/home/icon6.svg"
                      className="md:h-full h-[27px]"
                      alt=""
                    />
                  </div>
                  <div className="flex-items-center justify-center">
                    <h6 className="font-sans font-[800] text-[24px] leading-[26px] text-center text-[#FFFFFF]">
                      20Lac +
                    </h6>
                    <p className="font-sans font-[400] text-[18px] leading-[26px] text-center text-[#FFFFFF]">
                      WiNNERS APP <br /> Downloads
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="flex b-4 flex-col gap-[13px]">
                  <div className="flex justify-center md:mt-[29px] mt-[14px]">
                    <img
                      src="assets/home/icon7.svg"
                      className="md:h-full h-[27px]"
                      alt=""
                    />
                  </div>
                  <div className="flex-items-center justify-center">
                    <h6 className="font-sans font-[800] text-[24px] leading-[26px] text-center text-[#FFFFFF]">
                      25k +
                    </h6>
                    <p className="font-sans font-[400] text-[18px] leading-[26px] text-center text-[#FFFFFF]">
                      Total Selection
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="4000">
                <div className="flex b-3 flex-col gap-[13px]">
                  <div className="flex justify-center md:mt-[29px] mt-[14px]">
                    <img
                      src="assets/home/icon8.svg"
                      className="md:h-[94px] h-[27px] object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex-items-center justify-center">
                    <h6 className="font-sans font-[800] text-[24px] leading-[26px] text-center text-[#FFFFFF]">
                      6 +
                    </h6>
                    <p className="font-sans font-[400] text-[18px] leading-[26px] text-center text-[#FFFFFF]">
                      Year of Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="selected-section pb-[40px] overflow-hidden justify-center">
        <div data-aos="fade-up">
          <h6 className="font-sans font-[700] text-[36px] leading-[44px] text-center text-[#000000] pb-[13px]">
            Selected Students
          </h6>
          <p className="font-[Outfit] font-[400] pb-[62px] md:px-0 px-[20px] text-[18px] leading-[22px] text-center text-[#000000]">
            Success is the sum of small efforts - repeated day in and day out.
          </p>
        </div>
        <div data-aos="fade-down" className="w-full">
          <div className="">
            <StudentSlider />
          </div>
        </div>
      </div>
      <div className="bg-[#fffcf9] lg:pt-[156px] pt-[50px] overflow-hidden md:px-[92px] px-[14px] pb-[30px]">
        <div className="container m-auto">
          <div className="relative bg-[#1C2672] rounded-[12px] md:py-[68px] py-[20px] md:px-[46px] px-[20px]">
            <div className=" items-center justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/WhatsApp%20Image%202024-10-22%20at%2008.59.53_c23eef73%20(1).png?alt=media&token=e5371a69-8691-4d24-b956-da23c20f2e51"
                className="md:absolute hidden xl:block relative lg:right-[0] right-[0] bottom-0"
                alt=""
                style={{
                  height: "580px",
                }}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/WhatsApp%20Image%202024-10-22%20at%2008.59.53_c23eef73%20(1).png?alt=media&token=e5371a69-8691-4d24-b956-da23c20f2e51"
                className="md:absolute hidden lg:block xl:hidden relative right-[-4rem] bottom-0"
                alt=""
                style={{
                  height: "380px",
                }}
              />
            </div>

            <img
              src="https://firebasestorage.googleapis.com/v0/b/imageuploader-7809e.appspot.com/o/WhatsApp%20Image%202024-10-22%20at%2008.59.53_c23eef73%20(1).png?alt=media&token=e5371a69-8691-4d24-b956-da23c20f2e51"
              className="lg:absolute lg:hidden relative lg:right-0 right-auto am:top-[-140px] top-auto"
              alt=""
              style={{
                // height : "500px"
                margin: "auto",
                height: "100%",
              }}
            />

            <div data-aos="fade-right">
              <h6 className="font-sans font-[700] md:text-[40px] text-[30px] md:leading-[44px] leading-[34px] text-[#FFFFFF] md:pb-[54px] pb-[20px]">
                Download App Now
              </h6>
              <p className="font-[Outfit] font-[400] text-[18px] leading-[26px] lg:max-w-[500px] xl:max-w-[590px] max-w-[612px] text-[#FFFFFF]">
                We provide guidance for courses of MPPSC, SSC, BANKING, VYAPAM
                and other Central and State Government jobs at our place. We
                believe in the idea of Participatory learning through discussion
                and innovative teaching, A team of committed faculty is always
                there for any kind of help.
              </p>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-[30px] md:mt-[10px] mt-[30px]">
              <div data-aos="fade-up">
                <Link
                  to="https://play.google.com/store/apps/details?id=com.winners.institute&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/home/icon9.svg" alt="" />
                </Link>
              </div>
              <div data-aos="fade-up">
                <Link
                  to="https://apps.apple.com/in/app/winners-institute/id1665819649"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="assets/home/icon10.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f1f1] pb-['320px']  md:pt-[105px] overflow-hidden pt-[30px] md:px-0 px-[20px]">
        <div className="container m-auto">
          <div data-aos="fade-left">
            <h6 className="font-sans font-[700] text-[36px] leading-[44px] text-center text-[#000000] pb-[17px]">
              What Students Say
            </h6>
            <p className="font-[Outfit] font-[400] pb-[56px] text-[18px] leading-[22px] text-center text-[#616161]">
              A Practical platform based on practicot knowledge with best &
              mentors
            </p>
          </div>
          <div data-aos="fade-up">
            <div className="storiesSlider stories-slider md:px-[100px] px-0">
              <StoriesSlider />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
