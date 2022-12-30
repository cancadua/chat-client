import './Post.css'
import {Comment, CommentForm} from "./"
import {useEffect, useState} from "react"
import {deletePost, getComments} from "../api"
import {useNavigate} from "react-router-dom"

const Post = ({post, reload}) => {
    const navigation = useNavigate()
    const [comments, setComments] = useState()


    const handleEdit = () => {
        navigation(`/posts/${post._id}/edit`)
    }

    const handleDelete = () => {
        deletePost({post_id: post._id})
            .then(() => reload())
    }

    useEffect(() => {
        getComments(post._id).then(data => setComments(data))
    })

    return (
        <div className='post-container'>
            <div className='title'>
                {post.title}
            </div>

            <div className='time'>
                Updated at {post.updated_on.replace('T', ' ').slice(0, -5)}
            </div>

            <div className='content'>
                {post.content}
            </div>
            <div className='comments'>
                {
                    comments?.map(comment =>
                        <Comment key={comment._id} comment={comment} reload={() => reload()}/>
                    )
                }
                <CommentForm post_id={post._id} reload={() => reload()}/>
            </div>
            <div className='manage-post'>
                <a className='edit-post' onClick={handleEdit}>
                    Edit this post
                </a>
                <a className='delete-post' onClick={handleDelete}>
                    Delete
                </a>
            </div>
        </div>
    )
}

export default Post;