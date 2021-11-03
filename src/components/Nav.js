
import '../Css/ComponentStyles/Nav.css';
import logo from '../assets/test2.png';

function Nav() {
    return (
        <nav>
            <img className="navLogo" src={logo} alt="headshot"/>
            <ul className="navLinks">
                <li>What I've Done</li>
                <li>What I'm About</li>
                <li>Let's Make Something</li>
            </ul>
        </nav>
    )
}

export default Nav;