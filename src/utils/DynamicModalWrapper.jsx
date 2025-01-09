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

  useEffect(() => {
    // Simulate loading for children rendering
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 1.5 seconds (or adjust timing as needed)
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show bottom modal when the component is mounted
    setTimeout(() => {
      setShowBottomModal(true);
    }, 2000);
  }, []);

  const handleBottomModalClose = () => {
    setShowBottomModal(false);
    const timer = setTimeout(() => {
      setShowCenterModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  };

  const handleCenterModalClose = () => {
    setShowCenterModal(false);
  };

  return (
    <>
      {loading ? (
        <Loading /> // Display loading indicator while children are rendering
      ) : (
        <>
          {children}
          {/* Bottom Modal */}
          <ReusableModal
            isVisible={showBottomModal}
            onClose={handleBottomModalClose}
            position="bottom"
            image={bottomImage}
            link={centerlink}
          />
          {/* Center Modal */}
          <ReusableModal
            isVisible={showCenterModal}
            onClose={handleCenterModalClose}
            position="center"
            image={centerImage}
            link={bottomlink}
          />
        </>
      )}
    </>
  );
};

export default DynamicModalWrapper;
