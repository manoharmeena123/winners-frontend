import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import {
  ssccglData,
  sscExamData,
  sscExamtableData,
  tableOfContentsData,
} from "../../data/ssc-cgl";
import { classes, testSeries, sscbooksdata } from "../../data/sscData";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";

const SSCCGL = () => {
  const { title, intro, content, officialWebsite } = ssccglData;
  const { about, notification, highlights, importantDates, vacancy, syllabus } =
    sscExamData;

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
        title="SSC CGL - The WiNNERS Institute"
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
              <span className="text-gray-500">Ssc-cgl</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Main Column */}
          <div className="md:col-span-9">
            {/* First Section: SSC CGL Intro */}
            <div id="ssc-cgl-2025" className="bg-white  rounded-md lg:p-6 mb-6">
            <h1 className="xl:text-3xl lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">{title}</h1>
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
            {/* Second Section: About SSC CGL */}
            <div
              id={about.id}
              className="bg-white shadow-md rounded-md p-6 mb-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {about.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{about.content}</p>
            </div>
            {/* Third Section: SSC CGL Notification */}
            <div
              id="ssc-cgl-2025-notification"
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
                exams. As per the exam calendar, the SSC CGL 2025 Notification
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
            {/* Highlights Section */}
            <div
              id="ssc-cgl-2025-highlights"
              className="bg-white shadow-md rounded-md p-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {highlights.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {highlights.content}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    {sscExamtableData.tableData.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 font-semibold text-gray-700 border-r border-gray-300">
                          {row.label}
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Important Dates Section */}
            <div
              id="ssc-cgl-2025-important-dates"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {importantDates?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {importantDates?.content}
              </p>
              {/* Important Dates Table */}
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
                    {sscExamtableData?.importantDatesTable?.data?.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 font-semibold text-gray-700 border border-gray-300">
                            {row?.event}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row?.date}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CGL Vacancy Section */}
            <div
              id="ssc-cgl-2025-vacancy"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {vacancy.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{vacancy.content}</p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Year
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Vacancies
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamtableData?.vacancytableData?.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 font-semibold text-gray-700 border border-gray-300">
                          {row.year}
                        </td>
                        <td className="px-4 py-2 text-gray-700 border border-gray-300">
                          {row.vacancies}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CGL Registration Section */}
            <div
              id="ssc-cgl-2025-registration"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscExamData.registration.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.registration.content}
              </p>
            </div>
            {/* SSC CGL Application Fee Section */}
            <div
              id="ssc-cgl-2025-application-fee"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscExamData.applicationFee.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.applicationFee.content}
              </p>
              <p className="text-gray-800 font-semibold mb-2">
                {sscExamData.applicationFee.exemption}
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                {sscExamData.applicationFee.instructions.map(
                  (instruction, index) => (
                    <li key={index} className="mb-2">
                      {instruction}
                    </li>
                  )
                )}
              </ul>
              {/* Application Fee Table */}
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Category
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Application Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamtableData?.applicationfeetableData?.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 font-semibold text-gray-700 border border-gray-300">
                            {row.category}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.fee}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CGL Signature Specification Section */}
            <div
              id="ssc-cgl-2025-signature-specifications"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscExamData.signatureSpecification.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.signatureSpecification.content}
              </p>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Image Specifications
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Size
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamtableData?.signatureSpecificationTable?.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 font-semibold text-gray-700 border border-gray-300">
                            {row.type}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.size}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CGL Post Preference Section */}
            <div
              id="ssc-cgl-2025-post-preferences"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscExamData.postPreference.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.postPreference.content}
              </p>
              <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
                {sscExamData.postPreference.steps.map((step, index) => (
                  <li key={index} className="mb-2">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            {/* SSC CGL Eligibility Criteria Section */}
            <div
              id="ssc-cgl-2025-eligibility-criteria"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscExamData.eligibilityCriteria.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.eligibilityCriteria.content}
              </p>

              {/* Educational Qualification Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {
                  sscExamData.eligibilityCriteria.sections
                    .educationalQualification.title
                }
              </h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                {sscExamData.eligibilityCriteria.sections.educationalQualification.points.map(
                  (point, index) => (
                    <li key={index} className="mb-2">
                      {point}
                    </li>
                  )
                )}
              </ul>
              {/* Educational Qualification Table */}
              <div className="overflow-x-auto mt-6">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  SSC CGL Education Qualification
                </p>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Posts
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Education Qualification
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamtableData?.educationalQualification.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 font-semibold text-gray-700 border border-gray-300">
                            {row.post}
                          </td>
                          <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                            {row.qualification}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CGL Age Limit Section */}
            <div
              id="ssc-cgl-2025-age-limit"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscExamData?.ageLimit?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                {sscExamData?.ageLimit?.content}
              </p>
            </div>
            {/* Age Limit Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                      Age
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                      Post
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                      Group
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sscExamtableData?.ageLimittableData?.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-300 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2 font-semibold text-gray-700 border border-gray-300">
                        {row.age}
                      </td>
                      <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-pre-line">
                        {row.post}
                      </td>
                      <td className="px-4 py-2 text-gray-700 border border-gray-300">
                        {row.group}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Age Limit for Other Posts Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.ageLimitOtherPosts.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.ageLimitOtherPosts.content}
              </p>

              {/* Age Limit Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Posts
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Age Limit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamtableData.ageLimitOtherPoststableData?.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 font-semibold text-gray-700 border border-gray-300">
                            {row.post}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.ageLimit}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* Nationality Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.nationality.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.nationality.content}
              </p>
            </div>
            {/* SSC CGL Selection Process Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.selectionProcess.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.selectionProcess.content}
              </p>
              <ol className="list-decimal list-inside text-gray-700 leading-relaxed">
                {sscExamData.selectionProcess.steps.map((step, index) => (
                  <li key={index} className="mb-2">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            {/* SSC CGL Tier 1 Exam Pattern 2024 */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.syllabus?.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.syllabus?.content1}{" "}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.syllabus?.content2}{" "}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.syllabus?.content3}{" "}
              </p>
              {/* Syllabus Table */}
              <div id="ssc-cgl-2025-syllabus" className="overflow-x-auto p-4">
                <h2 className="text-lg font-bold mb-4">
                  SSC CGL Tier 1 Exam Pattern 2024
                </h2>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={3}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {sscExamData.syllabus?.tableTitle}
                      </th>
                    </tr>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">
                        S. No.
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Sections
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        No. of Questions
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Marks
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Time Allotted
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamData.syllabus?.examData.map((item, index) => (
                      <tr key={item.id}>
                        <td className="border border-gray-300 px-4 py-2">
                          {index + 1}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {item.section}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {item.questions}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {item.marks}
                        </td>
                        {/* Add Time Allotted only for the first row */}
                        {index === 0 ? (
                          <td
                            rowSpan={syllabus?.examData.length}
                            className="border border-gray-300 px-4 py-2 align-top"
                          >
                            A cumulative time of 60 minutes (1 hour)
                          </td>
                        ) : null}
                      </tr>
                    ))}
                    {/* Footer Row for Total */}
                    <tr className="bg-gray-100 font-bold">
                      <td
                        className="border border-gray-300 px-4 py-2 text-center"
                        colSpan={2}
                      >
                        Total
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {syllabus?.totalQuestions}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {syllabus?.totalMarks}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* SSC CGL Tier – 1 Syllabus for General Intelligence and Reasoning */}
                <div className="bg-white rounded-md p-6 mt-6">
                  <h6 className="underline font-semibold text-lg mb-4">
                    {syllabus?.syllabusDetails?.generalIntelligence?.title}
                  </h6>
                  <ul className="list-disc pl-6 space-y-2">
                    {syllabus?.syllabusDetails?.generalIntelligence?.topics.map(
                      (topic, index) => (
                        <li key={index}>{topic}</li>
                      )
                    )}
                  </ul>
                </div>
                {/* SSC CGL Tier – 1 Syllabus for General Awareness */}
                <div className="bg-white rounded-md p-6 ">
                  <h6 className="underline font-semibold text-lg mb-4">
                    {syllabus?.syllabusDetails?.generalAwareness?.title}
                  </h6>
                  <ul className="list-disc pl-6 space-y-2">
                    {syllabus?.syllabusDetails?.generalAwareness?.topics.map(
                      (topic, index) => (
                        <li key={index}>{topic}</li>
                      )
                    )}
                  </ul>
                </div>
                {/* SSC CGL Tier – 1 Syllabus for Quantitative Aptitude */}
                <div className="bg-white rounded-md p-6 ">
                  <h6 className="underline font-semibold text-lg mb-4">
                    {syllabus?.syllabusDetails?.quantitativeAptitude?.title}
                  </h6>
                  <ul className="list-disc pl-6 space-y-2">
                    {syllabus?.syllabusDetails?.quantitativeAptitude?.topics.map(
                      (topic, index) => (
                        <li key={index}>{topic}</li>
                      )
                    )}
                  </ul>
                </div>
                {/* SSC CGL Tier – 1 Syllabus for English Language */}
                <div className="bg-white rounded-md p-6 ">
                  <h6 className="underline font-semibold text-lg mb-4">
                    {syllabus?.syllabusDetails?.englishAptitude?.title}
                  </h6>
                  <ul className="list-disc pl-6 space-y-2">
                    {syllabus?.syllabusDetails?.englishAptitude?.topics.map(
                      (topic, index) => (
                        <li key={index}>{topic}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>{" "}
              {/* SSC CGL 2024 Exam Pattern & Syllabus  for Tier 2 */}
              <div className="overflow mx-auto">
                <h2 className="text-lg font-bold mb-2">
                  SSC CGL 2024 Exam Pattern & Syllabus for Tier 2
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {syllabus?.syllabusDetails2?.content1?.paragraph}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {syllabus?.syllabusDetails2?.content1?.topics.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
                <div className="overflow-x-auto mt-6">
                  <table className="table-auto border-collapse w-full">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Sections</th>
                        <th className="border px-4 py-2">Module</th>
                        <th className="border px-4 py-2">Subject</th>
                        <th className="border px-4 py-2">No. of Questions</th>
                        <th className="border px-4 py-2">Marks</th>
                        <th className="border px-4 py-2">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {syllabus?.syllabusDetails2?.syllabusDetailsoftier2?.map(
                        (section, index) => (
                          <React.Fragment key={index}>
                            {section.modules.map((module, index) => (
                              <tr key={index}>
                                <td className="border px-4 py-2">
                                  {section.section}
                                </td>
                                <td className="border px-4 py-2">
                                  {module.module}
                                </td>
                                <td className="border px-4 py-2">
                                  {module.subject}
                                </td>
                                <td className="border px-4 py-2">
                                  {module.questions}
                                </td>
                                <td className="border px-4 py-2">
                                  {module.marks}
                                </td>
                                <td className="border px-4 py-2">
                                  {module.time} minutes
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        )
                      )}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="border px-4 py-2" colSpan={3}>
                          TOTAL
                        </td>
                        <td className="border px-4 py-2">150</td>
                        <td className="border px-4 py-2">450</td>
                        <td className="border px-4 py-2">2 hours 15 minutes</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="overflow mx-auto mt-4">
                <div className="mb-6">
                  <p>
                    {syllabus?.syllabusDetails2?.examData?.paper1.mandatory}
                  </p>
                  <p>
                    {
                      syllabus?.syllabusDetails2?.examData?.paper1
                        .negativeMarking
                    }
                  </p>
                </div>
                <div className="overflow-x-auto mt-6">
                  <table className="table-auto border-collapse w-full">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Paper</th>
                        <th className="border px-4 py-2">Section</th>
                        <th className="border px-4 py-2">No. of Questions</th>
                        <th className="border px-4 py-2">Maximum Marks</th>
                        <th className="border px-4 py-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          {syllabus?.syllabusDetails2?.examData?.paper2.paper}
                        </td>
                        <td className="border px-4 py-2">
                          {syllabus?.syllabusDetails2?.examData?.paper2.section}
                        </td>
                        <td className="border px-4 py-2">
                          {
                            syllabus?.syllabusDetails2?.examData?.paper2
                              .questions
                          }
                        </td>
                        <td className="border px-4 py-2">
                          {syllabus?.syllabusDetails2?.examData?.paper2.marks}
                        </td>
                        <td className="border px-4 py-2">
                          {
                            syllabus?.syllabusDetails2?.examData?.paper2
                              .duration
                          }
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">
                          {syllabus?.syllabusDetails2?.examData?.paper3.paper}
                        </td>
                        <td className="border px-4 py-2">
                          {syllabus?.syllabusDetails2?.examData?.paper3.section}
                        </td>
                        <td className="border px-4 py-2">
                          {
                            syllabus?.syllabusDetails2?.examData?.paper3
                              .questions
                          }
                        </td>
                        <td className="border px-4 py-2">
                          {syllabus?.syllabusDetails2?.examData?.paper3.marks}
                        </td>
                        <td className="border px-4 py-2">
                          {
                            syllabus?.syllabusDetails2?.examData?.paper3
                              .duration
                          }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Module-I of Session-I of Paper-I (Mathematical Abilities): */}
              <div className="bg-white rounded-md p-6 mt-6">
                <h6 className="underline font-semibold text-lg mb-4">
                  {syllabus?.syllabusDetails2?.mathematicalAbilities?.title}
                </h6>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {syllabus?.syllabusDetails2?.mathematicalAbilities?.content}
                </p>
                <div className="overflow mx-auto">
                  <table className="table-auto border-collapse w-full">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Topics</th>
                        <th className="border px-4 py-2">Sub-topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(
                        syllabus?.syllabusDetails2?.moduleTopicsData
                      ).map(([topic, subtopics]) => (
                        <tr key={topic}>
                          <td className="border px-4 py-2">{topic}</td>
                          <td className="border px-4 py-2">
                            <ul className="list-disc pl-4 space-2">
                              {subtopics.map((subtopic, index) => (
                                <li key={index}>{subtopic}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Module-II of Section-I of Paper-I (Reasoning and General Intelligence): */}
              <div className="bg-white rounded-md p-6 ">
                <h6 className="underline font-semibold text-lg mb-4">
                  {syllabus?.syllabusDetails2?.generalIntelligence?.title}
                </h6>
                <ul className="list-disc pl-6 space-y-2">
                  {syllabus?.syllabusDetails2?.generalIntelligence?.topic.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
              {/* Module-I of Section-II of Paper-I (English Language and Comprehension): */}
              <div className="bg-white rounded-md p-6 ">
                <h6 className="underline font-semibold text-lg mb-4">
                  {syllabus?.syllabusDetails2?.englishLanguage?.title}
                </h6>
                <ul className="list-disc pl-6 space-y-2">
                  {syllabus?.syllabusDetails2?.englishLanguage?.topic.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
              {/* Module-II of Section-II of Paper-I (General Awareness): */}
              <div className="bg-white rounded-md p-6 ">
                <h6 className="underline font-semibold text-lg mb-4">
                  {syllabus?.syllabusDetails2?.generalAwareness?.title}
                </h6>
                <ul className="list-disc pl-6 space-y-2">
                  {syllabus?.syllabusDetails2?.generalAwareness?.topic.map(
                    (topic, index) => (
                      <li key={index}>{topic}</li>
                    )
                  )}
                </ul>
              </div>
              {/* Module-I of Section-III of Paper-I (Computer Proficiency): */}
              <div className="bg-white rounded-md p-6 mt-6">
                <h6 className="underline font-semibold text-lg mb-4">
                  {syllabus?.syllabusDetails2?.mathematicalAbilities?.title}
                </h6>
                <div className="overflow mx-auto">
                  <table className="table-auto border-collapse w-full">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Topics</th>
                        <th className="border px-4 py-2">Sub-topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(
                        syllabus?.syllabusDetails2?.computerProficiency
                          ?.moduleTopicsData
                      ).map(([topic, subtopics]) => (
                        <tr key={topic}>
                          <td className="border px-4 py-2">{topic}</td>
                          <td className="border px-4 py-2">
                            <ul className="list-disc pl-4 space-2">
                              {subtopics.map((subtopic, index) => (
                                <li key={index}>{subtopic}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* SSC CGL Tier 2 Syllabus- Paper 2 (Statistics) */}
              <div className="bg-white rounded-md p-6 mt-6">
                <h6 className="underline font-semibold text-lg mb-4">
                  {syllabus?.syllabusDetails2?.statistics?.title}
                </h6>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {syllabus?.syllabusDetails2?.statistics?.content}
                </p>
                <div className="overflow-x-auto">
                  <table className="table-auto border-collapse w-full">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Topics</th>
                        <th className="border px-4 py-2">Sub-topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(
                        syllabus?.syllabusDetails2?.statistics?.moduleTopicsData
                      ).map(([topic, subtopics]) => (
                        <tr key={topic}>
                          <td className="border px-4 py-2">{topic}</td>
                          <td className="border px-4 py-2">
                            <ul className="list-disc pl-4 space-2">
                              {subtopics.map((subtopic, index) => (
                                <li key={index}>{subtopic}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* SSC CGL Tier 2 Syllabus- Paper 3(General Studies-Finance and Economics) */}
              <div className="bg-white rounded-md p-6 mt-6">
                <h6 className="underline font-semibold text-lg mb-4">
                  {syllabus?.syllabusDetails2?.financeAndEconomics?.title}
                </h6>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {syllabus?.syllabusDetails2?.financeAndEconomics?.content}
                </p>
                <div className="overflow-x-auto">
                  <table className="table-auto border-collapse w-full">
                    <thead>
                      <tr>
                        {" "}
                        <th className="border px-4 py-2">Part</th>
                        <th className="border px-4 py-2">Subject</th>
                        <th className="border px-4 py-2">Topics</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(
                        syllabus?.syllabusDetails2?.financeAndEconomics
                          ?.moduleTopicsData
                      ).map(([topic, sections]) => {
                        console.log("Topic:", topic);
                        console.log("Sections:", sections);

                        return sections?.subtopics?.map((section, index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2">
                              {sections.topic}
                            </td>
                            <td className="border px-4 py-2">
                              {section.topic}
                            </td>
                            <td className="border px-4 py-2">
                              <ul className="list-disc pl-4 space-2">
                                {section.subtopics.map((subtopic, index) => (
                                  <li key={index}>
                                    {typeof subtopic === "string" ? (
                                      subtopic
                                    ) : (
                                      <>
                                        <strong className="font-semibold">
                                          {subtopic.topic}
                                        </strong>
                                        <ul className="list-disc pl-4 space-2">
                                          {subtopic.subtopics.map(
                                            (subsubtopic, index) => (
                                              <li key={index}>{subsubtopic}</li>
                                            )
                                          )}
                                        </ul>
                                      </>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ));
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscExamData.syllabus.syllabusTable.headers.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamData.syllabus.syllabusTable.data.map(
                      (row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={`border-b border-gray-300 ${
                            rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-4 py-2 text-gray-700 border border-gray-300"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div> */}
            </div>
            {/* SSC CGL Posts Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.posts.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.posts.content}{" "}
              </p>

              {/* Posts Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        SSC CGL Posts
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamData.posts.postsList.map((post, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-700 border border-gray-300">
                          {post}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CGL Salary Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.salary.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.salary.content}{" "}
              </p>

              {/* Salary Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscExamData.salary.salaryTable.headers.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamData.salary.salaryTable.data.map(
                      (row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={`border-b border-gray-300 ${
                            rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-4 py-2 text-gray-700 border border-gray-300"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* How to Prepare for SSC CGL 2025 Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.preparation.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.preparation.content}
              </p>
            </div>
            {/* How to Get Top 100 Rank in SSC CGL Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.topRankGuide.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.topRankGuide.content}
              </p>
            </div>
            {/* SSC CGL Mock Test Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.mockTest.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.mockTest.content}
              </p>
            </div>
            {/* SSC CGL Online Coaching Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.onlineCoaching.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.onlineCoaching.content}
              </p>
            </div>
            {/* Can I Crack SSC CGL in First Attempt Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.firstAttempt.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.firstAttempt.content}
              </p>
            </div>
            {/* SSC CGL Preparation Books Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.preparationBooks.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.preparationBooks.content}
              </p>

              {/* Books Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscExamData.preparationBooks.booksTable.headers.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscExamData.preparationBooks.booksTable.data.map(
                      (row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={`border-b border-gray-300 ${
                            rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 font-semibold border border-gray-300">
                            {row.subject}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            <ul className="list-disc pl-6">
                              {row.books.map((book, bookIndex) => (
                                <li key={bookIndex}>{book}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>{" "}
            {/* Frequently Asked Questions Section */}
            <div
              id="ssc-cgl-2025-faqs"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {sscExamData.faq.questions.map((faq, index) => (
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

export default SSCCGL;
