import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ReusableModal = ({
  isVisible,
  onClose,
  position,
  centerImage,
  bottomImage,
  centerLink,
  bottomLink,
}) => {
  if (!isVisible) return null;

  const positionClasses =
    position === "bottom"
      ? "fixed bottom-0 left-0 right-0 mx-auto pointer-events-auto" // Allow interaction for bottom modal
      : "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"; // Center modal: fixed at center

  return (
    <div
      className={`${
        position === "center"
          ? "fixed inset-0 bg-black bg-opacity-50 z-50 pointer-events-auto"
          : " fixed inset-0 pointer-events-none" // Allow interaction with the body when it's a bottom modal
      }`}
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
          {/* Render bottom modal image */}
          {position === "bottom" &&
            (bottomLink ? (
              <Link to={bottomLink}>
                <img
                  src={bottomImage}
                  alt={"Bottom Modal"}
                  className="w-full h-auto object-fill md:max-w-[100%] md:mx-auto md:max-h-[150px] lg:max-w-[100%] lg:mx-auto lg:max-h-[150px]" // Add max height for mid and large screens
                />
              </Link>
            ) : (
              <img
                src={bottomImage}
                alt={"Bottom Modal"}
                className="w-full h-auto object-fill md:max-w-[100%] md:mx-auto md:max-h-[150px] lg:max-w-[100%] lg:mx-auto lg:max-h-[150px]" // Add max height for mid and large screens
              />
            ))}

          {/* Render center modal image */}
          {position === "center" &&
            (centerLink ? (
              <Link to={centerLink}>
                <img
                  src={centerImage}
                  alt={"Center Modal"}
                  className="w-full h-auto object-contain"
                />
              </Link>
            ) : (
              <img
                src={centerImage}
                alt={"Center Modal"}
                className="w-full h-auto object-contain"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

ReusableModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(["bottom", "center"]).isRequired,
  centerImage: PropTypes.string, // Image for center modal
  bottomImage: PropTypes.string, // Image for bottom modal
  centerLink: PropTypes.string, // Link for center modal
  bottomLink: PropTypes.string, // Link for bottom modal
};

ReusableModal.defaultProps = {
  centerImage: null,
  bottomImage: null,
  altText: "Modal Content",
  centerLink: null,
  bottomLink: null,
};

export default ReusableModal;
