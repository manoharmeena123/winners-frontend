import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import {
  mpSiData,
  mpSiExamData,
  tableOfContentsData,
  smallScreenClasses,
  largeScreenClasses,
  smallScreenTestSeries,
  largeScreenTestSeries,
  smallScreenBooks,
  largeScreenBooks,
} from "../../data/mp-si";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";
import DynamicModalWrapper from "../../utils/DynamicModalWrapper";
import useFullScreen from "../../hooks/useFullScreen";

const MPSI = () => {
  const { title, intro, content, officialWebsite } = mpSiData;
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
        title="MPSI - The WiNNERS Institute"
        canonicalLink="/ssc-cgl"
      />
      <DynamicModalWrapper
        bottomImage="https://appx-content-v2.classx.co.in/subject/2025-01-07-0.8639866624465913.jpeg"
        centerImage="https://appx-content-v2.classx.co.in/paid_course3/2025-01-07-0.8613862074392284.jpeg"
        centerlink="https://live.winnersinstitute.in/courses/468-esb-vyapam-foundation-combo-online-course-cvf1224"
        bottomlink="https://live.winnersinstitute.in/courses/482-mahila-supervisor-2025-30-online-course-cmps1224"
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
                <span className="text-gray-500">MP Jail Prahari</span>
              </li>
            </ol>
          </nav>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Main Column */}
            <div className="md:col-span-9">
              {/* First Section: SSC CGL Intro */}
              <div id="ssc-cgl-2025" className="bg-white  rounded-md  mb-3">
                <h1 className="lg:text-3xl md:text-2xl font-bold text-gray-800 mb-4">
                  {title}
                </h1>
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

              {/* MP Constable 2025 Notification Released */}
              <div
                id="mp-si-2025-notification"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {mpSiExamData?.notification?.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                  {mpSiExamData?.notification?.description}
                </p>
                {mpSiExamData?.notification?.link && (
                  <h6 className="bg-red-600 text-white p-2 rounded-md inline-block">
                    <a
                      href={mpSiExamData.notification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-white"
                    >
                      Download Notification PDF
                    </a>
                  </h6>
                )}
              </div>

              {/* MP Constable 2025 Notification Details */}
              <div
                id="mp-si-exam-dates"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {mpSiExamData?.notificationData.title}
                </h2>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold">Age Limit</h2>
                  <ul className="list-disc ml-6">
                    <li>
                      Minimum Age:{" "}
                      <strong>
                        {mpSiExamData?.notificationData.ageLimit.min} years
                      </strong>
                    </li>
                    <li>
                      Maximum Age:{" "}
                      <strong>
                        {mpSiExamData?.notificationData.ageLimit.max} years
                      </strong>
                    </li>
                    <li>
                      Age relaxation for reserved categories:
                      <ul className="list-inside list-disc ml-4">
                        {mpSiExamData?.notificationData.ageRelaxation.map(
                          (item, index) => (
                            <li key={index}>
                              <strong>{item.category}:</strong>{" "}
                              {item.relaxation} years
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h2 className="text-xl font-semibold">
                    Qualification Required
                  </h2>
                  {mpSiExamData?.notificationData.qualifications.map(
                    (qualification, index) => (
                      <div key={index}>
                        <p className="font-semibold">{qualification.role}:</p>
                        <ul className="list-disc ml-6">
                          {qualification.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6">
                  <p className="text-center">
                    For more details, download the official notification.
                  </p>
                </div>
              </div>

              {/* न्यूनतम शैक्षणिक अर्हता :- */}
              <div
                id="mp-si-eligibility-criteria"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  न्यूनतम शैक्षणिक अर्हताएँ (Minimum Educational Qualifications)
                </h2>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-500 font-bold text-black">
                        <th className="border border-gray-300 px-4 py-2">
                          क्र.
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          पदनाम
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          पद का प्रकार
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          शैक्षणिक अर्हताएँ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mpSiExamData?.eligibility?.map((row, index) => (
                        <tr
                          key={row.id}
                          className={`${
                            index % 2 === 0 ? "bg-gray-100" : "bg-white"
                          }`}
                        >
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row["क्र."]}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row["पदनाम"]}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row["पद का प्रकार"]}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row["शैक्षणिक अर्हताएँ"]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 mb-6">
                  <ul className="list-disc">
                    {mpSiExamData?.rules.map((rule, index) => (
                      <li key={index} className="mb-2">
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-500 font-bold text-black">
                        <th className="border border-gray-300 px-4 py-2">
                          क्र.
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          भर्ती का तरीका
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          पद का प्रकार
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          शैक्षणिक अर्हताएँ
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          आयु सीमा
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          आरक्षण
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mpSiExamData?.tableData.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.srNo}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.recruitmentMethod}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.postType}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.educationalQualification}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.ageLimit}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.reservation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* मध्यप्रदेश के मूल निवासियों के लिए आयु-सीमा में अधिकतम छूट :- */}
              <div className="bg-white shadow-md rounded-md p-6 mt-6">
                <h2 className="text-2xl font-bold mb-4">
                  मध्यप्रदेश के मूल निवासियों के लिए आयु सीमा में छूट
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">
                          क्र.
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          वर्ग का संक्षेप
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          पद का प्रकार
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          परीक्षा का प्रकार
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          आयु सीमा
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mpSiExamData?.ageRelaxation.map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.srNo}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.category}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.postType}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.examType}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.ageLimit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* परीक्षा योजना  Exam Planning :- */}
              <div className="bg-white shadow-md rounded-md p-6 mt-6">
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {mpSiExamData?.examPlanning?.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {mpSiExamData?.examPlanning?.description}
                </p>

                {mpSiExamData?.examPlanning?.imageUrl && (
                  <div className="flex justify-center items-center">
                    <div className="items-center">
                      <div className="flex">
                        <img
                          src={mpSiExamData?.examPlanning?.imageUrl}
                          alt="Exam Planning Structure"
                          className="max-w-full h-auto mb-2 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* writtenExam "लिखित परीक्षा" */}
              <div className="bg-white shadow-md rounded-md p-6 mt-6">
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {mpSiExamData?.writtenExam?.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {mpSiExamData?.writtenExam?.description}
                </p>

                {mpSiExamData?.writtenExam?.imageUrl && (
                  <div className="flex justify-center items-center">
                    <div className="items-center">
                      <div className="flex">
                        <img
                          src={mpSiExamData?.writtenExam?.imageUrl}
                          alt="Exam Planning Structure"
                          className="max-w-full h-auto mb-2 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* तकनीकी पदों के लिए पाठ्यक्रम (पेपर – I) कुल अंक - 100 */}
              <div className="bg-white shadow-md rounded-md p-6 mt-6">
                <h2 className="text-2xl font-bold mb-4">
                  तकनीकी पदों के लिए पाठ्यक्रम (पेपर-1) - कुल अंक- 100
                </h2>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-500 font-bold text-black">
                        <th className="border border-gray-300 px-4 py-2">
                          भौतिक विज्ञान
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          रसायन विज्ञान
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          गणित
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <ul className="list-decimal ml-6 space-y-2">
                            {mpSiExamData?.syllabusData
                              .find((subject) => subject.subject === "Physics")
                              ?.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                              ))}
                          </ul>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <ul className="list-decimal ml-6 space-y-2">
                            {mpSiExamData?.syllabusData
                              .find(
                                (subject) => subject.subject === "Chemistry"
                              )
                              ?.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                              ))}
                          </ul>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <ul className="list-decimal ml-6 space-y-2">
                            {mpSiExamData?.syllabusData
                              .find(
                                (subject) => subject.subject === "Mathematics"
                              )
                              ?.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                              ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* तकनीकी और गैर तकनीकी पदों के लिए पाठ्यक्रम (पेपर – 2) कुल अंक - 200 */}
              <div className="bg-white shadow-md rounded-md p-6 mt-6">
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  तकनीकी पदों के लिए पाठ्यक्रम (पेपर-1) - कुल अंक- 100
                </h2>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-500 font-bold text-black">
                        <th className="border border-gray-300 px-4 py-2">
                          भौतिक विज्ञान
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          रसायन विज्ञान
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          गणित
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <ul className="list-decimal ml-6 space-y-2">
                            {mpSiExamData?.syllabusData2
                              .find((subject) => subject.subject === "हिंदी")
                              ?.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                              ))}
                          </ul>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <ul className="list-decimal ml-6 space-y-2">
                            {mpSiExamData?.syllabusData2
                              .find((subject) => subject.subject === "अंग्रेजी")
                              ?.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                              ))}
                          </ul>
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          <ul className="list-decimal ml-6 space-y-2">
                            {mpSiExamData?.syllabusData2
                              .find(
                                (subject) => subject.subject === "सामान्य ज्ञान"
                              )
                              ?.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                              ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* न्यूनतम शारीरिक अर्हता :- */}
              <div
                id="mp-si-physical-criteria"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  न्यूनतम शारीरिक अर्हताएँ :
                </h2>
                <ul className="list-disc">
                  {mpSiExamData?.qualifications.map((qualification, index) => (
                    <li key={index} className="mb-2">
                      {qualification}
                    </li>
                  ))}
                </ul>

                <div className="overflow-x-auto mt-6 mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">
                          वर्ग
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          800 मीटर दौड़
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          लंबी छलांग
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          शॉट पुट
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mpSiExamData?.physicalStandards.map((standard) => (
                        <tr key={standard.category} className="border-b">
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {standard.category}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {standard.eightHundredMeters}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {standard.longJump}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {standard.shotPut}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-md p-6 mt-6">
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {mpSiExamData?.interviewData?.title}
                </h2>
                <p className="text-gray-700">
                  {mpSiExamData?.interviewData?.description}
                </p>
              </div>

              {/* Frequently Asked Questions Section */}
              <div
                id="frequently-asked-questions"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {mpSiExamData.faq.title}
                </h3>
                <div className="divide-y divide-gray-300">
                  {mpSiExamData.faq.questions.map((faq, index) => (
                    <div key={index} className="py-4">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full text-left focus:outline-none hover:no-underline"
                      >
                        <span className="font-semibold text-gray-700">
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
                        <p className="mt-2 text-gray-600 leading-relaxed">
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
                src="/mppeb/vyapam-foundation-square.jpg"
                alt="Placeholder"
                className="w-full rounded-2xl shadow-md cursor-pointer"
                ref={(el) => (mediaRefs.current[0] = el)}
                onClick={() => handleFullScreen(0)}
              />
              <img
                src="/mppeb/women-supervisor-group5-square.jpg"
                alt="Placeholder"
                className="w-full rounded-2xl shadow-md cursor-pointer"
                ref={(el) => (mediaRefs.current[2] = el)}
                onClick={() => handleFullScreen(2)}
              />
              <img
                src="/mppeb/mp-tet-group-3.jpg"
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
        <Footer />
      </DynamicModalWrapper>
    </>
  );
};

export default MPSI;
