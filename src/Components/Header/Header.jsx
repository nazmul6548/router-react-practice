
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
        <h2>navbar</h2>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Message</Link>
        <Link to="/">Contact</Link>
    </div>
  )
}

export default Header