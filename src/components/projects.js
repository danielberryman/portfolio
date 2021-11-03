import Card from './Card';
import '../Css/ComponentStyles/Projects.css';

function Projects() {
    const cards = [
        { 
          title: 'First Card', 
          description: 'lorem ipsum kjbaksjbc akjsbkjbasc aljlkbkjasbcas kjbascjkbssckbkjcac' 
        },
        { 
          title: 'Second Card', 
          description: 'lorem ipsum kjbaksjbc akjsbkjbasc aljlkbkjasbcas kjbascjkbssckbkjcac' 
        },
        { 
          title: 'Third Card', 
          description: 'lorem ipsum kjbaksjbc akjsbkjbasc aljlkbkjasbcas kjbascjkbssckbkjcac' 
        },
        { 
          title: 'Fourth Card', 
          description: 'lorem ipsum kjbaksjbc akjsbkjbasc aljlkbkjasbcas kjbascjkbssckbkjcac' 
        },
        { 
          title: 'Fifth Card', 
          description: 'lorem ipsum kjbaksjbc akjsbkjbasc aljlkbkjasbcas kjbascjkbssckbkjcac' 
        },
        { 
          title: 'Sixth Card', 
          description: 'lorem ipsum kjbaksjbc akjsbkjbasc aljlkbkjasbcas kjbascjkbssckbkjcac' 
        },
        { 
          title: 'Seventh Card', 
          description: 'lorem ipsum kjbaksjbc akjsbkjbasc aljlkbkjasbcas kjbascjkbssckbkjcac' 
        },
        { 
          title: 'Eighth Card', 
          description: 'lorem ipsum kjbaksjbc akjsbkjbasc aljlkbkjasbcas kjbascjkbssckbkjcac' 
        }
    ];
    
  return (
    <div className="projects-container">
        {cards.map((v) => {
            return (
                <Card title={v.title} desc={v.description} styling={'full'} />
            )
        })}
    </div>
  )
}

export default Projects