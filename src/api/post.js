const getAllPosts = async () => (
    fetch('http://localhost:8080/api/posts')
        .then(res => res.json())
)

const getPost = async ({postId}) => (
    fetch(`http://localhost:8080/api/posts/${postId}`)
        .then(res => res.json())
)

const postPost = async (data) => (
    await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(res => res)
)

const putPost = async ({post_id}, data) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(res => res.json())
)

const deletePost = async ({post_id}) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
)

const getPostsByTag = async (tag) => (
    await fetch(`http://localhost:8080/api/posts/tags/${tag}`)
        .then(res => res.json())
)

const getAllTags = async () => (
    await fetch(`http://localhost:8080/api/posts/tags`)
        .then(res => res.json())
)


export {
    getAllPosts,
    getPost,
    postPost,
    putPost,
    deletePost,
    getPostsByTag,
    getAllTags,
}