import "./Navbar.css"
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <button>Start</button>
            </Link>
        </div>
    )
}