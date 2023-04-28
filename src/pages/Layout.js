import React from "react"
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/' id="nav-item">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/explore' id="nav-item">Explore Egypt</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' id="nav-item">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' id="nav-item">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/recommendations' id="nav-item">Recommendations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' id="nav-item">Blog</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout