import React from 'react';
import Title from '../Title/Title';
import './Subscribe.scss';

const Subscribe = (props) => {
    return (
        <>
            <div className="subscribe">
                <Title> Join our List</Title>
                <p className="subscribe_description">Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.</p>
                <div className="subscribe__input_block">
                    <input className="subscribe__input" type="text" placeholder="Your email adress"/>
                    <button className="subscribe_btn" type="submit" value="subscribe">Subscribe</button>
                </div>
            </div>
            
        </>
    )
}

export default Subscribe;
