import '../App.scss';
import '../Css/ComponentStyles/Welcome.css';
import logo from '../assets/test2.png';
import { useHistory } from 'react-router-dom';

function Welcome(props) {
    const history = useHistory();
    const opacity = props.timeOfDay === 'day' ? 'dayO' : 'dayO'; 

    function handleMouseDown() {
        document.getElementById("welcome").classList.add('mouseDown');
    }
    
    function handleMouseUp() {
        let el = document.getElementById("welcome")
        el.classList.remove('mouseDown');
        const css = `.welcome-container:hover {
            height: 250px;
            width: 250px;
            margin-top: -125px;
            margin-left: -125px;
        }`;
        const style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        el.appendChild(style);
        el.classList.add('fadeout');
        setTimeout(() => {
            history.push('/work');
        },1000);
    }

    return (
        <div id="welcome" className="welcome-container" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
            <div className={`child circle ${opacity}`}></div>
            <img className={`child img ${props.timeOfDay}`} src={logo} alt="headshot"/>
        </div>
    )
}

export default Welcome;