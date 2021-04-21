import React, {useState} from 'react'

const Post = (
    {
        post = [],//={src: "", text: "Dummy Content", id: undefined, isEditing: false},
        updatePost,
        deletePost,
    }) => {
    const [srcValue, setSrcValue] = useState(post.src);
    const [widthValue, setWidthValue] = useState(post.width);
    const [heightValue, setHeightValue] = useState(post.height);
    const [textValue, setTextValue] = useState(post.text);
    return (
        <>
            {
                post.isEditing &&
                <>
                    <i onClick={() => {
                        updatePost({
                            ...post,
                            isEditing: false,
                            src: srcValue,
                            width: widthValue,
                            height: heightValue,
                            text: textValue
                        })
                    }} className="fas fa-2x fa-check float-right"></i>
                    <i onClick={() => {
                        deletePost(post.id)
                    }} className="fas fa-2x fa-trash float-right"></i>
                </>
            }
            {
                !post.isEditing &&
                <i onClick={() => updatePost({...post, isEditing: true})}
                   className="fas fa-2x fa-cog float-right"></i>
            }

            {
                post.isEditing &&
                <>
                    URL
                    <input
                        onChange={(e) => setSrcValue(e.target.value)}
                        value={srcValue} className="form-control"/>
                    <textarea
                        onChange={(e) => setTextValue(Number(e.target.value))}
                        value={post.text} className="form-control"></textarea>
                    width
                    <input
                        onChange={(e) => setWidthValue(Number(e.target.value))}
                        value={widthValue} className="form-control"/>
                    height
                    <input
                        onChange={(e) => setHeightValue(Number(e.target.value))}
                        value={heightValue} className="form-control"/>
                </>
            }

            {
                !post.isEditing &&
                <>
                    <img width={post.width} height={post.height} src={post.src}/>
                    <textarea
                        value={post.text} className="form-control"></textarea>
                </>
            }
        </>
    )
}

export default Post




