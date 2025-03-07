import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import {
  bankingExamData,
  bankingExamDetails,
  tableOfContentsData,
  smallScreenClasses,
  largeScreenClasses,
} from "../../data/banking";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";
import DynamicModalWrapper from "../../utils/DynamicModalWrapper";
import useFullScreen from "../../hooks/useFullScreen";
import Loading from "../../components/loading/Loading";

const BANKING = () => {
  const { title, intro, content, officialWebsites } = bankingExamData;
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
        title="Bank Exams - The WiNNERS Institute"
        canonicalLink="/banking-exam-details"
      />
      <DynamicModalWrapper
        bottomImage="https://appx-content-v2.classx.co.in/subject/2025-01-07-0.8639866624465913.jpeg"
        centerImage="https://appx-content-v2.classx.co.in/paid_course3/2025-01-07-0.632941226147026.jpeg"
        centerlink="https://live.winnersinstitute.in/courses/478-banking-foundation-combo-online-course-cbf1224"
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
                <span className="text-gray-500">Bank Exams</span>
              </li>
            </ol>
          </nav>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Main Column */}
            <div className="md:col-span-9">
              {/* First Section: Banking Intro */}
              <div id="ssc-cgl-2025" className="bg-white  rounded-md  mb-3">
                <h1 className="lg:text-3xl md:text-2xl font-bold text-gray-800 mb-4">
                  {title}
                </h1>
                <p className="text-gray-600 mb-4">{intro}</p>
                {officialWebsites && officialWebsites.length > 0 && (
                  <div className="mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      Official Websites:
                    </h2>
                    <ul className="list-disc list-inside text-blue-500">
                      {officialWebsites.map((website, index) => (
                        <li key={index}>
                          <a
                            href={website}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {website}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
              {/* Second Section: About Bank Exams */}
              <div
                id="what-are-banking-exams"
                className="bg-white shadow-md rounded-md p-6 mb-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {bankingExamDetails?.about.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {bankingExamDetails?.about.content}
                </p>
              </div>
              {/* Second Section: UpcomingExams  */}
              <div
                id="upcoming-banking-exams-2025"
                className="bg-white shadow-md rounded-md p-6 mb-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {bankingExamDetails?.upcomingExams.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {bankingExamDetails?.upcomingExams.content}
                </p>
              </div>

              {/* Second Section:  Bank Exams Syllbus  */}
              <div
                id="ibps-po-2025-syllabus"
                className="bg-white shadow-md rounded-md p-6 mb-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {bankingExamDetails?.syllabus?.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {bankingExamDetails?.syllabus?.content}
                </p>

                {bankingExamDetails?.syllabus?.subItems && (
                  <ul className="list-decimal ml-6 space-y-2 mt-4">
                    {bankingExamDetails?.syllabus?.subItems.map(
                      (subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      )
                    )}
                  </ul>
                )}
              </div>

              {/* Know More About Banking Sector in India */}
              <div
                id="overview-of-banking-sector-in-india"
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {bankingExamDetails?.bankingData.title}
                </h1>
                <p className="text-gray-600 mb-4">
                  {bankingExamDetails?.bankingData.subtitle}
                </p>
                <div className="overflow-x-auto">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-500 text-black">
                        <th className="p-4 border border-gray-300 text-center">
                          {bankingExamDetails?.bankingData.columns[0].heading}
                        </th>
                        <th className="p-4 border border-gray-300 text-center">
                          {bankingExamDetails?.bankingData.columns[1].heading}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bankingExamDetails?.bankingData.columns[0].points.map(
                        (point, index) => (
                          <tr key={index}>
                            <td className="p-4 border border-gray-300">
                              <span className="list-decimal">
                                {index + 1}.{" "}
                              </span>
                              {point}
                            </td>
                            <td className="p-4 border border-gray-300">
                              {
                                bankingExamDetails?.bankingData.columns[1]
                                  .points[index]
                              }
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
                {/* Additional Info Section */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Additional Information
                  </h2>
                  <p className="text-gray-600">
                    {
                      bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                        .description
                    }
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mt-4">
                    <li>
                      <strong>Total Public Sector Banks: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .publicSectorBanks.totalBanks
                      }
                    </li>
                    <li>
                      <strong>Nationalized Banks: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .publicSectorBanks.nationalizedBanks
                      }
                    </li>
                    <li>
                      <strong>PSU Banks: </strong>
                      {bankingExamDetails?.bankingData.additionalInfo.ibpsInfo.publicSectorBanks.psuBanks.join(
                        ", "
                      )}
                    </li>
                  </ul>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      State Bank of India (SBI)
                    </h3>
                    <p className="text-gray-600">
                      <strong>Description: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .sbiDetails.description
                      }
                    </p>
                    <p className="text-gray-600">
                      <strong>Established: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .sbiDetails.established
                      }
                    </p>
                    <p className="text-gray-600">
                      <strong>Headquarters: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .sbiDetails.headquarters
                      }
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Reserve Bank of India (RBI)
                    </h3>
                    <p className="text-gray-600">
                      <strong>Description: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .rbiDetails.description
                      }
                    </p>
                    <p className="text-gray-600">
                      <strong>Initial Establishment Year: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .rbiDetails.initialEstablishment.year
                      }
                      (
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .rbiDetails.initialEstablishment.type
                      }
                      )
                    </p>
                    <p className="text-gray-600">
                      <strong>Nationalization Year: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .rbiDetails.nationalizationYear
                      }
                    </p>
                    <p className="text-gray-600">
                      <strong>Current Governor: </strong>
                      {
                        bankingExamDetails?.bankingData.additionalInfo.ibpsInfo
                          .rbiDetails.currentGovernor
                      }
                    </p>
                  </div>
                </div>
                {/* List of Public Sector Banks in India. */}
                <div
                  id="list-of-public-sector-banks"
                  className="bg-white p-6 rounded-lg "
                >
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    List of Public Sector Banks
                  </h1>
                  <p className="text-gray-600 mb-4">
                    Given below is the list of public sector banks in India:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-red-500 text-black">
                          <th className="p-4 border border-gray-300 text-center">
                            Bank Name
                          </th>
                          <th className="p-4 border border-gray-300 text-center">
                            Headquarters
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bankingExamDetails?.publicSectorBanksData?.map(
                          (bank, index) => (
                            <tr
                              key={index}
                              className={index % 2 === 0 ? "bg-gray-100" : ""}
                            >
                              <td className="p-4 border border-gray-300">
                                {bank.name}
                              </td>

                              <td className="p-4 border border-gray-300">
                                {bank.Headquarters}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* List of Private Sector Banks in India */}
                <div
                  id="list-of-private-sector-banks"
                  className="bg-white p-6 rounded-lg"
                >
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    List of Private Sector Banks
                  </h1>
                  <p className="text-gray-600 mb-4">
                    Given below is the list of the Private Sector Banks in India
                  </p>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-red-500 text-black">
                          <th className="p-4 border border-gray-300 text-center">
                            Bank Name
                          </th>
                          <th className="p-4 border border-gray-300 text-center">
                            Established
                          </th>
                          <th className="p-4 border border-gray-300 text-center">
                            Headquarters
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {bankingExamDetails?.privateBanksData?.map(
                          (bank, index) => (
                            <tr
                              key={index}
                              className={index % 2 === 0 ? "bg-gray-100" : ""}
                            >
                              <td className="p-4 border border-gray-300">
                                {bank.name}
                              </td>
                              <td className="p-4 border border-gray-300 text-center">
                                {bank.established}
                              </td>
                              <td className="p-4 border border-gray-300">
                                {bank.headquarters}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Third Section: Bank Exams Preliums Syllabus Details */}
              <div
                id="preliminary-exam-syllabus"
                className="overflow-x-auto shadow-md rounded-md p-6 mt-6"
              >
                <h6 className="lg:text-2xl sm:text-xl  font-bold text-gray-500 mb-4">
                  {bankingExamDetails?.prelimsSyllabus?.title}
                </h6>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={5}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {bankingExamDetails?.prelimsSyllabus.tableTitle}
                      </th>
                    </tr>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">
                        S. No.
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Section
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
                    {bankingExamDetails?.prelimsSyllabus.examData?.map(
                      (item, index) => (
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
                          {index === 0 ? (
                            <td
                              rowSpan={
                                bankingExamDetails?.prelimsSyllabus.examData
                                  .length
                              }
                              className="border border-gray-300 px-4 py-2 align-top"
                            >
                              A cumulative time of 60 minutes (1 hour)
                            </td>
                          ) : null}
                        </tr>
                      )
                    )}
                    {/* Footer Row for Total */}
                    <tr className="bg-gray-100 font-bold">
                      <td
                        className="border border-gray-300 px-4 py-2 text-center"
                        colSpan={2}
                      >
                        Total
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {bankingExamDetails?.prelimsSyllabus?.totalQuestions}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {bankingExamDetails?.prelimsSyllabus?.totalMarks}
                      </td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bank Exams 2025 Main Syllabus  */}
              <div
                id="mains-exam-syllabus"
                className="overflow-x-auto shadow-md rounded-md p-6 mt-6"
              >
                <h6 className="lg:text-2xl sm:text-xl  font-bold text-gray-500 mb-4">
                  {bankingExamDetails?.mainsData?.title}
                </h6>
                <table className="table-auto border-collapse border border-gray-300 w-full text-center">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={7}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {bankingExamDetails?.mainsData.tableTitle}
                      </th>
                    </tr>
                    <tr className="bg-gray-100">
                      <th
                        rowSpan={2}
                        className="border border-gray-300 px-4 py-2"
                      >
                        Section
                      </th>
                      <th
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2"
                      >
                        Number of Questions
                      </th>
                      <th
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2"
                      >
                        Maximum Marks
                      </th>
                      <th
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2"
                      >
                        Time Allotted
                      </th>
                    </tr>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">SBI</th>
                      <th className="border border-gray-300 px-4 py-2">IBPS</th>
                      <th className="border border-gray-300 px-4 py-2">SBI</th>
                      <th className="border border-gray-300 px-4 py-2">IBPS</th>
                      <th className="border border-gray-300 px-4 py-2">SBI</th>
                      <th className="border border-gray-300 px-4 py-2">IBPS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankingExamDetails?.mainsData?.sections?.map(
                      (section, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">
                            {section.name}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {section.sbiQuestions}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {section.ibpsQuestions}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {section.sbiMarks}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {section.ibpsMarks}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {section.sbiTime}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {section.ibpsTime}
                          </td>
                        </tr>
                      )
                    )}
                    <tr className="bg-gray-100 font-bold">
                      <td className="border border-gray-300 px-4 py-2">
                        Total
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {bankingExamDetails?.mainsData?.total.sbiQuestions}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {bankingExamDetails?.mainsData?.total.ibpsQuestions}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {bankingExamDetails?.mainsData?.total.sbiMarks}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {bankingExamDetails?.mainsData?.total.ibpsMarks}
                      </td>
                      <td
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2"
                      >
                        {bankingExamDetails?.mainsData?.total.timeAllotted}
                      </td>
                    </tr>
                    <tr className="bg-gray-100 font-bold">
                      <td
                        colSpan={1}
                        className="border border-gray-300 px-4 py-2"
                      >
                        {bankingExamDetails?.mainsData?.descriptive.title}
                      </td>
                      <td
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2"
                      >
                        {bankingExamDetails?.mainsData?.descriptive.questions}
                      </td>
                      <td
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2"
                      >
                        {bankingExamDetails?.mainsData?.descriptive.marks}
                      </td>
                      <td
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2"
                      >
                        {bankingExamDetails?.mainsData?.descriptive.time}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                id="ibps-po-sbi-po-prelims-syllabus"
                className="container mx-auto shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {bankingExamDetails?.syllabusData?.title}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                          Section
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                          Topics
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bankingExamDetails?.syllabusData?.tableData?.map(
                        (section, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-gray-50"
                          >
                            <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">
                              {section.section}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc pl-4">
                                {section.topics.map((topic, topicIndex) => (
                                  <li
                                    key={topicIndex}
                                    className="text-gray-700"
                                  >
                                    {topic}
                                  </li>
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

              <div
                id="ibps-po-sbi-po-mains-syllabus"
                className="container mx-auto shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {bankingExamDetails?.syllabusData2?.title}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                          Section
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                          Topics
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bankingExamDetails?.syllabusData2?.tableData?.map(
                        (section, index) => (
                          <tr
                            key={index}
                            className="odd:bg-white even:bg-gray-50"
                          >
                            <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">
                              {section.section}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              <ul className="list-disc pl-4">
                                {section.topics.map((topic, topicIndex) => (
                                  <li
                                    key={topicIndex}
                                    className="text-gray-700"
                                  >
                                    {topic}
                                  </li>
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
              {/* Frequently Asked Questions Section */}
              <div
                id="frequently-asked-questions-about-ibps-po-2025"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {bankingExamDetails.faq.title}
                </h3>
                <div className="divide-y divide-gray-300">
                  {bankingExamDetails.faq.questions.map((faq, index) => (
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

                      {/* Show answer when the FAQ is clicked */}
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
            </div>
            {/* Col-4 */}
            {/* Updated Media Section */}
            <div className="md:col-span-3 flex flex-col space-y-8 w-full max-w-full">
              <img
                src="banking/bps-po.jpeg"
                alt="Placeholder"
                className="w-full rounded-2xl shadow-md cursor-pointer"
                ref={(el) => (mediaRefs.current[0] = el)}
                onClick={() =>
                  (window.location.href =
                    "https://live.winnersinstitute.in/courses/371-ibps-po-complete-online-course-ippm0324")
                }
              />
              <img
                src="banking/sbi-po.jpeg"
                alt="Placeholder"
                className="w-full rounded-2xl shadow-md cursor-pointer"
                ref={(el) => (mediaRefs.current[2] = el)}
                onClick={() =>
                  (window.location.href =
                    "https://live.winnersinstitute.in/courses/508-sbi-po-2025-complete-online-course-sbip0125")
                }
              />
              <iframe
                className="w-full rounded-2xl shadow-md cursor-pointer"
                src="https://www.youtube.com/embed/fow1ryLZU7g"
                title="HOW TO BECOME BANK PO 2023 | बैंक PO कैसे बने? | COMPLETE DETAILED VIDEO BY ADITYA PATEL SIR"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ref={(el) => (mediaRefs.current[1] = el)}
                onClick={() => handleFullScreen(1)}
              ></iframe>
              <iframe
                ref={(el) => (mediaRefs.current[3] = el)}
                className="w-full rounded-2xl shadow-md cursor-pointer"
                src="https://www.youtube.com/embed/7orMVNalBz8"
                title="SBI Clerk Notification 2024 | SBI JA 2024 Notification | SBI Clerk New Vacancy 2024 | Aditya Sir"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

export default BANKING;
