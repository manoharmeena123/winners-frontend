import React, { useState, useRef, useEffect } from "react";
import "./adminCard.css"; // Import your custom CSS for table styling
import { formatDate } from "../../utils/formatDate";

function ZoneSlider({ AdmitCard }) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredResults, setFilteredResults] = useState(AdmitCard || []); // State for filtered data
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const itemsPerPage = 10; // Number of rows per page
  const scrollRef = useRef(null);

  // Handle search input changes
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = AdmitCard.filter((item) =>
      item.ExamName?.toLowerCase().includes(value)
    );
    setFilteredResults(filtered);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Smooth scroll to the top when the page or filtered results change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [filteredResults, currentPage]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!AdmitCard || AdmitCard.length === 0) {
    return (
      <p className="text-center pt-6 font-sans font-bold text-2xl text-black">
        Admit cards will be available soon.
      </p>
    );
  }

  return (
    <div className="container mx-auto px-1 py-4 ">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Exam Name..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table Design */}
      <div ref={scrollRef} className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Released Date
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Description
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Exam Name
              </th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">
                Download / Check
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {formatDate(item.updatedAt)}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {item.Discription || "No Description Available"}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    {item.ExamName || "Exam Name Not Available"}
                  </td>
                  <td className="border border-gray-300 p-2 whitespace-nowrap">
                    <a
                      href={item.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Download Here
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
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
    </div>
  );
}

export default ZoneSlider;

//////==================================================================================================================================================================>

//   import React, { useRef } from "react";
// // import Slider from "react-slick";

// // const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

// function SampleNextArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <img src="assets/home/round-right.svg" alt="" />
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <img src="assets/home/round-left.svg" alt="" />
//     </div>
//   );
// }

// function ZoneSlider({ AdmitCard }) {
//   const scrollRef = useRef(null); // useRef for the scrollable container
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       {Notification?.length === 0 ? (
//         <p className="text-center pt-[6px] font-sans font-[700] text-[18px] leading-[24px] text-[#000000]">
//           Will share the results for the recent exams soon.
//         </p>
//       ) :

//         (
//           <div className="relative">

//             <div

//               ref={scrollRef}
//               className="flex flex-row md:flex-wrap overflow-x-auto space-x-4 md:space-x-0 no-scrollbar " scrollbar
//               style={{ scrollBehavior: "smooth", margin: "auto", display: 'flex', justifyContent: 'center' }}
//             >

//               {AdmitCard?.map((e, i) => {
//                 return (
//                   <>
//                     <div
//                       style={{
//                         marginBottom: "8px",
//                       }}
//                       key={i}
//                       className="flex-shrink-0"

//                     >
//                       <div
//                         className="border overflow-hidden m-[4px] h-full cursor-pointer md:max-w-[218px] max-w-[300px] w-full rounded-[8px] border-[#D2D0D0] p-[6px]"
//                       >
//                         <a href={e?.Link} target="_blank" rel="noopener noreferrer">
//                           {!e?.Img ? (
//                             <img
//                               src="assets/about/photo4.png"
//                               className="w-full object-cover"
//                               alt=""
//                             />
//                           ) : (
//                             <img
//                               src={e?.Img}
//                               className="w-full rounded-[10px] object-cover"
//                               alt=""
//                             />
//                           )}
//                           <div className="pt-[30px]">
//                             <div data-aos="fade-left">
//                               <p className="text-center pt-[6px] font-sans font-[700] text-[18px] leading-[24px] text-[#000000]">
//                                 {e?.ExamName}
//                               </p>
//                             </div>
//                             {/* <div className="border-[#0000004D] border-b md:max-w-[172px] max-w-full w-full m-auto mt-[17px] mb-[27px]"></div>
//                       <div data-aos="fade-left">
//                         <p className="flex justify-center items-center font-[Outfit] font-[600] text-[14px] leading-[22px] text-[#D0021B] gap-[10px] pb-[16px]">
//                           Know More <img src="assets/about/right.svg" alt="" />
//                         </p>
//                       </div> */}
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </>
//                 );
//               })
//               }

//             </div>

//           </div>
//         )

//       }
//     </>
//   );
// }

// export default ZoneSlider;
