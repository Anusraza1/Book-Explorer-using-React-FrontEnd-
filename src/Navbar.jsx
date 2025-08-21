import { Link } from "react-router-dom"
import './styles/navbar.css'
import ThemeToggle from "./components/ThemeToggle"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link className="logo" to="/">Book Explorer</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </div>
            <ThemeToggle />
        </nav>
    )
}

export default Navbar
