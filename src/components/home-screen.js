import React, {useState, useEffect} from 'react'
import {connect, Provider} from "react-redux";
import  {Link, useParams, useHistory} from 'react-router-dom'
import imageService from "../services/image-service"
import postService from "../services/post-service"
import {combineReducers, createStore} from "redux";
import userReducer from "../reducers/user-reducer";
import imageReducer from "../reducers/image-reducer";
import postReducer from "../reducers/post-reducer";
import commentReducer from "../reducers/comment-reducer";
import './home-screen-style.css';
import userService, {getMyProfile} from "../services/user-service";
// import Post from "./post";
// import PostList from "./post-list";


const reducer = combineReducers({
    //combine all reducer in one single reducer, as map-value pairs. We will determine which one we are gonna use.
    //and once we do that we provide reducer as a top reducer to the createStore.
    imageReducer: imageReducer,
    userReducer: userReducer,
    postReducer: postReducer,
    commentReducer: commentReducer
})

const store = createStore(reducer)//we grab the store from module reducer.
//STEP2- and store goes to the <ModuleList/> below

const HomeScreen = (
    {
        images = [],
        posts = [],
        findImagesByText,
        findAllPosts,
        getMyProfile,
        logout,
    }) => {
    const history = useHistory();
    const {text} = useParams()//text(comes from url in Apps.js) is defined to be used as a parameter here.
    const [searchText, setSearchText] = useState(text)
    const [user, setUser] = useState("")

    useEffect(() => {

        if (text !== "undefined") {
            setSearchText(text)
            findImagesByText(text)
        }

        getMyProfile(setUser)

    }, [])

    return(
        <Provider store={store}>

            <div>
                <h2 className="thim-page-header">Welcome to Project Thim</h2>

                <ul className="nav justify-content-end thim-home-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <a className="nav-link" href="/">Blog</a>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <Link classname="nav-link" to="/../register">
                                Sign Up
                            </Link>
                        </a>
                    </li>

                    {
                        !user &&
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link classname="nav-link" to="/../login">
                                    Login
                                </Link>
                            </a>
                        </li>
                    }

                    {
                        user &&
                        <li className="nav-item">
                            <a className="nav-link">
                                <Link classname="nav-link" to="/"
                                      onClick={() => {
                                          logout(setUser)
                                      }}>
                                    Logout
                                </Link>
                            </a>
                        </li>
                    }

                    {
                        user &&
                        <li className="nav-item">
                            <a className="nav-link">
                                {"Hi "}
                                <Link classname="nav-link" to="/../profile">
                                    {user.username}
                                </Link>
                            </a>
                        </li>
                    }
                </ul>
            </div>

        <div>
            <label class="label thim-search-tip">Type a keyword to search on images' caption and press on the Search button</label>
            <input value={searchText}
                   onChange={(event) => {
                       setSearchText(event.target.value)
                   }}
                   className="form-control"/>
            <button
                onClick={() => {
                    findImagesByText(searchText)
                }}
                className="btn btn-primary thim-btn-search">
                <Link to={`/${searchText}`}>
                    Search
                </Link>
            </button>
            <br/>
            <br/>

            <div class="row">
                <div class="col-12">
                    <div className="row">
                        {
                            //TODO: Write searchText & searchText instead of text && text to retrieve images on the fly
                            //http://localhost:3000/search/2020
                            searchText && images && images.data && images.data.filter((image) =>
                                (image.caption.toLowerCase().includes(text && text.toLowerCase()))).map(data => {
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-1 col-xs-1">
                                        <Link to={`/details/${data.id}`}>
                                            <img className="thim-image" src={data.media_url}></img>
                                        </Link>
                                    </div>
                                )
                            })
                        }

                        {
                            !searchText && images && images.data && images.data.slice(0, 9).map((data) =>{
                                return (
                                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-1 col-xs-1">
                                        <Link to={`/details/${data.id}`}>
                                            <img className="thim-image" src={data.media_url}></img>
                                        </Link>
                                        <br/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/*<div class="col-3">*/}
                {/*    <PostList/>*/}
                {/*</div>*/}

            </div>
        </div>

        </Provider>
    )
}

const stpm = (state) => {
    return{
        images: state.imageReducer.images,
        posts: state.postReducer.posts
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

    findAllPosts:() => {
        postService.findAllPosts()
            .then(results => dispatch({
                posts: results,
                type: "FIND_POSTS"
            }))
    },

    getMyProfile: (setUser) => {
        userService.getMyProfile().then(currentUser => {
            setUser(currentUser)})},

    logout: (setUser) => {
        userService.logout()
        setUser(undefined)
        localStorage.clear();
    },
})

export default connect(stpm, dtpm) (HomeScreen)



