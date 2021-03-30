import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import  {Link, useParams, useHistory} from 'react-router-dom'
import imageService from "../services/image-service"
import './search-screen.css';

const SearchScreen = (
    {
        images = [],
        findImagesByText,
    }) => {
    const history = useHistory();
    const {text} = useParams()//text(comes from url in Apps.js) is defined to be used as a parameter here.
    const [searchText, setSearchText] = useState(text)

    useEffect(() => {

        if (text !== "undefined") {
            setSearchText(text)
            findImagesByText(text)
        }

    }, [])

    return(
        <div>
            <h1>Search Screen</h1>
            <input value={searchText}
                   onChange={(event) => {
                       setSearchText(event.target.value)
                   }}
                   className="form-control"/>
            <button
                onClick={() => {
                    findImagesByText(searchText)
                }}
                className="btn btn-primary wbdv-btn-search">
                <Link to={`/search/${searchText}`}>
                    Search
                </Link>
            </button>
            <ul className="list-group">
                {
                    //TODO: Write searchText & searchText instead of text && text to retrieve images on the fly
                    //http://localhost:3000/search/2020
                    images && images.data && images.data.filter((image) =>
                        (image.caption.toLowerCase().includes(text && text.toLowerCase()))).map(data => {
                            return (
                                <li className="list-group-item">
                                    <Link to={`/details/${data.id}`}>
                                        <img className="wbdv-image" src={data.media_url} width={200}></img>
                                    </Link>
                                </li>
                            )
                    })
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return{
        images: state.imageReducer.images
    }
}

const dtpm = (dispatch) => ({
    findImagesByText:(text) => {
        imageService.findImagesByText(text)
            .then(results => dispatch({
                images: results,
                type: "FIND_IMAGES"
            }))
    },
})

export default connect(stpm, dtpm) (SearchScreen)



