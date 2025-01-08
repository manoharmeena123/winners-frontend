import Aos from "aos";
import React, { useEffect, useState } from "react";
import { GetApi } from "../ApIcall";
import Footer from "../components/footer/Footer";
import Header from "../components/nav/Header";
import Loading from "../components/loading/Loading";

function PhotoGallery() {
  const [galleries, setGalleries] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [imageDimensions, setImageDimensions] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        setIsLoading(true); // Start loading

        const response = await GetApi("api/admin/getAllGallary");
        const fetchedGalleries = response?.data?.data || [];
        setGalleries(fetchedGalleries);

        const eventsPerYear = {};
        const categories = [...new Set(fetchedGalleries.map((gallery) => gallery.Name))];

        fetchedGalleries.forEach((gallery) => {
          if (!eventsPerYear[gallery.Year]) {
            eventsPerYear[gallery.Year] = categories[0]; // Default to the first category
          }
        });

        setSelectedEvents(eventsPerYear); // Set default selected events per year
        setAllCategories(categories);

        setIsLoading(false); // Stop loading
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false); // Stop loading in case of an error
      }
    };

    fetchGalleries();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const preloadImages = (selectedGallery) => {
    const dimensions = {};
    const promises = selectedGallery.Images.map((image, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          dimensions[index] = { width: img.width, height: img.height };
          resolve();
        };
        img.src = image;
      });
    });

    Promise.all(promises).then(() => {
      setImageDimensions(dimensions);
    });
  };

  const handleEventSelection = (year, event) => {
    setSelectedEvents((prev) => ({ ...prev, [year]: event }));
  };

  const toggleFullScreen = (image) => {
    setFullScreenImage(image);
    setIsFullScreen(!isFullScreen);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setFullScreenImage(null);
  };

  const getSelectedGallery = (year) => {
    return galleries.filter(
      (gallery) => gallery.Year === year && selectedEvents[year] === gallery.Name
    );
  };

  useEffect(() => {
    const selectedGallery = galleries.find((gallery) => gallery.Name === selectedEvents);
    if (selectedGallery) {
      preloadImages(selectedGallery);
    }
  }, [selectedEvents, galleries]);

  const renderYearSection = (year, galleriesOfYear) => {
    const selectedGallery = galleriesOfYear.find(
      (gallery) => gallery.Name === selectedEvents[year]
    );

    return (
      <div key={year}>
        <h3 className="year-heading text-[36px] font-bold my-[20px]">{year}</h3>
        <div className="flex flex-wrap gap-[14px] items-center justify-center mb-[60px]"></div>
        {selectedGallery ? (
          <div
            style={{
              borderRadius: "20px",
            }}
            className="grid md:grid-cols-4 gap-[25px] md:gap-y-[28px] gap-y-[10px]"
          >
            {selectedGallery.Images.map((image, index) => {
              const dimensions = imageDimensions[index];
              return (
                <div
                  key={index}
                  className="photo cursor-pointer"
                  style={{
                    gridColumn: dimensions && dimensions.width > 300 ? "span 2" : "span 1",
                    gridRow: dimensions && dimensions.height > 300 ? "span 2" : "span 1",
                  }}
                  onClick={() => toggleFullScreen(image)}
                >
                  <img
                    style={{
                      borderRadius: "20px",
                    }}
                    src={image}
                    alt={`photoimage${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center">No event selected for {year}.</p>
        )}
      </div>
    );
  };

  const uniqueYears = [...new Set(galleries.map((gallery) => gallery.Year))];

  if (isLoading) {
    // Display loading indicator while data is being fetched
    return <Loading message="Loading photo gallery, please wait..." />;
  }

  return (
    <>
      <Header />
      <div className="photo-section flex items-center justify-center">
        <div className="container m-auto text-center">
          <h6 className="text-[#FFFFFF] text-[46px] font-bold pb-[14px]" data-aos="fade-up">
            Photo Gallery
          </h6>
          <img
            style={{ margin: "auto" }}
            src="assets/video/line-white.svg"
            alt=""
            data-aos="fade-up"
          />
        </div>
      </div>

      <div className="category-section container m-auto py-[30px] text-center">
        <h3 className="text-[36px] font-bold mb-[20px]">Categories</h3>
        <div className="flex flex-wrap gap-[14px] items-center justify-center">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedEvents((prev) =>
                uniqueYears.reduce((acc, year) => ({ ...acc, [year]: category }), prev)
              )}
              className={`py-[12px] px-[49px] rounded-[30px] text-[18px] ${Object.values(selectedEvents).includes(category)
                ? "bg-[#D0021B] border border-[#D0021B] text-[#FFFFFF]"
                : "bg-[#FFFFFF] border border-[#D8D2D2] text-[#616161]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-section container m-auto">
        {uniqueYears
          .slice()
          .reverse()
          .map((year) => {
            const galleriesOfYear = galleries.filter(
              (gallery) => gallery.Year === year && selectedEvents[year] === gallery.Name
            );
            return galleriesOfYear.length > 0 ? renderYearSection(year, galleriesOfYear) : null;
          })}

        {isFullScreen && (
          <div className="full-screen-image-container" style={fullScreenContainerStyle} onClick={handleCloseFullScreen}>
            <button className="close-button" style={closeButtonStyle}>Close</button>
            <img src={fullScreenImage} alt="Full Screen" className="full-screen-image" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

const fullScreenContainerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 9999,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const closeButtonStyle = {
  position: "absolute",
  top: 10,
  right: 10,
  padding: "8px 12px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: 16,
  color: "#333",
};

export default PhotoGallery;
