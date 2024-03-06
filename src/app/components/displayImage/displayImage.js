import React from 'react'
import "./displayImage.scss"
const DisplayImage = ({ children }) => {
    return (
        <div>
            <section className="cards">
                <article className="card gradient-shadow">
                    {children}
                </article>
            </section></div>

    )
}

export default DisplayImage
