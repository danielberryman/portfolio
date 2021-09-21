import './App.css';
import Card from './components/card';



function App() {
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
    <div className="container">
      {cards.map((v) => {
        return (
          <div className="col">
            <Card title={v.title} desc={v.description} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
