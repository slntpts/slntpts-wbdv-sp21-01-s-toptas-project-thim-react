import React from 'react'

const ContentPublic = ({user}) => {

    return(
        <div>
            <h1>ContentPublic</h1>
            <h4>{user.first}</h4>
            <h4>{user.last}</h4>
            <h4>{user.email}</h4>
        </div>
    )
}

export default ContentPublic