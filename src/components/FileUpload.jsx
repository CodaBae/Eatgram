import React from 'react'

export default function FileUpload() {
    return (
        <div className="container">
            <div className="row">
                <div className="form-group uploadDiv">
                    <button className='btn upload'>Upload Video</button>

                </div>
                <div className="typeContent">
                    <div className="watch">
                        <div className="mb-3">
                            <label htmlFor="fileInput" className='cloud'>
                                <i className="fa fa-cloud"></i>
                            </label>
                            <h5 className='text text-center mt-3'>Click on icon to upload videos</h5>
                            <input type="file" className="d-none" id="fileInput" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
