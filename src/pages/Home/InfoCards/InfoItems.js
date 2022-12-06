import React from "react";
import './infoItems.css';

const InfoItems = ({ item }) => {
  console.log(item);
  const {name, brief, icon} = item;
  return (
    <div className= {`card card-side shadow-xl bg-primary p-4 text-white`}>
      <figure>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{brief}</p>
      </div>
    </div>
  );
};

export default InfoItems;
