import React from 'react'

const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type){

        case "CREATE_USER":
            return{
                ...state,
                users: [
                    ...state.users,
                    action.user
                ]
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => {
                    if(user.username !== action.username){
                        return true
                    }else{
                        return false
                    }
                })
            }
        case "UPDATE_USER":
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.username === action.username){
                        return action.user
                    }else{
                        return user
                    }
                })
            }
        case "FIND_USERS":
            return{
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

export default userReducer