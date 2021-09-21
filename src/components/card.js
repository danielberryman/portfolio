import '../App.css';
import './card.css';

function Card(props) {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card;