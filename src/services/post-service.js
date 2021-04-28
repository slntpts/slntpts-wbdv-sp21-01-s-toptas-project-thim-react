const HEROKU_URL = "http://slntpts-wbdv-sp21-thim-server.herokuapp.com/api";//"http://localhost:8080";

export const createPost = (post) =>
    fetch(`${HEROKU_URL}/api/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

export const updatePost = (post) =>
    fetch(`${HEROKU_URL}/api/posts/${post.id}`, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

export const deletePost = (pid) =>
    fetch(`${HEROKU_URL}/api/posts/${pid}`, {
        method: "DELETE",
    })

export const findAllPosts = () =>
    fetch(`${HEROKU_URL}/api/posts`)
        .then(response => response.json());

export default{
    createPost, updatePost, deletePost, findAllPosts
}