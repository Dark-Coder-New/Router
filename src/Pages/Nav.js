import {Link, NavLink} from "react-router-dom";

const Nav = () => {

    return (
        <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default Nav;




{/* <nav>
             <a href="/">Home</a>
             <a href="/about">About</a>
             <a href="/blog">Blog</a>
             <a href="/contact">Contact</a>
</nav> */}