const getComments = async (post_id) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}/comments`)
        .then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
)

const postComment = async ({post_id}, data) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}/comment`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log(data)
            res.json()
        })
        .then(data => data)
        .catch(e => console.log(e))
)


const deleteComment = async ({post_id}, {_id}) => (
    await fetch(`http://localhost:8080/api/posts/${post_id}/comment/${_id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .catch(e => console.log(e))
)

export {
    getComments,
    postComment,
    deleteComment
}