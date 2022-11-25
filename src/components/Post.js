import './Post.css'
import Comment from "./Comment";
import {useEffect, useState} from "react";
import {deletePost, putPost} from "../api/api";

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
        else putPost({post_id: post._id}, {username: username, content: content})
            .then(() => window.location.reload())
    }

    const handleDelete = () => {
        console.log(post._id)
        if (username === post.username) deletePost({post_id: post._id}, {username: username})
            .then(() => window.location.reload())
    }

    useEffect(() => {
        setComments([{
            _id: '1',
            username: 'username',
            content: 'sda',
            time: '{date}'
        }, {
            _id: '2',
            username: 'username2',
            content: 'content2',
            time: '{date}'
        }
        ])
    }, [])

    return (
        <div className='post-container'>
            <div className='username'>
                {post.username}
            </div>
            {post.edited
                ? <div className='time'>
                    Edited: {post.time.replace('T', '\n').slice(0, -5)}
                </div>
                : <div className='time'>
                    Posted: {post.time.replace('T', '\n').slice(0, -5)}
                </div>
            }
            <input onChange={handleChange} className='content' value={content} disabled={disabled}/>
            <div className='comments'>
                {
                    comments?.map(comment =>
                        <Comment key={comment._id} {...comment}/>
                    )
                }
                <Comment/>
            </div>
            <div className='manage-post'>
                <button className='edit-post' onClick={handleEdit}>
                    Edit
                </button>
                <button className='delete-post' onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Post;