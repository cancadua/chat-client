import './Comment.css'

const Comment = () => {
    return (
        <div className='comment-container'>
            <div className='comment-username'>
                Name
            </div>
            <div className='comment-time'>
                time
            </div>
            <div className='comment-content'>
                Content
            </div>
        </div>
    )
}

export default Comment;