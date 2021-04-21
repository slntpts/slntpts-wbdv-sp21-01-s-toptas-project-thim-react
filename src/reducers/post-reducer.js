import React from 'react'

const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) => {
    switch (action.type){

        case "CREATE_POST":
            return{
                ...state,
                posts: [
                    ...state.posts,
                    action.post
                ]
            }
        case "DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if(post.id !== action.postToDelete){
                        return true
                    }else{
                        return false
                    }
                })
            }
        case "UPDATE_POST":
            return{
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.postToDelete.id){
                        return action.postToUpdate
                    }else{
                        return post
                    }
                })
            }
        case "FIND_POSTS":
            return{
                ...state,
                posts: action.posts
            }
        default:
            return state
    }
}

export default postReducer