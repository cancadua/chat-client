import { useEffect, useState } from "react"
import { Post } from "../components/"
import './Chat.css'
import { getAllPosts, getPostsBySearchedText } from "../api"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

const Chat = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get("search")
    const [posts, setPosts] = useState()
    const [reload, setReload] = useState(false)

    useEffect(() => {
        if (search) {getPostsBySearchedText(search)
                    .then(data => setPosts(data))
                setReload(false)}
        else getAllPosts()
            .then(data => setPosts(data))
        setReload(false)
    }, [reload, search])

    const setPostsFromChild = (posts) => {
        setPosts(posts)
    }

    return (
        <div className='home-post-container'>
            {posts?.map(post =>
                <Post key={post._id} post={post} reload={() => setReload(true)} setPosts={(posts) => setPosts(posts)}/>)
            }
        </div>
    )
}

export default Chat
