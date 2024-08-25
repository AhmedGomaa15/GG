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
