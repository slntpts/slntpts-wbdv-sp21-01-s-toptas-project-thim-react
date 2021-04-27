import React, {useState} from 'react'
import {Link} from "react-router-dom";

const Comment = (
    {
        comment = {},
        updateComment,
        deleteComment,
    }) => {
    const [textValue, setTextValue] = useState(comment.text);
    return (
        <>
            {
                comment.isEditing &&
                <>
                    <i onClick={() => {
                        updateComment({
                            ...comment,
                            isEditing: false,
                            text: textValue
                        })
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => {
                        deleteComment(comment.id)
                    }} className="fas fa-2x fa-trash float-right"></i>
                </>
            }
            {
                !comment.isEditing &&
                <i onClick={() => updateComment({...comment, isEditing: true})}
                   className="fas fa-2x fa-cog float-right"></i>
            }

            {
                comment.isEditing &&
                <>
                    <textarea
                        onChange={(e) => setTextValue(Number(e.target.value))}
                        value={comment.text} className="form-control"></textarea>
                </>
            }

            {
                !comment.isEditing &&
                <>
                    <Link to={`/profile/${comment.userId}`}>{comment.username}</Link>
                    <p>{comment.text}</p>

                </>
            }
        </>
    )
}

export default Comment




