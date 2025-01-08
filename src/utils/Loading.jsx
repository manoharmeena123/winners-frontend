import React from "react";
import PropTypes from "prop-types";

const Loading = ({ variant = "danger", message = "Loading..." }) => {
  const variantClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    danger: "text-danger",
    warning: "text-warning",
    info: "text-info",
    neutral: "text-neutral-100",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50" style={{ height: "100vh", width: "100vw" }}>
      <div
        className={`h-16 w-16 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] ${variantClasses[variant]} opacity-75 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]`}
        role="status"
      >
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >
          {message}
        </span>
      </div>
      {message && <p className="mt-4 text-gray-600 text-lg">{message}</p>}
    </div>
  );
};

Loading.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "neutral",
  ]), // Spinner color variant
  message: PropTypes.string, // Optional loading message
};

export default Loading;
