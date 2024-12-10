import React from "react";
import { faqs, classes, testSeries } from "../data/faqdata";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SSC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleBuyNowClick = (link) => {
    window.location.replace(
      `${link}`
    );
  };

  return (
    <div className="container w-[90%] mx-auto px-6 py-4">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <a href="/" className="text-red-600 hover:underline">
              Home
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>
            <span className="text-gray-500">SSC</span>
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white p-6 shadow-md rounded-md">
        {/* Col-8 */}
        <div className="md:col-span-8">
          <h1 className="text-3xl font-medium mb-4">
            SSC Calendar 2025 Out, Check Full List of Upcoming SSC Exams..
          </h1>
          <p className="text-gray-700">
            The Staff Selection Commission has released the SSC Calendar 2025 on
            the official website, www.ssc.gov.in. The SSC Calendar 2025-26
            highlights the name of the examination, date of advertisement,
            closing date of submission of application form, and tentative
            date/month of exam... Read more at:{" "}
            {/* <a
              href="https://www.bankersadda.com/ssc-calendar-2025/"
                className="text-red-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
            
            </a> */}
          </p>
          <img
            src="https://www.bankersadda.com/wp-content/uploads/multisite/2024/12/06164702/SSC-Calendar-2025-26.png"
            alt="Placeholder"
            className="w-full rounded shadow-md"
          />
          {/* Table of Contents */}
          <div className="border border-gray-300 rounded-md p-4 mt-4">
            <h2 className="font-semibold text-lg mb-2">Table of Contents</h2>
            <ul className="list-decimal ml-6 space-y-2 text-sm">
              <li>
                <a
                  href="#ssc-calendar-2025"
                  className="text-red-600 hover:underline"
                >
                  SSC Calendar 2025
                </a>
              </li>
              <li>
                <a
                  href="#important-dates"
                  className="text-red-600 hover:underline"
                >
                  SSC Calendar 2025: Important Dates
                </a>
              </li>
              <li>
                <a
                  href="#ssc-exams-2024"
                  className="text-red-600 hover:underline"
                >
                  SSC Exams 2024
                </a>
                <ul className="list-decimal ml-6 space-y-2">
                  <li>
                    <a
                      href="#ssc-cgl-calendar-2025"
                      className="text-red-600 hover:underline"
                    >
                      SSC CGL Calendar 2025
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ssc-chsl-calendar-2025"
                      className="text-red-600 hover:underline"
                    >
                      SSC CHSL Calendar 2025
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ssc-mts-calendar-2025"
                      className="text-red-600 hover:underline"
                    >
                      SSC MTS Calendar 2025
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ssc-gd-calendar-2025"
                      className="text-red-600 hover:underline"
                    >
                      SSC GD Calendar 2025
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#importance-of-calendar"
                  className="text-red-600 hover:underline"
                >
                  Why the SSC Calendar 2025 is Important?
                </a>
              </li>
              <li>
                <a
                  href="#how-to-use-calendar"
                  className="text-red-600 hover:underline"
                >
                  How to Use the SSC Calendar 2025?
                </a>
              </li>
              <li>
                <a
                  href="#calendar-download"
                  className="text-red-600 hover:underline"
                >
                  SSC Calendar 2025 Download PDF
                </a>
              </li>
              <li>
                <a
                  href="#release-date"
                  className="text-red-600 hover:underline"
                >
                  SSC Calendar Release Date
                </a>
              </li>
            </ul>
          </div>

          {/* Content of links */}
          <div className="mt-4 p-2">
            <p className="leading-loose">
              The Staff Selection Commission (SSC) has released the SSC Exam
              Calendar 2025 on December 5, 2024, for the upcoming year
              (2025-26). This calendar provides important details about the exam
              schedule, including notification release dates, online application
              dates and tentative exam dates for various SSC posts. The SSC Exam
              Calendar is highly anticipated by candidates, as it outlines the
              dates for exams like SSC CGL, CHSL, MTS, and others. Aspirants can
              refer to this calendar for a clear timeline of all the SSC exams
              in the coming year.
            </p>
            {/* Content of links */}
            <div className="mt-4 p-2">
              <h2
                id="ssc-calendar-2025"
                className="text-xl font-bold text-blue-900 mb-2"
              >
                SSC Calendar 2025
              </h2>
              <p className="leading-loose text-gray-700">
                The SSC Calendar is an official document released annually by
                the Staff Selection Commission that outlines:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Notification Release Dates for Various Exams.</li>
                <li>Application Submission Closing Date.</li>
                <li>Tentative Date/Month of Exam.</li>
              </ul>
              <p className="leading-loose text-gray-700 mt-4">
                SSC Calendar 2025 is an important tool for candidates, enabling
                them to plan their preparation and keep track of deadlines for
                multiple SSC exams.
              </p>
            </div>
            {/* SSC Calendar 2025: Important Dates */}
            <div id="important-dates" className="mt-8">
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                SSC Calendar 2025: Important Dates
              </h2>
              <p className="leading-loose text-gray-700">
                The SSC conducts a variety of exams to fill posts in government
                ministries, departments, and offices. The given table provides
                the SSC Calendar 2025 important dates comprising the name of
                examination, tier/phase, date of advertisement, closing date,
                and date/month of exam.
              </p>

              <div className="overflow-x-auto mt-4">
                {/* <div className="mt-4"> */}
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  {/* Table Header */}
                  <thead>
                    <tr className="bg-orange-500 text-white">
                      <th className="border border-gray-300 px-4 py-2">
                        S. No.
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Name of Examination
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Tier/Phase
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Date of Advertisement
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Closing Date
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Date/Month of Exam
                      </th>
                    </tr>
                  </thead>
                  {/* Table Body */}
                  <tbody>
                    {/* Row 1 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        1
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        JSA/LDC Grade Limited Departmental Competitive
                        Examination, 2024 (only for DoPT)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        28 February 2025 (Friday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        20 March 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        April-May, 2025
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        2
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        SSA/UDC Grade Limited Departmental Competitive
                        Examination, 2024 (only for DoPT)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        06 March 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        26 March 2025 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        April-May, 2025
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        3
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ASO Grade Limited Departmental Competitive Examination,
                        2022-2024
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        20 March 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        09 April 2025 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        April-May, 2025
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Selection Post Examination, Phase-XIII, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        CBE
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        16 April 2025 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        15 May 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        June-July, 2025
                      </td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        5
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Combined Graduate Level Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Tier-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        22 April 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        21 May 2025 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        June-July, 2025
                      </td>
                    </tr>
                    {/* Row 6 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        6
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Sub-Inspector in Delhi Police and Central Armed Police
                        Forces Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        16 May 2025 (Friday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        14 June 2025 (Saturday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        July-August, 2025
                      </td>
                    </tr>
                    {/* Row 7 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        7
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Combined Higher Secondary (10+2) Level Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Tier-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        27 May 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        25 June 2025 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        July-August, 2025
                      </td>
                    </tr>

                    {/* Row 8 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        8
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Multi Tasking (Non-Technical) Staff, and Havaldar (CBIC
                        & CBN) Examination-2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        CBE
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        26 June 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        25 July 2025 (Friday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        September-October, 2025
                      </td>
                    </tr>

                    {/* Row 9 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        9
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Stenographer Grade ‘C’ & ‘D’ Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        CBE
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        29 July 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        21 August 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        October-November, 2025
                      </td>
                    </tr>

                    {/* Row 10 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        10
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Junior Engineer (Civil, Mechanical, Electrical)
                        Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        05 August 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        28 August 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        October-November, 2025
                      </td>
                    </tr>

                    {/* Row 11 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        11
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Combined Hindi Translators Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        26 August 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        18 September 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        October-November, 2025
                      </td>
                    </tr>
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        12
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Constable (Executive) Male and Female in Delhi Police
                        Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        CBE
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        02 September 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        01 October 2025 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        November-December, 2025
                      </td>
                    </tr>

                    {/* Row 13 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        13
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Constable (Driver) – Male in Delhi Police Examination,
                        2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        CBE
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        19 September 2025 (Friday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        12 October 2025 (Sunday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        November-December, 2025
                      </td>
                    </tr>

                    {/* Row 14 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        14
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Head Constable (Ministerial) in Delhi Police
                        Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        CBE
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        07 October 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        05 November 2025 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        December 2025 – January 2026
                      </td>
                    </tr>

                    {/* Row 15 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        15
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Head Constable {`{`}Assistant Wireless Operator
                        (AWO)/Tele-Printer Operator (TPO)
                        {`} in Delhi Police Examination, 2025`}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        CBE
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        14 October 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        06 November 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        December 2025 – January 2026
                      </td>
                    </tr>
                    {/* Row 16 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        16
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Grade ‘C’ Stenographer Limited Departmental Competitive
                        Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        30 October 2025 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        19 November 2025 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        January-February, 2026
                      </td>
                    </tr>

                    {/* Row 17 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        17
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Constables (GD) in CAPFs, NIA, SSF, and Rifleman (GD) in
                        Assam Rifles Examination, 2026
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        CBE
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        11 November 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        15 December 2025 (Monday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        March-April, 2026
                      </td>
                    </tr>

                    {/* Row 18 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        18
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        JSA/LDC Grade Limited Departmental Competitive
                        Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        16 December 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        05 January 2026 (Monday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        January-February, 2026
                      </td>
                    </tr>

                    {/* Row 19 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        19
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        SSA/UDC Grade Limited Departmental Competitive
                        Examination, 2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        23 December 2025 (Tuesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        12 January 2026 (Monday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        January-February, 2026
                      </td>
                    </tr>
                    {/* Row 20 */}
                    <tr className="text-gray-800">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        20
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ASO Grade Limited Departmental Competitive Examination,
                        2025
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        Paper-I (CBE)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        15 January 2026 (Thursday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        04 February 2026 (Wednesday)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        March-April, 2026
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="ssc-exams-2024" className="mt-8">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  SSC Exams 2024
                </h2>
                <p className="leading-loose text-gray-700">
                  The SSC Exams 2024 are set to be a significant opportunity for
                  aspirants aiming to secure government jobs. With exams such as
                  the Combined Graduate Level (CGL), Combined Higher Secondary
                  Level (CHSL), Multi-Tasking Staff (MTS), and others, SSC
                  continues to provide diverse roles in various government
                  departments.
                </p>
                <p className="leading-loose text-gray-700 mt-4">
                  The SSC Exams 2024 will follow the organization’s standard
                  format, including Computer-Based Examinations (CBE),
                  descriptive papers, and skill tests, depending on the post.
                </p>
              </div>
              {/* SSC CGL Calendar */}
              <div id="ssc-cgl-calendar-2025" className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-2">
                  SSC CGL Calendar 2025
                </h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    For graduates aiming for Group B and C positions in various
                    government departments.
                  </li>
                  <li>
                    <span className="font-semibold">Exam Stages:</span> Tier-I
                    (Prelims), Tier-II (Mains), Skill Test/Document
                    Verification.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Advertisement Release Date:
                    </span>{" "}
                    22 April 2025
                  </li>
                  <li>
                    <span className="font-semibold">
                      Closing Date of Online Application:
                    </span>{" "}
                    21 May 2025
                  </li>
                  <li>
                    <span className="font-semibold">
                      Tentative Month of Exam:
                    </span>{" "}
                    June-July 2025
                  </li>
                  <li>
                    <span className="font-semibold">Mode of Exam:</span> Online
                  </li>
                </ul>
              </div>

              {/* SSC CHSL Calendar */}
              <div id="ssc-chsl-calendar-2025" className="mb-8">
                <h3 className="text-lg font-semibold text-black mb-2">
                  SSC CHSL Calendar 2025
                </h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    For candidates who have completed Class 12 and seek clerical
                    roles.
                  </li>
                  <li>
                    <span className="font-semibold">Exam Stages:</span> Tier-I
                    (Prelims), Tier-II (Descriptive), Typing Test.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Advertisement Release Date:
                    </span>{" "}
                    27 May 2025
                  </li>
                  <li>
                    <span className="font-semibold">
                      Closing Date of Online Application:
                    </span>{" "}
                    25 June 2025
                  </li>
                  <li>
                    <span className="font-semibold">
                      Tentative Month of Exam:
                    </span>{" "}
                    July-August 2025
                  </li>
                  <li>
                    <span className="font-semibold">Mode of Exam:</span> Online
                  </li>
                </ul>
              </div>

              {/* SSC MTS Calendar */}
              <div id="ssc-mts-calendar-2025">
                <h3 className="text-lg font-semibold text-black mb-2">
                  SSC MTS Calendar 2025
                </h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    For non-technical Group C posts in various government
                    offices.
                  </li>
                  <li>
                    <span className="font-semibold">Exam Stages:</span> Tier-I
                    (Objective), Tier-II (Descriptive).
                  </li>
                  <li>
                    <span className="font-semibold">
                      Advertisement Release Date:
                    </span>{" "}
                    26 June 2025
                  </li>
                  <li>
                    <span className="font-semibold">
                      Closing Date of Online Application:
                    </span>{" "}
                    25 July 2025
                  </li>
                  <li>
                    <span className="font-semibold">
                      Tentative Month of Exam:
                    </span>{" "}
                    September-October 2025
                  </li>
                  <li>
                    <span className="font-semibold">Mode of Exam:</span> Online
                  </li>
                </ul>
              </div>
              {/* SSC GD Calendar 2025 */}
              <div id="ssc-gd-calendar-2025" className="mt-8">
                <h3 className="text-lg font-semibold text-black mb-2">
                  SSC GD Calendar 2025
                </h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    Recruits constables for CAPFs, NIA, SSF, and Assam Rifles.
                  </li>
                  <li>
                    <span className="font-semibold">Exam Stages:</span> CBT,
                    Physical Test, Medical Test.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Advertisement Release Date:
                    </span>{" "}
                    11 November 2025
                  </li>
                  <li>
                    <span className="font-semibold">
                      Closing Date of Online Application:
                    </span>{" "}
                    15 December 2025
                  </li>
                  <li>
                    <span className="font-semibold">
                      Tentative Month of Exam:
                    </span>{" "}
                    March-April 2026
                  </li>
                  <li>
                    <span className="font-semibold">Mode of Exam:</span> Online
                  </li>
                </ul>
              </div>
              <div id="ssc-calendar-info" className="mt-8">
                {/* Why the SSC Calendar 2025 is Important */}
                <div id="importance-of-calendar" className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Why the SSC Calendar 2025 is Important?
                  </h3>
                  <p className="leading-loose text-gray-700">
                    The SSC Calendar 2025 acts as an important preparation tool
                    for aspirants as it provides a complete roadmap for the
                    upcoming year 2025-26.
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 mt-4">
                    <li>
                      <span className="font-semibold">
                        Preparation Planning:
                      </span>{" "}
                      Knowing exam dates in advance helps in creating a
                      realistic study plan.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Deadline Management:
                      </span>{" "}
                      Helps candidates ensure timely submission of applications.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Resource Allocation:
                      </span>{" "}
                      Guides candidates in prioritizing topics and allocating
                      resources like study materials.
                    </li>
                  </ul>
                </div>

                {/* How to Use the SSC Calendar 2025 */}
                <div id="how-to-use-calendar" className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    How to Use the SSC Calendar 2025?
                  </h3>
                  <p className="leading-loose text-gray-700">
                    The ways through which SSC Calendar 2025 must be utilized
                    have been discussed in the given section.
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 mt-4">
                    <li>
                      <span className="font-semibold">
                        Highlight Important Dates:
                      </span>{" "}
                      Mark notification and exam dates on the personal calendar.
                    </li>
                    <li>
                      <span className="font-semibold">Plan Ahead:</span> Create
                      a structured timetable for preparation based on the exam
                      you’re targeting.
                    </li>
                    <li>
                      <span className="font-semibold">Stay Updated:</span>{" "}
                      Regularly visit the SSC official website (ssc.nic.in) for
                      any changes.
                    </li>
                    <li>
                      <span className="font-semibold">Practice Regularly:</span>{" "}
                      Utilize mock tests, previous year papers, and online
                      resources to enhance the preparation.
                    </li>
                  </ul>
                </div>

                {/* SSC Calendar 2025 Download PDF */}
                <div id="calendar-download" className="mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    SSC Calendar 2025 Download PDF
                  </h3>
                  <p className="leading-loose text-gray-700">
                    Candidates can access the SSC Calendar 2025 PDF ensuring
                    they stay updated with the latest information. The
                    downloadable format makes it convenient for aspirants to
                    refer to the schedule anytime and incorporate it into their
                    preparation plan. With this calendar in hand, candidates can
                    streamline their study schedules and remain aligned with
                    SSC’s timelines throughout the year.
                  </p>
                  <a
                    href="#"
                    className="text-red-600 hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SSC Calendar 2025–Click Here To Download PDF
                  </a>
                </div>
                <div id="release-date" className="mt-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    SSC Calendar Release Date
                  </h3>
                  <p className="leading-loose text-gray-700">
                    The SSC Calendar Release Date plays an important role in
                    guiding candidates to prepare for various SSC exams. Over
                    the years, the Staff Selection Commission has issued its
                    exam calendar and has made revisions later. SSC Calendar
                    2025 published recently outlines the tentative schedule for
                    upcoming exams.
                  </p>
                  <p className="leading-loose text-gray-700 mt-4">
                    However, candidates can expect potential changes or updates
                    to this calendar, as the SSC often revises its schedule
                    based on administrative requirements or other factors.
                    Candidates need to remain updated so that they do not miss
                    any important dates.
                  </p>
                </div>
                <img
                  src="https://www.bankersadda.com/wp-content/uploads/multisite/2024/12/09193127/SSC_Calendar_Releases_Per_Year-1536x960.png"
                  alt="Placeholder"
                  className="w-full rounded shadow-md"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
                <div className="space-y-1">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-md">
                      {/* FAQ Header */}
                      <div
                        className={`flex justify-between items-center p-1 ${
                          activeIndex === index
                            ? "bg-blue-700 text-white"
                            : "bg-blue-700 text-white"
                        } cursor-pointer`}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span>{faq.question}</span>
                        <span className="text-xl">
                          {activeIndex === index ? "−" : "+"}
                        </span>
                      </div>

                      {/* FAQ Content with Transition */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeIndex === index
                            ? "max-h-screen p-4"
                            : "max-h-0 p-0"
                        } bg-white text-gray-800`}
                      >
                        {activeIndex === index && (
                          <div className="border-t">{faq.answer}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Online Live Classes */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Popular Online Live Classes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {classes.map((cls, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 flex flex-col items-center h-full"
                      style={{ boxShadow: "0 0 30px rgb(0 0 0 / 10%)" }}
                    >
                      {/* Image Section */}
                      <div className="w-full h-36 rounded-lg flex items-center justify-center">
                        <img
                          src={cls.image}
                          alt="Placeholder"
                          className="w-full h-full object-fit rounded-lg"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-center text-gray-700 mt-4">
                        {cls.description}
                      </p>

                      {/* Price */}
                      <p className="text-orange-600 font-bold text-lg mt-2">
                        {cls.price}
                      </p>

                      {/* Button */}
                      <button
                        className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                        onClick={ () => handleBuyNowClick(cls?.link)}
                      >
                        {cls.button}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Mock Test Series.
               */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Popular Mock Test Series
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {testSeries?.map((cls, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 flex flex-col items-center"
                      style={{ boxShadow: "0 0 30px rgb(0 0 0 / 10%)" }}
                    >
                      <div className="w-full h-36 rounded-lg flex items-center justify-center">
                        <img
                          src={cls.image}
                          alt="Placeholder"
                          className="w-full h-full object-fit rounded-lg"
                        />
                      </div>
                      <p className="text-center text-gray-700 mt-4">
                        {cls.description}
                      </p>
                      <p className="text-orange-600 font-bold text-lg mt-2">
                        {cls.price}
                      </p>
                      {/* Button */}
                      <button
                        className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                        onClick={ () => handleBuyNowClick(cls?.link)}
                      >
                        {cls.button}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Col-4 */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <img
            src="https://www.bankersadda.com/wp-content/uploads/multisite/2024/11/26151248/refer-and-earn-its.webp"
            alt="Placeholder"
            className="w-full rounded shadow-md"
          />
          <img
            src="/WhatsApp Image 2024-12-10 at 17.05.59 (1).jpeg"
            alt="Placeholder"
            className="w-full rounded shadow-md"
          />
          <img
            src="/WhatsApp Image 2024-12-10 at 17.05.59.jpeg"
            alt="Placeholder"
            className="w-full rounded shadow-md"
          />
          <img
            src="/WhatsApp Image 2024-12-10 at 17.06.00 (1).jpeg"
            alt="Placeholder"
            className="w-full rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SSC;
