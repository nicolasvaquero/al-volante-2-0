"use client";

import React, { useState } from 'react';

const images = [
    'https://i.imgur.com/tyfvYZv.jpeg',
    'https://i.imgur.com/I8Qci9G.jpeg',
    'https://i.imgur.com/9elHpWj.jpeg',
    'https://i.imgur.com/SXIHW9L.jpeg',
    'https://lh3.googleusercontent.com/p/AF1QipP6VAYS9x4-uP0uTxvrJw_-ZS6GxjSyww-ARUPF=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipMdnohQeBw87QC0CBXB3irsA6faJ1fMQOXNDTyk=s680-w680-h510'
  ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
