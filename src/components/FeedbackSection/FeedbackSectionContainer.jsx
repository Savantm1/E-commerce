import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getFeedback } from '../../redux/FeedbackSlice';
import FeedbackSection from './FeedbackSection';


const FeedbackSectionContainer = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFeedback())
    },[dispatch])

    const feedbackArray = useSelector(state =>  state.feedback.feedbackArray )

    return (
        <FeedbackSection feedback= {feedbackArray}/>
    )
}

export default FeedbackSectionContainer
