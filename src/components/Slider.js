import React from "react";
import "./Slider.scss";
import ShoeImg from "../assets/Active-image3.png";
import Background1 from "../assets/Active-image.png";
import Background2 from "../assets/Active-image2.png";
import PriceTag from "../assets/Price tag.png";

function Slider() {
  return (
    <div className="slider">
      <img className="slider__bg1 slider__img" src={Background1} alt="" />
      <img className="slider__shoe slider__img" src={ShoeImg} alt="shoe" />
      <img className="slider__bg2 slider__img" src={Background2} alt="" />
      <img className="slider__tag slider__img" src={PriceTag} alt="price" />
    </div>
  );
}

export default Slider;
