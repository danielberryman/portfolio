import '../App.scss';
import '../Css/ComponentStyles/CardHover.css';

function CardHover(props) {
    return (
        <div className={`card ${props.styling}`}>
            <h3>{props.title}</h3>
            <h5>{props.tagline}</h5>
            <p>{props.desc}</p>
        </div>
    )
}

export default CardHover;