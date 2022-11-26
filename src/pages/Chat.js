import {useEffect, useState} from "react";
import Post from "../components/Post";
import './Chat.css'
import PostForm from "../components/PostForm";
import {useLocation} from "react-router-dom";
import {getAllPosts} from "../api";

const Chat = () => {
    const location = useLocation()
    const [posts, setPosts] = useState();
    const {username} = location.state;


    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data))
    }, [])

    return (
        <div className='chat-container'>

            {posts?.map(post =>
                <Post username={username} key={post._id} post={post}/>)
            }
            <PostForm username={username}/>

        </div>
    )
}

export default Chat;