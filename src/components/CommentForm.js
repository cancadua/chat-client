import React, {useState} from "react"
import './CommentForm.css'
import {postComment} from "../api"

const CommentForm = ({post_id, reloadComments}) => {
    const initialState = {
        title: '',
        content: ''
    }

    const [comment, setComment] = useState(initialState)

    const handleSendComment = () => {
        postComment({post_id: post_id}, {title: comment.title, content: comment.content})
            .then(() => {
                setComment(initialState)
                reloadComments()

            })
    }

    const handleChange = event => {
        const {name, value} = event.target
        setComment({...comment, [name]: value})
    }

    return (
        <form className='comment-form-container'>
            <h3>
                Add your comment!
            </h3>
            <input className='comment-input'
                   name='title'
                   onChange={handleChange}
                   placeholder='Title'/>

            <input className='comment-input'
                   name='content'
                   onChange={handleChange}
                   placeholder='Content'/>
            <a className='send-comment' type="reset" onClick={handleSendComment}>
                Create Comment
            </a>
        </form>
    )
}

export default CommentForm