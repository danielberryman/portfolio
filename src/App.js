import './App.scss';
import Welcome from './components/Welcome';
import Projects from './components/projects';
import SvgLine from './components/SvgLine';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CustomCursor from './4chan.svg';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/svg">
              <SvgLine />
            </Route>
            <Route path="/">
              <Welcome style={{ cursor: 'url(' + CustomCursor + ', auto)' }} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
