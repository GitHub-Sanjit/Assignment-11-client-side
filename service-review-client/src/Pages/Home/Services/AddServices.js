import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddServices = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const url = form.url.value;
    const price = form.price.value;
    const serviceName = form.serviceName.value;
    const message = form.message.value;

    console.log(url, message, price);
    const service = {
      title: serviceName,
      img: url,
      price,
      description: message,
    };

    fetch(
      "https://b6a11-service-review-server-side-sanjitweb479.vercel.app/services",
      {
        method: "POST",
        headers: {
          "content-type": "application.json",
        },
        body: JSON.stringify(service),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledge) {
          alert("Service Added Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="url"
            type="url"
            placeholder="Image Url"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="price"
            type="price"
            placeholder="Price"
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
          placeholder="Your description "
          required
        ></textarea>
        <input className="btn" type="submit" value="Add Services" />
      </form>
    </div>
  );
};
export default AddServices;
