import React from "react"
import { Outlet, Link, useLocation} from "react-router-dom";

const Layout = () => {

    const location = useLocation();

    const isActive = (pathname) => {
        return pathname === location.pathname ? 'active' : '';
    }
    return (
        <>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/' className={isActive('/')} id="nav-item">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/explore' className={isActive('/explore')} id="nav-item">Explore Egypt</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className={isActive('/about')} id="nav-item">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className={isActive('/contact')} id="nav-item">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/recommendations' className={isActive('/recommendations')} id="nav-item">Recommendations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' className={isActive('/blog')} id="nav-item">Blog</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout