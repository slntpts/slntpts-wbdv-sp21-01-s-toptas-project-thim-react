import React, {useState} from 'react'

const UserEntry = (
    {
        deleteUser,
        updateUser,
        user,
    }) => {
    const [editing, setEditing] = useState(false)
    const [userCache, setUserCache] = useState(user)

    return (
        <tr>

            <td className="">
                {
                    !editing &&
                    <p>{userCache.username}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...user, username: event.target.value})}
                        value={userCache.username}
                        className="form-control"/>
                }
            </td>

            <td class="">
                {
                    !editing &&
                        <p>{userCache.first}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...user, first: event.target.value})}
                        value={userCache.first}
                        className="form-control"/>
                }
            </td>

            <td className="">
                {
                    !editing &&
                    <p>{userCache.last}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...user, last: event.target.value})}
                        value={userCache.last}
                        className="form-control"/>
                }
            </td>

            <td className="">
                {
                    !editing &&
                    <p>{userCache.email}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...user, email: event.target.value})}
                        value={userCache.email}
                        className="form-control"/>
                }
            </td>

            <td className="">
                {
                    !editing &&
                    <p>{userCache.password}</p>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setUserCache({...user, password: event.target.value})}
                        value={userCache.password}
                        className="form-control"/>
                }
            </td>


            <td>
                <i onClick={() => {deleteUser(user); setEditing(false)}} className="fas fa-trash"></i>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                {editing && <i onClick={() => updateUser()} className="fas fa-check"></i>}
            </td>

        </tr>
    )
}
export default UserEntry
