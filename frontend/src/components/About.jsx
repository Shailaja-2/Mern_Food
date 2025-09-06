import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-text">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p className="tagline">The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Welcome to <strong>FoodHeaven</strong>, where every dish tells a story!  
            We’re passionate about bringing you flavors that are fresh, authentic, 
            and unforgettable. From sizzling starters to mouth-watering main courses 
            and indulgent desserts, we prepare every meal with care and love.  
            <br /><br />
            Our restaurant isn’t just about food—it’s about creating moments. Whether 
            you’re here for a family gathering, a casual hangout with friends, or a 
            special celebration, we aim to make your experience truly delightful.  
            <br /><br />
            At FoodHeaven, the only thing we take seriously is your happiness on the 
            plate. Come, taste the difference, and let us serve you memories you’ll 
            want to savor again and again.
          </p>
          <a href="#menu" className="explore-btn">
            Explore Menu <span><HiOutlineArrowRight /></span>
          </a>
        </div>

        <div className="about-img">
          <img src="about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
