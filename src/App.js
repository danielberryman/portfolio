import './App.scss';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import SvgLine from './components/SvgLine';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const date = new Date();
  let time = "day";
  // eslint-disable-next-line no-unused-vars
  if (date.getHours() >= 0) {
    document.body.style.backgroundColor = "rgb(75, 75, 75)";
    time = "night";
  } else {
    document.body.style.backgroundColor = "white";
  }
  console.log(time);

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/projects">
              <Nav />
              <Projects />
            </Route>
            <Route path="/svg">
              <SvgLine />
            </Route>
            <Route path="/">
              <Welcome timeOfDay={time} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
