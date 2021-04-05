import React from 'react'
import avatar from '../../../assets/img/feedback-ava.png'
import "./FeedbackItem.scss"

const FeedbackItem = (props) => {
    return (
        <div className="feedback_item">
            <p className="feedback_item__text">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
            <span className="feedback_item__author">Name and Surname</span>
            <img className="feedback_item__avatar" src={avatar} alt="avatar" />
        </div>
    )
}

export default FeedbackItem
