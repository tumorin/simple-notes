import {NavLink} from "react-router-dom";

export const NavBar = () => (
<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand ms-3">
        Note App
    </div>
    <ul className="navbar-nav">
        <li>
            <NavLink className="nav-link me-3"
                to="/">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink className="nav-link"
                     to="/about">
                About
            </NavLink>
        </li>
    </ul>
</nav>
)