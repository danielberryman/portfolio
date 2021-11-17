import Card from "./Card";
import "../Css/ComponentStyles/FeaturedProject.css";

function FeaturedProject(props) {
  return (
    <Card type="featuredProject" bg={props.bg}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="card">
            <h2>{props.title}</h2>
        </div>
        <div className="cardOverlay">
            <h3 className="cardOverlayContent cardOverlayTitle">{props.title}</h3>
            <h5 className="cardOverlayContent cardOverlayTagline">{props.tagline}</h5>
            <p className="cardOverlayContent cardOverlayDesc">{props.desc}</p>
            <p className="cardOverlayContent cardOverlayTech">{props.tech}</p>
        </div>
      </a>
    </Card>
  )
}

export default FeaturedProject;
