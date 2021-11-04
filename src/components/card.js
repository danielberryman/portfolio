import '../App.scss';
import '../Css/ComponentStyles/Card.css';

function Card(props) {
    return (
        <div className={`cardContainer ${props.cardBg}`}>
            <div className="card">
                <h2>{props.title}</h2>
            </div>
            <div className="cardOverlay">
                <h3 className="cardOverlayContent cardOverlayTitle">{props.title}</h3>
                <h5 className="cardOverlayContent cardOverlayTagline">{props.tagline}</h5>
                <p className="cardOverlayContent cardOverlayDesc">{props.desc}</p>
                <p className="cardOverlayContent cardOverlayTech">{props.tech}</p>
            </div>
        </div>
    )
}

export default Card;