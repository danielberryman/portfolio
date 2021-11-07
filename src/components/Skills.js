import SkillBar from "./SkillBar";
import "../Css/ComponentStyles/Skills.css";

function Skills() {
    const skills = [
        {
            title: "HTML",
            percent: 50
        },
        {
            title: "CSS",
            percent: 40
        },
        {
            title: "JavaScript",
            percent: 65
        },
        {
            title: "Angular",
            percent: 50
        },
        {
            title: "React",
            percent: 40
        },
        {
            title: "Java",
            percent: 40
        }
    ];

    return (
        <div className="skillsContainer">
            {skills.map((s) => {
                return (
                    <SkillBar title={s.title} percent={s.percent} />
                )
            })}
        </div>
    )
}

export default Skills;

// Skills to conclude
// How do you actually measure these skills? And how can I improve on my metrics?

// Primary
// HTML
// CSS
// JavaScript
// Angular
// React
// SQL (Various flavors)
// Git

// Secondary
// Python
// Django
// Java
// Spring
