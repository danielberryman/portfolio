import '../Css/ComponentStyles/ProjectContainer.css'

function ProjectContainer(props) {
  return (
    <div className={`projectsContainer ${props.type}Cont`}>
      {props.children}
    </div>
  )
}

export default ProjectContainer;