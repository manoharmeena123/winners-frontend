import Aos from "aos";
import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import {
  sscchslData,
  sscchslExamData,
  tableOfContentsData,
} from "../../data/ssc-chsl";
import { classes, testSeries, sscbooksdata } from "../../data/sscData";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";

const SSCCHSL = () => {
  const { title, intro, content, officialWebsite } = sscchslData;
  const { about, notification } = sscchslExamData;

  const [openIndex, setOpenIndex] = useState(null); // Track which question is open
  // State to track whether the table is open or closed
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    Aos.init({
      duration: 1000,
    });
  }, []);
  // Function to toggle the state
  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };
  const handleBuyNowClick = (link) => {
    window.location.replace(`${link}`);
  };
  return (
    <>
      <Header />
      <ReactHelmet
        title="SSC CHSL - The WiNNERS Institute"
        canonicalLink="/ssc-cgl"
      />
      <div className="container mx-auto max-w-[1166px] mx-auto lg:px-6 sm:px-0 py-4 mt-[82px] relative">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-red-600 hover:underline">
                Home
              </a>
              <span className="text-gray-400">&nbsp;&nbsp;»&nbsp;&nbsp;</span>
            </li>
            <li>
              <span className="text-gray-500">Ssc-chsl</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Column */}
          <div className="md:col-span-9 ">
            {/* First Section: SSC CHSL Intro */}
            <div className="bg-white  rounded-md lg:p-6 mb-2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
              <p className="text-gray-600 mb-4">
                {intro}{" "}
                <a
                  href={officialWebsite}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {officialWebsite}
                </a>
              </p>
              <div className="bg-gray-50 p-4 rounded-md border">
                <p className="text-gray-700 leading-relaxed">{content}</p>
              </div>
            </div>
            {/* Table of Contents */}
            <div className="border border-gray-300 rounded-md p-4 mt-4">
              {/* Button to toggle visibility */}
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg mb-2">
                  Table of Contents
                </h2>
                <button
                  onClick={toggleTable}
                  className="text-gray-600 hover:text-gray-800 flex items-center"
                >
                  {/* Open/Close icons */}
                  {isOpen ? (
                    <svg
                      style={{
                        fill: "#999",
                        color: "#999",
                        marginRight: "8px",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="list-377408"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      style={{
                        fill: "#999",
                        color: "#999",
                        marginRight: "8px",
                      }}
                      className="arrow-unsorted-368013"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10px"
                      height="10px"
                      viewBox="0 0 24 24"
                      version="1.2"
                      baseProfile="tiny"
                    >
                      <path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"></path>
                    </svg>
                  )}
                </button>
              </div>

              {/* Conditionally render Table of Contents */}
              <div
                style={{
                  maxHeight: isOpen ? "1000px" : "0", // Adjust the maxHeight for smoother transitions
                  overflow: "hidden",
                  transition: "max-height 0.3s ease", // Smooth transition on toggle
                }}
              >
                <ul className="list-decimal ml-6 space-y-2 text-sm">
                  {tableOfContentsData?.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="text-red-600 hover:text-blue-600"
                      >
                        {item.title}
                      </a>
                      {item.subItems && (
                        <ul className="list-decimal ml-6 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subItem.link}
                                className="text-red-600 hover:text-blue-600"
                              >
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* What is SSC CHSL Exam? */}
            <div
              id="what-is-ssc-chsl-exam"
              className="bg-white shadow-md rounded-md p-6 mb-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {about.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{about.content}</p>
            </div>
            {/* Third Section: SSC CHSL Notification */}
            <div
              id="ssc-chsl-2025-notification"
              className="bg-white shadow-md rounded-md p-6 mb-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {notification.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SSC has recently released the{"  "}
                <a
                  href={notification.link.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SSC Calendar 2025-26
                </a>{" "}
                which mentions the registration and exam dates for upcoming SSC
                exams. As per the exam calendar, the SSC CHSL 2025 Notification
                will be released on 22nd April 2025 on the official website at{" "}
                <a
                  href={officialWebsite}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {officialWebsite}
                </a>
                . So, interested candidates are advised to mark this date on
                their calendars and start preparing for the exam. The official
                notification contains details such as vacancy, exam date,
                registration dates, selection process, and exam pattern.
              </p>
            </div>
            {/* SSC CHSL 2025 Exam- Overview */}
            <div
              id="ssc-chsl-2025-exam-overview"
              className="bg-white shadow-md rounded-md p-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.overview?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sscchslExamData?.overview?.content}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    {sscchslExamData?.overview?.tableData.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-6 py-3 font-semibold text-gray-700 border-r border-gray-300 whitespace-nowrap">
                          {row.label}
                        </td>
                        <td className="px-6 py-3 text-gray-700 whitespace-nowrap">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CHSL 2025 Important Dates */}
            <div
              id="ssc-chsl-2025-important-dates"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.importantDatesData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.importantDatesData?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Events
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Dates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.importantDatesData?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.event}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.date}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CHSL 2025 Vacancy */}
            <div
              id="ssc-chsl-2025-vacancy"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.vacancyData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.vacancyData?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.vacancyData?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.vacancyData?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.year}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.ldcJsa}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.paSa}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.deo}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.courtClerk}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.total}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CHSL 2025 Eligibility Criteria */}
            <div
              id="ssc-chsl-2025-eligibility-criteria"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.eligibilityData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.eligibilityData?.description}
              </p>

              {/* Nationality Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sscchslExamData?.eligibilityData?.nationality?.title}
              </h3>
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6">
                {sscchslExamData?.eligibilityData?.nationality?.criteria.map(
                  (item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  )
                )}
              </ul>

              {/* Educational Qualification Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sscchslExamData?.eligibilityData?.qualification?.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                {sscchslExamData?.eligibilityData?.qualification?.description}
              </p>
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed">
                {sscchslExamData?.eligibilityData?.qualification?.criteria.map(
                  (item, index) => (
                    <li key={index} className="mb-2">
                      <span className="font-bold">{item.boldText}</span>{" "}
                      {item.text}
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Age Limit Section */}
            <div
              id="ssc-chsl-2025-age-limit"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.ageLimitData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.ageLimitData?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.ageLimitData?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.ageLimitData?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.no}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.category}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.ageRelaxation}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CHSL 2025 Selection Process */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.selectionProcess?.title}
              </h2>

              {/* Process List */}
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed">
                {sscchslExamData?.selectionProcess?.steps.map((step, index) => (
                  <li key={index} className="mb-2">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            {/* SSC CHSL 2025 Exam Pattern */}
            <div
              id="ssc-chsl-2025-exam-pattern"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.examPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.examPattern?.description}
              </p>
            </div>
            {/* SSC CHSL Tier 1 Exam Pattern */}
            <div
              id="ssc-chsl-tier-1-exam-pattern"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.tier1ExamPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.tier1ExamPattern?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.tier1ExamPattern?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-6 py-3 text-center font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.tier1ExamPattern?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-6 py-3 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.section}
                          </td>
                          <td className="px-6 py-3 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.questions}
                          </td>
                          <td className="px-6 py-3 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.marks}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-200 font-semibold">
                      <td className="px-6 py-3 text-center border border-gray-300">
                        Total
                      </td>
                      <td className="px-6 py-3 text-center border border-gray-300">
                        {sscchslExamData?.tier1ExamPattern?.totalQuestions}
                      </td>
                      <td className="px-6 py-3 text-center border border-gray-300">
                        {sscchslExamData?.tier1ExamPattern?.totalMarks}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {/* SSC CHSL Tier-1 Syllabus */}
              <div
                id="ssc-chsl-tier-1-syllabus"
                className="overflow-x-auto mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  SSC CHSL Tier-1 Syllabus
                </h2>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                  <thead>
                    <tr className="bg-gray-200">
                      {Object.keys(
                        sscchslExamData?.tier1ExamPattern?.syllabusData
                      ).map((header, index) => (
                        <th
                          key={index}
                          className="border border-gray-300 px-4 py-2 font-semibold text-sm"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({
                      length: Math.max(
                        ...Object.values(
                          sscchslExamData?.tier1ExamPattern?.syllabusData
                        ).map((v) => v.length)
                      ),
                    }).map((_, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-gray-100">
                        {Object.values(
                          sscchslExamData?.tier1ExamPattern?.syllabusData
                        ).map((category, colIndex) => (
                          <td
                            key={colIndex}
                            className="border border-gray-300 px-4 py-2 text-sm"
                          >
                            {category[rowIndex] || ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CHSL Tier 2 Exam Pattern */}
            <div
              id="ssc-chsl-tier-2-exam-pattern"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.tier2ExamPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.tier2ExamPattern?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.tier2ExamPattern?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-center font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.tier2ExamPattern?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.session}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.section}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.modules}
                          </td>
                          <td className="px-4 py-2 text-left text-gray-700 border border-gray-300">
                            {row.subject}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.questions}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.marks}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.time}
                          </td>
                        </tr>
                      )
                    )}
                    <tr className="bg-gray-200">
                      <td
                        className="border border-gray-300 font-semibold  px-4 py-2 text-center"
                        colSpan="4" // Adjust column span to match the total columns minus 'questions' and 'marks' columns
                      >
                        Total
                      </td>
                      <td className="border border-gray-300 font-semibold px-4 py-2 text-center">
                        135
                      </td>
                      <td className="border border-gray-300 font-semibold  px-4 py-2 text-center">
                        405
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* SSC CHSL Tier-II Syllabus */}
              <div
                id="ssc-chsl-tier-2-syllabus"
                className="overflow-x-auto mt-6 mb-6"
              >
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  SSC CHSL Tier-2 Syllabus
                </h2>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 font-semibold text-sm">
                        Chapter
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold text-sm">
                        Topics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.tier2ExamPattern?.syllabusData.map(
                      (item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="border border-gray-300 px-4 py-2 text-sm font-medium">
                            {item.chapter}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-sm">
                            <ul className="list-disc pl-5">
                              {item.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/* SSC CHSL Negative Marking */}
              <div className="bg-white shadow-md rounded-md p-6 mt-6">
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscchslExamData?.tier2ExamPattern?.negativemarking?.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {
                    sscchslExamData?.tier2ExamPattern?.negativemarking
                      ?.description
                  }
                </p>

                {/* Tips List */}
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                  {sscchslExamData?.tier2ExamPattern?.negativemarking?.tips.map(
                    (tip, index) => (
                      <li key={index} className="mb-2">
                        {tip}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Reasoning and General Intelligence: Verbal and non-verbal type*/}
              <div className="bg-white rounded-md p-6 mt-6">
                <h6 className="underline font-semibold text-lg mb-4">
                  {
                    sscchslExamData?.tier2ExamPattern?.generalIntelligence
                      ?.title
                  }
                </h6>
                <ul className="list-disc pl-6 space-y-2">
                  {sscchslExamData?.tier2ExamPattern?.generalIntelligence?.topics.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
              {/* English Language and Comprehension */}
              <div className="bg-white rounded-md p-6 ">
                <h6 className="underline font-semibold text-lg mb-4">
                  {sscchslExamData?.tier2ExamPattern?.englishAptitude?.title}
                </h6>
                <ul className="list-disc pl-6 space-y-2">
                  {sscchslExamData?.tier2ExamPattern?.englishAptitude?.topics.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
              {/* General Awareness */}
              <div className="bg-white rounded-md p-6 ">
                <h6 className="underline font-semibold text-lg mb-4">
                  {sscchslExamData?.tier2ExamPattern?.generalAwareness?.title}
                </h6>
                <ul className="list-disc pl-6 space-y-2">
                  {sscchslExamData?.tier2ExamPattern?.generalAwareness?.topics.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
              {/* Syllabus for Quantitative Aptitude */}
              <div className="bg-white rounded-md p-6 ">
                <h6 className="underline font-semibold text-lg mb-4">
                  {
                    sscchslExamData?.tier2ExamPattern?.quantitativeAptitude
                      ?.title
                  }
                </h6>
                <ul className="list-disc pl-6 space-y-2">
                  {sscchslExamData?.tier2ExamPattern?.quantitativeAptitude?.topics.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>

              {/*  Computer Proficiency */}
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                        Computer Proficiency Chapters
                      </th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                        Topics
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.tier2ExamPattern?.computerProfency?.map(
                      (row, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">
                            {row.category}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <ul>
                              {row.topics.map((topic, topicIndex) => (
                                <li key={topicIndex}>{topic}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              {/* Data Entry Operator */}
              <div className="p-4 bg-gray-100 rounded-md">
                <h2 className="text-lg font-bold mb-2">
                  Skill Test for{" "}
                  {sscchslExamData?.tier2ExamPattern?.dataentryOperator.post}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {sscchslExamData?.tier2ExamPattern?.dataentryOperator.requirements.map(
                    (requirement, index) => (
                      <li key={index} className="mb-2">
                        {requirement}
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* the Comptroller and Auditor General of India (C&AG */}
              <div className="p-4 bg-gray-100 rounded-md">
                <h2 className="text-lg font-bold mb-2">
                  Skill Test for{" "}
                  {
                    sscchslExamData?.tier2ExamPattern?.comptrollerAndauditor
                      .post
                  }
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {sscchslExamData?.tier2ExamPattern?.comptrollerAndauditor.requirements.map(
                    (requirement, index) => (
                      <li key={index} className="mb-2">
                        {requirement}
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* Lower Division Clerk/ Junior Secretariat Assistant (LDS/JSA) and Postal Assistants/ Sorting Assistants (PA/SA) */}
              <div className="p-4 bg-gray-100 rounded-md">
                <h2 className="text-lg font-bold mb-2">
                  Skill Test for{" "}
                  {sscchslExamData?.tier2ExamPattern?.secretariatAssistant.post}
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  {sscchslExamData?.tier2ExamPattern?.secretariatAssistant.requirements.map(
                    (requirement, index) => (
                      <li key={index} className="mb-2">
                        {requirement}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            {/* SSC CHSL Salary After 7th Pay Commission */}
            <div
              id="ssc-chsl-salary-after-7th-pay-commission"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.salaryStructure?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.salaryStructure?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.salaryStructure?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-center font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.salaryStructure?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 font-bold whitespace-nowrap">
                            {row.post}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.city}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.basicPay}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.hra}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.ta}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.grossSalary}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.inHand}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CHSL 2025 Job Profile */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.jobProfile?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.jobProfile?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.jobProfile?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-center font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.jobProfile?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-left text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.post}
                          </td>
                          <td className="px-4 py-2 text-left text-gray-700 border border-gray-300">
                            {row.profile}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CHSL 2025 Typing Test */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.typingTest?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscchslExamData?.typingTest?.description}
              </p>
            </div>
            {/* SSC CHSL 2025 Exam Preparation Tips */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.examPreparation?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.examPreparation?.description}
              </p>

              {/* Tips List */}
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                {sscchslExamData?.examPreparation?.tips.map((tip, index) => (
                  <li key={index} className="mb-2">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            {/* SSC CHSL 2025 Result */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.result?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscchslExamData?.result?.description}
              </p>
            </div>
            {/* SSC CHSL Online Coaching */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.onlineCoaching?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscchslExamData?.onlineCoaching?.description}{" "}
                <a
                  href={sscchslExamData?.onlineCoaching?.link?.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscchslExamData?.onlineCoaching?.link?.text}
                </a>{" "}
                {sscchslExamData?.onlineCoaching?.additionalText}
              </p>
            </div>
            {/* SSC CHSL 2025 Mock Tests */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscchslExamData?.mockTests?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.mockTests?.descriptionPart1}{" "}
                <a
                  href={sscchslExamData?.mockTests?.link.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscchslExamData?.mockTests?.link.text}
                </a>{" "}
                {sscchslExamData?.mockTests?.descriptionPart2}
              </p>

              {/* Table of Important Links */}
              {/* <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th
                        colSpan="2"
                        className="px-4 py-2 text-center font-semibold text-gray-700 border border-gray-300"
                      >
                        {sscchslExamData?.mockTests?.tableTitle}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.mockTests?.importantLinks.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-center text-blue-500 hover:underline border border-gray-300">
                            <a
                              href={row.leftLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {row.leftLink.text}
                            </a>
                          </td>
                          <td className="px-4 py-2 text-center text-blue-500 hover:underline border border-gray-300">
                            <a
                              href={row.rightLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {row.rightLink.text}
                            </a>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div> */}
            </div>{" "}
            {/* Frequently Asked Questions Section */}
            <div
              id="ssc-chsl-2025-faqs"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscchslExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {sscchslExamData.faq.questions.map((faq, index) => (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center w-full text-left focus:outline-none hover:no-underline"
                      style={{ textDecoration: "none" }} // Prevent underline explicitly
                    >
                      <span
                        className="font-semibold text-gray-700 hover:no-underline"
                        style={{ textDecoration: "none" }} // Ensure text has no underline
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`ml-2 transform transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openIndex === index && (
                      <p
                        className="mt-2 text-gray-600 leading-relaxed hover:no-underline"
                        style={{ textDecoration: "none" }} // Prevent underline on paragraph
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Popular Online Live Classes */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Popular Online Live Classes
              </h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-6">
                {classes?.map((cls, index) => (
                  <Card
                    key={index}
                    image={cls.image}
                    description={cls.description}
                    price={cls.price}
                    buttonText={cls.button}
                    onButtonClick={() => handleBuyNowClick(cls?.link)}
                  />
                ))}
              </div>
            </div>
            {/* Popular Mock Test Series */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">
                Popular Mock Test Series
              </h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-6">
                {testSeries?.map((cls, index) => (
                  <Card
                    key={index}
                    image={cls.image}
                    description={cls.description}
                    price={cls.price}
                    buttonText={cls.button}
                    onButtonClick={() => handleBuyNowClick(cls?.link)}
                  />
                ))}
              </div>
            </div>
            {/* Popular Books */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Popular Books</h2>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-1 gap-6">
                {sscbooksdata?.map((book, index) => (
                  <Card
                    key={index}
                    image={book.image}
                    description={book.description}
                    price={book.price}
                    buttonText={book.button}
                    onButtonClick={() => handleBuyNowClick(book?.link)}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Col-4 */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <img
              src="/ssc-cgl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />{" "}
            <iframe
              className="w-full rounded shadow-md"
              src="https://www.youtube.com/embed/mVyOXuo89M4"
              title="SSC Calendar 2025-26 | SSC Exam Calendar 2025 Out | SSC Exams 2025-26 | Aditya Patel Sir"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <img
              src="/ssc-chsl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />{" "}
            <iframe
              className="w-full rounded shadow-md"
              src="https://www.youtube.com/embed/KDtJdvmB26U"
              title="SSC GD Bharti BSF, CISF, CRPF, SSB, ITBP, AR, SSF and NCB | What is SSC GD ?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <img
              src="/ssc-combo-books.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />{" "}
            <RelatedPost />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SSCCHSL;
