import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
    return (

        <nav>
            <ul>
                {/* Collegamenti */}
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/AboutUs">About</NavLink></li>
                <li><NavLink to="/ListProduct">Products</NavLink></li>
            </ul>
        </nav>
    );

}
/* {props.linksProp.map((link) => (
        <li key={link.id}>
            <NavLink to={link.url}>
                {link.text}
            </NavLink>
        </li>
    ))} */