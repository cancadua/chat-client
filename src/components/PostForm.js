import React, {useState} from "react";
import './PostForm.css'
import {postPost} from "../api";

const PostForm = ({open, username}) => {
    const [content, setContent] = useState()
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen(prev => !prev);
    };

    const handleSendPost = () => {
        postPost({username: username, content: content})
            .then(() => window.location.reload())
    }

    const handleAbortPost = () => {
        setIsOpen(false)
    }

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    return (
        <div className='collapsible-post-container'>
            <button className='expand-button' onClick={handleFilterOpening}>
                {!isOpen ? (
                    'Add post'
                ) : (
                    'Close panel'
                )}
            </button>
            {isOpen &&
                <div className='post-form'>
                    <div className='username'>
                        {username}
                    </div>
                    <textarea className='content-textarea' onChange={handleChange}>
                    </textarea>
                    <div className='manage-post'>
                        <button className='send-post' onClick={handleSendPost}>
                            Send
                        </button>
                        <button className='abort-post' onClick={handleAbortPost}>
                            Abort
                        </button>
                    </div>
                </div>}
        </div>
    );
};

export default PostForm;