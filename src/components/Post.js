import './Post.css'
import Comment from "./Comment";
import {useEffect, useState} from "react";
import {deletePost, getComments, putPost} from "../api";
import CommentForm from "./CommentForm";

    const Post = ({post, username}) => {
    const [comments, setComments] = useState()
    const [disabled, setDisabled] = useState(true)
    const [content, setContent] = useState(post.content)

    const handleChange = (event) => {
        console.log(username)
        setContent(event.target.value)
    }

    const handleEdit = () => {
        if (disabled && username === post.username) setDisabled(false)
        else if (username === post.username) putPost({post_id: post._id}, {username: username, content: content})
            .then(() => window.location.reload())
    }

    const handleDelete = () => {
        if (username === post.username) deletePost({post_id: post._id}, {username: username})
            .then(() => window.location.reload())
    }

    useEffect(() => {
        getComments(post._id).then(data => setComments(data))
    }, [])

    return (
        <div className='post-container'>
            <div className='username'>
                {post.username}
            </div>
            {post.edited
                ? <div className='time'>
                    Edited at {post.time.replace('T', ' ').slice(0, -5)}
                </div>
                : <div className='time'>
                    Posted at {post.time.replace('T', ' ').slice(0, -5)}
                </div>
            }
            <textarea onChange={handleChange} className='content' value={content} disabled={disabled}/>
            <div className='comments'>
                {
                    comments?.map(comment =>
                        <Comment username={username} key={comment._id} comment={comment} />
                    )
                }
                <CommentForm username={username} post_id={post._id}/>
            </div>
            {username === post.username &&
                <div className='manage-post'>
                    <button className='edit-post' onClick={handleEdit}>
                        Edit
                    </button>
                    <button className='delete-post' onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            }

        </div>
    )
}

export default Post;