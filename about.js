import React from "react";
import images from "../components/images";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBowlFood} from '@fortawesome/free-solid-svg-icons';
import "../styles/about.css";

function about() {
  return (
    <>
      <div className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover Fresh Tasty Meals</p>
        </div>
      </div>

      <div className="about-values">
        <div className="container">
          <div className="about-values__content">
            <div className="about-values__title">
              <h2>Story</h2>
              <p>Our</p>
            </div>
            <p>
              Welcome to The Burger Haven, where passion for burgers meets
              culinary excellence! Nestled in the heart of our beloved town, we
              take immense pride in being the go-to destination for burger
              enthusiasts who seek a tantalizing taste experience like no other.
              Our mission is simple: to serve the best burgers in town, crafted
              with love, precision, and the finest ingredients..{" "}
            </p>
            <img
              className="about-values__dish about-imgs"
              src={images[9]}
              alt=""
            />
          </div>
          <div className="about-values-images">
            <div>
              <img className="about-imgs" src={images[5]} alt="" />
            </div>
            <div>
              <img className="about-imgs" src={images[8]} alt="" />
            </div>
            <div>
              <img className="about-imgs" src={images[8]} alt="" />
            </div>
            <div>
              <img className="about-imgs" src={images[5]} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="online-res">
        <div className="container">
          <button className="about-btn">Make an Online Reservation</button>
          <p>or call us + 441 284 2345</p>
        </div>
      </div>

      <div className="about-values">
        <div className="container">
          <div className="about-values-images">
            <div>
              <img className="about-imgs" src={images[10]} alt="" />
            </div>
            <div>
              <img className="about-imgs" src={images[11]} alt="" />
            </div>
          </div>

          <div className="about-values__content">
            <div className="about-values__title">
              <h2>Story</h2>
              <p>Our</p>
            </div>
            <p>
              Our founders, Harjas and Dhruv, longed for a place where they
              could savor mouthwatering, handcrafted burgers made from scratch
              using locally sourced, premium ingredients. Driven by their
              passion, Harjas and Dhruv embarked on a journey to create the
              ultimate burger experience. They scoured local farms for the
              freshest produce, carefully selected the juiciest beef, and
              experimented tirelessly with unique flavor combinations. The
              result? A menu that reads like a love letter to burgers, offering
              a diverse range of options to cater to every palate.{" "}
            </p>
            <img
              className="about-values__dish about-imgs"
              src={images[12]}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
