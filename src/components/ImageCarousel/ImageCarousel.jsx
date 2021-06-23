import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "./../../assets/img/Rectangle 26-1s3.png";
import "./ImageCarousel.scss";


const ImageCarousel = (props) => {
    
  const imageArr = [{ image }, { image }, { image }];
  let slideItems = imageArr.map((elem, index) => {
    return (
      <div key ={index}>
        <img src={image} alt="img_"/>
        {/* <p className="legend">Legend 1</p> */}
      </div>
    );
  });

  return (
    <div className="carousel_images">
      <Carousel>{slideItems}</Carousel>
    </div>
  );
};

export default ImageCarousel;
