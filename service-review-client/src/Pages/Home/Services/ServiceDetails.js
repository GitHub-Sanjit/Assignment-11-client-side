import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, title, img, price, description } = useLoaderData();

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="car" className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-5xl">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <p className="text-lg">Description: {description}</p>
        <div className="card-actions justify-end">
          <Link to={`/myReview/${_id}`}>
            <button className="btn btn-primary">Add Review</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
