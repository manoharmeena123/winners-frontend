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
    const loadingTimer = setTimeout(() => {
      setLoading(false); // Stop loading after 1.5 seconds
    }, 1500);

    // Show bottom modal after 2 seconds
    const bottomModalTimer = setTimeout(() => {
      setShowBottomModal(true);
    }, 2000);

    // Show center modal after 5 seconds
    const centerModalTimer = setTimeout(() => {
      setShowCenterModal(true);
    }, 5000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(bottomModalTimer);
      clearTimeout(centerModalTimer);
    };
  }, []);

  const handleBottomModalClose = () => {
    setShowBottomModal(false);
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
        </>
      )}
    </>
  );
};

export default DynamicModalWrapper;
