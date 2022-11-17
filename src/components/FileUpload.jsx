import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player'


export default function FileUpload() {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const navigate = useNavigate();
    const onLoadedData = () => {
        console.log(true)
    };

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
                        <div>
                            <ReactPlayer
                                url={
                                    "https://res.cloudinary.com/code-idea/video/upload/v1668707704/Mexican_Inspired_Rice_and_Beans_Recipe_Healthy_One_Pot_Black_Bean_Vegan_Food_Super_Easy_lxvoxp.mp4"
                                }
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                onReady={onLoadedData}
                            />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
