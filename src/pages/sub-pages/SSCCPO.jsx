import React, { useState } from "react";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import Footer from "../../components/footer/Footer";
import { sscCpoData, sscCpoExamData } from "../../data/ssc-cpo";

const SSCCPO = () => {
  const { title, intro, content, officialWebsite } = sscCpoData;
  const { about, notification } = sscCpoExamData;
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
          <div className="md:col-span-9 ">
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

            {/* SSC CHSL 2025 Exam- Overview */}
            <div className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscCpoExamData?.overview?.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sscCpoExamData?.overview?.content}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    {sscCpoExamData?.overview?.tableData.map((row, index) => (
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
                {sscCpoExamData?.importantDatesData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.importantDatesData?.description}
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
                    {sscCpoExamData?.importantDatesData?.tableData.map(
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
                {sscCpoExamData?.vacancyData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.vacancyData?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscCpoExamData?.vacancyData?.tableHeaders.map(
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
                    {sscCpoExamData?.vacancyData?.tableData.map(
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
                {sscCpoExamData?.eligibilityData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.eligibilityData?.description}
              </p>

              {/* Nationality Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sscCpoExamData?.eligibilityData?.nationality?.title}
              </h3>
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6">
                {sscCpoExamData?.eligibilityData?.nationality?.criteria.map(
                  (item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  )
                )}
              </ul>

              {/* Educational Qualification Section */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sscCpoExamData?.eligibilityData?.qualification?.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                {sscCpoExamData?.eligibilityData?.qualification?.description}
              </p>
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed">
                {sscCpoExamData?.eligibilityData?.qualification?.criteria?.map(
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
                {sscCpoExamData?.ageLimitData?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.ageLimitData?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscCpoExamData?.ageLimitData?.tableHeaders.map(
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
                    {sscCpoExamData?.ageLimitData?.tableData.map(
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
                {sscCpoExamData?.selectionProcess?.title}
              </h2>

              {/* Process List */}
              <ul className="list-decimal pl-6 text-gray-700 leading-relaxed">
                {sscCpoExamData?.selectionProcess?.steps.map((step, index) => (
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
                {sscCpoExamData?.examPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.examPattern?.description}
              </p>
            </div>

            {/* SSC CHSL Tier 1 Exam Pattern */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscCpoExamData?.tier1ExamPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.tier1ExamPattern?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscCpoExamData?.tier1ExamPattern?.tableHeaders.map(
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
                    {sscCpoExamData?.tier1ExamPattern?.tableData.map(
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
                        {sscCpoExamData?.tier1ExamPattern?.totalQuestions}
                      </td>
                      <td className="px-6 py-3 text-center border border-gray-300">
                        {sscCpoExamData?.tier1ExamPattern?.totalMarks}
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
                {sscCpoExamData?.tier2ExamPattern?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.tier2ExamPattern?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscCpoExamData?.tier2ExamPattern?.tableHeaders.map(
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
                    {sscCpoExamData?.tier2ExamPattern?.tableData.map(
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
                {sscCpoExamData?.salaryStructure?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.salaryStructure?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscCpoExamData?.salaryStructure?.tableHeaders.map(
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
                    {sscCpoExamData?.salaryStructure?.tableData.map(
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
                {sscCpoExamData?.jobProfile?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.jobProfile?.description}
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200">
                      {sscCpoExamData?.jobProfile?.tableHeaders.map(
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
                    {sscCpoExamData?.jobProfile?.tableData.map((row, index) => (
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SSC CHSL 2025 Typing Test */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscCpoExamData?.typingTest?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscCpoExamData?.typingTest?.description}
              </p>
            </div>

            {/* SSC CHSL 2025 Exam Preparation Tips */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscCpoExamData?.examPreparation?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.examPreparation?.description}
              </p>

              {/* Tips List */}
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                {sscCpoExamData?.examPreparation?.tips.map((tip, index) => (
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
                {sscCpoExamData?.result?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscCpoExamData?.result?.description}
              </p>
            </div>
            {/* SSC CHSL Online Coaching */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscCpoExamData?.onlineCoaching?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {sscCpoExamData?.onlineCoaching?.description}{" "}
                <a
                  href={sscCpoExamData?.onlineCoaching?.link?.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscCpoExamData?.onlineCoaching?.link?.text}
                </a>{" "}
                {sscCpoExamData?.onlineCoaching?.additionalText}
              </p>
            </div>

            {/* SSC CHSL 2025 Mock Tests */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscCpoExamData?.mockTests?.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscCpoExamData?.mockTests?.descriptionPart1}{" "}
                <a
                  href={sscCpoExamData?.mockTests?.link.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscCpoExamData?.mockTests?.link.text}
                </a>{" "}
                {sscCpoExamData?.mockTests?.descriptionPart2}
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
                        {sscCpoExamData?.mockTests?.tableTitle}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sscCpoExamData?.mockTests?.importantLinks.map(
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
                {sscCpoExamData.faq.title}
              </h3>
              <div className="divide-y divide-gray-300">
                {sscCpoExamData.faq.questions.map((faq, index) => (
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
          {/* Col-4 */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <img
              src="/ssc-cgl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />
            <img
              src="/ssc-chsl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />
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

export default SSCCPO;
