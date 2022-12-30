import {useEffect, useState} from "react"
import {Post} from "../components/"
import './Chat.css'
import {getAllPosts} from "../api"
import {Link} from "react-router-dom"

const Chat = () => {
    const [posts, setPosts] = useState()
    const [reload, setReload] = useState(false)


    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data))
        setReload(false)
    }, [reload])

    return (
        <div className='chat-container'>
            {posts?.map(post =>
                <Post key={post._id} post={post} reload={() => setReload(true)}/>)
            }
            <Link to='/posts/new' className='new-post'>
                New post
            </Link>
        </div>
    )
}

export default Chat