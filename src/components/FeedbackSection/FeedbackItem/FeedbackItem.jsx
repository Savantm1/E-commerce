import React from 'react';
import avatar from '../../../assets/img/feedback-ava.png';
import "./FeedbackItem.scss";

const FeedbackItem = (props) => {
    
    return (
        <div className="feedback_item">
            <p className="feedback_item__text">{props.message}</p>
            <span className="feedback_item__author">{props.personName}</span>
            <img className="feedback_item__avatar" 
            src={props.avatar ? `http://localhost:7000/${props.avatar}` : avatar} 
            alt="avatar" />
        </div>
    )
}

export default FeedbackItem
