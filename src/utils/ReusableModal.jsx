import React from "react";
import PropTypes from "prop-types";

const ReusableModal = ({ isVisible, onClose, position, image, altText }) => {
  if (!isVisible) return null;

  const positionClasses =
    position === "bottom"
      ? "bottom-0 left-0 right-0 mx-auto"
      : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

  const handleOverlayClick = (e) => {
    // Close modal if clicked on overlay, not on content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
    >
      <div
        className={`absolute ${positionClasses} bg-white rounded-md shadow-lg w-8/12 sm:w-3/12 md:w-3/4 lg:w-2/2 xl:w-1/3`}
      >
        <div className="relative">
          <img
            src={image}
            alt={altText || "Modal Content"}
            className="w-full h-auto rounded-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

ReusableModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(["bottom", "center"]).isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

ReusableModal.defaultProps = {
  altText: "Modal Content",
};

export default ReusableModal;
