import React from "react"
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/explore'>Explore Egypt</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/recommendations'>Recommendations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout