import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);

  const addService = () => {
    if (user?.email) {
      return (
        <Link to="/addServices">
          <button className="btn btn-primary">Add Services</button>
        </Link>
      );
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2 className="text-5xl font-semibold"> Our Service Area</h2>
        <p>
          We are well-equipped and well-prepared to protect your health and
          hygiene <br /> while serve you. Our preparations include-
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <button></button>
      {/* <div>{addService()}</div> */}
    </div>
  );
};

export default Services;
