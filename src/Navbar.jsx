import { Link } from "react-router-dom";
import './styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Book Explorer</h1>
            <div>
                <Link to="/pages/trending">Trending</Link>
                <Link to="/pages/favourites">Favourites</Link>
            </div>
        </nav>
    )
}

export default Navbar
