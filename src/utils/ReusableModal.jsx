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
      className={`fixed inset-0 ${
        position === "center" ? "bg-black bg-opacity-50" : ""
      } flex items-center justify-center z-50`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`absolute ${positionClasses} bg-white rounded-md shadow-lg w-8/12 sm:w-10/12 md:w-3/4 lg:w-2/4 xl:w-1/3`}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-black bg-white hover:bg-red-700 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-red-300"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

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
