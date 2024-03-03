"use client"
import React, { useState, useEffect } from 'react';
import './cardFlip.css';
import LoadingWidget from '../loadingWidget/loadingWidget';
const CardFlip = () => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        // Auto flip after 2 seconds
        const flipTimeout = setTimeout(() => {
            setFlipped(true);
        }, 2000);

        // Clear the timeout when the component unmounts or if flipped manually
        return () => clearTimeout(flipTimeout);
    }, []); // Empty dependency array ensures that the effect runs only once on mount
    console.log(flipped)
    return (
        <div className="cardflip-container">
            <div className={`cardflip${flipped ? ' flipped' : ''}`}>
                <div className="side">
                    <LoadingWidget />
                </div>
                <div className="side back">It's Real</div>
            </div>
        </div>
    );
};

export default CardFlip;
