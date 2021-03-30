import React from 'react'

const initialState = {
    images: []
}

const imageReducer = (state = initialState, action) => {
    switch (action.type){

        case "FIND_IMAGES":
            return{
                ...state,
                images: action.images //update local images
            }
        default:
            return state
    }
}

export default imageReducer