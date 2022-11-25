const getAllPosts = async () => (
    fetch('http://localhost:8080/api/posts')
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)

const getPost = async (post_id) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}`)
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
        .then(res => {
            console.log(JSON.stringify(username))
            console.log(post_id)
            res.json()
        })
        .catch(e => console.log(e))
)

const getComments = async (post_id) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}/comments`)
        .then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
)

// const getRoomTables = async (roomId) => (
//     fetch(`http://localhost:8080/api/tables/${roomId}/`)
//         .then(res => res.json())
//         .then(data => data)
//         .catch(e => console.log(e))
// )

const postComment = async (data) => (
    await fetch(`http://localhost:8080/api/posts/${data.post_id}/comment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => data)
        .catch(e => console.log(e))
)



const putComment = async (data) => (
    await fetch(`http://localhost:8080/api/posts/${data.post_id}/comment/${data._id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(e => console.log(e))
)

const deleteComment = async (data) => (
    await fetch(`http://localhost:8080/api/posts/${data.post_id}/comment/${data._id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .catch(e => console.log(e))
)

export {
    getAllPosts,
    getPost,
    postPost,
    putPost,
    deletePost,
    getComments,
    postComment,
    putComment,
    deleteComment
}