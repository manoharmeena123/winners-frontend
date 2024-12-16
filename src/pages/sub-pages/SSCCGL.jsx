import React,{ useState} from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/nav/Header";
import ReactHelmet from "../../utils/ReactHelmet";
import { ssccglData, sscExamData, sscExamtableData } from "../../data/ssc-cgl";

const SSCCGL = () => {
  const { title, intro, content, officialWebsite } = ssccglData;
  const { about, notification, highlights, importantDates, vacancy } =
    sscExamData;

  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed
  };
  return (
    <>
      <Header />
      <ReactHelmet
        title="SSC CGL - The WiNNERS Institute"
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
            {/* First Section: SSC CGL Intro */}
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

            {/* Second Section: About SSC CGL */}
            <div className="bg-white shadow-md rounded-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {about.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{about.content}</p>
            </div>

            {/* Third Section: SSC CGL Notification */}
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
            <div className="bg-white shadow-md rounded-md p-6">
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
            </div>

            {/* Important Dates Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sscExamData.registration.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {sscExamData.registration.content}
              </p>
            </div>

            {/* SSC CGL Application Fee Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData?.ageLimit?.title}
              </h3>
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

            {/* SSC CGL Syllabus Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.syllabus.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.syllabus.content}{" "}
                <a
                  href={sscExamData.syllabus.syllabusLink.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscExamData.syllabus.syllabusLink.text}
                </a>
              </p>

              {/* Syllabus Table */}
              <div className="overflow-x-auto">
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
              </div>
            </div>

            {/* SSC CGL Posts Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {sscExamData.posts.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {sscExamData.posts.content}{" "}
                <a
                  href={sscExamData.posts.postsLink.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscExamData.posts.postsLink.text}
                </a>
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
                <a
                  href={sscExamData.salary.salaryLink.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sscExamData.salary.salaryLink.text}
                </a>
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
            </div>

            {/* Frequently Asked Questions Section */}
            <div className="bg-white shadow-md rounded-md p-6 mt-6">
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SSCCGL;
