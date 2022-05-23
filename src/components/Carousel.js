/* eslint-disable react/prop-types */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";
import Slider from "react-slick";
import rabbit from "../new-rabbit.png";
import hole from "../hole.png";
import rudeRabbit from "../rude-rabbit.png";

export default function Carousel({ setTutorialComplete }) {
  const startGame = () => {
    setTutorialComplete(true);
  };
  const onClickHandler = () => {
    setTimeout(startGame, 1000);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slide-page">
        <img src={rabbit} alt="rabbit" className="rabbit1" />
        <p>
          Catch the Rabbit! is a logic puzzle where the goal is to guess which
          hole the rabbit is hiding in.
        </p>
      </div>
      <div className="slide-page">
        <div className="hole-container">
          <img src={hole} alt="hole" className="hole" />
          <img src={hole} alt="hole" className="hole" />
          <img src={hole} alt="hole" className="hole" />
        </div>
        <p style={{ paddingTop: "40px" }}>
          When the game starts, the rabbit will hide in one of the 50 holes at
          random. On your turn, you select a hole where you think it is hiding
        </p>
      </div>
      <div className="slide-page">
        <div className="arrow" style={{ paddingTop: "70px" }} />
        <p style={{ paddingTop: "50px" }}>
          If you guess the wrong hole, the rabbit will jump one hole to the left
          or the right at random.
        </p>
      </div>
      <div className="slide-page">
        <img src={rudeRabbit} alt="rude-rabbit" className="rude-rabbit" />
        <p>
          Once the rabbit has jumped to a new hole, it is your turn to guess
          again. Play continues until you pick the hole which the rabbit is
          hiding in.
        </p>
      </div>
      <div className="slide-page">
        <button type="submit" className="start-button" onClick={onClickHandler}>
          Start !
        </button>
      </div>
    </Slider>
  );
}
