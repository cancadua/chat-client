import {useEffect, useState} from "react";
import {Post, PostForm} from "../components/";
import './Chat.css'
import {getAllPosts} from "../api";
import {Link} from "react-router-dom";

const Chat = () => {
    const [posts, setPosts] = useState();


    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data))
    }, [])

    return (
        <div className='chat-container'>

            {posts?.map(post =>
                <Post key={post._id} post={post}/>)
            }

            <Link to='/posts/new' className='new-post'>
                    New post
            </Link>

        </div>
    )
}

export default Chat;