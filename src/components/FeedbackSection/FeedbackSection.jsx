import React from 'react'
import Title from '../Filters/Title/Title'
import FeedbackItem from './FeedbackItem/FeedbackItem'
import "./FeedbackSection.scss"
import arrow_l from "../../assets/icons/ic-chevron-left.svg"
import arrow_r from "../../assets/icons/ic-chevron-right.svg"

const FeedbackSection = (props) => {
    return (
        <div className="feedback_section">
            <Title>Our customers says</Title>
            <div className="slider_window">
                <div className="slider_arrow arrow_left">
                    <img src={arrow_l} />
                </div>
                <div className="slider_arrow arrow_right">
                    <img src={arrow_r} />
                </div>
                <div className="slider_containter">
                    <FeedbackItem/>
                    <FeedbackItem/>
                    <FeedbackItem/>
                    <FeedbackItem/>
                    <FeedbackItem/>
                    <FeedbackItem/>
                </div> 
            </div>
        </div>
    )
}

export default FeedbackSection
