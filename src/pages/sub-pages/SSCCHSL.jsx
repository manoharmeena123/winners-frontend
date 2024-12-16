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
              <span className="text-gray-500">Ssc-chsl</span>
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

            {/* SSC CHSL 2025 Exam- Overview */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.overview?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sscchslExamData?.overview?.content}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    {sscchslExamData?.overview?.tableData.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-300 ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-6 py-3 font-semibold text-gray-700 border-r border-gray-300 whitespace-nowrap">
                          {row.label}
                        </td>
                        <td className="px-6 py-3 text-gray-700 whitespace-nowrap">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC CHSL 2025 Important Dates */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.importantDatesData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.importantDatesData?.description}
              </p>

              {/* Table */}
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
                    {sscchslExamData?.importantDatesData?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.event}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.date}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* SSC CHSL 2025 Vacancy */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.vacancyData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.vacancyData?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.vacancyData?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.vacancyData?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.year}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.ldcJsa}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.paSa}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.deo}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.courtClerk}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.total}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC CHSL 2025 Eligibility Criteria */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.eligibilityData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.eligibilityData?.description}
              </p>

              {/* Nationality Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sscchslExamData?.eligibilityData?.nationality?.title}
              </h3>
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6">
                {sscchslExamData?.eligibilityData?.nationality?.criteria.map(
                  (item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  )
                )}
              </ul>

              {/* Educational Qualification Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sscchslExamData?.eligibilityData?.qualification?.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                {sscchslExamData?.eligibilityData?.qualification?.description}
              </p>
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed">
                {sscchslExamData?.eligibilityData?.qualification?.criteria.map(
                  (item, index) => (
                    <li key={index} className="mb-2">
                      <span className="font-bold">{item.boldText}</span>{" "}
                      {item.text}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Age Limit Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.ageLimitData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.ageLimitData?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.ageLimitData?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-left font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.ageLimitData?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.no}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300">
                            {row.category}
                          </td>
                          <td className="px-4 py-2 text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.ageRelaxation}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC CHSL 2025 Selection Process */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.selectionProcess?.title}
              </h2>

              {/* Process List */}
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed">
                {sscchslExamData?.selectionProcess?.steps.map((step, index) => (
                  <li key={index} className="mb-2">
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* SSC CHSL 2025 Exam Pattern */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.examPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.examPattern?.description}
              </p>
            </div>

            {/* SSC CHSL Tier 1 Exam Pattern */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.tier1ExamPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.tier1ExamPattern?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.tier1ExamPattern?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-6 py-3 text-center font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.tier1ExamPattern?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-6 py-3 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.section}
                          </td>
                          <td className="px-6 py-3 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.questions}
                          </td>
                          <td className="px-6 py-3 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.marks}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-200 font-semibold">
                      <td className="px-6 py-3 text-center border border-gray-300">
                        Total
                      </td>
                      <td className="px-6 py-3 text-center border border-gray-300">
                        {sscchslExamData?.tier1ExamPattern?.totalQuestions}
                      </td>
                      <td className="px-6 py-3 text-center border border-gray-300">
                        {sscchslExamData?.tier1ExamPattern?.totalMarks}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            {/* SSC CHSL Tier 2 Exam Pattern */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.tier2ExamPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.tier2ExamPattern?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.tier2ExamPattern?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-center font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.tier2ExamPattern?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.session}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.section}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.modules}
                          </td>
                          <td className="px-4 py-2 text-left text-gray-700 border border-gray-300">
                            {row.subject}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.questions}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.marks}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.time}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC CHSL Salary After 7th Pay Commission */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.salaryStructure?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.salaryStructure?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.salaryStructure?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-center font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.salaryStructure?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 font-bold whitespace-nowrap">
                            {row.post}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.city}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.basicPay}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.hra}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.ta}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.grossSalary}
                          </td>
                          <td className="px-4 py-2 text-center text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.inHand}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC CHSL 2025 Job Profile */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.jobProfile?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.jobProfile?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscchslExamData?.jobProfile?.tableHeaders.map(
                        (header, index) => (
                          <th
                            key={index}
                            className="px-4 py-2 text-center font-semibold text-gray-700 border border-gray-300 whitespace-nowrap"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.jobProfile?.tableData.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-left text-gray-700 border border-gray-300 whitespace-nowrap">
                            {row.post}
                          </td>
                          <td className="px-4 py-2 text-left text-gray-700 border border-gray-300">
                            {row.profile}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC CHSL 2025 Typing Test */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.typingTest?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscchslExamData?.typingTest?.description}
              </p>
            </div>

            {/* SSC CHSL 2025 Exam Preparation Tips */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.examPreparation?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.examPreparation?.description}
              </p>

              {/* Tips List */}
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                {sscchslExamData?.examPreparation?.tips.map((tip, index) => (
                  <li key={index} className="mb-2">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* SSC CHSL 2025 Result */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.result?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscchslExamData?.result?.description}
              </p>
            </div>
            {/* SSC CHSL Online Coaching */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.onlineCoaching?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscchslExamData?.onlineCoaching?.description}{" "}
                <a
                  href={sscchslExamData?.onlineCoaching?.link?.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscchslExamData?.onlineCoaching?.link?.text}
                </a>{" "}
                {sscchslExamData?.onlineCoaching?.additionalText}
              </p>
            </div>

            {/* SSC CHSL 2025 Mock Tests */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscchslExamData?.mockTests?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscchslExamData?.mockTests?.descriptionPart1}{" "}
                <a
                  href={sscchslExamData?.mockTests?.link.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscchslExamData?.mockTests?.link.text}
                </a>{" "}
                {sscchslExamData?.mockTests?.descriptionPart2}
              </p>

              {/* Table of Important Links */}
              {/* <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      <th
                        colSpan="2"
                        className="px-4 py-2 text-center font-semibold text-gray-700 border border-gray-300"
                      >
                        {sscchslExamData?.mockTests?.tableTitle}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscchslExamData?.mockTests?.importantLinks.map(
                      (row, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-300 ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-4 py-2 text-center text-blue-500 hover:underline border border-gray-300">
                            <a
                              href={row.leftLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {row.leftLink.text}
                            </a>
                          </td>
                          <td className="px-4 py-2 text-center text-blue-500 hover:underline border border-gray-300">
                            <a
                              href={row.rightLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {row.rightLink.text}
                            </a>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div> */}
            </div>

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
