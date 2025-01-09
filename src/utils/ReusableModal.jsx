import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ReusableModal = ({
  isVisible,
  onClose,
  position,
  image,
  altText,
  link,
}) => {
  if (!isVisible) return null;

  const positionClasses =
    position === "bottom"
      ? "fixed bottom-0 left-0 right-0 mx-auto" // Bottom modal: fixed at bottom
      : "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"; // Center modal: fixed at center

  return (
    <div
      className={`${
        position === "center" ? "fixed inset-0 bg-black bg-opacity-50 z-50" : "fixed inset-0"
      }`} // Overlay only for center modal
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`absolute ${positionClasses} ${
          position === "bottom" ? "" : "bg-white"
        } rounded-md shadow-lg w-8/12 sm:w-10/12 md:w-3/4 lg:w-2/4 xl:w-1/3`}
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

          {/* Wrap the image in a <Link> tag for navigation */}
          {link ? (
            <Link to={link}>
              <img
                src={image}
                alt={altText || "Modal Content"}
                className="w-full h-auto rounded-md object-contain"
              />
            </Link>
          ) : (
            <img
              src={image}
              alt={altText || "Modal Content"}
              className="w-full h-auto rounded-md object-contain"
            />
          )}
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
  link: PropTypes.string, // New prop for internal navigation link
};

ReusableModal.defaultProps = {
  altText: "Modal Content",
  link: null, // Default value for link
};

export default ReusableModal;
