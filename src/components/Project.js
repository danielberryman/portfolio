import '../Css/ComponentStyles/Project.css';
import Card from './Card';

function Project(props) {
  return (
    <Card type={props.type} bg={props.bg}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="card">
            <h2>{props.title}</h2>
            { props.tagline &&
              <h5 className="cardOverlayContent cardOverlayTagline">{props.tagline}</h5>
            }
            <p className="cardOverlayContent cardOverlayDesc">{props.desc}</p>
            <p className="cardOverlayContent cardOverlayTech">{props.tech}</p>
        </div>
        <div className="cardOverlay" style={{backgroundImage: `url('../assets/${props.image}')`}}>
          <h2>CHECK IT OUT</h2>
        </div>
      </a>
    </Card>
  )
}

export default Project;