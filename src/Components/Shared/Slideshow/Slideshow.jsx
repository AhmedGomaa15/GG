import React, { useState, useEffect } from "react";
import training from "../../../Assets/training.jpg";
import training1 from "../../../Assets/training1.jpg";
import training2 from "../../../Assets/training2.jpg";

import "./Slideshow.css";

// Define an array of colors to cycle through
const colors = ["#159496", "#772abf", "#0288d1"];

const images = [
  {
    src: training,
    alt: "Slide 1",
    text: "Receive personalized coaching",
    detailedText:
      "Learning is a collaborative process, and we're here to provide you with guidance every step of the way.",
    buttonText: "Start Learning Now",
  },
  {
    src: training1,
    alt: "Slide 2",
    text: "Join our online courses",
    detailedText:
      "Online Education leads the world in distance education with high quality online degrees and online courses.",
    buttonText: "Join Now",
  },
  {
    src: training2,
    alt: "Slide 3",
    text: "Explore new skills",
    detailedText:
      "Our courses are built in partnership with technology leaders and are relevant to industry needs.",
    buttonText: "Explore Now",
  },
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [bgColor, setBgColor] = useState(colors[0]); // New state for background color

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true); // Start slide-out animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false); // Reset after slide-out animation
      }, 2000); // Duration for slide-out animation (matches CSS)
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Change background color when the slide changes
    setBgColor(colors[currentIndex]);
  }, [currentIndex]);

  const { src, alt, text, detailedText, buttonText } = images[currentIndex];

  return (
    <div
      className="slideshow-container"
      style={{ backgroundColor: bgColor }} // Apply dynamic background color
    >
      <div className="slideshow-inner">
        {/* Image Section */}
        <div
          key={currentIndex} // Adding key to force re-render on index change
          className={`image-section ${isSliding ? "slide-out" : "slide-in"}`}
        >
          <img src={src} alt={alt} />
        </div>
        {/* Text Section */}
        <div className="text-section">
          <h2>{text}</h2>
          <p>{detailedText}</p>
          <button>{buttonText}</button>
        </div>
      </div>
      {/* Dots Navigation */}
      <div className="dots-navigation">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={currentIndex === index ? "active" : ""}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slide;
