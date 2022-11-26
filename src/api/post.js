const getAllPosts = async () => (
    fetch('http://localhost:8080/api/posts')
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const postPost = async (data) => (
    await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const putPost = async ({post_id}, data) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const deletePost = async ({post_id}, username) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(username)
    })
        .then(res => res.json())
        .catch(e => console.log(e))
)



export {
    getAllPosts,
    postPost,
    putPost,
    deletePost,
}