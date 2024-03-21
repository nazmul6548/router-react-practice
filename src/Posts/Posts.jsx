import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from '../Components/Post/Post'

function Posts() {
    const posts = useLoaderData();
    const postsstyle = {
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "1rem",
        padding: "10px"
    }
  return (
    <div>
        <h1>length : {posts.length}</h1>
       <div style={postsstyle}>
       {
            posts.map(post =><Post key={post.id} params={post}></Post> )
        }
       </div>

    </div>
  )
}

export default Posts