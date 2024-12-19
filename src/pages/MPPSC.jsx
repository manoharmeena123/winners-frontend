import Aos from "aos";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import ReactHelmet from "../utils/ReactHelmet";
import Card from "../components/card/Card";
import { mppscExamData, tableOfContentsData } from "../data/mp-psc";

const MPPSC = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open
  const [activeIndex, setActiveIndex] = useState(null);
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Function to toggle the state
  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  const {
    overview,
    importantDates,
    resultOut,
    vacancy,
    onlineLink,
    applicationForm,
    mppscsllaybus,
    ageLimits,
    ageRelaxation,
    qualification,
    eligibility,
    selection,
    salaryTableData,
    admitCard,
    results,
    faq,
  } = mppscExamData;

  return (
    <>
      <Header />
      <ReactHelmet
        title="MPPSC - The WiNNERS Institute"
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
              <span className="text-gray-500">Mppsc</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white  rounded-md">
          {/* Col-8 */}
          <div className="md:col-span-9 lg:px-6">
            {/* First Section: SSC  Intro */}
            <div className="bg-white  rounded-md lg:p-6 mb-3">
              <h1 className="xl:text-3xl lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                MPPSC Notification 2024, Eligibility, Selection Process,
                Salary..
              </h1>
              <p className="text-gray-600 mb-4">
                MPPSC Notification 2024 has been @www.mppsc.gov.in for 88 posts.
                Check MPPSC Notification 2024, eligibility, salary, selection
                process, application form, and syllabus.,{" "}
                <a
                  href="https://www.mppsc.gov.in"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.mppsc.gov.in
                </a>
              </p>
            </div>
            <img
              src="/mp-psc-notification.jpeg"
              alt="Placeholder"
              className=" rounded shadow-md"
            />
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
                  overflow: isOpen ? "visible" : "hidden", // Make sure overflow is visible when open
                  transition: "max-height 0.3s ease", // Smooth transition on toggle
                }}
              >
                <ul className="list-decimal ml-6 space-y-2 text-sm">
                  {tableOfContentsData?.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="text-red-600 hover:underline"
                      >
                        {item.title}
                      </a>
                      {item.subItems && (
                        <ul className="list-decimal ml-6 space-y-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subItem.link}
                                className="text-red-600 hover:underline"
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

            {/* Content of links */}
            <div className="mt-4 p-2">
              {mppscExamData?.notifications.map((notification) => (
                <p key={notification.id} className="leading-loose mb-6">
                  {notification.content}
                </p>
              ))}
              <div className="mt-4 p-2">
                <h2
                  id="ssc-calendar-2025"
                  className="text-xl font-bold text-blue-900 mb-2"
                >
                  {mppscExamData.details.title}
                </h2>
                <p className="leading-loose text-gray-700">
                  {mppscExamData.details.description}
                </p>
                <img
                  src={mppscExamData.details.imageUrl}
                  alt="Placeholder"
                  className="w-full rounded shadow-md"
                />
              </div>
            </div>
            {/* MPPSC Notification 2024 Overview Section */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {overview?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {overview?.content}
              </p>
              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={3}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {overview?.tableTitle}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {overview?.tableData?.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.label}
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* MPPSC Notification 2024 Important Dates Section */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {importantDates?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {importantDates?.content}
              </p>
              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={3}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {importantDates?.tableTitle}
                      </th>
                    </tr>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Important Events
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Important Dates
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {importantDates?.tableData?.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.label}
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MPPSC Prelims 2024 Result Out */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {resultOut.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {resultOut.content}
              </p>
            </div>

            {/* MPPSC Notification 2024 PDF  */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2
                id="ssc-calendar-2025"
                className="text-xl font-bold text-blue-900 mb-2"
              >
                {mppscExamData.vacancy.title}
              </h2>
              <p className="leading-loose text-gray-700">
                {mppscExamData.vacancy.description}
              </p>
              <img
                src={mppscExamData.vacancy.imageUrl}
                alt="Placeholder"
                className="w-full rounded shadow-md"
              />
            </div>

            {/* MPPSC 2024 Apply Online Link */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {onlineLink.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {onlineLink.content}
              </p>
            </div>
            {/* Steps to fill out the MPPSC Application Form 2024 */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {applicationForm?.title}
              </h1>
              <p className="text-gray-600 mb-6">{applicationForm?.content}</p>
              <ul className="list-none">
                {applicationForm?.steps?.map((step) => (
                  <li key={step.id} className="mb-4 flex items-start mt-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center text-lg font-semibold mr-3">
                      {step.id}
                    </span>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {step.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* MPPSC Syllabus 2024  */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {mppscsllaybus?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {mppscsllaybus?.content}
              </p>
            </div>

            {/* MPPSC 2024 Age Limit */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {ageLimits?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {ageLimits?.content}
              </p>{" "}
              {/* Non-Uniformed Post: table */}
              <div className="bg-white  rounded-md p-6">
                <h6 className="lg:text-xl sm:text-xl  font-bold text-gray-600 mb-4">
                  Non-Uniformed Post:
                </h6>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-200 ">
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                          Category
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                          Minimum Age
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                          Maximum Age
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ageLimits?.nonUniformedPost?.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                            {row.category}
                          </td>
                          <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                            {row.minimumAge}
                          </td>
                          <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                            {row.maxiumAge}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Uniformed-Post:: table */}
              <div className="bg-white rounded-md p-6">
                <h6 className="lg:text-xl sm:text-xl font-bold text-gray-600 mb-4">
                  Uniformed-Post:
                </h6>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-200 ">
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                          Category
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                          Minimum Age
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                          Maximum Age
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ageLimits?.UniformedPost?.map((row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                            {row.category}
                          </td>
                          <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                            {row.minimumAge}
                          </td>
                          <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                            {row.maxiumAge}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* MPPSC Age Relaxation */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-xl sm:text-xl font-bold text-gray-600 mb-4">
                {ageRelaxation?.title}
              </h2>
              <p>{ageRelaxation?.content}</p>
              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={3}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {ageRelaxation?.tableTitle}
                      </th>
                    </tr>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Category
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        MPPSC Age Limit – Age Relaxation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ageRelaxation?.ageRelaxationTable?.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.category}
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.ageLimit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* MPPSC Education Qualification 2024 */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {qualification?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {qualification?.content}
              </p>
            </div>

            {/* MPSSC Physical Eligibility Criteria Requirement */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {eligibility?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {eligibility?.content}
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={3}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {eligibility?.tableTitle}
                      </th>
                    </tr>
                    <tr className="bg-gray-200 ">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Category
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Height
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Chest Girth (in cms)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {eligibility?.eligibilitytable?.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.category}
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.height}
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.maxiumAge}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MPPSC Selection Process 2024 */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selection?.title}
              </h2>
              <p className="text-gray-600 mb-4">{selection?.content}</p>
              <ul className="list-disc list-inside text-gray-700">
                {selection?.steps.map((step, index) => (
                  <li key={index} className="mb-2">
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* MPPSC Salary 2024 */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {salaryTableData?.title}
              </h2>
              <p className="text-gray-600 mb-4 ">{salaryTableData?.content}</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={3}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {salaryTableData?.tableTitle}
                      </th>
                    </tr>
                    <tr className="bg-gray-200 text-gray-800">
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Post
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Pay Scale (INR)
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300">
                        Grade Pay (INR)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {salaryTableData?.data.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.post}
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.payScale}
                        </td>
                        <td className="px-4 py-2 text-gray-700 whitespace-pre-line border border-gray-300">
                          {row.gradePay}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* MPPSC Admit Card 2024 */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {admitCard?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {admitCard?.content}
              </p>
            </div>
            {/* MPPSC Results 2024  */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {results?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {results?.content}
              </p>
            </div>

            {/* Frequently Asked Questions Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {mppscExamData?.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {mppscExamData?.faq?.questions?.map((faq, index) => (
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
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MPPSC;
