import { Link } from "react-router-dom";
import './styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link className="logo" to="/pages/trending">Book Explorer</Link>
            </div>
            <div className="nav-links">
                <Link to="/pages/trending">Home</Link>
                <Link to="/pages/favourites">Favourites</Link>
            </div>
        </nav>
    )
}

export default Navbar
