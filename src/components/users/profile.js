import React, {useEffect, useState} from 'react'
import ContentPublic from "./content-public";
import AdminContent from "./admin-content";
import {useParams} from "react-router-dom"
import PrivateContent from "./private-content";

const HEROKU_URL = "http://slntpts-wbdv-sp21-thim-server.herokuapp.com";//"http://localhost:8080";

const Profile2 = () => {
    const {userId} = useParams()
    const [user, setUser] = useState({})
    const [otherUser, setOtherUser] = useState(null)
    useEffect(() => {
        //TODO: move this to service file
        // if (userId) {
        //     fetch(`http://localhost:8080/api/profile/${userId}`)
        //         .then(response => response.json())
        //         .then(currentUser => setUser(currentUser))
        // }else {
        fetch(`${HEROKU_URL}/api/profile`, {
            method: "GET",
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(currentUser => {
                setUser(currentUser)
                if (userId) {
                    fetch(`${HEROKU_URL}/api/profile/${userId}`)
                        .then(response => response.json())
                        .then(otherUser => {
                            setOtherUser(otherUser)
                        })
                }
            })
    }, [])
        return (
            <div>
                <h1>Profile</h1>
                {JSON.stringify(user)}
                <ContentPublic/>
                {
                    user.role === "ADMIN" &&
                        <AdminContent/>
                }
                {
                    user && otherUser && user.id === otherUser.id &&
                        <PrivateContent/>
                }
                {
                    user && !otherUser &&
                        <PrivateContent/>
                }
            </div>
        )
    }

export default Profile2