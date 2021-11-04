import './App.scss';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import SvgLine from './components/SvgLine';
import Nav from './components/Nav';
import PageTitle from './components/PageTitle';
// import Skills from './components/Skills';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const date = new Date();
  let time = "day";
  // eslint-disable-next-line no-unused-vars
  if (date.getHours() >= 23) {
    document.body.style.backgroundColor = "rgb(75, 75, 75)";
    time = "night";
  } else {
    document.body.style.backgroundColor = "white";
  }

  let navIconActive = false;
  if (window.screen.width > 1100) {
    navIconActive = true;
  }

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/work">
              <Nav timeOfDay={time} active={1} navIconActive={navIconActive ? "active" : ""} />
              <PageTitle title='Skills'/>
              {/* <Skills /> */}
              <PageTitle title='Featured'/>
              <Projects />
              <PageTitle title='Code Pens'/>
            </Route>
            <Route path="/svg">
              <SvgLine />
            </Route>
            <Route path="/about">
              <Nav timeOfDay={time} active={2} />
              <PageTitle title='About Me'/>
              {/* <SvgLine /> */}
            </Route>
            <Route path="/together">
              <Nav timeOfDay={time} active={3} />
              <PageTitle title="Let's Make Something!"/>
              {/* <SvgLine /> */}
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
