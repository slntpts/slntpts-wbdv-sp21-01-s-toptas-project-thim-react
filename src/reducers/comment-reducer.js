import React from 'react'

const initialState = {
    comments: []
}

const commentReducer = (state = initialState, action) => {
    switch (action.type){

        case "CREATE_COMMENT":
            return{
                ...state,
                comments: [
                    ...state.comments,
                    action.comment
                ]
            }
        case "DELETE_COMMENT":
            return {
                ...state,
                comments: state.comments.filter(comment => {
                    if(comment.id !== action.commentToDelete){
                        return true
                    }else{
                        return false
                    }
                })
            }
        case "UPDATE_COMMENT":
            return{
                ...state,
                comments: state.comments.map(comment => {
                    if(comment.id === action.commentToUpdate.id){
                        return action.commentToUpdate
                    }else{
                        return comment
                    }
                })
            }
        case "FIND_COMMENTS":
            return{
                ...state,
                comments: action.comments
            }
        default:
            return state
    }
}

export default commentReducer