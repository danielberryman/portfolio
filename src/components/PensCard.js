import '../Css/ComponentStyles/PensCard.css';
import parse from 'html-react-parser';

export const PensCard = (props) => {
    return (
        <div className="pensCard" >
            <h4>{ props.data.title }</h4>
            {/* <p>{ props.data.tagline }</p> */}
            { parse(props.data.html) }
        </div>
    )
}
