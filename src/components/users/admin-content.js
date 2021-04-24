import React, {useEffect} from 'react'

import userService from "../../services/user-service"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import UserEntry from "./user-entry";

const AdminContent = ({
    users = [{first: "selen" , last: "toptas", password: "123"}, {first: "nancy", last: "orange", password: "12345"}],
    createUser,
    deleteUser,
    updateUser,
    findAllUsers
}) => {

    useEffect(() => {
        findAllUsers()
        console.log("Rendering Use Effect")
    }, [])

    console.log("Rendering Admin!!")

    return(

        <div className="row table-responsive">

            <table className="table table-striped table-fixed table-hover table-condensed">
                <thead>
                <tr>
                    <th className="col-md-2 d-none d-lg-table-cell">Username</th>
                    <th className="col-md-4">Firstname</th>
                    <th className="col-md-3 d-none d-md-table-cell d-lg-table-cell">Lastname</th>
                    <th className="col-md-2 d-none d-lg-table-cell">Email</th>
                    <th className="col-md-2 d-none d-lg-table-cell">Password</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, ndx) =>
                        <UserEntry
                            updateUser={updateUser}
                            deleteUser={deleteUser}
                            user={user}
                            key={ndx}
                        />)
                //TODO: Create User button needs to be added somewhere
                }


                </tbody>
            </table>
        </div>
    )
}

const stpm = (state) => {//responsible for retrieving from the state
    return {
        users: state.userReducer.users// and map it to the property that expecting.
    }
}
//this dispatch is what invokes that reducer
const dtpm = (dispatch) => ({
    createUser: (user) => {
        userService.createUser(user)
            .then(user => dispatch({
                type: "CREATE_USER",
                user: user
            }))
    },
    deleteUser: (user) => {
        userService.deleteUser(user)
        dispatch({
            type: "DELETE_USER",
            user: user
        })
    },
    updateUser: (user) => {
        userService.updateUser(user)
        dispatch({
            type: "UPDATE_USER",
            user: user
        })
    },
    findAllUsers: () => {
        userService.findAllUsers()
            .then(users => dispatch({
                type: "FIND_USERS",
                users: users
            }))
    },
})

export default connect(stpm,dtpm)(AdminContent)