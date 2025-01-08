import React, { useState, useEffect } from "react";
import ReusableModal from "./ReusableModal";

const DynamicModalWrapper = ({ children, bottomImage, centerImage }) => {
  const [showBottomModal, setShowBottomModal] = useState(false);
  const [showCenterModal, setShowCenterModal] = useState(false);

  useEffect(() => {
    // Show bottom modal when the component is mounted
    setShowBottomModal(true);
  }, []);

  const handleBottomModalClose = () => {
    setShowBottomModal(false);
    const timer = setTimeout(() => {
      setShowCenterModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  };

  const handleCenterModalClose = () => {
    setShowCenterModal(false);
  };

  return (
    <>
      {children}
      {/* Bottom Modal */}
      <ReusableModal
        isVisible={showBottomModal}
        onClose={handleBottomModalClose}
        position="bottom"
        image={bottomImage}
      />
      {/* Center Modal */}
      <ReusableModal
        isVisible={showCenterModal}
        onClose={handleCenterModalClose}
        position="center"
        image={centerImage}
      />
    </>
  );
};

export default DynamicModalWrapper;
