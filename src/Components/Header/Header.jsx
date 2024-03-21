
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
        <h2>navbar</h2>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
        <Link to="/message">Message</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header