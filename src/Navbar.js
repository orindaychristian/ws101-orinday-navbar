import { Link } from "react-router-dom"
export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/" className="title">Orinday Navbar</Link>
        <ul>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const path = window.location.pathname
    
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}