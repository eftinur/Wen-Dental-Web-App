import React from "react";
import "./ServicesItems.css";
import { Link } from "react-router-dom";

const ServicesItem = ({ service }) => {
  const { name, brief } = service;
  return (
    <div className="bg-[#fff] shadow-xl mx-auto">
      <figure></figure>
      <div className="card-body">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          fugiat voluptas quis nostrum consequatur obcaecati tenetur provident
          nihil accusantium deserunt asperiores quo optio, quam ex placeat
          aperiam quasi!
        </p>
        <div className="card-actions justify-start">
          <Link className="text-[#FC5400]">Learn more ></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
