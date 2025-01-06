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

  // Update filtered notifications when Notification prop or search term changes
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
  if (!isOpen || !modalData) return null;

  // Extract links from modal content
  const links = modalData.Syllabus.match(/https?:\/\/[^\s"<]+/g);
  const applyLink = links?.[0] || "#";

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center overflow-y-auto"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Scrollable Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl modal-content"
        role="document"
      >
        {/* Header */}
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

        {/* Modal Body - Scrollable */}
        <div
          className="overflow-y-auto max-h-[60vh] px-2"
          style={{ scrollbarWidth: "thin" }} // Optional: for cleaner scrollbar
        >
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: modalData.Syllabus }}
          ></div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Watch Job Details */}
          {!modalData.id && (
            <Link
              to={`/job-details/${modalData.id}`}
              className="flex-1 text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Watch Job Details
            </Link>
          )}

          {/* Download PDF */}
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
          {/* Apply Now */}
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

// function DetailsModal({ isOpen, onClose, modalData }) {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   if (!isOpen || !modalData) return null;

//   // Extract links from the syllabus
//   const links = modalData.Syllabus.match(/https?:\/\/[^\s"<]+/g);
//   const applyLink = links?.[0] || "#"; // Get the first link or fallback

//   return (
//     <div
//       className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
//       aria-modal="true"
//       role="dialog"
//       aria-labelledby="modal-title"
//     >
//       <div
//         className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl overflow-auto max-h-[90vh]"
//         role="document"
//       >
//         {/* Modal Header */}
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center gap-3">
//             {modalData.Img && (
//               <img
//                 src={modalData.Img}
//                 alt={`${modalData.Name} logo`}
//                 className="h-11 w-11 object-contain"
//               />
//             )}
//             <h2 id="modal-title" className="text-xl font-bold">
//               {modalData.Name}
//             </h2>
//           </div>
//           <button
//             className="text-gray-600 hover:text-gray-800 focus:outline-none text-2xl"
//             onClick={onClose}
//             aria-label="Close modal"
//           >
//             ×
//           </button>
//         </div>

//         {/* Modal Content */}
//         <div
//           className="prose overflow-y-auto"
//           dangerouslySetInnerHTML={{ __html: modalData.Syllabus }}
//         ></div>

//         {/* Dynamic Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-6">
//           {/* Watch Job Details */}
//           {!modalData.id && (
//             <Link
//               to={`/job-details/${modalData.id}`}
//               className="flex-1 text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//             >
//               Watch Job Details
//             </Link>
//           )}

//           {/* Download PDF */}
//           {!modalData.pdf && (
//             <a
//               href={modalData.pdf}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
//             >
//               Download PDF
//             </a>
//           )}

//           {/* Apply Now */}
//           {applyLink && (
//             <a
//               href={applyLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
//             >
//               Apply Now
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

export default Vacancies;

////========================================================================================================================================================>

//   import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./slider.css";  // Import the custom styles

// function Vacancies({ Notification }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentSyllabus, setCurrentSyllabus] = useState("");
//   const scrollRef = useRef(null); // useRef for the scrollable container
//   const sliderRef = useRef(null);

//   const handleItemClick = (syllabusContent) => {
//     setCurrentSyllabus(syllabusContent);
//     setIsModalOpen(true);
//   };

//   // Function to scroll right
//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   // Function to scroll left
//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const SampleNextArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//       <div className={className} onClick={onClick}>
//         <img src="assets/home/s-right.svg" alt="Next" />
//       </div>
//     );
//   }

//   const SamplePrevArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//       <div className={className} onClick={onClick}>
//         <img src="assets/home/s-left.svg" alt="Previous" />
//       </div>
//     );
//   }

//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <button
//         className="slick-next"
//         onClick={onClick}
//       >
//         <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M1 13L7 7L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//     );
//   };

//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <button
//         className="slick-prev"
//         onClick={onClick}
//       >
//         <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M7 13L1 7L7 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </button>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     ref: sliderRef,
//     nextArrow: <></>,
//     prevArrow: <></>,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: true,
//           dots: false
//         }
//       }
//     ]
//   };

//   if (Notification?.length === 0) {
//     return (
//       <p className="text-center pt-[6px] font-sans font-[700] text-[18px] leading-[24px] text-[#000000]">
//         Will share the results for the recent exams soon.
//       </p>
//     );
//   }

//   return (
//     <>
//     <div className="hidden md:block w-full">
//       {Notification?.length === 0 ? (
//           <p className="text-center pt-[6px] font-sans font-[700] text-[18px] leading-[24px] text-[#000000]">
//             Will share the results for the recent exams soon.
//           </p>
//         ) : (
//           <div className="relative">

//             <div
//               ref={scrollRef}
//               className="flex flex-row md:flex-wrap overflow-x-auto space-x-4 md:space-x-0 no-scrollbar " scrollbar
//               style={{ scrollBehavior: "smooth" ,margin :"auto" , display : 'flex' ,justifyContent : 'center'}}
//             >
//               {Notification?.map((e, i) => (
//                 <div
//                   style={{
//                     marginBottom: "8px",
//                   }}
//                   key={i}
//                   className="flex-shrink-0"
//                 >
//                   <div className="border overflow-hidden m-[4px] h-full cursor-pointer md:max-w-[218px] max-w-[300px] w-full rounded-[8px] border-[#D2D0D0] p-[6px]">
//                     <div onClick={() => handleItemClick(e?.Syllabus)}>
//                       {!e?.Img ? (
//                         <img
//                           src="assets/about/photo4.png"
//                           className="w-full object-cover"
//                           alt=""

//                         />
//                       ) : (
//                         <img
//                           src={e?.Img}
//                           className="w-full rounded-[10px] object-cover"
//                             alt=""

//                         />
//                       )}
//                       <div className="pt-[30px]">
//                         <div data-aos="fade-left">
//                           <p className="text-center md:h-[80px] h-auto pt-[6px] font-sans font-[700] text-[18px] leading-[24px] text-[#000000]">
//                             {e?.Name.length > 40
//                               ? `${e?.Name.substring(0, 40)}...`
//                               : e?.Name}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               </div>

//           </div>
//         )}
//     </div>
//         <div className="md:hidden w-full md:px-0">
//         <Slider {...settings}>
//           {Notification?.map((e, i) => (
//             <div key={i} className="w-full">
//               <div className="w-full border overflow-hidden cursor-pointer rounded-[8px] border-[#D2D0D0] bg-white">
//                 <div onClick={() => handleItemClick(e?.Syllabus)} className="w-full">
//                   <div className="h-[200px] w-full">
//                     {!e?.Img ? (
//                       <img
//                         src="assets/about/photo4.png"
//                         className="w-full h-full object-cover"
//                         alt=""
//                       />
//                     ) : (
//                       <img
//                         src={e?.Img}
//                         className="w-full h-full object-cover"
//                         alt=""
//                       />
//                     )}
//                   </div>
//                   <div className="p-4">
//                     <p className="text-center font-sans font-[700] text-[16px] leading-[22px] text-[#000000]">
//                       {e?.Name}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//         <div className="flex  items-center justify-center w-full mt-[-19px]">
//         <SamplePrevArrow
//           className="arrow"
//           onClick={() => sliderRef.current.slickPrev()}
//         />

//         <SampleNextArrow
//           className="arrow"
//           onClick={() => sliderRef.current.slickNext()} // Trigger next slide
//         />
//       </div>
//       </div>

//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div dangerouslySetInnerHTML={{ __html: currentSyllabus }} />
//       </Modal>
//     </>
//   );
// }

// function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Details</h2>
//           <button
//             className="text-gray-600 hover:text-gray-800 focus:outline-none"
//             onClick={onClose}
//           >
//             ×
//           </button>
//         </div>
//         <div className="overflow-y-auto max-h-96">{children}</div>
//       </div>
//     </div>
//   );
// }

// export default Vacancies;
