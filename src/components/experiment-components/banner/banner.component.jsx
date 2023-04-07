import React from "react";
import "./banner.styles.scss";

const Banner = ({ text }) => {
  return (
    <div className="banner">
      <span>{text}</span>
    </div>
  );
};

export default Banner;
