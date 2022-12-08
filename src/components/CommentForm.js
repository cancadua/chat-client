import React, {useRef, useState} from "react";
import './CommentForm.css'
import {postComment} from "../api";

const CommentForm = ({post_id}) => {
    const [comment, setComment] = useState({
        title: '',
        content: ''
    })

    const handleSendComment = () => {
        postComment({post_id: post_id}, {title: comment.title, content: comment.content})
            .then(() => window.location.reload())
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setComment({...comment, [name]: value});
    };

    return (
        <div className='comment-form-container'>
            <h3>
                Add your comment!
            </h3>
                <input className='comment-input'
                       name='title'
                       onChange={handleChange}
                       value={comment?.title || ''}
                       placeholder='Title'/>

                <input className='comment-input'
                       name='content'
                       onChange={handleChange}
                       value={comment?.content || ''}
                       placeholder='Content'/>
                <a className='send-comment' onClick={handleSendComment}>
                    Create Comment
                </a>

        </div>
    );
};

export default CommentForm;