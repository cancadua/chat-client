const getComments = async (post_id) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}/comments`)
        .then(res => res.json())
)

const postComment = async ({post_id}, data) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}/comments`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(res => res.json())
)


const deleteComment = async ({post_id}, {_id}) => (
    await fetch(`http://localhost:8080/api/posts/comments/${_id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
)

export {
    getComments,
    postComment,
    deleteComment
}