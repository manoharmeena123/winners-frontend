import Aos from "aos";
import React, { useState, useEffect } from "react";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import Footer from "../../components/footer/Footer";
import {
  sscgdData,
  sscgdExamData,
  tableOfContentsData,
} from "../../data/ssc-gd";
import { classes, testSeries, sscbooksdata } from "../../data/sscData";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";

const SSCGD = () => {
  const { title, intro, content, officialWebsite } = sscgdData;

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
  return (
    <>
      <Header />
      <ReactHelmet
        title="SSC GD - The WiNNERS Institute"
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
              <span className="text-gray-500">Ssc-gd</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Main Column */}
          <div className="md:col-span-9 ">
            {/* First Section: SSC CD Intro */}
            <div className="bg-white rounded-md lg:p-6 mb-6">
              <h1 className="xl:text-3xl lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                {title}
              </h1>

              {/* Intro Section */}
              <p className="text-gray-600 mb-4">
                {intro}{" "}
                <a
                  href={officialWebsite}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Official Website
                </a>
              </p>

              {/* Content Section */}
              <div className="bg-gray-50 p-4 rounded-md border border-gray-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Exam Details
                </h2>
                <p className="text-gray-700 leading-relaxed">{content}</p>
                {/* Additional Styling */}
                <div className="mt-6 p-4 bg-gray-50 rounded-md ">
                  <h3 className="text-lg font-bold text-blue-700">
                    Important Dates
                  </h3>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Written Exam: February 4 - 25, 2025</li>
                  </ul>
                </div>
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
            {/* SSC CD Syllabus 2025 Overview */}
            <div
              id="ssc-gd-syllabus-2025-overview"
              className="bg-white shadow-md rounded-md p-4 lg:p-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscgdExamData.overviewData.title}
              </h2>
              <table className="w-full border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Conducting Authority
                    </td>
                    <td className="border border-gray-300 p-2">
                      {sscgdExamData.overviewData.conductingAuthority}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Exam
                    </td>
                    <td className="border border-gray-300 p-2 text-blue-500">
                      <a
                        href={sscgdExamData.overviewData.examName.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {sscgdExamData.overviewData.examName.text}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Post
                    </td>
                    <td className="border border-gray-300 p-2">
                      {sscgdExamData.overviewData.post}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Notification Release Date
                    </td>
                    <td className="border border-gray-300 p-2">
                      {sscgdExamData.overviewData.notificationDate}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Exam Dates
                    </td>
                    <td className="border border-gray-300 p-2">
                      {sscgdExamData.overviewData.examDates}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Selection Process
                    </td>
                    <td className="border border-gray-300 p-2">
                      <ul className="list-disc pl-4">
                        {sscgdExamData.overviewData.selectionProcess.map(
                          (process, index) => (
                            <li key={index}>{process}</li>
                          )
                        )}
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Language
                    </td>
                    <td className="border border-gray-300 p-2">
                      {sscgdExamData.overviewData.language}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Mode of Examination
                    </td>
                    <td className="border border-gray-300 p-2">
                      {sscgdExamData.overviewData.modeOfExamination}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">
                      Official Website
                    </td>
                    <td className="border border-gray-300 p-2 text-blue-500">
                      <a
                        href={sscgdExamData.overviewData.officialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {sscgdExamData.overviewData.officialWebsite}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* SSC GD Selection Process 2025 */}
            <div
              id="ssc-gd-selection-process-2025"
              className="bg-white shadow-md rounded-md p-4 lg:p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscgdExamData.sscgdSelectionData.title}
              </h2>

              <p
                className="text-gray-700 mb-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: sscgdExamData?.sscgdSelectionData.description,
                }}
              ></p>
              <ul className="list-disc pl-5">
                {sscgdExamData?.sscgdSelectionData.steps.map((step, index) => (
                  <li key={index} className="text-gray-800 mb-2">
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* SSC GD Exam Pattern 2025 */}
            <div
              id="ssc-gd-exam-pattern-2025"
              className="bg-white shadow-md rounded-md p-4 lg:p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscgdExamData.examPattern.title}
              </h2>

              <p
                className="text-gray-700 mb-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: sscgdExamData?.examPattern.description,
                }}
              ></p>
              <ul className="list-disc pl-5">
                {sscgdExamData?.examPattern.steps.map((step, index) => (
                  <li key={index} className="text-gray-800 mb-2">
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* SSC GD CBT Exam Pattern 2025 */}
            <div
              id="ssc-gd-cbt-exam-pattern-2025"
              className="bg-white shadow-md rounded-md p-4 lg:p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscgdExamData.cbtexamPattern.title}
              </h2>

              <p
                className="text-gray-700 mb-4 text-justify"
                dangerouslySetInnerHTML={{
                  __html: sscgdExamData?.cbtexamPattern.description,
                }}
              ></p>
              <ul className="list-disc pl-5">
                {sscgdExamData?.cbtexamPattern.steps.map((step, index) => (
                  <li key={index} className="text-gray-800 mb-2">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            {/* "SSC GD Exam Pattern 2025", */}
            <div
              id="ssc-gd-exam-pattern-2025-summary"
              className="bg-white shadow-md rounded-md p-4 lg:p-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscgdExamData?.sscgdExamPatternData.title}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-200">
                      {sscgdExamData?.sscgdExamPatternData.columns.map(
                        (column, index) => (
                          <th
                            key={index}
                            className="border border-gray-300 px-4 py-2 text-gray-800"
                          >
                            {column}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscgdExamData?.sscgdExamPatternData.rows.map(
                      (row, index) => (
                        <tr key={index} className="text-center">
                          <td className="border border-gray-300 px-4 py-2">
                            {row.subject}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {row.questions}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {row.marks}
                          </td>
                          <td
                            className={`border border-gray-300 px-4 py-2 ${
                              row.duration
                                ? "bg-white-200 text-gray-800"
                                : "bg-white text-gray-500"
                            }`}
                          >
                            {row.duration || "N/A"}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/*SSC GD Syllabus 2025 General Awareness*/}
              <div className="bg-white rounded-md p-6 mt-6">
                <h6 className="underline font-semibold text-lg mb-4">
                  {
                    sscgdExamData?.sscgdExamPatternData.generalIntelligence
                      ?.title
                  }
                </h6>
                <p className="text-gray-700 mb-4 text-justify">
                  {" "}
                  {
                    sscgdExamData?.sscgdExamPatternData.generalIntelligence
                      ?.content
                  }
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {sscgdExamData?.sscgdExamPatternData.generalIntelligence?.topics.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
              {/*SSC GD Syllabus 2025 Elementary Mathematics */}
              <div className="bg-white rounded-md p-6 ">
                <h6 className="underline font-semibold text-lg mb-4">
                  {
                    sscgdExamData?.sscgdExamPatternData?.quantitativeAptitude
                      ?.title
                  }
                </h6>
                <p className="text-gray-700 mb-4 text-justify">
                  {" "}
                  {
                    sscgdExamData?.sscgdExamPatternData.quantitativeAptitude
                      ?.content
                  }
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {sscgdExamData?.sscgdExamPatternData.quantitativeAptitude?.topics.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
              {/*SSC GD Syllabus 2025 Language Proficiency  */}
              <div className="bg-white rounded-md p-6 ">
                <h6 className="underline font-semibold text-lg mb-4">
                  {
                    sscgdExamData?.sscgdExamPatternData?.languageProficiency
                      ?.title
                  }
                </h6>
                <p className="text-gray-700 mb-4 text-justify">
                  {" "}
                  {
                    sscgdExamData?.sscgdExamPatternData.languageProficiency
                      ?.content
                  }
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {sscgdExamData?.sscgdExamPatternData.languageProficiency?.topics.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            {/* SSC GD Physical Test 2025 */}
            <div
              id="ssc-gd-physical-standard-test-2025"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscgdExamData?.physicalTest?.title}
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                {" "}
                {sscgdExamData?.physicalTest?.content}
              </p>
            </div>

            {/* SSC GD PET 2025 */}
            <div
              id="ssc-gd-physical-eligibility-test-parameters"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscgdExamData?.physicalTestParameters?.title}
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                {" "}
                {sscgdExamData?.physicalTestParameters?.content}
              </p>
              <div className="overflow-x-auto">
                <h6 className="lg:text-xl sm:text-xl font-bold text-gray-600 mb-4">
                  SSC GD Physical Efficiency Test (PET)
                </h6>
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        Type
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        For Male Candidates
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        For Female Candidates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscgdExamData?.physicalTestParameters?.PETData.map(
                      (row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.male}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.female}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC GD PST 2025 */}
            <div
              id="ssc-gd-physical-standard-test-parameters"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscgdExamData?.physicalstandardParameters?.title}
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                {" "}
                {sscgdExamData?.physicalstandardParameters?.content}
              </p>
              <div className="overflow-x-auto">
                <h6 className="lg:text-xl sm:text-xl font-bold text-gray-600 mb-4">
                  SSC GD PST 2025 Height
                </h6>
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        Minimum Height Required
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        For Make Candidates
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        For Female Candidates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscgdExamData?.physicalstandardParameters?.PETData.map(
                      (row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.male}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.female}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto mt-4">
                <h6 className="lg:text-xl sm:text-xl font-bold text-gray-600 mb-4">
                  SSC GD PST 2025 Chest
                </h6>
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        Minimum Chest Requirement
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        For Make Candidates
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        For Female Candidates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscgdExamData?.physicalstandardParameters?.physicalstandardParameters?.PETData?.map(
                      (row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.male}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.female}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Frequently Asked Questions Section */}
            <div
              id="frequently-asked-questions"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscgdExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {sscgdExamData.faq.questions.map((faq, index) => (
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

export default SSCGD;
