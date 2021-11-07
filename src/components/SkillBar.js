import "../Css/ComponentStyles/SkillBar.css"

function SkillBar(props) {
    return (
        <div className="skillBarContainer">
            <h3>{props.title}</h3>
            <p>({props.percent/10})</p>
            <div style={{width: `${props.percent}%`}}></div>
        </div>
    )
}

export default SkillBar;