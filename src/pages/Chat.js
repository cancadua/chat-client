import {useEffect, useState} from "react";
import Post from "../components/Post";
import './Chat.css'
import Comment from "../components/Comment";

const Chat = () => {
    const [posts, setPosts] = useState();
    const date = new Date();
    date.toDateString()


    useEffect(() => {
        setPosts([{
                _id: '1',
                username: 'username',
                content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentccontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
                time: '{date}',
                edited: false
            }, {
                _id: '2',
                username: 'username2',
                content: 'content2',
                time: '{date}',
                edited: false
            }
        ])
    }, [])

    return (
        <div className='chat-container'>
            <div className='post-container'>
                <div className='username'>
                    username
                </div>
                <div className='time'>
                </div>
                <input className='content'>
                </input>
                <div className='manage-post'>
                    <button className='edit-post'>
                        Send
                    </button>
                    <button className='delete-post'>
                        Abort
                    </button>
                </div>
            </div>
            {
                posts?.map(post =>
                <Post key={post._id} {...post}/>)
            }
        </div>
    )
}

export default Chat;