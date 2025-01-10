import React, { useState, useEffect } from "react";
import ReusableModal from "./ReusableModal";
import Loading from "../components/loading/Loading";

const DynamicModalWrapper = ({
  children,
  bottomImage,
  centerImage,
  centerlink,
  bottomlink,
}) => {
  const [showBottomModal, setShowBottomModal] = useState(false);
  const [showCenterModal, setShowCenterModal] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [isBottomModalClosed, setIsBottomModalClosed] = useState(false); // Track if the bottom modal was manually closed
  const [isCenterModalOpened, setIsCenterModalOpened] = useState(false); // Track if the center modal has been opened

  useEffect(() => {
    // Simulate loading for children rendering
    const loadingTimer = setTimeout(() => {
      setLoading(false); // Stop loading after 1.5 seconds
    }, 1500);

    // Set up IntersectionObserver to detect when the user scrolls past 110vh
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isBottomModalClosed) {
          setShowBottomModal(true); // Show the bottom modal when the marker is visible and not manually closed
        }
      },
      { threshold: 1.0 } // Fully visible
    );

    // Create and observe a marker div for 110vh
    const marker = document.createElement("div");
    marker.style.position = "absolute";
    marker.style.top = "110vh";
    marker.style.height = "1px";
    marker.style.width = "1px";
    document.body.appendChild(marker);
    observer.observe(marker);

    // Show center modal only once
    if (!isCenterModalOpened) {
      const centerModalTimer = setTimeout(() => {
        setShowCenterModal(true);
        setIsCenterModalOpened(true); // Mark the center modal as opened
      }, 5000);

      return () => {
        clearTimeout(centerModalTimer);
      };
    }

    return () => {
      clearTimeout(loadingTimer);
      observer.disconnect();
      document.body.removeChild(marker);
    };
  }, [isBottomModalClosed, isCenterModalOpened]); // Add dependencies for proper updates

  const handleBottomModalClose = () => {
    setShowBottomModal(false);
    setIsBottomModalClosed(true); // Mark the bottom modal as manually closed
  };

  const handleCenterModalClose = () => {
    setShowCenterModal(false);
  };

  return (
    <>
      {loading ? (
        <Loading /> // Display loading indicator while children are rendering
      ) : (
        <div className="relative">
          {children}
          {/* Bottom Modal */}
          <ReusableModal
            isVisible={showBottomModal}
            onClose={handleBottomModalClose}
            position="bottom"
            bottomImage={bottomImage}
            bottomLink={bottomlink}
          />
          {/* Center Modal */}
          <ReusableModal
            isVisible={showCenterModal}
            onClose={handleCenterModalClose}
            position="center"
            centerImage={centerImage}
            centerLink={centerlink}
          />
        </div>
      )}
    </>
  );
};

export default DynamicModalWrapper;
