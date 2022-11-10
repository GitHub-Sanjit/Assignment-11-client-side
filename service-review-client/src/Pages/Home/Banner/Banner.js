import React from "react";
import img from "../../../assets/banner/banner2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div className="carousel-item relative w-full">
        <div className="banner-img w-full">
          <img className="w-full rounded-lg " src={img} alt="" />
        </div>
        <div className="absolute flex-col justify-start transform-translate-y-1/2 top-1/4 left-24 text-white">
          <h1 className="text-5xl font-bold mb-4">
            We Take <br />
            Care of People
          </h1>
          <h1 className="text-3xl">
            By Taking Care of <br />
            Their Car
          </h1>
        </div>

        <div className="absolute flex justify-start transform-translate-y-1/2 top-1/2 left-24 text-white">
          <p className="text-xl">
            We'll take care of all your auto repair needs: breaks,
            tires,oil-change
            <br /> and everything in between
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
