import '../Css/ComponentStyles/Project.css'

function Project(props) {
  return (
    <div className={`${props.bg}`}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="">
          <h2>{props.title}</h2>
        </div>
        <div className="">
          <h3 className="">{props.title}</h3>
          {/* <h5 className="cardOverlayContent cardOverlayTagline">{props.description}</h5> */}
          <p className="">{props.description}</p>
          <p className="">{props.tech}</p>
        </div>
      </a>
    </div>
  )
}

export default Project;