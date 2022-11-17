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
                    <ReactPlayer
                                url={
                                    "https://res.cloudinary.com/dbcydvtno/video/upload/v1668708958/STRONGEST_BELLY_FAT_BURNER_DRINK_LOSE_15KG___30LBS_IN_2_WEEKS_trdbva.mp4"
                                }
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                onReady={onLoadedData}
                            />
                            <ReactPlayer
                                url={
                                    "https://res.cloudinary.com/code-idea/video/upload/v1668707698/3_CARNIVORE_DIET_Snack_Ideas_d8yupk.mp4"
                                }
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                onReady={onLoadedData}
                            />
                            <ReactPlayer
                                url={
                                    "https://res.cloudinary.com/code-idea/video/upload/v1668707683/5-Ingredient_Meals_ANYONE_can_make_healthy_vegan_budget_friendly_vi6nth.mp4"
                                }
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                onReady={onLoadedData}
                            />
                            <ReactPlayer
                                url={
                                    "https://res.cloudinary.com/dbcydvtno/video/upload/v1668708898/The_BEST_Way_To_Open_Eat_A_Pomegranate_wezfj0.mp4"
                                }
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                onReady={onLoadedData}
                            />
                            <ReactPlayer
                                url={
                                    "https://res.cloudinary.com/mozy/video/upload/v1668717831/10_Minutes_Recipe_-_Quick_Easy_Breakfast_Recipe_rxjwe8.mp4"
                                }
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                onReady={onLoadedData}
                            />
                            <ReactPlayer
                                url={
                                    "https://res.cloudinary.com/dbcydvtno/video/upload/v1668708828/Carrot_and_Orange_Juice_for_Detox_and_Beautiful_Skin_dxrjwe.mp4"
                                }
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                onReady={onLoadedData}
                            />
                            <ReactPlayer
                                url={
                                    "https://res.cloudinary.com/mozy/video/upload/v1668717799/HOW_TO_MAKE_MEAT_PIE_lgfygc.mp4"
                                }
                                playing={true}
                                controls={true}
                                loop={true}
                                muted={true}
                                playsinline={true}
                                onReady={onLoadedData}
                            />
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
    )
}
