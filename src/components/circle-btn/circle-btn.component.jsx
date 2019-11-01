import React from "react";

import "./circle-btn.styles.scss";

const CircleBtn = ({ className, icon, text }) => (
  <div className={`circle-btn ${className ? className : ""}`}>
    {(() => {
      if (icon) {
        return icon;
      } else if (text) {
        return <div className="text">{text}</div>;
      }
    })()}
  </div>
);

export default CircleBtn;
