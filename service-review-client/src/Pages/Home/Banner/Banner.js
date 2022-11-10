import React from "react";
import img from "../../../assets/banner/banner2.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Banner;
