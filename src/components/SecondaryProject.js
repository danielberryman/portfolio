import '../Css/ComponentStyles/SecondaryProject.css'

function SecondaryProject(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="">
        <h2>{props.title}</h2>
      </div>
      <div className="">
        <h3 className="">{props.title}</h3>
        <p className="">{props.description}</p>
        <p className="">{props.tech}</p>
      </div>
    </a>
  )
}

export default SecondaryProject;