import { Link } from "react-router-dom";
import Container from "./Container";
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    return (
        <nav>
            <Container>
                <Link>
                    <img src={logo} alt="Costs"/>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/company">Company</Link>
                <Link to="/newproject">NewProject</Link>
            </Container>
        </nav>
    )
}

export default Navbar;