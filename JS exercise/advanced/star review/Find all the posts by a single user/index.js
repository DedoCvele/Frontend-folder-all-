/* 
    Find the post by a single user in a dummy API 
*/

async function postByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}

postByUser(4);