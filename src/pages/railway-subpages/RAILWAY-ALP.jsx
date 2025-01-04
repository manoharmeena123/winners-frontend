import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import {
  railwayAlpData,
  railwayAlpExamData,
  tableOfContentsData,
  smallScreenClasses,
  largeScreenClasses,
  smallScreenTestSeries,
  largeScreenTestSeries,
  smallScreenBooks,
  largeScreenBooks,
} from "../../data/railway-alp";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";

const RailwayTECHNICIAN = () => {
  const { title, intro, content, officialWebsite } = railwayAlpData;

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
    const mediaElement = mediaRefs.current[index];
  
    if (mediaElement) {
      if (!document.fullscreenElement) {
        // Enter fullscreen mode
        if (mediaElement.requestFullscreen) {
          mediaElement.requestFullscreen();
        } else if (mediaElement.webkitRequestFullscreen) {
          mediaElement.webkitRequestFullscreen(); // Safari
        } else if (mediaElement.msRequestFullscreen) {
          mediaElement.msRequestFullscreen(); // IE11
        } else {
          console.error("Fullscreen API is not supported by this browser.");
        }
      } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen(); // Safari
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen(); // IE11
        }
      }
    } else {
      console.error("Media element not found.");
    }
  };
  

  return (
    <>
      <Header />
      <ReactHelmet
        title="Railway-ALP - The WiNNERS Institute"
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
              <span className="text-gray-500">RRB-ALP</span>
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

            {/*RRB ALP 2025 Notification Released */}
            <div
              id="railway-alp-2025-notification-released"
              className="bg-white shadow-md rounded-md p-3   mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                {railwayAlpExamData?.notification?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                {railwayAlpExamData?.notification?.description}
              </p>
              {railwayAlpExamData?.notification?.link && (
                <h6 className="bg-red-600 text-white p-2 rounded-md inline-block">
                  <a
                    href={railwayAlpExamData.notification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-white"
                  >
                    Download Notification PDF
                  </a>
                </h6>
              )}
            </div>

            {/* Railway ALP 2025 Age Limit and Relaxation */}
            <div
              id="railway-alp-2025-age-limit-and-relaxation"
              className="bg-white shadow-md rounded-md p-3 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                {railwayAlpExamData?.notificationData.title}
              </h2>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Age Limit</h2>
                <ul className="list-disc ml-6">
                  <li>
                    Minimum Age:{" "}
                    <strong>
                      {
                        railwayAlpExamData?.notificationData.ageLimit.general
                          .min
                      }{" "}
                      years
                    </strong>
                  </li>
                  <li>
                    Maximum Age:{" "}
                    <strong>
                      {
                        railwayAlpExamData?.notificationData.ageLimit.general
                          .max
                      }{" "}
                      years
                    </strong>
                  </li>
                  <li>
                    Age relaxation for reserved categories:
                    <ul className="list-inside list-disc ml-4">
                      {railwayAlpExamData?.notificationData.ageRelaxation.map(
                        (item, index) => (
                          <li key={index}>
                            <strong>{item.category}:</strong> {item.relaxation}{" "}
                            years
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
                {railwayAlpExamData?.notificationData.qualifications.map(
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
              <div className="mt-6 text-center">
                <a
                  href={railwayAlpExamData?.notificationData?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white p-2 rounded-md inline-block"
                >
                  For more details, download the official notification.
                </a>
              </div>
            </div>

            {/* RRB ALP SYLLABUS, */}
            <div
              id="rrb-alp-2025-syllabus"
              className="bg-white shadow-md rounded-md p-3   mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                {railwayAlpExamData?.syllabusData?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                {railwayAlpExamData?.syllabusData?.description}
              </p>
              <div className="rounded-md  mt-6">
                <h2 className="bg-red-500 text-white font-bold text-lg py-2 px-4 rounded-tl-lg">
                  Pattern of Exam – Objective CBT-1, CBT-2 & Typing Test
                </h2>
                <div className="bg-white border border-gray-300 rounded-b-lg p-4 mt-2">
                  <p className="text-gray-700">
                    Note - There will be negative marking of 0.33 for Each Wrong
                    Answer.
                  </p>
                </div>
              </div>
              <div
                id="rrb-alp-syllabus-for-cbt-stage-i"
                className="rounded-md mt-6"
              >
                <div className="mt-6">
                  <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                    RRB ALP Syllabus for CBT Stage I
                  </h2>
                  <div className="overflow-x-auto p-4">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Subject
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            No. of Questions
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Marks
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {railwayAlpExamData?.syllabusData?.cbt1examData?.tableData?.map(
                          (item, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              <td className="border border-gray-300 px-4 py-2">
                                {item.subject}
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-center">
                                {item.questions}
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-center">
                                {item.marks}
                              </td>
                              {index === 0 && (
                                <td
                                  className="border border-gray-300 px-4 py-2 text-center"
                                  rowSpan={
                                    railwayAlpExamData?.syllabusData
                                      ?.cbt1examData?.tableData?.length
                                  }
                                >
                                  {
                                    railwayAlpExamData?.syllabusData
                                      ?.cbt1examData?.tableData[0]?.time
                                  }
                                </td>
                              )}
                            </tr>
                          )
                        )}
                        <tr className="bg-gray-100 font-bold">
                          <td className="border border-gray-300 px-4 py-2">
                            Total
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {railwayAlpExamData?.syllabusData?.cbt1examData?.tableData?.reduce(
                              (total, item) => total + item.questions,
                              0
                            )}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {railwayAlpExamData?.syllabusData?.cbt1examData?.tableData?.reduce(
                              (total, item) => total + item.marks,
                              0
                            )}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            -
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4">
                    {railwayAlpExamData?.syllabusData?.sections.map(
                      (section, index) => (
                        <div key={index} className="mb-4">
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            {section.name}
                          </button>
                          <ul className="mt-4 list-disc">
                            {section.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div id="railway-alp-cbt-ii" className="p-4">
                  {/* Header */}
                  <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                    Railway – ALP CBT-II
                  </h2>
                  <h3 className="bg-red-500 text-white font-bold text-base py-2 px-4 mt-2">
                    Pattern of Exam – Objective Type (CBT)
                  </h3>

                  {/* Note */}
                  <div className="bg-white border border-gray-300 rounded-md p-4 mt-2">
                    <p className="text-gray-700">
                      Note- There will be negative marking of 1/3 for Each Wrong
                      Answer.
                    </p>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto mt-4">
                    {/* Part-A Table */}
                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                      Part-A CBT-II
                    </h2>
                    <table className="table-auto w-full border-collapse border border-gray-300 mb-6">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Subject
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Questions
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {railwayAlpExamData?.syllabusData?.cbtData.partA.map(
                          (item, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              <td className="border border-gray-300 px-4 py-2">
                                {item.subject}
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-center">
                                {item.questions}
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-center">
                                {item.time}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>

                    {/* Part-B Table */}
                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                      Part-B CBT-II
                    </h2>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Subject
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Questions
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {railwayAlpExamData?.syllabusData?.cbtData.partB.map(
                          (item, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              <td className="border border-gray-300 px-4 py-2">
                                {item.subject}
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-center">
                                {item.questions}
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-center">
                                {item.time}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4">
                    {railwayAlpExamData?.syllabusData?.sections.map(
                      (section, index) => (
                        <div key={index} className="mb-4">
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            {section.name}
                          </button>
                          <ul className="mt-4 list-disc">
                            {section.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="p-4">
              {railwayAlpExamData?.notes.map((note, index) => (
                <div
                  key={index}
                  className={`bg-red-500 text-white font-bold py-2 px-4 rounded ${
                    index === railwayAlpExamData?.notes?.length - 1
                      ? "mt-2"
                      : "mb-2"
                  }`}
                >
                  {note}
                </div>
              ))}
            </div>
            {/* Frequently Asked Questions Section */}
            <div
              id="frequently-asked-questions"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {railwayAlpExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {railwayAlpExamData.faq.questions.map((faq, index) => (
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
              src="/railways/railway-ntpc-group-d.jpeg"
              alt="Placeholder"
              className="w-full rounded-2xl shadow-md cursor-pointer"
              ref={(el) => (mediaRefs.current[0] = el)}
              onClick={() => handleFullScreen(0)}
            />
            <img
              src="/railways/raiway-foundation.jpeg"
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
              className="w-full rounded-2xl shadow-md cursor-pointer"
              ref={(el) => (mediaRefs.current[1] = el)}
              onClick={() => handleFullScreen(1)}
              src="https://www.youtube.com/embed/e2hRinCNcnQ"
              title="Railway Group D Vacancy 2025 | RRB NTPC 2025"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full rounded-2xl shadow-md cursor-pointer"
              ref={(el) => (mediaRefs.current[3] = el)}
              onClick={() => handleFullScreen(3)}
              src="https://www.youtube.com/embed/ttQABdTexr0"
              title="Railway Calendar 2025 | RRB Official Calendar Out"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <RelatedPost />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RailwayTECHNICIAN;
