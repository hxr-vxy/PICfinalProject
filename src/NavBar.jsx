import { Link } from "react-router-dom";

function Nav() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/community">Community</Link>
            <Link to="/history">History</Link>
            <Link to="/language">Language</Link>
            <Link to="/today">Today</Link>
            <Link to="/digital">Digital</Link>
            <Link to="/creators">Creators</Link>
        </div>
    )
}

export default Nav;