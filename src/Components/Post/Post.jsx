import { Link, useNavigate } from "react-router-dom";

function Post({post}) {
  const navigate = useNavigate()
  console.log(post);
    const {title,body,id} = post;
    const poststyle ={
        border:"2px solid red",
        margin:"6px",
        borderRadius:"10px"
    }

    const handleshowdetails = () => {
// console.log("mew");
navigate(`/posts/${id}`)
    }
  return (
    <div style={poststyle}>
        <h2>title: {title}</h2>
        <p>description : {body}</p>
        <Link to={`/posts/${id}`}>More Details</Link>

        <button onClick={handleshowdetails}>click me</button>
    </div>
  )
}

export default Post