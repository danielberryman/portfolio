import '../App.scss';
import '../Css/ComponentStyles/Welcome.css';
// import PushButton from './PushButton';
import logo from '../assets/test2.png';
import { useHistory } from 'react-router-dom';

function Welcome() {
    const history = useHistory();

    function handleClick() {
        history.push('/projects');
    }

    return (
        <div>
            {/* <PushButton /> */}
            <div className="logo-container" onClick={handleClick}>
                <img className="logo-img" src={logo} alt="headshot"/>
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default Welcome;