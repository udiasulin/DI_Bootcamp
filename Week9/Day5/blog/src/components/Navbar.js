import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/">Home</NavLink ></li>
                        <li><NavLink to="/About">About</NavLink ></li>
                        <li><NavLink to="/Contact">Contant</NavLink ></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}


export default Navbar;
