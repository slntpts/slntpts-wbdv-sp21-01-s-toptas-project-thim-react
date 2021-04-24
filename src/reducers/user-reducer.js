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

            console.log("ACTION user _id:" + action.user._id)
            console.log("ACTION user id:" + action.user.id)
            console.log("ACTION user name:" + action.user.first)
            console.log(action.user)

            return {
                ...state,
                users: state.users.filter(user => {
                    if(user.id !== action.user.id){
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
                    if(user.id === action.user.id){
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
        case "FIND_USER":
            return{
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.user.id){
                        return action.user
                    }else{
                        return user
                    }
                })
            }
        default:
            return state
    }
}

export default userReducer