import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="hero  bg-base-200">
      <div className="card  w-1/2  shadow-2xl bg-base-100 py-20">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <p className="text-center">
          New to AutoPress Services?{" "}
          <Link className="text-orange-600 font-semibold" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
