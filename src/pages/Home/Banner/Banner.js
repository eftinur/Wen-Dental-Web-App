import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../component/PrimaryButton/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <section id="banner" className="hero py-8">
      <div className="w-3/4 mx-auto">
        <div className="text-[#fff]">
          <h1 className="text-2xl md:text-4xl lg:text-5xl leading-snug">Welcome to Wen Dental Clinic</h1>
          <p className="pt-6 pb-9 text-sm lg:text-xl">
            Bicton Dental Clinic always creates smiles for life, the best
            Dentist & Dental Clinic in Bicton in southwest Perth was founded in
            2016 with the sole aim of providing quality affordable dental care
            to the residents of Perth and the neighbouring community.
          </p>
          <PrimaryButton>Learn more</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
