import '../App.scss';
import '../Css/ComponentStyles/Card.css';

function Card(props) {
    return (
        <div className={`card ${props.styling}`}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card;