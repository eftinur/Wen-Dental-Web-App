import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="hero my-6 py-8">
      <div className="hero-content flex-col lg:flex-row-reverse px-4 max-w-[1440px] mx-auto">
        <div className="banner-photo w-3/4">
        <img
          src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="bannerImg"
          className="rounded-lg shadow-2xl"
        />
        </div>

        <div className="px-4 banner-text">
          <h1 className="text-5xl font-bold mb-8">
            Seeing the dentist just got cooler
          </h1>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
