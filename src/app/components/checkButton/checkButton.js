import React from 'react'
import "./checkButton.css"

const CheckButton = ({ onClick }) => {
    return (
        <div style={
            {
                marginLeft: "30px",
                marginTop: "150px"
            }
        }>
            <button className="button" onClick={onClick}><span>Check</span></button>
        </div>
    )
}

export default CheckButton