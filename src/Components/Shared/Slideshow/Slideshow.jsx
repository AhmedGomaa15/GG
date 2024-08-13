import React, { useState, useEffect } from 'react';

const images = [
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3',
];

const Slide = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${current === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
        Slide {current + 1} of {images.length}
      </div>
    </div>
  );
}

export default Slide;
