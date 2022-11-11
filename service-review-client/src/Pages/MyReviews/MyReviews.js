import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregistered";
    const url = form.url.value;
    const serviceName = form.serviceName.value;
    const message = form.message.value;

    console.log(name, email, url, message);
    const review = {
      service: _id,
      serviceName,
      url,
      price,
      name,
      email,
      message: message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application.json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledge) {
          alert("Review Added Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-5xl mb-3">{title}</h2>
        <h4 className="text-3xl mb-3">Price: ${price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full input-bordered "
          />
          <input
            name="url"
            type="url"
            placeholder="Image Url"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-ghost w-full input-bordered"
            defaultValue={user?.email}
            readOnly
          />
          <input
            name="serviceName"
            type="text"
            placeholder="Service Name"
            className="input input-ghost w-full input-bordered"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Review "
          required
        ></textarea>
        <input className="btn" type="submit" value="Place Your Review" />
      </form>
    </div>
  );
};

export default MyReviews;
