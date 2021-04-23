import React from "react";
import Title from "../Filters/Title/Title";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import "./FeedbackSection.scss";
import arrow_l from "../../assets/icons/ic-chevron-left.svg";
import arrow_r from "../../assets/icons/ic-chevron-right.svg";

const FeedbackSection = (props) => {

  const $feedbackList = React.createRef();
  const $arrowLeft = React.createRef();
  const $arrowRight = React.createRef();

  let currentPosition = 0;
  const minLeft = 0;
  let maxLeft;

  let ArrowLeftFunc = () => {
    const sliderLength = $feedbackList.current.offsetWidth;
    const step = Math.round(sliderLength / 6);
    if (currentPosition < minLeft) {
      currentPosition += step;
      $feedbackList.current.style.left = currentPosition + "px";
      $arrowRight.current.classList.remove("slider_arrow__default");
      console.log('step',step, 'currentP',currentPosition, 'minLeft',minLeft)
    }
    if (currentPosition === minLeft) {
      $arrowLeft.current.classList.add("slider_arrow__default");
      console.log('step',step, 'currentP',currentPosition, 'minLeft',minLeft)
    }
  };

  let ArrowRightFunc = () => {
    const sliderLength = $feedbackList.current.offsetWidth;
    const step = Math.round(sliderLength / 6);
    maxLeft = -(sliderLength - 3 * step);
    if (currentPosition > maxLeft) {
      currentPosition -= step;
      $feedbackList.current.style.left = currentPosition + "px";
      $arrowLeft.current.classList.remove("slider_arrow__default");
      console.log('step',step, 'currentP',currentPosition, 'maxLeft',maxLeft)
    }
    if (currentPosition <= maxLeft) {
      $arrowRight.current.classList.add("slider_arrow__default");
      console.log('step',step, 'currentP',currentPosition, 'maxLeft',maxLeft)
    }
  };

  const feedbackItems = props.feedback.map((element,index)=>{
    return(
      <FeedbackItem 
        key = {index}
        name = {element.name}
        surname = {element.surname}
        message = {element.message}
        avatar = {element.avatar}
        />
    )
  })

  return (
    <div className="feedback_section">
      <Title>Our customers says</Title>
      <div className="slider_window">
        <div className="slider_arrow__block_left">
          <div
            className="slider_arrow slider_arrow__default arrow_left"
            ref={$arrowLeft}
            onClick={ArrowLeftFunc}
          >
            <img src={arrow_l} alt="arrow-left" />
          </div>
        </div>
        <div className="slider_arrow__block_right">
          <div
            className="slider_arrow arrow_right"
            ref={$arrowRight}
            onClick={ArrowRightFunc}
          >
            <img src={arrow_r} alt="arrow-right" />
          </div>
        </div>
        <div className="slider_containter" ref={$feedbackList}>
          {feedbackItems}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
