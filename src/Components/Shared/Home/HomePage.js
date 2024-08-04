import React from 'react';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Learn React and Tailwind CSS from Scratch</h1>
          <p className="mt-4 text-lg">Join our comprehensive course designed for beginners in Thailand.</p>
          <a href="#" className="mt-6 inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded">Enroll Now</a>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Slider {...settings}>
            <div>
              <img src="https://via.placeholder.com/1200x400?text=Slide+1" alt="Slide 1" className="w-full" />
            </div>
            <div>
              <img src="https://via.placeholder.com/1200x400?text=Slide+2" alt="Slide 2" className="w-full" />
            </div>
            <div>
              <img src="https://via.placeholder.com/1200x400?text=Slide+3" alt="Slide 3" className="w-full" />
            </div>
          </Slider>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why Learn React and Tailwind CSS?</h2>
          <div className="mt-10 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 py-6">
              <h3 className="text-xl font-semibold">High Demand Skills</h3>
              <p className="mt-2 text-gray-600">React and Tailwind CSS are essential in modern web development, making you a valuable asset to any company.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 py-6">
              <h3 className="text-xl font-semibold">Career Opportunities</h3>
              <p className="mt-2 text-gray-600">Unlock numerous job opportunities and career growth with these in-demand skills.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 py-6">
              <h3 className="text-xl font-semibold">Ease of Learning</h3>
              <p className="mt-2 text-gray-600">Our course makes learning React and Tailwind CSS easy and accessible for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Course Features</h2>
          <div className="mt-10 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 px-4 py-6">
              <h3 className="text-xl font-semibold">Interactive Lessons</h3>
              <p className="mt-2 text-gray-600">Engage with interactive lessons designed to enhance your learning experience.</p>
            </div>
            <div className="w-full md:w-1/4 px-4 py-6">
              <h3 className="text-xl font-semibold">Expert Instructors</h3>
              <p className="mt-2 text-gray-600">Learn from industry experts with years of experience.</p>
            </div>
            <div className="w-full md:w-1/4 px-4 py-6">
              <h3 className="text-xl font-semibold">Community Support</h3>
              <p className="mt-2 text-gray-600">Join our community for support, networking, and collaboration.</p>
            </div>
            <div className="w-full md:w-1/4 px-4 py-6">
              <h3 className="text-xl font-semibold">Flexible Schedule</h3>
              <p className="mt-2 text-gray-600">Learn at your own pace with our flexible course schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Course Curriculum</h2>
          <div className="mt-10">
            <h3 className="text-xl font-semibold">Module 1: Introduction to React</h3>
            <p className="mt-2 text-gray-600">Learn the basics of React, including components, JSX, and state management.</p>
            <h3 className="mt-6 text-xl font-semibold">Module 2: Getting Started with Tailwind CSS</h3>
            <p className="mt-2 text-gray-600">Understand how to set up and use Tailwind CSS to style your React applications.</p>
            <h3 className="mt-6 text-xl font-semibold">Module 3: Building Components with React and Tailwind</h3>
            <p className="mt-2 text-gray-600">Learn how to create reusable components using React and Tailwind CSS.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
