
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
        <h2>navbar</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/message">Message</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Header