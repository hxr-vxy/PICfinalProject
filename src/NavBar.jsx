import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/community">Community</Link>
            <Link to="/history">History</Link>
            <Link to="/language">Language</Link>
            <Link to="/today">Today</Link>
            <Link to="/digital">Digital</Link>
            <Link to="/creators">Creators</Link>
        </nav>
    );
}

export default Nav;
