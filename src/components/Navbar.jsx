import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>

            <ul>
                {/* Collegamenti */}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/AboutUs">About</NavLink></li>
                <li><NavLink to="/ListProduct">Products</NavLink></li>

            </ul>

        </nav>
    )
}