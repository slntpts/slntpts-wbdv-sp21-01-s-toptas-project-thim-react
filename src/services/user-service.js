const USERS_URL = "TODO";

export const createUser = (user) =>
    fetch(USERS_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const retrieveUser = (username, password) =>
    fetch(`${USERS_URL}/${username}/${password}`)
        .then(response => response.json())

export const deleteUser = (userId) =>
    fetch(`${USERS_URL}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export default {
    createUser,
    retrieveUser,
    deleteUser: deleteUser
}
