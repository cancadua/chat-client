import "./Navbar.css"
import {Link} from "react-router-dom"
import Search from "./Search"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link reloadDocument to="/posts">
                Home
            </Link>
            <Link to="/posts/new">
                Add post
            </Link>
            <Search/>
        </div>
    )
}

export default Navbar