import React from 'react'

const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type){

        case "CREATE_USER":
            return{
                ...state,
                user: action.user
            }
        case "FIND_USER":
            return{
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default userReducer