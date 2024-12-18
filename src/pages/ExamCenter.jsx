import Aos from "aos";
import React, { useEffect, useState } from "react";
import "../App.css";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import ReactHelmet from "../utils/ReactHelmet";
import {
  sscCGLCalendarData,
  sscExamsData,
  sscCHSLCalendarData,
  sscMTSCalendarData,
  importanceOfCalendarData,
  howToUseCalendarData,
  sscGDCalendarData,
  calendarDownloadData,
  releaseDateData,
  faqs,
  classes,
  testSeries,
  tableData,
  tableOfContentsData,
  sscbooksdata,
} from "../data/sscData";
import Card from "../components/card/Card";

function ExamCenter() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleBuyNowClick = (link) => {
    window.location.replace(`${link}`);
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
  // State to track whether the table is open or closed
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle the state
  const toggleTable = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <ReactHelmet
        title="SSC - The WiNNERS Institute"
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
              <span className="text-gray-500">Ssc</span>
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white  rounded-md">
          {/* Col-8 */}
          <div className="md:col-span-9 lg:px-6">
            {/* First Section: SSC  Intro */}
            <div className="bg-white  rounded-md lg:p-6 mb-3">
              <h1 className="xl:text-3xl lg:text-2xl sm:text-xl  font-bold text-gray-800 mb-4">
                SSC Calendar 2025 Out, Check Full List of Upcoming SSC Exams..
              </h1>
              <p className="text-gray-600 mb-4">
                The Staff Selection Commission has released the SSC Calendar
                2025 on the official website,{" "}
                <a
                  href="https://www.ssc.gov.in"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ssc.gov.in
                </a>
              </p>
              <div className="bg-gray-50 p-4 rounded-md border">
                <p className="text-gray-700 leading-relaxed">
                  {" "}
                  . The SSC Calendar 2025-26 highlights the name of the
                  examination, date of advertisement, closing date of submission
                  of application form, and tentative date/month of exam.
                </p>
              </div>
            </div>
            <img
              src="https://www.bankersadda.com/wp-content/uploads/multisite/2024/12/06164702/SSC-Calendar-2025-26.png"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />
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

            {/* Content of links */}
            <div className="mt-4 p-2">
              <p className="leading-loose">
                The Staff Selection Commission (SSC) has released the SSC Exam
                Calendar 2025 on December 5, 2024, for the upcoming year
                (2025-26). This calendar provides important details about the
                exam schedule, including notification release dates, online
                application dates and tentative exam dates for various SSC
                posts. The SSC Exam Calendar is highly anticipated by
                candidates, as it outlines the dates for exams like SSC CGL,
                CHSL, MTS, and others. Aspirants can refer to this calendar for
                a clear timeline of all the SSC exams in the coming year.
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
                  SSC Calendar 2025 is an important tool for candidates,
                  enabling them to plan their preparation and keep track of
                  deadlines for multiple SSC exams.
                </p>
              </div>
              {/* SSC Calendar 2025: Important Dates */}
              <div id="important-dates" className="mt-8">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  SSC Calendar 2025: Important Dates
                </h2>
                <p className="leading-loose text-gray-700">
                  The SSC conducts a variety of exams to fill posts in
                  government ministries, departments, and offices. The given
                  table provides the SSC Calendar 2025 important dates
                  comprising the name of examination, tier/phase, date of
                  advertisement, closing date, and date/month of exam.
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    {/* Table Header */}
                    <thead>
                      <tr className="bg-orange-500 text-black">
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
                      {tableData?.map((row, index) => (
                        <tr key={row.id} className="text-gray-800">
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {index + 1}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {row.name}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.tier}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.advertisementDate}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.closingDate}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            {row.examDate}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div id={sscExamsData.id} className="mt-8">
                  <h2 className="text-xl font-bold text-blue-900 mb-2">
                    {sscExamsData.title}
                  </h2>
                  {sscExamsData.paragraphs?.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`leading-loose text-gray-700 ${
                        index !== 0 ? "mt-4" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {/* SSC CGL Calendar */}
                <div id={sscCGLCalendarData.id} className="mb-8">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {sscCGLCalendarData.title}
                  </h3>
                  <ul className="list-disc ml-6 text-gray-700">
                    {sscCGLCalendarData.descriptionItems?.map((item, index) => (
                      <li key={index}>
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <>
                            <span className="font-semibold">{item.label}:</span>{" "}
                            {item.value}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SSC CHSL Calendar */}
                <div id={sscCHSLCalendarData.id} className="mb-8">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {sscCHSLCalendarData.title}
                  </h3>
                  <ul className="list-disc ml-6 text-gray-700">
                    {sscCHSLCalendarData.descriptionItems?.map(
                      (item, index) => (
                        <li key={index}>
                          {typeof item === "string" ? (
                            item
                          ) : (
                            <>
                              <span className="font-semibold">
                                {item.label}:
                              </span>{" "}
                              {item.value}
                            </>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* SSC MTS Calendar */}
                <div id={sscMTSCalendarData.id} className="mb-8">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {sscMTSCalendarData.title}
                  </h3>
                  <ul className="list-disc ml-6 text-gray-700">
                    {sscMTSCalendarData.descriptionItems?.map((item, index) => (
                      <li key={index}>
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <>
                            <span className="font-semibold">{item.label}:</span>{" "}
                            {item.value}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* SSC GD Calendar 2025 */}
                <div id={sscGDCalendarData.id} className="mt-8">
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {sscGDCalendarData.title}
                  </h3>
                  <ul className="list-disc ml-6 text-gray-700">
                    {sscGDCalendarData.descriptionItems?.map((item, index) => (
                      <li key={index}>
                        {typeof item === "string" ? (
                          item
                        ) : (
                          <>
                            <span className="font-semibold">{item.label}:</span>{" "}
                            {item.value}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="ssc-calendar-info" className="mt-8">
                  {/* Why the SSC Calendar 2025 is Important */}
                  <div id={importanceOfCalendarData.id} className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {importanceOfCalendarData.title}
                    </h3>
                    <p className="leading-loose text-gray-700">
                      {importanceOfCalendarData.description}
                    </p>
                    <ul className="list-disc ml-6 text-gray-700 mt-4">
                      {importanceOfCalendarData.points?.map((point, index) => (
                        <li key={index}>
                          <span className="font-semibold">{point.label}:</span>{" "}
                          {point.value}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How to Use the SSC Calendar 2025 */}
                  <div id={howToUseCalendarData?.id} className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {howToUseCalendarData.title}
                    </h3>
                    <p className="leading-loose text-gray-700">
                      {howToUseCalendarData.description}
                    </p>
                    <ul className="list-disc ml-6 text-gray-700 mt-4">
                      {howToUseCalendarData.points.map((point, index) => (
                        <li key={index}>
                          <span className="font-semibold">{point.label}:</span>{" "}
                          {point.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* SSC Calendar 2025 Download PDF */}
                  <div id={calendarDownloadData?.id} className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {calendarDownloadData.title}
                    </h3>
                    <p className="leading-loose text-gray-700">
                      {calendarDownloadData.description}
                    </p>
                    <a
                      href={calendarDownloadData.link}
                      className="text-red-600 hover:underline font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {calendarDownloadData.linkText}
                    </a>
                  </div>

                  {/* SSC Calendar Release Date */}
                  <div id={releaseDateData.id} className="mt-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {releaseDateData.title}
                    </h3>
                    {releaseDateData.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="leading-loose text-gray-700 mt-4"
                      >
                        {paragraph}
                      </p>
                    ))}
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
                    {faqs?.map((faq, index) => (
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
            </div>
          </div>

          {/* Col-4 */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <img
              src="/ssc-cgl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />{" "}
            <iframe
              className="w-full rounded shadow-md"
              src="https://www.youtube.com/embed/mVyOXuo89M4"
              title="SSC Calendar 2025-26 | SSC Exam Calendar 2025 Out | SSC Exams 2025-26 | Aditya Patel Sir"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <img
              src="/ssc-chsl-2025.jpeg"
              alt="Placeholder"
              className="w-full rounded shadow-md"
            />{" "}
            <iframe
              className="w-full rounded shadow-md"
              src="https://www.youtube.com/embed/KDtJdvmB26U"
              title="SSC GD Bharti BSF, CISF, CRPF, SSB, ITBP, AR, SSF and NCB | What is SSC GD ?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
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
}

export default ExamCenter;
