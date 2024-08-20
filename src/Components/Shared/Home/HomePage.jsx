import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Slide from "../Slideshow/Slideshow";
import Footer from "../Footer/Footer";
import "../Home/HomePage.css";
import { FaUserGraduate, FaRocket, FaGlobe } from 'react-icons/fa'; // Example icons

const App = () => {
  const courses = [
    {
      id: 1,
      title: "HTML & CSS",
      description: "Learn the basics of web development with HTML and CSS.",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Master JavaScript and build dynamic web applications.",
    },
    {
      id: 3,
      title: "React",
      description:
        "Become proficient in React and build modern web applications.",
    },
  ];

  const discountedCourses = [
    {
      id: 1,
      title: "Python for Beginners",
      originalPrice: "$100",
      discountedPrice: "$50",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      originalPrice: "$150",
      discountedPrice: "$75",
    },
    {
      id: 3,
      title: "Full-Stack Development",
      originalPrice: "$200",
      discountedPrice: "$100",
    },
  ];
  const icons = [
    { icon: <FaUserGraduate size={60} />, text: 'Take computer science courses with personalized support' },
    { icon: <FaRocket size={60} />, text: 'Build cool projects to showcase your skills' },
    { icon: <FaGlobe size={60} />, text: 'Earn certificates recognized by Industry' },
  ];

  return (
    <div>
      <Navbar />

      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Coursoo</h1>
          <p className="text-xl mb-8">
            Your destination for the best online courses.
          </p>
          <a
            href="#courses"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Explore Courses
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <Slide />
        {/* Jumbotron Section */}
        <div className="jumbotron ">
          <div className="flex justify-around items-center">
            {icons.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`icon ${index === 1 ? 'special-icon' : ''}`}
          style={index === 0? { marginLeft: '11rem' } : {}}>
                  {item.icon}
                </div>
                <p className="text-teal-500 text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-8 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8 p-4 bg-yellow-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Discounted Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {discountedCourses.map((course) => (
              <div key={course.id} className="bg-white rounded shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="line-through text-red-600">
                  {course.originalPrice}
                </p>
                <p className="text-green-600 font-bold">
                  {course.discountedPrice}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-600 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Learn Programming Languages
            </h2>
            <p className="text-xl mb-8">
              Start your journey with our comprehensive programming courses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Python", "JavaScript", "Java", "C#", "Ruby", "Go"].map(
                (lang, index) => (
                  <div
                    key={index}
                    className="bg-white text-black rounded-lg shadow-lg p-4"
                  >
                    <div className="text-4xl mb-4">
                      <i className={`devicon-${lang.toLowerCase()}-plain`}></i>
                    </div>
                    <h3 className="text-xl font-bold">{lang}</h3>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {/*       <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="15em"
      width="15em"
    >
      <path d="M13.13 22.19l-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1M5.64 12.5l-3.83-1.63 6.1-2.77C7 9.46 6.22 10.93 5.64 12.5M19.22 4c.28 0 .53 0 .74.05.17 1.39-.02 4.25-3.3 7.53-1.7 1.71-3.73 3.02-6.01 3.89l-2.15-2.1c.92-2.31 2.23-4.34 3.92-6.03C15.18 4.58 17.64 4 19.22 4m0-2c-1.98 0-4.98.69-8.22 3.93-2.19 2.19-3.5 4.6-4.35 6.71-.28.75-.09 1.57.46 2.13l2.13 2.12c.38.38.89.61 1.42.61.23 0 .47-.06.7-.15A19.1 19.1 0 0018.07 13c5.66-5.66 3.54-10.61 3.54-10.61S20.7 2 19.22 2m-4.68 7.46c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0c.77.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0m-5.66 7.07l-1.41-1.41 1.41 1.41M6.24 22l3.64-3.64c-.34-.09-.67-.24-.97-.45L4.83 22h1.41M2 22h1.41l4.77-4.76-1.42-1.41L2 20.59V22m0-2.83l4.09-4.08c-.21-.3-.36-.62-.45-.97L2 17.76v1.41z" />
    </svg>
 */}
      <div className="jumbotron">
        <h2>Learn from the best</h2>
        <p>
          Our online courses are built in partnership with technology leaders
          and are relevant to industry needs. Upon completing a Online course,
          you’ll receive a verified completion certificate recognized by
          industry leaders.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default App;
