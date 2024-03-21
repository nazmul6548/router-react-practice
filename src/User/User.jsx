
import { Link } from "react-router-dom";
function User({user}) {
    const {name,username,email,id} = user;
    const userstyle ={
        border:"2px solid yellow",
        margin : "10px",
        borderRadius : "10px",
        padding : "10px",
    }
  return (
    <div style={userstyle}>

<h3> {name}</h3>
<p>email:{email}</p>
<h6>{username}</h6>
<Link to={`/user/${id}`}>Show Details</Link>
    </div>
  )
}

export default User