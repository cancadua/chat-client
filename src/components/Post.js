import './Post.css'
import Comment from "./Comment";

const Post = (post) => {
    return (
        <div className='post-container'>
            <div className='username'>
                {post.username}
            </div>
            <div className='time'>
                {post.time}
            </div>
            <div className='content'>
                {post.content}
            </div>
            <div className='comments'>
                <Comment/>
            </div>
            <div className='manage-post'>
                <button className='edit-post'>
                    edit
                </button>
                <button className='delete-post'>
                    delete
                </button>
            </div>
        </div>
    )
}

export default Post;