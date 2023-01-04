import {useEffect, useState} from "react";
import './NewPost.css'
import {Link, useNavigate, useParams} from "react-router-dom";
import {getPost, postPost, putPost} from "../api";

const NewPost = () => {
    const {postId} = useParams()

    const [post, setPost] = useState({
        title: '',
        content: ''
    })

    const navigate = useNavigate()

    const handleChange = event => {
        const {name, value} = event.target
        setPost({...post, [name]: value})
    };

    const handleSubmit = () => {
        post?._id ? putPost({post_id: post._id},
                {title: post.title, content: post.content})
                .then(() => navigate('/posts'))
            : postPost({title: post?.title, content: post?.content})
                .then(() => navigate('/posts'))

    }

    useEffect(() => {
        if (postId !== undefined) getPost({postId})
            .then(data => setPost(data))
    }, [])

    return (
        <div className='chat-container'>
            <div className='form-post-container'>
                <div className='post-form'>
                    <input className='title'
                           name='title'
                           onChange={handleChange}
                           value={post?.title || ''}
                           placeholder='Title'/>
                    <textarea className='content-textarea'
                           name='content'
                           onChange={handleChange}
                           value={post?.content || ''}
                           placeholder='Content'/>
                    <div className='manage-post'>
                        <button className='send-post' onClick={handleSubmit}>Create Post</button>
                    </div>
                </div>
            </div>
            <Link to='/posts' className='back-to-posts'>
                Back to posts
            </Link>
        </div>
    )
}

export default NewPost