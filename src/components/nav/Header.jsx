import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { courses } from "../buttons/courseObj";

function Header() {
  const path = useLocation();
  const [exams, setExams] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown(!dropdown);
  }
  const [openSubCourses, setOpenSubCourses] = useState({});
  const toggleSubCourses = (index, e) => {
    e.stopPropagation(); // Prevent the link from being triggered
    setOpenSubCourses((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  // Close dropdown when unhovered
  const handleMouseLeave = (index) => {
    setOpenSubCourses((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };

  return (
    <>
      <div className="w-full z-50 fixed top-0 md:px-[86px] px-[14px] bg-[#FFFFFF] rounded-b-[10px] py-[12px]">
        <div className="container m-auto flex justify-between items-center">
          <div className="flex items-center gap-[93px]">
            <Link to="/" className="flex items-center no-underline gap-[13px]">
              <img
                src="/assets/logo-.svg"
                className="object-cover md:h-auto h-[36px]"
                alt=""
              />
            </Link>
            <li
              className="font-sans relative md:block hidden font-[400] text-[18px] leading-[24px] py-[8px] px-[42px] border-[0.5px] bg-transparent duration-300 ease-in hover:bg-[#D0021B] border-[#000000] rounded-[10px] text-[#FFFFFF] md:text-[#000000] hover:text-[#FFFFFF]"
              onMouseEnter={() => setExams(true)}
              onMouseLeave={() => setExams(false)}
            >
              <div className="flex list-hover items-center gap-2">
                <Link className="link text-[#000000] no-underline">Exams</Link>
                {exams ? (
                  <img
                    src="/assets/about/arrow-down.svg"
                    // src="/assets/about/white-arrow.png"
                    style={{ height: "18px" }}
                    alt=""
                  />
                ) : (
                  <img
                    src="/assets/about/arrow-down.svg"
                    style={{ height: "18px" }}
                    alt=""
                  />
                )}
                <div
                  style={{ display: exams ? "block" : "none" }}
                  className="section-dropdown absolute bg-white shadow-lg rounded-md mt-2 z-10 p-4"
                >
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="dropdown-item relative group"
                      onMouseEnter={(e) => e.target.classList.add("hovering")}
                      onMouseLeave={(e) =>
                        e.target.classList.remove("hovering")
                      }
                    >
                      {/* Top-level course link */}
                      <a
                        href={course?.link}
                        className="block px-2 py-1 text-black hover:text-white hover:bg-[#D0021B] rounded-md"
                      >
                        {course?.courseName}
                      </a>

                      {/* Popup for sub-courses */}
                      {course?.subCourses && (
                        <div
                          className="child-menu-popup absolute left-full top-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-[-10px] z-20 p-4"
                          style={{ minWidth: "200px" }}
                        >
                          {course.subCourses.map((subCourse, subIndex) => (
                            <a
                              key={subIndex}
                              href={subCourse?.link}
                              className="block px-2 py-1 text-gray-700 hover:text-white hover:bg-[#D0021B] rounded-md"
                            >
                              {subCourse?.courseName}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          </div>
          <div className="flex flex-1 justify-end">
            <div
              className="overlay"
              onClick={handleDropdown}
              style={dropdown ? { right: 0 } : { right: "100%" }}
            ></div>
            <button onClick={handleDropdown} className="md:hidden block">
              <img
                src="/assets/ham.png"
                className="h-[30px] object-cover w-[30px]"
                alt=""
              />
            </button>
            {/* nav options  */}
            <div
              className={`flex md:relative navbar-item fixed md:w-auto w-[250px] md:bg-transparent bg-[#D0021B] md:flex-row md:items-center items-start md:pl-0 pl-[20px] md:pt-0 pt-[30px] flex-col md:gap-[30px] gap-[20px] top-0 bottom-0 ${
                dropdown ? "right-0" : "md:right-0 right-[-250px]"
              }`}
            >
              <Link
                exact
                to="/"
                className={`font-sans no-underline duration-300 transition-all font-[400] text-[18px] leading-[24px] ${
                  path.pathname === "/"
                    ? "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#D0021B]"
                    : "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#2A2A2A]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-sans no-underline duration-300 transition-all font-[400] text-[18px] leading-[24px] ${
                  path.pathname === "/about"
                    ? "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#D0021B]"
                    : "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#2A2A2A]"
                }`}
              >
                About
              </Link>
              <Link
                to="/student-zone"
                className={`font-sans no-underline duration-300 transition-all font-[400] text-[18px] leading-[24px] ${
                  path.pathname === "/student-zone"
                    ? "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#D0021B]"
                    : "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#2A2A2A]"
                }`}
              >
                Student Zone
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://books.winnerspublication.store/"
                className={`font-sans no-underline duration-300 transition-all font-[400] text-[18px] leading-[24px] ${
                  path.pathname === "https://books.winnerspublication.store/"
                    ? "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#D0021B]"
                    : "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#2A2A2A]"
                }`}
              >
                Publication
              </Link>
              {/* <Link
                to="/video-lecture"
                className={`font-sans duration-300 transition-all font-[400] text-[18px] leading-[24px] ${
                  path.pathname === "/video-lecture"
                    ? "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#D0021B]"
                    : "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#2A2A2A]"
                }`}
              >
                Video Lecture
              </Link> */}
              <li
                className="font-sans relative md:hidden block font-[400] text-[18px] leading-[24px] md:py-[8px] py-[0px] md:px-[42px] px-0 border-[0.5px] bg-transparent duration-300 ease-in hover:bg-[#D0021B] border-[#D0021B] rounded-[10px] text-[#FFFFFF] md:text-[#D0021B] hover:text-[#FFFFFF]"
                onMouseEnter={() => setExams(true)}
                onMouseLeave={() => setExams(false)}
              >
                <div className="flex list-hover items-center gap-2">
                  <Link className="link no-underline !text-[#FFFFFF]">
                    Exams
                  </Link>
                  <img
                    src="/assets/about/white-arrow.png"
                    style={{ height: "24px" }}
                    alt=""
                  />
                  <div
                    style={{ display: exams ? "block" : "none" }}
                    className="section-dropdown bg-white shadow-lg rounded-md mt-2 z-10 p-4"
                  >
                    {courses.map((course, index) => (
                      <div key={index} className="relative">
                        {/* Top-level course */}
                        <div className="flex items-center" onClick={(e) => toggleSubCourses(index, e)}>
                          <a
                            href={course?.link}
                            className="block px-2 py-1 text-black hover:text-white hover:bg-[#D0021B] rounded-md flex-grow"
                          >
                            {course?.courseName}
                          </a>
                          <button
                           
                            className="ml-2 text-gray-600 hover:text-black focus:outline-none"
                          >
                            {/* Arrow Icon */}
                            <img
                              src={
                                openSubCourses[index]
                                  ? "/assets/about/up-arrow-key.png"
                                  : "/assets/about/downwards-arrow-key.png"
                              }
                              style={{ height: "12px" }}
                              alt="Toggle Arrow"
                            />
                          </button>
                        </div>
                        {/* Sub-courses dropdown */}
                        {openSubCourses[index] && course?.subCourses && (
                          <div
                            className="bg-white shadow-lg rounded-md p-4 z-20 mt-2"
                            style={{ minWidth: "200px" }}
                          >
                            {course.subCourses.map((subCourse, subIndex) => (
                              <a
                                key={subIndex}
                                href={subCourse?.link}
                                className="block px-2 py-1 text-gray-700 hover:text-white hover:bg-[#D0021B] rounded-md"
                                onClick={() => handleMouseLeave(index)}
                              >
                                {subCourse?.courseName}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              {/* <Link
                to="/career-form"
                className="font-sans font-[400] text-[18px] leading-[24px] text-[#FFFFFF] md:text-[#2A2A2A]"
              >
                Seminar Form
              </Link> */}

              {/* <Link
                to="/sagar-seminar-form"
                className="font-sans font-[400] text-[18px] leading-[24px] text-[#FFFFFF] md:text-[#2A2A2A]"
              >
               Sagar Seminar Form
              </Link> */}

              {/* <Link
                to="/jabalpur-seminar-form"
                className={`font-sans no-underline duration-300 transition-all font-[400] text-[18px] leading-[24px] ${
                  path.pathname === "/jabalpur-seminar-form"
                    ? "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#D0021B]"
                    : "text-[#FFFFFF] hover:text-[#2A2A2A] md:hover:text-[#D0021B] md:text-[#2A2A2A]"
                }`}
              >
                Jabalpur Seminar Form
              </Link> */}

              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://live.winnersinstitute.in/courses?categoryId="
                activeClassName="text-red-800"
                className="font-sans no-underline font-[400] text-[18px] leading-[24px] text-[#2A2A2A] hover:text-red-800"
              >
                <button className="font-sans font-[400] text-[18px] leading-[24px] py-[8px] px-[21px] border-[0.5px] hover:bg-transparent duration-300 ease-in md:bg-[#D0021B] bg-[#FFFFFF] border-[#D0021B] rounded-[10px] hover:text-[#D0021B] md:text-[#FFFFFF] text-[#D0021B]">
                  Courses Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
