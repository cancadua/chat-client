const getAllPosts = async () => (
    fetch('http://localhost:8080/api/posts')
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const getPost = async ({postId}) => (
    fetch(`http://localhost:8080/api/posts/${postId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
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

const deletePost = async ({post_id}) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .catch(e => console.log(e))
)


export {
    getAllPosts,
    getPost,
    postPost,
    putPost,
    deletePost,
}