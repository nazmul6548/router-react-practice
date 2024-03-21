import { Link } from "react-router-dom";

function Post({params}) {
    const {title,body,id} = params;
    const poststyle ={
        border:"2px solid red",
        margin:"6px",
        borderRadius:"10px"
    }
  return (
    <div style={poststyle}>
        <h2>title: {title}</h2>
        <p>description : {body}</p>
        <Link to={`/params/${id}`}>More Details</Link>
    </div>
  )
}

export default Post