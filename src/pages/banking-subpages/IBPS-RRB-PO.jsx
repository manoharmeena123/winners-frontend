import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import {
  ibpsrrbData,
  ibpsRrbExamData,
  tableOfContentsData,
  classes,
  smallScreenClasses,
  largeScreenClasses,
} from "../../data/ibps-rrb-po";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";
import DynamicModalWrapper from "../../utils/DynamicModalWrapper";
import useFullScreen from "../../hooks/useFullScreen";

const IBPSRRB = () => {
  const { title, intro, content, officialWebsite } = ibpsrrbData;
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
        title="IBPS RRB's PO & Clerk - The WiNNERS Institute"
        canonicalLink="/ibps-sbi"
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
                <span className="text-gray-500">IBPS RRB's PO & Clerk</span>
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
              {/* Second Section: About IBPS-PO */}
              <div
                id="what-is-ibps-rrb-po-clerk-exam"
                className="bg-white shadow-md rounded-md p-6 mb-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {ibpsRrbExamData?.about.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {ibpsRrbExamData?.about.content}
                </p>
              </div>
              {/* Second Section:  IBPS-PO Syllbus  */}
              <div
                id="ibps-rrb-po-clerk-2025-syllabus"
                className="bg-white shadow-md rounded-md p-6 mb-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                  {ibpsRrbExamData?.syllabus?.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {ibpsRrbExamData?.syllabus?.content}
                </p>
              </div>
              {/* Third Section: IBPS-PO Preliums Syllabus Details */}
              <div
                id="preliminary-exam-syllabus"
                className="overflow-x-auto shadow-md rounded-md p-6 mt-6"
              >
                <h6 className="lg:text-2xl sm:text-xl  font-bold text-gray-500 mb-4">
                  {ibpsRrbExamData?.prelimsSyllabus?.title}
                </h6>
                <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th
                        colSpan={5}
                        className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 text-center"
                      >
                        {ibpsRrbExamData?.prelimsSyllabus.tableTitle}
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
                    {ibpsRrbExamData?.prelimsSyllabus.examData?.map(
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
                                ibpsRrbExamData?.prelimsSyllabus.examData.length
                              }
                              className="border border-gray-300 px-4 py-2 align-center"
                            >
                              45 minutes
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
                        {ibpsRrbExamData?.prelimsSyllabus?.totalQuestions}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {ibpsRrbExamData?.prelimsSyllabus?.totalMarks}
                      </td>
                      <td className="border border-gray-300 px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* IBPS PO 2025 Main Syllabus  */}
              <div
                id="mains-exam-syllabus"
                className="overflow-x-auto shadow-md rounded-md p-6 mt-6"
              >
                <h6 className="lg:text-2xl sm:text-xl font-bold text-gray-500 mb-4">
                  {ibpsRrbExamData?.mainsData?.title}
                </h6>
                <table className="table-auto border-collapse border border-gray-300 w-full text-center">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th className="border border-gray-200 p-2">Subject</th>
                      <th className="border border-gray-200 p-2">Questions</th>
                      <th className="border border-gray-200 p-2">Marks</th>
                      <th className="border border-gray-200 p-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ibpsRrbExamData?.mainsData?.sections?.map((row, index) => (
                      <tr
                        key={row.subject}
                        className={
                          row.subject === "Total" ? "font-bold bg-blue-50" : ""
                        }
                      >
                        <td className="border border-gray-200 p-2">
                          {row.subject}
                        </td>
                        <td className="border border-gray-200 p-2">
                          {row.questions}
                        </td>
                        <td className="border border-gray-200 p-2">
                          {row.marks}
                        </td>

                        {/* Render Time only once in the first row but with value from "Total" row */}
                        {index === 0 ? (
                          <td
                            rowSpan={
                              ibpsRrbExamData?.mainsData?.sections.length
                            }
                            className="border border-gray-300 px-4 py-2 align-center"
                          >
                            {
                              ibpsRrbExamData?.mainsData?.sections.find(
                                (s) => s.subject === "Total"
                              )?.time
                            }
                          </td>
                        ) : null}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* IBPS RRB PO PRELIMS SYLLABUS */}
              <div
                id="ibps-rrb-po-clerk-prelims-syllabus"
                className="container mx-auto shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {ibpsRrbExamData?.syllabusData?.title}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                          Section
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                          Topics (Hindi & English)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ibpsRrbExamData?.syllabusData?.tableData?.map(
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
                                    <span className="font-bold">
                                      {topic.hindi}
                                    </span>{" "}
                                    - {topic.english}
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

              {/* IBPS RRB PO Mains Syllabus */}
              <div
                id="ibps-rrb-po-clerk-mains-syllabus"
                className="container mx-auto shadow-md rounded-md p-6 mt-6"
              >
                <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                  {ibpsRrbExamData?.syllabusData2?.title}
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                          Section
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">
                          Topics (Hindi & English)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ibpsRrbExamData?.syllabusData2?.tableData?.map(
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
                                    <span className="font-bold">
                                      {topic.hindi}
                                    </span>{" "}
                                    - {topic.english}
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
                id="frequently-asked-questions-about-ibps-rrb-po-clerk-2025"
                className="bg-white shadow-md rounded-md p-6 mt-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {ibpsRrbExamData.faq.title}
                </h3>
                <div className="divide-y divide-gray-300">
                  {ibpsRrbExamData.faq.questions.map((faq, index) => (
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
            </div>
            {/* Col-4 */}
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

export default IBPSRRB;
