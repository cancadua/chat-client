import { useEffect, useState } from "react"
import { Post } from "../components/"
import './Chat.css'
import { getAllPosts, getPostsBySearchedText, getAllTags, getPostsByTag } from "../api"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

const Chat = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get("search")
    const [posts, setPosts] = useState()
    const [tags, setTags] = useState()
    const [reload, setReload] = useState(false)

    useEffect(() => {
        if (search) {getPostsBySearchedText(search)
                    .then(data => setPosts(data))
                setReload(false)}
        else {
            getAllPosts()
                .then(data => setPosts(data))

            setReload(false)

            getAllTags()
                .then(data => setTags(data))
            }
    }, [reload, search])

    const setPostsFromChild = (posts) => {
        setPosts(posts)
    }

    const setPostsByTag = (event) => {
        const tag = event.target.value
        getPostsByTag(tag)
            .then(data => {
                setPosts(data)
            })
    }

    return (
        <div className='home-post-container'>
            <div className='tags'>
                {tags?.map(tag => 
                    <div>
                        &nbsp;
                        <button className='tag' value={tag} onClick={setPostsByTag}>
                            {tag ? '#' + tag : ''}
                        </button>
                    </div>
                )}
            </div>
            {posts?.map(post =>
                <Post key={post._id} post={post} reload={() => setReload(true)} setPosts={(posts) => setPosts(posts)}/>)
            }
        </div>
    )
}

export default Chat
