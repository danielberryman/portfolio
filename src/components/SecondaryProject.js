import '../Css/ComponentStyles/SecondaryProject.css';
import Card from './Card';

function SecondaryProject(props) {
  return (
    <Card type="featuredProject">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="card">
            <h2>{props.title}</h2>
        </div>
        <div className="cardOverlay">
            <h3 className="cardOverlayContent cardOverlayTitle">{props.title}</h3>
            <p className="cardOverlayContent cardOverlayDesc">{props.desc}</p>
            <p className="cardOverlayContent cardOverlayTech">{props.tech}</p>
        </div>
      </a>
    </Card>
  )
}

export default SecondaryProject;