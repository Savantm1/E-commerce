import React from 'react';
import avatar from '../../../assets/img/feedback-ava.png';
import "./FeedbackItem.scss";

const FeedbackItem = (props) => {
    return (
        <div className="feedback_item">
            <p className="feedback_item__text">{props.message}</p>
            <span className="feedback_item__author">{props.name} {props.surname}</span>
            <img className="feedback_item__avatar" 
            // src={props.avatar ? props.avatar : avatar} 
               src={avatar}
            alt="avatar" />
        </div>
    )
}

export default FeedbackItem
