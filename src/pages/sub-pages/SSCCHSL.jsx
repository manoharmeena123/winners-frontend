import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import { sscchslData, sscchslExamData } from "../../data/ssc-chsl";

const SSCCHSL = () => {
  const { title, intro, content, officialWebsite } = sscchslData;
  const { about, notification } = sscchslExamData;

  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };
  return (
    <>
      <Header />
      <ReactHelmet
        title="SSC CHSL - The WiNNERS Institute"
        canonicalLink="/ssc-cgl"
      />
      <div className="container w-[100%] sm:w-[100%] mx-auto lg:px-6 sm:px-0 py-4 mt-[82px] relative">
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Column */}
          <div className="md:col-span-12">
            {/* First Section: SSC CHSL Intro */}
            <div className="bg-white  rounded-md p-6 mb-6">
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

            {/* What is SSC CHSL Exam? */}
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {about.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{about.content}</p>
            </div>

            {/* Third Section: SSC CHSL Notification */}
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
                exams. As per the exam calendar, the SSC CHSL 2025 Notification
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
            {/* <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
            </div> */}

            {/* Frequently Asked Questions Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscchslExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {sscchslExamData.faq.questions.map((faq, index) => (
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SSCCHSL;
