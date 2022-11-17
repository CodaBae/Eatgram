import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FileUpload() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dinnmqcoz",
            uploadPreset: "owfz0gel"
        }, function (error, result) {
            console.log(error);
            console.log(result);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-between">
                    <button className='btn back' onClick={() => navigate(-1)}><i className="fa fa-arrow-left" aria-hidden="true"></i> {""} Back to Home</button>
                    <button className='btn upload' onClick={() => widgetRef.current.open()}>Upload Video</button>
                </div>
                <div className="typeContent">
                    <div className="watch">

                    </div>
                </div>
            </div>
        </div>
    )
}
