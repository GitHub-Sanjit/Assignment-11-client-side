import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Banner from "../Banner/Banner";
import AddServices from "../Services/AddServices";
import Services from "../Services/Services";

const Home = () => {
  const { user } = useContext(AuthContext);

  const addService = () => {
    if (user) {
      <Link to="/addServices">
        <button className="btn btn-primary">Add Services</button>
      </Link>;
    }
  };

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
