import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import imageService from '../services/image-service'

const DetailsScreen = () => {
    const {imageID} = useParams();
    const history = useHistory();
    const [image, setImage] = useState({})
    useEffect(() => {
        findImageByImageID()
    }, [])
    const findImageByImageID = () => {
        imageService.findImageByImageID(imageID)
            .then((data) => {
                setImage(data)
            })
    }
    return(
        <div>
            <button onClick={() => {history.goBack()} }>Back</button>
            <h2>{image.location}</h2>
            <img className="thim-image" src={image.media_url}></img>
            <p>
                {image.caption}
            </p>
        </div>
    )
}

export default DetailsScreen