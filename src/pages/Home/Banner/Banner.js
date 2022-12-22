import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../component/PrimaryButton/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <section id="banner" className="hero py-8">
      <div className="w-3/4 mx-auto flex items-end">
        <div className="w-full lg:w-5/12 bg-[#FC5400] text-[#fff] text-2xl md:text-4xl px-16 py-20">
          <h1 className="py-6">Exceptional places, communities and services to help you thrive</h1>
          <Link to='/appointment'>
            <PrimaryButton>Book online</PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
