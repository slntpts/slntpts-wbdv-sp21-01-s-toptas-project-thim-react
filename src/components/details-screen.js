import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import imageService from '../services/image-service'
import commentService from '../services/comment-service'
import {connect} from "react-redux";
import Post from "./post";
import Comment from "./comment";


const DetailsScreen = ({
                           comments = [],
                           findCommentsByImageId,
                           createComment,
                           updateComment,
                           deleteComment,
                       }) => {
    const {imageID} = useParams();
    const history = useHistory();
    const [image, setImage] = useState({})
    useEffect(() => {
        findImageByImageID();
        findCommentsByImageId(imageID)
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
                                      updateComment={updateComment}/>
                            }
                        </li>
                    )
                }
            </ul>
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
    createComment: () => {
        commentService.createComment({text: "New Comment"})
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
})

export default connect(stpm, dtpm) (DetailsScreen)