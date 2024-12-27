import React from "react";

const Card = ({ image, description, price, buttonText, onButtonClick }) => {
  return (
    <div
      className="border rounded-lg p-4 flex lg:flex-col sm:flex-row items-center sm:items-start h-full gap-2 "
      style={{ boxShadow: "0 0 30px rgb(0 0 0 / 10%)", cursor: "pointer" }}
      onClick={onButtonClick}
    >
      {/* Image Section */}
      <div className="sm:w-3/5 md:w-3/5 lg:w-full h-36 sm:h-18 flex items-center justify-center">
        <img
          src={image}
          alt="Placeholder"
          className="w-full h-full lg:object-contain sm:object-fill rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-1/2 sm:w-full flex flex-col justify-between h-full text-center sm:text-center lg:px-4 sm:px-0 ">
        <p className="text-gray-700 text-xs sm:text-lg sm:text-base">
          {description}
        </p>
        <p className="text-orange-600 font-bold text-sm sm:text-md sm:text-lg mt-2">
          {price}
        </p>
        <button
          className="mt-auto bg-blue-600 text-white px-3 py-1 sm:px-1 sm:py-1 lg:px-6 lg:py-3 rounded-md hover:bg-blue-700 text-xs sm:text-sm lg:text-lg whitespace-nowrap font-semibold text-base"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
