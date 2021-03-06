import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, onClick, ...otherProps }) => (
  <button
    onClick={onClick}
    className={`custom-button ${
      otherProps.className ? otherProps.className : ""
    }`}
  >
    {children}
  </button>
);

export default CustomButton;
