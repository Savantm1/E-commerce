import React from 'react';
import { useSelector } from 'react-redux';
import FeedbackSection from './FeedbackSection';


const FeedbackSectionContainer = (props) => {

    const feedbackArray = useSelector(state => state.feedback.feedbackArray)
    return (
        <FeedbackSection feedback= {feedbackArray}/>
    )
}

export default FeedbackSectionContainer
