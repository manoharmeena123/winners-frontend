import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import Footer from "../../components/footer/Footer";
import {
  sscCpoData,
  sscCpoExamData,
  tableOfContentsData,
} from "../../data/ssc-cpo";
import {
  smallScreenClasses,
  largeScreenClasses,
  smallScreenTestSeries,
  largeScreenTestSeries,
  smallScreenBooks,
  largeScreenBooks,
} from "../../data/sscData";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";
import DynamicModalWrapper from "../../utils/DynamicModalWrapper";
import useFullScreen from "../../hooks/useFullScreen";

const SSCCPO = () => {
  const { title, intro, content, officialWebsite } = sscCpoData;
  const { mediaRefs, handleFullScreen } = useFullScreen();
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
        title="SSC CPO - The WiNNERS Institute"
        canonicalLink="/ssc-cpo"
      />
      <DynamicModalWrapper
        bottomImage="https://appx-content-v2.classx.co.in/subject/2025-01-07-0.8639866624465913.jpeg"
        centerImage="https://appx-content-v2.classx.co.in/paid_course3/2025-01-07-0.912741095495186.jpg"
      >
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
                <span className="text-gray-500">Ssc-cpo</span>
              </li>
            </ol>
          </nav>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Main Column */}
            <div className="md:col-span-9 ">
              {/* First Section: SSC GD Intro */}
              <div className="bg-white rounded-md lg:p-6 mb-6">
                {/* Title Section */}
                <h1 className="lg:text-3xl md:text-2xl font-bold text-gray-800 mb-4">
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
                    Recruitment Details
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{content}</p>

                  {/* Important Dates Section */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-md">
                    <h3 className="text-lg font-bold text-blue-700">
                      Important Dates
                    </h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Notification Release: 5th September 2024</li>
                      <li>
                        Application Dates: 5th September - 14th October 2024
                      </li>
                      <li>Exam Dates: January - February 2025 (Tentative)</li>
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

              {/* SSC CPO Syllabus 2025 */}
              <div
                id="ssc-cpo-syllabus-2025"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.syllabusData?.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {sscCpoExamData?.syllabusData?.description}
                </p>
              </div>

              {/* SSC CPO Syllabus 2025 Overview */}
              <div
                id="ssc-cpo-syllabus-2025-overview"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.overview?.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sscCpoExamData?.overview?.content}
                </p>

                {/* Table */}
                <div className="overflow-x-auto mt-6">
                  <h2 className="text-lg font-bold mb-2">
                    {sscCpoExamData?.overview?.tableData?.title}
                  </h2>
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <tbody>
                      {sscCpoExamData?.overview?.tableData?.details.map(
                        (item, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">
                              {item.label}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {Array.isArray(item.value) ? (
                                <ul className="list-disc pl-5">
                                  {item.value.map((value, i) => (
                                    <li key={i}>{value}</li>
                                  ))}
                                </ul>
                              ) : (
                                item.value
                              )}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SSC CPO Selection Process 2024 */}
              <div
                id="ssc-cpo-selection-process-2025"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.selectionProcess.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sscCpoExamData?.selectionProcess.description}
                </p>
                <ul>
                  {sscCpoExamData?.selectionProcess.stages.map(
                    (stage, index) => (
                      <li key={index} className="mb-2">
                        <strong>{stage.stage}:</strong> {stage.description}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* SSC CPO Exam Pattern 2025 for Paper 1 */}
              <div
                id="ssc-cpo-exam-pattern-2025-for-paper-1"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.examPattern?.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sscCpoExamData?.examPattern?.content}
                </p>

                {/* Table */}
                <div className="overflow-x-auto mt-6">
                  <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                    {sscCpoExamData?.examPattern?.tableData?.title}
                  </h2>
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                      <tr>
                        <th
                          colSpan={4}
                          className="border border-black-300 px-4 py-2 bg-gray-100 text-center"
                        >
                          {sscCpoExamData?.examPattern?.tableData?.title}
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Subject
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Number of Questions
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Maximum Marks
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Duration
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {sscCpoExamData?.examPattern?.tableData?.data.map(
                        (row, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.subject}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.questions}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.marks}
                            </td>
                            {index === 0 ? (
                              <td
                                className="border border-gray-300 px-4 py-2"
                                rowSpan={
                                  sscCpoExamData?.examPattern?.tableData?.data
                                    ?.length
                                }
                              >
                                {
                                  sscCpoExamData?.examPattern?.tableData
                                    ?.duration
                                }
                              </td>
                            ) : null}
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SSC CPO Exam Pattern 2025 for Paper 2 */}
              <div
                id="ssc-cpo-exam-pattern-2025-for-paper-2"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.examPattern2?.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sscCpoExamData?.examPattern2?.content}
                </p>

                {/* Table */}
                <div className="overflow-x-auto mt-6">
                  <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                    {sscCpoExamData?.examPattern2?.tableData?.title}
                  </h2>
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Subject
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Number of Questions
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
                      {sscCpoExamData?.examPattern2?.tableData?.data?.map(
                        (row, index) => (
                          <tr key={index}>
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
                        )
                      )}
                    </tbody>
                  </table>
                  <div className="p-4 bg-gray-100 rounded-md">
                    <p className="font-semibold">Note:</p>
                    <p>
                      There will be negative marking of{" "}
                      {
                        sscCpoExamData?.examPattern2?.negativeMarkingData
                          .marksPerWrongAnswer
                      }{" "}
                      marks for each wrong answer in{" "}
                      {sscCpoExamData?.examPattern2?.negativeMarkingData.applicablePapers.join(
                        " & "
                      )}
                      . Candidates are, therefore, advised to keep this in mind
                      while answering the questions.
                    </p>
                  </div>
                </div>
              </div>

              {/*SSC CPO Tier 1 Syllabus  2025  */}
              <div
                id="ssc-cpo-tier-1-syllabus-2025"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.tier1syllabusData?.title}
                </h2>
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sscCpoExamData?.tier1syllabusData?.content}
                </p>{" "}
                <div id="ssc-mts-syllabus" className="overflow-x-auto">
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                      <tr>
                        <th
                          colSpan={4}
                          className="border border-gray-300 px-4 py-3 bg-gray-200 text-center font-semibold text-gray-800"
                        >
                          SSC CPO Tier 1 Syllabus
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
                      {sscCpoExamData?.tier1syllabusData
                        ?.ssccposyllabusData && (
                        <tr className="border-b border-gray-300 bg-gray-50">
                          {sscCpoExamData?.tier1syllabusData.ssccposyllabusData.map(
                            (section, index) => (
                              <td
                                key={index}
                                className="border border-gray-300 px-4 py-3 align-top"
                              >
                                <ul className="list-disc pl-5">
                                  {section.topics.map((topic, topicIndex) => (
                                    <li
                                      key={topicIndex}
                                      className="text-gray-600"
                                    >
                                      {topic}
                                    </li>
                                  ))}
                                </ul>
                              </td>
                            )
                          )}
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SSC CPO Tier 2 Syllabus 2025   */}
              <div
                id="ssc-cpo-tier-2-syllabus-2025"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.tier2syllabusData?.title}
                </h2>
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sscCpoExamData?.tier2syllabusData?.content}
                </p>{" "}
                <div id="ssc-mts-syllabus" className="overflow-x-auto">
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Subjects
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Topics
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sscCpoExamData?.tier2syllabusData?.ssccposyllabusData?.sections.map(
                        (section, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">
                              {section.subject}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul>
                                {section.topics.map((topic, topicIndex) => (
                                  <li key={topicIndex}>• {topic}</li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SSC CPO Physical Standard Test 2024 */}
              <div
                id="ssc-cpo-physical-standard-test-2025"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.physicalStandards?.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sscCpoExamData?.physicalStandards?.content}
                </p>

                {/* Table */}
                <div className="overflow-x-auto mt-6">
                  <h2 className="text-lg font-bold mb-2">
                    {sscCpoExamData?.physicalStandards?.tableData?.title}
                  </h2>
                  <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Category
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Height
                        </th>
                        <th
                          colSpan={2}
                          className="border border-gray-300 px-4 py-2 bg-gray-100 text-center"
                        >
                          Chest
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100"></th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100"></th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Unexpanded
                        </th>
                        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                          Expanded
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sscCpoExamData?.physicalStandards.tableData?.data?.map(
                        (row, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              {row.category}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              {row.height}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              {row.chest.unexpanded}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                              {row.chest.expanded}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SSC CPO Medical Test */}
              <div
                id="ssc-cpo-medical-test"
                className="bg-white shadow-md rounded-md p-6 mb-6 mt-6"
              >
                <h2 className="text-lg font-bold mb-2">
                  {sscCpoExamData?.medicalTest.title}
                </h2>
                <p className="mb-2">
                  The requirements for the SSC CPO Medical Test have been
                  mentioned below:
                </p>
                <ul>
                  {sscCpoExamData?.medicalTest.requirements.map(
                    (requirement, index) => (
                      <li key={index} className="mb-2">
                        <span className="text-gray-800">{`• `}</span>{" "}
                        {requirement}
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* Subject Preparation Tips for SSC CPO 2024 Exam */}
              <div
                id="ssc-cpo-2025-exam-preparation-tips"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                {/* Section Title */}
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {sscCpoExamData?.preparation?.title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {sscCpoExamData?.preparation?.content}
                </p>

                {/* Table */}
                <div className="overflow-x-auto">
                  <ul>
                    {sscCpoExamData?.preparation?.preparationTips.map(
                      (section, index) => (
                        <li key={index} className="mb-4">
                          <strong className="text-lg">{section.section}</strong>
                          <ul>
                            {section.points.map((point, pointIndex) => (
                              <li key={pointIndex}>{point}</li>
                            ))}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              {/* Frequently Asked Questions Section */}
              <div
                id="frequently-asked-questions"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {sscCpoExamData.faq.title}
                </h3>
                <div className="divide-y divide-gray-300">
                  {sscCpoExamData.faq.questions.map((faq, index) => (
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

                {/* For small screens */}
                <div className="grid sm:grid-cols-2 gap-6 lg:hidden">
                  {smallScreenClasses?.map((cls, index) => (
                    <Card
                      key={`small-${index}`}
                      image={cls.image}
                      description={cls.description}
                      price={cls.price}
                      buttonText={cls.button}
                      onButtonClick={() => handleBuyNowClick(cls?.link)}
                    />
                  ))}
                </div>

                {/* For large screens */}
                <div className="grid lg:grid-cols-3 gap-6 hidden lg:grid">
                  {largeScreenClasses?.map((cls, index) => (
                    <Card
                      key={`large-${index}`}
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
                {/* For small screens */}
                <div className="grid sm:grid-cols-2 gap-6 lg:hidden">
                  {smallScreenTestSeries?.map((cls, index) => (
                    <Card
                      key={`small-${index}`}
                      image={cls.image}
                      description={cls.description}
                      price={cls.price}
                      buttonText={cls.button}
                      onButtonClick={() => handleBuyNowClick(cls?.link)}
                    />
                  ))}
                </div>

                {/* For large screens */}
                <div className="grid lg:grid-cols-3 gap-6 hidden lg:grid">
                  {largeScreenTestSeries?.map((cls, index) => (
                    <Card
                      key={`large-${index}`}
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
                {/* For small screens */}
                <div className="grid sm:grid-cols-2 gap-6 lg:hidden">
                  {smallScreenBooks?.map((cls, index) => (
                    <Card
                      key={`small-${index}`}
                      image={cls.image}
                      description={cls.description}
                      price={cls.price}
                      buttonText={cls.button}
                      onButtonClick={() => handleBuyNowClick(cls?.link)}
                    />
                  ))}
                </div>

                {/* For large screens */}
                <div className="grid lg:grid-cols-3 gap-6 hidden lg:grid">
                  {largeScreenBooks?.map((cls, index) => (
                    <Card
                      key={`large-${index}`}
                      image={cls.image}
                      description={cls.description}
                      price={cls.price}
                      buttonText={cls.button}
                      onButtonClick={() => handleBuyNowClick(cls?.link)}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Col-4 */}
            <div className="md:col-span-3 flex flex-col space-y-4">
              <img
                src="/ssc-cgl-20251.jpeg"
                alt="Placeholder"
                className="w-full rounded-2xl shadow-md cursor-pointer"
                ref={(el) => (mediaRefs.current[0] = el)}
                onClick={() => handleFullScreen(0)}
              />
              <img
                src="/ssc-chsl1-2025.jpeg"
                alt="Placeholder"
                className="w-full rounded-2xl shadow-md cursor-pointer"
                ref={(el) => (mediaRefs.current[2] = el)}
                onClick={() => handleFullScreen(2)}
              />
              <img
                src="/ssc-combo-books1.jpeg"
                alt="Placeholder"
                className="w-full rounded-2xl shadow-md cursor-pointer"
                ref={(el) => (mediaRefs.current[4] = el)}
                onClick={() => handleFullScreen(4)}
              />
              <iframe
                ref={(el) => (mediaRefs.current[1] = el)}
                className="w-full rounded-2xl shadow-md cursor-pointer"
                src="https://www.youtube.com/embed/vpE5QC1ULgo"
                title="MPESB Calendar 2025 Out"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onClick={() => handleFullScreen(1)}
              ></iframe>
              <iframe
                ref={(el) => (mediaRefs.current[3] = el)}
                className="w-full rounded-2xl shadow-md cursor-pointer"
                src="https://www.youtube.com/embed/KDtJdvmB26U"
                title="SSC GD Bharti BSF, CISF, CRPF, SSB, ITBP, AR, SSF and NCB"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                onClick={() => handleFullScreen(3)}
              ></iframe>
              <RelatedPost />
            </div>
          </div>
        </div>
      </DynamicModalWrapper>

      <Footer />
    </>
  );
};

export default SSCCPO;
