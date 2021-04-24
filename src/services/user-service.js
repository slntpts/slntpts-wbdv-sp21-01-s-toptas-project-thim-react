const USERS_URL = "http://localhost:8080/api";

export const createUser = (user) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const retrieveUser = (user) =>
    fetch(`${USERS_URL}/users/${user.username}/${user.password}`)
        .then(response => response.json())

export const deleteUser = (user) =>
    fetch(`${USERS_URL}/users/${user.id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const findAllUsers = () =>
    fetch(`${USERS_URL}/users`)
        .then(response => response.json())


export const register = (user, history) =>
{
    fetch(`${USERS_URL}/register`,{
        method: "POST",
        credentials: "include",
        body: JSON.stringify(user),
        headers: {
            'content-type': "application/json"
        }
    }).then(response => response.json())
        .catch(error => {
            console.log(error)
        })
        .then((actualUser) => {
            history.push("/../profile")
        })
}

export const updateUser = (user) =>
    fetch(`${USERS_URL}/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const login = (credentials, history) =>
{
    fetch(`${USERS_URL}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': "application/json"
        }
    })
        .then(response => response.json())
        .then(existingUser => {
            if(existingUser) {
                history.push("/../profile")
            }
        })
}

export const getMyProfile = () =>
{
    return(
        fetch(`${USERS_URL}/profile`, {
        method: "GET",
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json()))
}

export const getOtherProfile = (userId) =>
{
    return fetch(`${USERS_URL}/profile/${userId}`)
        .then(response => response.json())
}


export default {
    createUser,
    retrieveUser,
    deleteUser: deleteUser,
    findAllUsers,
    register,
    login,
    getMyProfile,
    getOtherProfile,
    updateUser,
}
