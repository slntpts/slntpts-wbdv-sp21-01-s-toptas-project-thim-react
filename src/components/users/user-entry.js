import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const UserEntry = (
    {
        deleteUser,
        updateUser,
        user,
    }) => {
    const [editing, setEditing] = useState(false)
    const [userCache, setUserCache] = useState(user)

    console.log("userEntry")
    console.log(userCache)
    console.log("=============")

    useEffect(() => {
        setUserCache(user)
    }, [user])

    return (
        <tr>

            <td class="col-2">
                {
                    !editing &&
                    <p>{user.username}</p>

                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...userCache, username: event.target.value})}
                        value={userCache.username}
                        className="form-control"/>
                }
            </td>

            <td class="col-2">
                {
                    !editing &&
                        <p>{user.first}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...userCache, first: event.target.value})}
                        value={userCache.first}
                        className="form-control"/>
                }
            </td>

            <td class="col-2">
                {
                    !editing &&
                    <p>{user.last}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...userCache, last: event.target.value})}
                        value={userCache.last}
                        className="form-control"/>
                }
            </td>

            <td class="col-2">
                {
                    !editing &&
                    <p>{user.email}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...userCache, email: event.target.value})}
                        value={userCache.email}
                        className="form-control"/>
                }
            </td>

            <td class="col-2">
                {
                    !editing &&
                    <p>{user.password}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...userCache, password: event.target.value})}
                        value={userCache.password}
                        className="form-control"/>
                }
            </td>

            <td></td>
            <td></td>

            <td class="col-2">
                <i onClick={() => {deleteUser(user); setEditing(false); setUserCache({})}} className="fas fa-trash"></i>
                {!editing && <i onClick={() => {setEditing(true); setUserCache(user)}} className="fas fa-edit"></i>}
                {editing && <i onClick={() => {updateUser(userCache); setEditing(false)}} className="fas fa-check"></i>}
            </td>

        </tr>
    )
}
export default UserEntry
