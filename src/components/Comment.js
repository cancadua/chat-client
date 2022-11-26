import './Comment.css'
import {deleteComment} from "../api";

const Comment = ({comment, username}) => {
    const handleDelete = () => {
        deleteComment({post_id: comment.post_id}, {_id: comment._id}, {username: username})
            .then(() => window.location.reload())
    }
    return (
        <div className='comment-container'>
            <div className='comment-username'>
                {comment.username}
            </div>
            {username === comment.username &&
                <button className='comment-delete' onClick={handleDelete}>
                    Delete
                </button>
            }
            <div className='comment-time'>
                Posted at {'\n'}{comment.time.replace('T', ' ').slice(0, -5)}
            </div>
            <div className='comment-content'>
                {comment.content}
            </div>

        </div>
    )
}

export default Comment;