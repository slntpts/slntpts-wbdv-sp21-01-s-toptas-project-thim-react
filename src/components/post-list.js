import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import postService from '../services/post-service'
import Post from "./post";

const PostList = (
    {
        posts = [{src: "", text: "Dummy Content", id: undefined, isEditing: false}],
        findPosts,
        createPost,
        updatePost,
        deletePost,
    }) => {
    const{postId} = useParams()
    useEffect(() => {
        findPosts()
    }, [])//to not end up with a infinite loop we are adding this [topicId] array here.
    return(
        <div>
            {
                <i onClick={() => {
                    createPost()
                }} className="fas fa-plus float-right fa-2x"></i>
            }

            <h1>Post List ({posts.length}) </h1>

            <ul className="list-group">
                {
                    posts &&
                    posts.map(post =>
                        <li key={post.id} className="list-group-item">
                            {
                                post &&
                                <Post post={post}
                                      deletePost={deletePost}
                                      updatePost={updatePost}/>
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
        posts: state.postReducer.posts
    }
}

const dtpm = (dispatch) => ({
    findPosts: () => {
        postService.findAllPosts()
            .then(posts => dispatch({
                type: "FIND_POSTS",
                posts: posts
            }))
    },
    createPost: () => {
        postService.createPost({text: "New Post"})
            .then(post => dispatch({
                type: "CREATE_POST",
                post: post
            }))
    },
    updatePost: (postToUpdate) => {
        postService.updatePost(postToUpdate)
            .then(status => dispatch({type:"UPDATE_POST", postToUpdate: postToUpdate}))
    },
    deletePost: (postToDelete) => {
        postService.deletePost(postToDelete)
            .then(status => dispatch({type: "DELETE_POST", postToDelete: postToDelete}))
    },
})

export default connect(stpm, dtpm) (PostList)