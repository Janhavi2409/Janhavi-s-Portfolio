import React from "react";
import "./ReturnButton.css";

const ReturnButton = () => {
  return (
    <div className="return-button-container">
      <button
        className="return-button"
        onClick={() => {
          document
            .getElementById("header")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          id="up-arrow"
        >
          <path
            fill="#000"
            d="M5.306 15.694a1.043 1.043 0 0 0 1.476 0L12 10.47l5.218 5.224a1.043 1.043 0 0 0 1.476 0 1.046 1.046 0 0 0 0-1.478l-5.904-5.91a1.04 1.04 0 0 0-.79-.305 1.04 1.04 0 0 0-.79.305l-5.904 5.91a1.046 1.046 0 0 0 0 1.478Z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ReturnButton;
