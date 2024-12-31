import Aos from "aos";
import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import {
  mpWomenSupervisorData,
  mpWomenSupervisorExamData,
  tableOfContentsData,
  smallScreenClasses,
  largeScreenClasses,
  smallScreenTestSeries,
  largeScreenTestSeries,
  smallScreenBooks,
  largeScreenBooks,
} from "../../data/women-supervisor";
import Card from "../../components/card/Card";
import RelatedPost from "../../components/sidebar/RelatedPost";

const MPWOMENSUPERVISOR = () => {
  const { title, intro, content, officialWebsite } = mpWomenSupervisorData;

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
        title="MPSI - The WiNNERS Institute"
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
              <span className="text-gray-500">MP Jail Prahari</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Main Column */}
          <div className="md:col-span-9">
            {/* First Section: SSC CGL Intro */}
            <div id="ssc-cgl-2025" className="bg-white  rounded-md lg:p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
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
                {mpWomenSupervisorExamData?.notification?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                {mpWomenSupervisorExamData?.notification?.description}
              </p>
              {mpWomenSupervisorExamData?.notification?.link && (
                <h6 className="bg-red-600 text-white p-2 rounded-md inline-block">
                  <a
                    href={mpWomenSupervisorExamData.notification.link}
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
                {mpWomenSupervisorExamData?.notificationData.title}
              </h2>
              <div className="mb-6">
                <h2 className="text-xl font-semibold">Age Limit</h2>
                <ul className="list-disc ml-6">
                  <li>
                    Minimum Age:{" "}
                    <strong>
                      {mpWomenSupervisorExamData?.notificationData.ageLimit.min}{" "}
                      years
                    </strong>
                  </li>
                  <li>
                    Maximum Age:{" "}
                    <strong>
                      {mpWomenSupervisorExamData?.notificationData.ageLimit.max}{" "}
                      years
                    </strong>
                  </li>
                  <li>
                    Age relaxation for reserved categories:
                    <ul className="list-inside list-disc ml-4">
                      {mpWomenSupervisorExamData?.notificationData.ageRelaxation.map(
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
                {mpWomenSupervisorExamData?.notificationData.qualifications.map(
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
            {/* Pattern of Exam – Objective (CBT) & Typing Test:- */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                Pattern of Exam - Objective (CBT) & Typing Test
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">क्र</th>
                      <th className="border px-4 py-2">खण्ड</th>
                      <th className="border px-4 py-2">विषय</th>
                      <th className="border px-4 py-2">कुल अंक</th>
                      <th className="border px-4 py-2">कुल प्रश्न</th>
                      <th className="border px-4 py-2">कुल समय</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mpWomenSupervisorExamData?.examPattern.map(
                      (section, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">{index + 1}</td>
                          <td className="border px-4 py-2">
                            {section.section}
                          </td>
                          <td className="border px-4 py-2">
                            {section.subject}
                          </td>
                          <td className="border px-4 py-2">
                            {section.totalMarks}
                          </td>
                          <td className="border px-4 py-2">
                            {section.totalQuestions}
                          </td>
                          <td className="border px-4 py-2">{section.time}</td>
                        </tr>
                      )
                    )}
                    <tr>
                      <td className="border px-4 py-2" colSpan={3}>
                        कुल योग
                      </td>
                      <td className="border px-4 py-2">
                        {mpWomenSupervisorExamData?.examPattern.reduce(
                          (sum, section) => sum + section.totalMarks,
                          0
                        )}
                      </td>
                      <td className="border px-4 py-2">
                        {mpWomenSupervisorExamData?.examPattern.reduce(
                          (sum, section) => sum + section.totalQuestions,
                          0
                        )}
                      </td>
                      <td className="border px-4 py-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* पर्यवेक्षक (महिला) भर्ती एवं पर्यवेक्षक (महिला) ऑगनवाडी कार्यकर्ता – विस्‍तृत पाठ्यक्रम प्रथम खण्‍ड - पोषण एवं स्‍वास्‍थ्‍य:- */}
            {/* Supervisor (Female) Recruitment and Supervisor (Female) Anganwadi Worker – Detailed Syllabus First Section - Nutrition and Health:- */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                {" "}
                Supervisor (Female) Recruitment and Supervisor (Female)
                Anganwadi Worker – Detailed Syllabus First Section - Nutrition
                and Health ( पर्यवेक्षक (महिला) भर्ती एवं पर्यवेक्षक (महिला)
                ऑगनवाडी कार्यकर्ता – विस्‍तृत पाठ्यक्रम प्रथम खण्‍ड - पोषण एवं
                स्‍वास्‍थ्‍य:- )
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">क्र.</th>
                      <th className="border px-4 py-2">विषय</th>
                      <th className="border px-4 py-2">उप विषय</th>
                      <th className="border px-4 py-2">अंक</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mpWomenSupervisorExamData?.examData.map(
                      (section, sectionIndex) => (
                        <>
                          {section.details.map((topic, topicIndex) => (
                            <tr key={topicIndex}>
                              <td className="border px-4 py-2">
                                {topicIndex + 1}
                              </td>
                              <td className="border px-4 py-2">
                                {topic.topic}
                              </td>
                              <td className="border px-4 py-2">
                                <ul className="list-disc pl-4">
                                  {topic.subtopics.map(
                                    (subtopic, subtopicIndex) => (
                                      <li key={subtopicIndex}>{subtopic}</li>
                                    )
                                  )}
                                </ul>
                              </td>
                              <td className="border px-4 py-2">
                                {topic.marks}
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td
                              className="border px-4 py-2 font-bold-600"
                              colSpan={3}
                            >
                              कुल योग:
                            </td>
                            <td className="border px-4 py-2 font-bold-600 text-black">
                              {section.details.reduce(
                                (sum, topic) => sum + topic.marks,
                                0
                              )}
                            </td>
                          </tr>
                        </>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* द्वितीय खंड - सामान्य ज्ञान एवं तर्क शक्ति:- */}
            {/* Second Section - General Knowledge and Reasoning:- */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                Second Section - General Knowledge and Reasoning ( द्वितीय खंड -
                सामान्य ज्ञान एवं तर्क शक्ति:-)
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">क्र.</th>
                      <th className="border px-4 py-2">विषय</th>
                      <th className="border px-4 py-2">उप विषय</th>
                      <th className="border px-4 py-2">अंक</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mpWomenSupervisorExamData?.examSecondPhase.map(
                      (section, sectionIndex) => (
                        <>
                          {section.details.map((topic, topicIndex) => (
                            <tr key={topicIndex}>
                              <td className="border px-4 py-2">
                                {topicIndex + 1}
                              </td>
                              <td className="border px-4 py-2">
                                {topic.topic}
                              </td>
                              <td className="border px-4 py-2">
                                <ul className="list-disc pl-4">
                                  {topic.subtopics.map(
                                    (subtopic, subtopicIndex) => (
                                      <li key={subtopicIndex}>{subtopic}</li>
                                    )
                                  )}
                                </ul>
                              </td>
                              <td className="border px-4 py-2">
                                {topic.marks}
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td
                              className="border px-4 py-2 font-bold-600"
                              colSpan={3}
                            >
                              कुल योग:
                            </td>
                            <td className="border px-4 py-2 font-bold-600 text-black">
                              {section.details.reduce(
                                (sum, topic) => sum + topic.marks,
                                0
                              )}
                            </td>
                          </tr>
                        </>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* तृतीय खंड - प्रबंधकीय गुण:- */}
            {/* Third Section - Managerial Skills:- */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                Third Section - Managerial Skills ( तृतीय खंड - प्रबंधकीय गुण:-)
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">क्र.</th>
                      <th className="border px-4 py-2">विषय</th>
                      <th className="border px-4 py-2">उप विषय</th>
                      <th className="border px-4 py-2">अंक</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mpWomenSupervisorExamData?.examThirdPhase.map(
                      (section, sectionIndex) => (
                        <>
                          {section.details.map((topic, topicIndex) => (
                            <tr key={topicIndex}>
                              <td className="border px-4 py-2">
                                {topicIndex + 1}
                              </td>
                              <td className="border px-4 py-2">
                                {topic.topic}
                              </td>
                              <td className="border px-4 py-2">{"....."}</td>
                              <td className="border px-4 py-2">
                                {topic.marks}
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td
                              className="border px-4 py-2 font-bold-600"
                              colSpan={3}
                            >
                              कुल योग:
                            </td>
                            <td className="border px-4 py-2 font-bold-600 text-black">
                              {section.details.reduce(
                                (sum, topic) => sum + topic.marks,
                                0
                              )}
                            </td>
                          </tr>
                        </>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* चतुर्थ खंड - शिशु की प्रारम्भिक देखभाल एवं शिक्षा:- */}
            {/* Fourth Section - Early Childhood Care and Education:- */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
                Fourth Section - Early Childhood Care and Education ( चतुर्थ खंड
                - शिशु की प्रारम्भिक देखभाल एवं शिक्षा:-)
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2">क्र.</th>
                      <th className="border px-4 py-2">विषय</th>
                      <th className="border px-4 py-2">उप विषय</th>
                      <th className="border px-4 py-2">अंक</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mpWomenSupervisorExamData?.examFourthPhase.map(
                      (section, sectionIndex) => (
                        <>
                          {section.details.map((topic, topicIndex) => (
                            <tr key={topicIndex}>
                              <td className="border px-4 py-2">
                                {topicIndex + 1}
                              </td>
                              <td className="border px-4 py-2">
                                {topic.topic}
                              </td>
                              <td className="border px-4 py-2">
                                <ul className="list-disc pl-4">
                                  {topic.subtopics.map(
                                    (subtopic, subtopicIndex) => (
                                      <li key={subtopicIndex}>{subtopic}</li>
                                    )
                                  )}
                                </ul>
                              </td>
                              <td className="border px-4 py-2">
                                {topic.marks}
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td
                              className="border px-4 py-2 font-bold-600"
                              colSpan={3}
                            >
                              कुल योग:
                            </td>
                            <td className="border px-4 py-2 font-bold-600 text-black">
                              {section.details.reduce(
                                (sum, topic) => sum + topic.marks,
                                0
                              )}
                            </td>
                          </tr>
                        </>
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
                {mpWomenSupervisorExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {mpWomenSupervisorExamData.faq.questions.map((faq, index) => (
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
              src="/ssc-cgl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
              ref={(el) => (mediaRefs.current[0] = el)}
              onClick={() => handleFullScreen(0)}
            />{" "}
            <iframe
              ref={(el) => (mediaRefs.current[1] = el)}
              className="w-full rounded shadow-md"
              src="https://www.youtube.com/embed/vpE5QC1ULgo"
              title="MPESB Calendar 2025 Out | MPTET Varg 2, Varg 3, Mahila Supervisor &amp; Forest Guard | Aditya Patel Sir"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              onClick={() => handleFullScreen(1)}
            ></iframe>
            <img
              ref={(el) => (mediaRefs.current[2] = el)}
              src="/ssc-chsl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
              onClick={() => handleFullScreen(2)}
            />{" "}
            <iframe
              src="https://www.youtube.com/embed/KDtJdvmB26U"
              title="SSC GD Bharti BSF, CISF, CRPF, SSB, ITBP, AR, SSF and NCB | What is SSC GD?"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              ref={(el) => (mediaRefs.current[3] = el)}
              onClick={() => handleFullScreen(3)}
            ></iframe>
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

export default MPWOMENSUPERVISOR;
