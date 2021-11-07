import Card from "./Card";
import "../Css/ComponentStyles/Projects.css";

function Projects() {
    const cards = [
        { 
          title: "JS Dates",
          tagline: "JavaScript Dates Practice",
          description: `Practice your with JavaScript date constructors! 
            Test yourself with a small, generated snippet of JavaScript. 
            Assign values to the variables for year, month, day, and hour and then click SUBMIT.
            Instructions specify local versus utc time.`,
          tech: "HTML, CSS, & JavaScript",
          bg: "jsDatesBg"
        },
        { 
          title: "Beltbook", 
          tagline: "Catalog Musical Theatre Rep",
          description: `Are you a performer? Or a musical theatre lover? Check out The Beltbook! You can create
            endless books of music categorized in whatever way you want. Search by Voice Type, Character Type, Era and more! 
            `,
          tech: "React, Django/Python, Docker",
          bg: "beltbookBg"
        }
    ];
    
  return (
    <div className="projects-container">
        {cards.map((v) => {
            return (
                <Card title={v.title} tagline={v.tagline ? v.tagline : "Need a tagline here" } desc={v.description} cardBg={v.bg} tech={v.tech} />
            )
        })}
    </div>
  )
}

export default Projects