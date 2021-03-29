import React, {useState, useEffect} from 'react'
import  {Link, useParams, useHistory} from 'react-router-dom'
import imageService from "../services/image-service"
import './search-screen.css';

const SearchScreen = () => {
    const history = useHistory();
    const {text} = useParams()//text(comes from url in Apps.js) is defined to be used as a parameter here.
    const [searchText, setSearchText] = useState(text)
    const [results, setResults] = useState({data: []})
    useEffect(() => {
        setSearchText(text)
        findImagesByText(text)
    }, [])
    const findImagesByText = (text) => {
        history.push(text)
        imageService.findImagesByText(text)
            .then((results) => {
                setResults(results)
            })
    }
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
                className="btn btn-primary">
                Search
            </button>
            <ul className="list-group">
                {
                    //TODO: Write searchText & searchText instead of text && text to retrieve images on the fly
                    //http://localhost:3000/search/2020
                    results && results.data && results.data.filter((image) =>
                        (image.caption.toLowerCase().includes(text && text.toLowerCase()))).map(data => {
                            return (
                                <li className="list-group-item">
                                    <Link to={`/details/${data.id}`}>
                                        <img className="wbdv-image" src={data.media_url} width={200}></img>
                                    </Link>
                                </li>
                            )
                    })

                    // results && results.data && results.data.map((image) => {
                    //     return(
                    //         <li className="list-group-item">
                    //             <Link to={`/search/text`}>
                    //                 {image.id}
                    //                 {/*<img src="'+image.images.low_resolution.url+'"/>*/}
                    //             </Link>
                    //         </li>
                    //     )
                    // })
                }

            </ul>
        </div>
    )
}

export default SearchScreen