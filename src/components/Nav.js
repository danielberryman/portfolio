
import { useEffect } from 'react';
import '../Css/ComponentStyles/Nav.css';
import logo from '../assets/test2.png';
import { useHistory } from 'react-router-dom';

function Nav(props) {
    window.addEventListener("resize", updateNav);

    useEffect(() => {
        initNavBar();
    }, []);

    const history = useHistory();

    function goHome() {
        history.push('/');
        toggleNavBar();
    }
    function goWork() {
        history.push('/work');
        toggleNavBar();
    }
    function goAbout() {
        history.push('/about');
        toggleNavBar();
    }
    function goMake() {
        history.push('/together');
        toggleNavBar();
    }

    function initNavBar() {
        if (window.innerWidth <= 900) {
            document.getElementById("navLinks").classList.add("hidden");
        }
    }

    function toggleNavBar() {
        let navLinks = document.getElementById('navLinks');
        let upIcon = document.getElementById('upIcon');
        let downIcon = document.getElementById('downIcon');
        if (upIcon.style.display === 'none') {
            downIcon.style.display = 'none';
            upIcon.style.display = 'block';
            navLinks.classList.add("hidden");
        } else {
            upIcon.style.display = 'none';
            downIcon.style.display = 'block';
            navLinks.classList.remove("hidden");

        }
    }
      
    function updateNav() {
        let navBarIcon = document.getElementById('navBarIcon');
        let navLinks = document.getElementById("navLinks");
        let upIcon = document.getElementById('upIcon');
        let downIcon = document.getElementById('downIcon');
        if (window.innerWidth > 900 && navBarIcon) {
            navBarIcon.style.display = 'none';
            if (navLinks.classList.contains("hidden")) {
                navLinks.classList.remove("hidden");
            }
            upIcon.style.display = 'block';
            downIcon.style.display = 'none';
        } else {
            if ((downIcon && navLinks) && downIcon.style.display === 'none' && !navLinks.classList.contains("hidden")) {
                // We just came from a full view of the navbar
                navBarIcon.style.display = 'inline';
                upIcon.style.display = 'block';
                downIcon.style.display = 'none';
                navLinks.classList.add("hidden");
            }
        }
    }

    return (
        <nav className={`nav-${props.timeOfDay}`}>
            <img className="navLogo" src={logo} alt="headshot" onClick={goHome}/>
            <div id="navBarIcon" className="navBarIcon" onClick={toggleNavBar}>
                <i id="upIcon" className="fas fa-angle-up"></i>
                <i id="downIcon" className="fas fa-angle-down"></i>
            </div>
            <ul id="navLinks" className="navLinks">
                <li><button className={props.active === 1 ? 'navLink navLinkactive': 'navLink'} onClick={goWork}>My Work</button></li>
                <li><button className={props.active === 2 ? 'navLink navLinkactive': 'navLink'} onClick={goAbout}>About Me</button></li>
                <li><button className={props.active === 3 ? 'navLink navLinkactive': 'navLink'} onClick={goMake}>Get Started</button></li>
            </ul>
        </nav>
    )
}

export default Nav;