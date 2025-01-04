import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import Footer from "../../components/footer/Footer";
import {
  sscstenographerData,
  sscstenographerExamData,
  tableOfContentsData,
} from "../../data/ssc-stenographer";
import { classes, testSeries, sscbooksdata } from "../../data/sscData";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";

const SSCStenographer = () => {
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
        title="SSC STENOGRAPHER - The WiNNERS Institute"
        canonicalLink="/ssc-stenographer"
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
              <span className="text-gray-500">Ssc-stenographer</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Main Column */}
          <div className="md:col-span-9 ">
            {/* First Section: SSC Stenographer Intro */}
            <div className="bg-white rounded-md lg:p-6 mb-6">
            <h1 className="lg:text-3xl md:text-2xl font-bold text-gray-800 mb-4">{title}
                {sscstenographerData.title}
              </h1>

              {/* Intro Section */}
              <p className="text-gray-600 mb-4">
                {sscstenographerData.intro}{" "}
                <a
                  href={sscstenographerData?.officialWebsite}
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
                <p className="text-gray-700 leading-relaxed">
                  {sscstenographerExamData?.examDetails}
                </p>
                {/* Additional Styling */}
                <div className="mt-6 p-4 bg-gray-50 rounded-md ">
                  <h3 className="text-lg font-bold text-blue-700">
                    Important Dates
                  </h3>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>**Application Start Date:** 29th July 2025</li>
                    <li>**Application End Date:** 21st August 2025</li>
                    <li>**Exam Dates:** October-November, 2025</li>
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

            {/* SSC Stenographer Syllabus 2024 */}

            <div
              id="ssc-stenographer-syllabus-2025"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscstenographerExamData?.syllabus?.title}
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                {" "}
                {sscstenographerExamData?.syllabus?.content}
              </p>
              <p className="text-gray-700 mb-4 text-justify mt-4">
                {" "}
                {sscstenographerExamData?.syllabus?.desc}
              </p>
            </div>

            {/* SSC Stenographer Syllabus 2025 Overview */}
            <div
              id="ssc-stenographer-syllabus-2025-overview"
              className="bg-white rounded-md lg:p-6 mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscstenographerExamData?.overview?.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {sscstenographerExamData?.overview?.content}
                <a
                  href={
                    sscstenographerExamData?.overview?.examDetails?.[0]
                      ?.officialWebsite
                  }
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Official Website
                </a>
              </p>

              {/* Exam Details Section */}
              <div
                id="ssc-stenographer-exam-details"
                className="bg-white rounded-md lg:p-6 mb-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  SSC Stenographer Exam Details
                </h2>
                <table className="min-w-full border border-gray-200">
                  <tbody>
                    {sscstenographerExamData?.overview?.examDetails?.sscStenographerData?.map(
                      (exam, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          {Object.entries(exam).map(([key, value]) => {
                            if (typeof value === "object" && value !== null) {
                              // If value is an object, like markingScheme, render each key-value pair inside it
                              return (
                                <tr
                                  key={key}
                                  className="border-b border-gray-200"
                                >
                                  <td className="px-6 py-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {key.replace(/([A-Z])/g, " $1")}
                                  </td>
                                  <td className="px-6 py-4 border border-gray-200">
                                    <ul className="list-disc ml-5">
                                      {Object.entries(value).map(
                                        ([subKey, subValue]) => (
                                          <li key={subKey}>
                                            <b>
                                              {subKey.replace(
                                                /([A-Z])/g,
                                                " $1"
                                              )}
                                              :{" "}
                                            </b>
                                            {subValue}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </td>
                                </tr>
                              );
                            } else {
                              // If value is not an object, render it normally
                              return (
                                <tr
                                  key={key}
                                  className="border-b border-gray-200"
                                >
                                  <td className="px-6 py-4 border border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {key.replace(/([A-Z])/g, " $1")}
                                  </td>
                                  <td className="px-6 py-4 border border-gray-200">
                                    {value}
                                  </td>
                                </tr>
                              );
                            }
                          })}
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC Stenographer Exam Pattern 2025 */}
            <div
              id="ssc-stenographer-exam-pattern-2025"
              className="bg-white shadow-md rounded-md p-4 lg:p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscstenographerExamData.examPattern.title}
              </h2>

              <p className="text-gray-700 mb-4 text-justify">
                {sscstenographerExamData?.examPattern.content}
              </p>
              {/* Table */}
              <div className="bg-white rounded-md lg:p-6 mb-6">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        Tier
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        Mode of Examination
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        Types of Examination
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscstenographerExamData?.examPattern.sscStenographerExamPatternData?.map(
                      (row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="border border-gray-300 px-4 py-2">
                            {row.tier}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {row.modeOfExamination}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {row.typesOfExamination}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC Stenographer Syllabus 2024 Tier I */}

            <div
              id="ssc-stenographer-syllabus-2025-tier-i"
              className="bg-white shadow-md rounded-md p-4 lg:p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscstenographerExamData.syllabustier1.title}
              </h2>

              <p className="text-gray-700 mb-4 text-justify">
                {sscstenographerExamData?.syllabustier1.content}
              </p>
            </div>

            {/* SSC Stenographer English Syllabus 2025 */}
            <div
              id="ssc-gd-exam-pattern-2025"
              className="bg-white shadow-md rounded-md p-4 lg:p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                {sscstenographerExamData.syllabustier1.title}
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                {sscstenographerExamData?.syllabustier1.content}
              </p>

              {sscstenographerExamData?.syllabustier1?.englishsyllabus?.map(
                (subject, index) => (
                  <div key={index} className="mb-4">
                    <h6 className=" underline font-semibold text-gray-800 mb-2">
                      {subject.subject}
                    </h6>
                    <ul className="list-disc pl-5">
                      {subject.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-800 mb-2">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}

              {/* SSC Stenographer Reasoning and General Intelligence Syllabus 2025 */}
              {sscstenographerExamData?.syllabustier1?.generalIntelligencesyllabus?.map(
                (subject, index) => (
                  <div key={index} className="mb-4">
                    <h6 className="underline font-semibold text-gray-800 mb-2">
                      {subject.subject}
                    </h6>
                    <ul className="list-disc pl-5">
                      {subject.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-800 mb-2">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}

              {/* SSC Stenographer General Awareness Syllabus 2025 */}
              {sscstenographerExamData?.syllabustier1?.generalAwareness?.map(
                (subject, index) => (
                  <div key={index} className="mb-4">
                    <h6 className="underline font-semibold text-gray-800 mb-2">
                      {subject.subject}
                    </h6>
                    <ul className="list-disc pl-5">
                      {subject.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-800 mb-2">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>

            {/*  SSC Stenographer Syllabus 2025 Tier II */}
            <div
              id="ssc-stenographer-syllabus-2025-tier-ii"
              className="bg-white shadow-md rounded-md p-4 lg:p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                {sscstenographerExamData.syllabustier2.title}
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                {sscstenographerExamData?.syllabustier2.content}
              </p>

              {sscstenographerExamData?.syllabustier2?.shorthandSyllabus?.map(
                (subject, index) => (
                  <div key={index} className="mb-4">
                    <h6 className=" underline font-semibold text-gray-800 mb-2">
                      {subject.subject}
                    </h6>
                    <ul className="list-disc pl-5">
                      {subject.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-800 mb-2">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>

            {/* SSC Stenographer Qualifying Marks 2024 */}
            <div
              id="ssc-stenographer-qualifying-marks-2025"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                {sscstenographerExamData?.qualifyingMarks?.title}
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                {" "}
                {sscstenographerExamData?.qualifyingMarks?.content}
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-gray-800">
                        Minimum Qualifying Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscstenographerExamData?.qualifyingMarks?.qualifyingMarksData.map(
                      (row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className=" border border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.category}
                          </td>
                          <td className="border border-gray-300 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {row.minimumQualifyingMarks}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC Stenographer Preparation Tips 2025 */}
            <div
              id="ssc-stenographer-preparation-tips-2025"
              className="bg-white shadow-md rounded-md p-4 lg:p-6 mt-6"
            >
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                {sscstenographerExamData.preparationTips.title}
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                {sscstenographerExamData?.preparationTips.content}
              </p>

              <ul className="list-disc ml-5">
                {sscstenographerExamData?.preparationTips?.preparationTipsData?.map(
                  (tip, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {/* Check for "Understand the Syllabus:" and wrap it in bold tags */}
                      {tip.tip
                        .split(":")
                        .map((part, i) =>
                          i === 0 ? (
                            <strong key={i}>{part}:</strong>
                          ) : (
                            ` ${part}`
                          )
                        )}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Frequently Asked Questions Section */}
            <div
              id="frequently-asked-questions"
              className="bg-white shadow-md rounded-md p-6 mt-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscstenographerExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {sscstenographerExamData.faq.questions.map((faq, index) => (
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

export default SSCStenographer;
