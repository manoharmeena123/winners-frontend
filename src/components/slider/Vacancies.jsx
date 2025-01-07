import React, { useState, useRef, useEffect } from "react";
import "./slider.css"; // Import your custom CSS for additional styles
import { formatDate, formater } from "../../utils/formatDate";
import { Link } from "react-router-dom";

function Vacancies({ Notification }) {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredNotifications, setFilteredNotifications] = useState(
    Notification || []
  ); // State for filtered notifications

  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 10; // Items per page

  // Update filtered notifications when Notification prop or search term chan ges
  useEffect(() => {
    const filtered = Notification.filter((item) =>
      item.Name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNotifications(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [Notification, searchTerm]);

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNotifications.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);

  // Handle search input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Function to open modal with item details
  const openDetails = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  if (!Notification || Notification.length === 0) {
    return (
      <p className="text-center pt-6 font-sans font-bold text-2xl text-black">
        Results for recent exams will be shared soon.
      </p>
    );
  }

  return (
    <div className="container mx-auto px-1 py-4 ">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Exam..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Responsive Table Container */}
      <div ref={scrollRef} className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Notification Date
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Exam Name
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Post Name
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Eligibility
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Last Date
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Exam Date
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                More Information
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => {
                // Match the "Apply" date pattern and extract start and end dates
                const applyDateMatch = item?.Syllabus?.match(
                  /Apply\s*:\s*(\d{2}\/\d{2}\/\d{4})\s*-\s*(\d{2}\/\d{2}\/\d{4})/
                );
                const applyStartDate = applyDateMatch
                  ? applyDateMatch[1]
                  : null; // Start date
                const applyEndDate = applyDateMatch ? applyDateMatch[2] : null; // End date

                const currentDate = new Date(); // Get the current date
                const isPending =
                  applyEndDate && currentDate <= new Date(applyEndDate); // Check if the current date is before the applyEndDate

                return (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="border border-gray-300 p-2 whitespace-nowrap">
                      {formatDate(item?.createdAt)}
                    </td>
                    <td className="border border-gray-300 p-2 whitespace-nowrap">
                      {item?.Name}
                    </td>
                    <td className="border border-gray-300 p-2 whitespace-nowrap">
                      {item?.Posts || "—"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {item?.Qualification || "—"}
                    </td>
                    {/* Last Date Column with Conditional Highlight */}
                    <td
                      className={`border border-gray-300 p-2 whitespace-nowrap text-center font-bold ${
                        isPending ? "animate-highlight" : "bg-gray-100" // Apply the highlight animation only if still pending
                      }`}
                    >
                      {applyEndDate ? formater(applyEndDate.toString()) : "—"}
                    </td>
                    <td className="border border-gray-300 p-2 whitespace-nowrap">
                      {item?.ExamstartDate
                        ? formatDate(item?.ExamstartDate)
                        : "—"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      <button
                        onClick={() => openDetails(item)}
                        className="text-blue-600 underline hover:text-blue-800 whitespace-nowrap"
                      >
                        Get Details
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center p-4 text-gray-500 font-medium"
                >
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <nav>
            <ul className="flex space-x-2">
              {[...Array(totalPages)].map((_, pageIndex) => (
                <li key={pageIndex}>
                  <button
                    onClick={() => handlePageChange(pageIndex + 1)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === pageIndex + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {pageIndex + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Modal Component */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalData={modalData}
      />
    </div>
  );
}

function DetailsModal({ isOpen, onClose, modalData }) {
  // Disable background scrolling on modal open

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen || !modalData) return null;

  const links = modalData.Syllabus.match(/https?:\/\/[^\s"<]+/g);
  const applyLink = links?.[0] || "#";

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center "
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl modal-content "
        role="document"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          {modalData.Img && (
            <img
              src={modalData.Img}
              alt={`${modalData.Name} logo`}
              className="h-11 w-11 object-contain"
            />
          )}
          <h2 id="modal-title" className="text-xl font-bold">
            {modalData.Name}
          </h2>
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none text-2xl"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div
          className="overflow-y-auto max-h-[60vh] px-2"
          style={{ scrollbarWidth: "thin" }}
        >
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: modalData.Syllabus }}
          ></div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {!modalData.id && (
            <Link
              to={`/job-details/${modalData.id}`}
              className="flex-1 text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Watch Job Details
            </Link>
          )}
          {!modalData.pdf && (
            <a
              href={modalData.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Download PDF
            </a>
          )}
          {applyLink && (
            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Apply Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Vacancies;
