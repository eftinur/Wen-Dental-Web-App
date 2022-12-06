import React from "react";
import './ServicesItems.css';

const ServicesItem = ({ service }) => {
    const {name, brief, image} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-12 p-6">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2>{name}</h2>
        <p className="brief">{brief}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
