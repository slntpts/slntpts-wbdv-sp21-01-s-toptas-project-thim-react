import React, {useEffect, useState} from 'react'

import userService, {getMyProfile, retrieveUser, updateUser} from "../../services/user-service"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import UserEntry from "./user-entry";

const PrivateContent = ({
                          user,
                          deleteUser,
                          updateUser
                      }) => {

    console.log(user)

    const updateMyUser = (usr) => {
        userService.updateUser(usr)
        updateUser(usr)
    }

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
                    <UserEntry
                        updateUser={updateMyUser}
                        deleteUser={deleteUser}
                        user={user}
                    />
                </tbody>
            </table>
        </div>
    )
}

const stpm = (state) => {}

//this dispatch is what invokes that reducer
const dtpm = (dispatch) => ({

    deleteUser: (user) => {
        userService.deleteUser(user)
    }
})

export default connect(stpm,dtpm)(PrivateContent)