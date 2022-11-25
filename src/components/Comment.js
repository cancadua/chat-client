import './Comment.css'

const Comment = (data) => {
    return (
        <div className='comment-container'>
            <div className='comment-username'>
                {data.username}
            </div>
            <div className='comment-time'>
                {data.time}
            </div>
            <div className='comment-content'>
                {data.content}
            </div>
        </div>
    )
}

export default Comment;