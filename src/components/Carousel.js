/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../styles/Carousel.css";
// import rabbit from "../new-rabbit.png";

export function CarouselItem({ children, width }) {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  );
}

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <button
        type="submit"
        className="previous"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        {"<"}
      </button>
      <button
        type="submit"
        className="next"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        {">"}
      </button>
      {React.Children.map(children, (child, index) => {
        return (
          <button
            type="button"
            onClick={() => {
              updateIndex(index);
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

export default Carousel;
