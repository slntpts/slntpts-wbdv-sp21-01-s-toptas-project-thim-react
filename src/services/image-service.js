const findImagesByText = (text) => {
     return fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,media&access_token=IGQVJYcl9KRzJPTXlFSDREUHE0aEh5LVJIbUVtWlZAURUpRTEhFN1RVc3BJNzZA4b1FaeEJjYnBNTVhDdEUzdmpBUVBzXy0ydTNHaDVUYUpsWEZARWm9CRkRnS1BjQWJnSURUSHhab3B3`)
    // return fetch(`https://graph.instagram.com/17874217139027163?fields=media_type,media_url&access_token=IGQVJYcl9KRzJPTXlFSDREUHE0aEh5LVJIbUVtWlZAURUpRTEhFN1RVc3BJNzZA4b1FaeEJjYnBNTVhDdEUzdmpBUVBzXy0ydTNHaDVUYUpsWEZARWm9CRkRnS1BjQWJnSURUSHhab3B3`)
        .then(response => response.json())
}
//TODO: check if fields=${text} works above!

const findImageByImageID = (imageID) => {
    return fetch(`https://graph.instagram.com/${imageID}?fields=media_type,media_url,caption&access_token=IGQVJYcl9KRzJPTXlFSDREUHE0aEh5LVJIbUVtWlZAURUpRTEhFN1RVc3BJNzZA4b1FaeEJjYnBNTVhDdEUzdmpBUVBzXy0ydTNHaDVUYUpsWEZARWm9CRkRnS1BjQWJnSURUSHhab3B3`)
        .then(response => response.json())
}

export default {
    findImagesByText, findImageByImageID
}