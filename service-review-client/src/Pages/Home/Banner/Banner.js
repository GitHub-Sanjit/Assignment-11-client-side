import React from "react";
import img from "../../../assets/banner/banner2.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img} className="w-full" alt="" />
        <div className="absolute flex-col justify-start transform-translate-y-1/2 top-1/4 left-24 text-white">
          <h1 className="text-5xl font-bold">
            We Take <br />
            Care of People
          </h1>
          <h1 className="text-2xl">
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
