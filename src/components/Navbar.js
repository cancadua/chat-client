import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                Start
            </Link>
        </div>
    )
}

export default Navbar