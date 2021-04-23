import React, {useEffect, useState} from 'react'
import ContentPublic from "./users/content-public";
import AdminContent from "./users/admin-content";
import {useParams} from "react-router-dom"
import PrivateContent from "./users/private-content";
import userService from "../services/user-service";
import {connect} from "react-redux";

const Profile = ({
    getMyProfile,
    getOtherProfile,
}) => {
    const {userId} = useParams()
    const [user, setUser] = useState({})
    const [otherUser, setOtherUser] = useState(null)

    useEffect(() => {
        getMyProfile(setUser)
        if(userId)
            getOtherProfile(setOtherUser, userId)
    }, [])

    return (
        <div>
            <h1>Profile</h1>
            {JSON.stringify(user)}
            <ContentPublic/>
            {
                //user.role === "ADMIN" &&
                <AdminContent/>
            }
            {
                user && otherUser && user.id === otherUser.id &&
                <PrivateContent user={user}/>
            }
            {
                user && !otherUser &&
                <PrivateContent user = {otherUser}/>
            }
        </div>
    )
}

const stpm = (state) => {}

const dtpm = (dispatch) => ({
    getMyProfile: (setUser) => {
        userService.getMyProfile().then(currentUser => {
            setUser(currentUser)})},

    getOtherProfile: (setOtherUser, userid) => {
        userService.getOtherProfile(userid).then(otherUser => {
            setOtherUser(otherUser)
        })
    }

})

export default connect(stpm, dtpm) (Profile)