import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import imageService from '../services/image-service'
import commentService from '../services/comment-service'
import {connect} from "react-redux";
import Post from "./post";
import Comment from "./comment";
import userService from "../services/user-service";


const DetailsScreen = ({
                           comments = [],
                           findCommentsByImageId,
                           createComment,
                           updateComment,
                           deleteComment,
                           getMyProfile,
                       }) => {
    const {imageID} = useParams();
    const history = useHistory();
    const [image, setImage] = useState({})
    const [user, setUser] = useState({})
    const [commentText, setTextValue] = useState("")
    useEffect(() => {
        findImageByImageID();
        findCommentsByImageId(imageID)
        getMyProfile(setUser)
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

            <ul className="list-group">
                {
                    comments.map(comment =>
                        <li key={comment.id} className="list-group-item">
                            {
                                <Comment comment={comment}
                                      deleteComment={deleteComment}
                                      updateComment={updateComment}
                                      user={user}
                                />
                            }
                        </li>
                    )
                }
            </ul>
            {
                console.log(user)
            }
            {
                user.id &&
                <div>
                    <br/>
                    <br/>
                    <textarea
                        onChange={(e) => setTextValue(e.target.value)}
                        value={commentText} className="form-control">
                </textarea>
                    <button className="btn btn-success float-right"
                            onClick={() => {
                                createComment(commentText, imageID, user);
                                setTextValue("")
                            }}
                    >Comment
                    </button>
                </div>
            }
            {
                !user.id &&
                <div>
                    <br/>
                    <br/>
                    <textarea
                        onChange={(e) => setTextValue(e.target.value)}
                        value={commentText} className="form-control">
                </textarea>
                    <button className="btn btn-success float-right">
                        <Link classname="nav-link" to="/../login">
                            Comment
                        </Link>
                    </button>
                </div>
            }
        </div>
    )
}

const stpm = (state) => {
    return{
        comments: state.commentReducer.comments
    }
}

const dtpm = (dispatch) => ({
    findCommentsByImageId: (imageId) => {
        commentService.findAllCommentsByImageId(imageId)
            .then(comments => {
                dispatch({
                type: "FIND_COMMENTS",
                comments: comments
            })}


            )
    },
    createComment: (commentText, imageID, user) => {

        console.log(user)

        commentService.createComment({text: commentText, username: user.username, userId: user.id, imageId: imageID})
            .then(comment => dispatch({
                type: "CREATE_COMMENT",
                comment: comment
            }))
    },
    updateComment: (commentToUpdate) => {
        commentService.updateComment(commentToUpdate)
            .then(status => dispatch({type:"UPDATE_COMMENT", commentToUpdate: commentToUpdate}))
    },
    deleteComment: (commentToDelete) => {
        commentService.deleteComment(commentToDelete)
            .then(status => dispatch({type: "DELETE_COMMENT", commentToDelete: commentToDelete}))
    },

    getMyProfile: (setUser) => {
        userService.getMyProfile().then(currentUser => {
            setUser(currentUser)})},
})

export default connect(stpm, dtpm) (DetailsScreen)