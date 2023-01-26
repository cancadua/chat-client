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
            <div className="text">
                Add your comment!
            </div>
            <input className='comment-input'
                   name='title'
                   onChange={handleChange}
                   placeholder='Title'/>

            <input className='comment-input'
                   name='content'
                   onChange={handleChange}
                   placeholder='Content'/>
            <button className='send-comment' type="reset" onClick={handleSendComment}>
                Create Comment
            </button>
        </form>
    )
}

export default CommentForm