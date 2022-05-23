import React from "react";
import Carousel, { CarouselItem } from "./Carousel";
import "../styles/Tutorial.css";

export default function Tutorial() {
  return (
    <div className="tutorial-container">
      <div className="tutorial-window">
        <Carousel>
          <CarouselItem>Page 1</CarouselItem>
          <CarouselItem>Page 2</CarouselItem>
          <CarouselItem>Page 3</CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}
