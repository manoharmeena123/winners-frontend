import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import Footer from "../../components/footer/Footer";
import {
  sscMtsData,
  sscMtsExamData,
  tableOfContentsData,
} from "../../data/ssc-mts";
import { classes, testSeries, sscbooksdata } from "../../data/sscData";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";

const SSCMTS = () => {
  const { title, intro, content, officialWebsite } = sscMtsData;
  const {
    about,
    notification,
    sscMtsHighlightsData,
    sscMtsImportantDatesData,
    sscMtsApplicationFormData,
    sscMtsEligibilityCriteriaData,
    sscMtsSelectionProcessData,
    sscMtsExamCentersData,
    sscmtssyllabusData,
    sscmtsexampatternData,
    sscmtsexampattern,
    physicalStandards,
    benefits,
  } = sscMtsExamData;
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open
  // State to track whether the table is open or closed
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle the state
  const toggleTable = () => {
    setIsOpen(!isOpen);
  };
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    Aos.init({
      duration: 1000,
    });
  }, []);
  const handleBuyNowClick = (link) => {
    window.location.replace(`${link}`);
  };
  const mediaRefs = useRef([]);

  const handleFullScreen = (index) => {
    if (mediaRefs.current[index]) {
      const mediaElement = mediaRefs.current[index];
      if (mediaElement.requestFullscreen) {
        mediaElement.requestFullscreen();
      } else if (mediaElement.webkitRequestFullscreen) {
        mediaElement.webkitRequestFullscreen(); // For Safari
      } else if (mediaElement.msRequestFullscreen) {
        mediaElement.msRequestFullscreen(); // For IE11
      }
    }
  };
  return (
    <>
      <Header />
      <ReactHelmet
        title="SSC MTS - The WiNNERS Institute"
        canonicalLink="/ssc-mts"
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
              <span className="text-gray-500">Ssc-mts</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Main Column */}
          <div className="md:col-span-9 ">
            {/* First Section: SSC CPO Intro */}
            <div className="bg-white  rounded-md lg:p-6 mb-6">
            <h1 className="lg:text-3xl md:text-2xl font-bold text-gray-800 mb-4">{title}</h1>
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
            {/*About SSC MTS Exam */}
            <div
              id="about-ssc-mts-exam"
              className="bg-white shadow-md rounded-md p-6 mb-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {about.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{about.content}</p>
            </div>
            {/* /* SSC MTS 2025 Notification */}
            <div
              id="ssc-mts-2025-notification"
              className="bg-white shadow-md rounded-md p-6 mb-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {notification.title}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                SSC has recently released the{" "}
                <a
                  href={notification.link.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SSC Calendar 2025-26
                </a>{" "}
                which mentions the registration and exam dates for upcoming SSC
                exams. As per the calendar, the SSC MTS 2025 Notification will
                be released on <strong>26th June 2025</strong>, and the
                application forms will be available until{" "}
                <strong>25th July 2025</strong>. The detailed notification will
                be available in PDF format on the official website at{" "}
                <a
                  href={officialWebsite}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {officialWebsite}
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                The SSC MTS Notification will contain all recruitment details,
                including eligibility, selection process, syllabus, and salary
                structure. Check back here for the PDF link once it is released.
              </p>
            </div>
            {/* SSC MTS 2025 - Highlights */}
            <div
              id="ssc-mts-2025-highlights"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsHighlightsData?.title || "SSC MTS Highlights"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsHighlightsData?.description ||
                  "No description available."}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Highlights
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscMtsHighlightsData?.tableData?.length > 0 ? (
                      sscMtsHighlightsData.tableData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.label || "N/A"}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.value || "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="2"
                          className="px-4 py-2 text-center text-gray-500 border border-gray-300"
                        >
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC MTS Recruitment 2025 - Important Dates */}
            <div
              id="ssc-mts-2025-important-dates"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsImportantDatesData?.title || "Important Dates"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsImportantDatesData?.description ||
                  "No description available."}
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
                    {sscMtsImportantDatesData?.tableData?.length > 0 ? (
                      sscMtsImportantDatesData.tableData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.event || "N/A"}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.date || "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="2"
                          className="px-4 py-2 text-center text-gray-500 border border-gray-300"
                        >
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC MTS 2025 Application Form */}
            <div
              id="ssc-mts-2025-application-form"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsApplicationFormData?.title || "Application Form"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscMtsApplicationFormData?.description ||
                  "No description available."}
              </p>
            </div>
            {/* SSC MTS 2025 Eligibility Criteria */}
            <div
              id="ssc-mts-2025-eligibility-criteria"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsEligibilityCriteriaData?.title || "Eligibility Criteria"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsEligibilityCriteriaData?.description ||
                  "No description available."}
              </p>

              {/* Sections */}
              {sscMtsEligibilityCriteriaData?.sections?.map(
                (section, index) => (
                  <div key={index} className="mb-6">
                    {/* Subsection Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {section?.title || "Section"}
                    </h3>
                    {/* Points */}
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                      {section?.points?.map((point, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: point }} // Supports HTML for bold and indentation
                        ></li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
            {/* SSC MTS 2025 Selection Process */}
            <div
              id="ssc-mts-2025-selection-process"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsSelectionProcessData?.title || "Selection Process"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsSelectionProcessData?.description ||
                  "No description available."}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Stage
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscMtsSelectionProcessData?.tableData?.length > 0 ? (
                      sscMtsSelectionProcessData.tableData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.stage || "N/A"}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.details || "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="2"
                          className="px-4 py-2 text-center text-gray-500 border border-gray-300"
                        >
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Physical Standard Test for SSC Havaldar Posts */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {physicalStandards.title}
              </h2>
              {/* Table */}
              <div className="overflow-x-auto">
                {" "}
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Particulars
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Male
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Female
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicalStandards.data.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-700 border border-gray-300">
                          {row.particulars}
                        </td>
                        <td className="px-4 py-2 text-gray-700 border border-gray-300">
                          {row.male}
                        </td>
                        <td className="px-4 py-2 text-gray-700 border border-gray-300">
                          {row.female}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Benefits of SSC MTS Syllabus 2024 */}
            <div className="p-4 bg-white-100 rounded-md mt-06">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {benefits?.title || "Benefits of SSC MTS Syllabus 2025"}
              </h2>
              <p className="mb-2">
                {benefits?.content}
                Benefits of understanding the SSC MTS Syllabus 2024 for SSC MTS
                Exam 2024 are mentioned below:
              </p>
              <ul>
                {benefits?.sscMtsSyllabusBenefits?.map((benefit, index) => (
                  <li key={index} className="mb-4">
                    <strong>{benefit.title}:</strong> {benefit.description}
                  </li>
                ))}
              </ul>
            </div>
            {/* SSC MTS EXAM PATTERN – 2025 */}
            <div
              id="ssc-mts-2025-exam-pattern"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscmtsexampattern?.title || "Selection Process"}
              </h2>

              <p className="mb-2">It is a {sscmtsexampattern.examType}.</p>
              <p className="mb-2">
                It consists of two sessions - Session 1 & Session 2.
                {sscmtsexampattern.mandatorySessions &&
                  "It is mandatory for candidates to attempt both the sessions."}
              </p>
              <ul>
                {sscmtsexampattern?.sessions?.map((session, index) => (
                  <li key={index} className="mb-2">
                    <strong>Session {session.sessionNumber}:</strong>{" "}
                    {session.paperType}.
                    {session.negativeMarking
                      ? `Negative marking of ${session.negativeMarksPerWrongAnswer} mark for each wrong answer.`
                      : "No negative marking."}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Sessions
                    </th>
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Subject
                    </th>
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                      No. of Questions
                    </th>
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Marks
                    </th>
                    <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sscmtsexampatternData.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.session}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.subject}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.questions}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.marks}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* SSC MTS 2024 Syllabus */}
            <div id="ssc-mts-syllabus" className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm text-left">
                <thead>
                  <tr>
                    <th
                      colSpan={4}
                      className="border border-gray-300 px-4 py-3 bg-gray-200 text-center font-semibold text-gray-800"
                    >
                      SSC MTS 2025 Syllabus
                    </th>
                  </tr>
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 bg-gray-100 font-semibold text-gray-600">
                      Numerical Aptitude
                    </th>
                    <th className="border border-gray-300 px-4 py-3 bg-gray-100 font-semibold text-gray-600">
                      Reasoning Ability
                    </th>
                    <th className="border border-gray-300 px-4 py-3 bg-gray-100 font-semibold text-gray-600">
                      English Language
                    </th>
                    <th className="border border-gray-300 px-4 py-3 bg-gray-100 font-semibold text-gray-600">
                      General Awareness
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sscmtssyllabusData && (
                    <tr className="border-b border-gray-300 bg-gray-50">
                      {sscmtssyllabusData.map((section, index) => (
                        <td
                          key={index}
                          className="border border-gray-300 px-4 py-3 align-top"
                        >
                          <ul className="list-disc pl-5">
                            {section.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-gray-600">
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* SSC MTS 2025 Exam Centers */}
            <div
              id="ssc-mts-2025-exam-center"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              {/* Section Title */}
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscMtsExamCentersData?.title || "Exam Centers"}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscMtsExamCentersData?.description ||
                  "No description available."}
              </p>

              {/* Exam Centers Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscMtsExamCentersData?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-6 py-3 text-left font-semibold text-gray-700 border border-gray-300"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscMtsExamCentersData?.tableData.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-6 py-3 text-gray-700 border border-gray-300">
                          {row?.region || "N/A"}
                        </td>
                        <td className="px-6 py-3 text-gray-700 border border-gray-300">
                          {row?.states || "N/A"}
                        </td>
                        <td className="px-6 py-3 text-gray-700 border border-gray-300">
                          {row?.cityCodes || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Related Posts Table */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscMtsExamCentersData?.relatedPosts?.title || "Related Posts"}
              </h3>
              <div
                id="related-post-to-ssc-mts-2024"
                className="overflow-x-auto"
              >
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    {sscMtsExamCentersData?.relatedPosts?.tableData.map(
                      (row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-300">
                          {row.map((item, colIndex) => (
                            <td
                              key={colIndex}
                              className="px-4 py-3 text-center text-gray-700 border border-gray-300"
                            >
                              <Link to={item.link} className="text-blue-500">
                                {item?.text}
                              </Link>
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>{" "}
            {/* Frequently Asked Questions Section */}
            <div
              id="ssc-mts-frequently-asked-questions"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscMtsExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {sscMtsExamData.faq.questions.map((faq, index) => (
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
              ref={(el) => (mediaRefs.current[0] = el)}
              onClick={() => handleFullScreen(0)}
            />{" "}
            <iframe
              ref={(el) => (mediaRefs.current[1] = el)}
              className="w-full rounded shadow-md"
              src="https://www.youtube.com/embed/mVyOXuo89M4"
              title="SSC Calendar 2025-26 | SSC Exam Calendar 2025 Out | SSC Exams 2025-26 | Aditya Patel Sir"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onClick={() => handleFullScreen(1)}
            ></iframe>
            <img
              ref={(el) => (mediaRefs.current[2] = el)}
              src="/ssc-chsl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
              onClick={() => handleFullScreen(2)}
            />{" "}
            <div
              ref={(el) => (mediaRefs.current[0] = el)}
              className="w-full rounded shadow-md"
              onClick={() => handleFullScreen(0)}
            >
              <iframe
                src="https://www.youtube.com/embed/KDtJdvmB26U"
                title="SSC GD Bharti BSF, CISF, CRPF, SSB, ITBP, AR, SSF and NCB | What is SSC GD?"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <img
              ref={(el) => (mediaRefs.current[4] = el)}
              src="/ssc-combo-books.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
              onClick={() => handleFullScreen(4)}
            />{" "}
            <RelatedPost />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SSCMTS;
