"use client"
import React, { useState } from 'react'
import './upload_button.scss'
import CheckButton from "../checkButton/checkButton.js";
import CardFlip from '../cardFlip/cardFlip';
const ImageFileButton = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImage = (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        } else {
            // Handle non-image files or no file selected
            setSelectedImage(null);
        }
    };
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",

            }
        }>
            <div className="image-btn-wrapper">
                <label htmlFor="fileInput" className="upload-btn upload-btn-5">
                    Upload Image
                    <input type="file" id="fileInput" hidden onChange={handleImage} />
                </label>
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected Image" width="300" height="300" />
                ) : (
                    <p></p>
                )}
            </div>
            {
                selectedImage ? <CheckButton onClick={() => console.log("clicked")} /> : <p></p>
            }
            {
                selectedImage ? <CardFlip /> : <p></p>
            }
        </div>
    )
}

export default ImageFileButton