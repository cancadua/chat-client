import React, {useRef, useState} from "react";
import './CommentForm.css'
import {postComment} from "../api";

const CommentForm = ({post_id, username}) => {
    const [content, setContent] = useState()
    const commentText = useRef()

    const handleSendComment = () => {
        console.log(post_id)
        console.log({username: username, content: content})
        postComment({post_id: post_id}, {username: username, content: content})
            .then(() => window.location.reload())
    }

    const handleAbortComment = () => {
        commentText.current.value = ''
    }

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    return (
        <div className='comment-form-container'>
            <h3>
                Add your comment!
            </h3>
            <div className={'comment-form'}>
                <input ref={commentText} type="text" className='comment-input' onChange={handleChange}/>
                <button className='comment-button' onClick={handleAbortComment}>
                    x
                </button>
                <button className='comment-button' onClick={handleSendComment}>
                    >
                </button>
            </div>

        </div>
    );
};

export default CommentForm;