import Card from "./Card";
import "../Css/ComponentStyles/FeaturedProject.css";

function FeaturedProject(props) {
  return (
    <div className="projects-container">
      <Card title={props.project.title} 
          tagline={props.project.tagline ? props.project.tagline : "Need a tagline here" } 
          desc={props.project.description} cardBg={props.project.bg} tech={props.project.tech} 
          link={props.project.link} />
    </div>
  )
}

export default FeaturedProject;
