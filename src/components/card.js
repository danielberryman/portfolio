import '../App.scss';
import '../Css/ComponentStyles/Card.css';

function Card(props) {
    return (
        <div className={`cardContainer ${props.type}ProjectCardCont ${props.bg ? props.bg : ''}`}>
           {props.children}
        </div>
    )
}

export default Card;