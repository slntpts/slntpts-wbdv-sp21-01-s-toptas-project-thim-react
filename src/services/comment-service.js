const HEROKU_URL = "https://slntpts-wbdv-sp21-thim-server.herokuapp.com";//"http://localhost:8080";

export const createComment = (comment) =>
    fetch(`${HEROKU_URL}/api/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

export const updateComment = (comment) =>
    fetch(`${HEROKU_URL}/api/comments/${comment.id}`, {
        method: "PUT",
        body: JSON.stringify(comment),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json());

export const deleteComment = (cid) =>
    fetch(`${HEROKU_URL}/api/comments/${cid}`, {
        method: "DELETE",
    })

export const findAllCommentsByImageId = (imageId) =>
    fetch(`${HEROKU_URL}/api/image/comments/${imageId}`)
        .then(response => response.json());

export default{
    createComment, updateComment, deleteComment, findAllCommentsByImageId
}