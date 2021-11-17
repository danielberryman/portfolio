import './App.scss';
import Welcome from './components/Welcome';
import { fProjects, sProjects } from './common/constants/Projects';
import FeaturedProject from './components/FeaturedProject';
import SecondaryProject from './components/SecondaryProject';
import ProjectContainer from './components/ProjectContainer';
import SvgLine from './components/SvgLine';
import Nav from './components/Nav';
import PageTitle from './components/PageTitle';
import Skills from './components/Skills';
import Pens from './components/Pens';
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
        <Switch>
          <Route path="/work">
            <Nav timeOfDay={time} active={1} navIconActive={navIconActive ? "active" : ""} />
            <div className="pageContainer">
              <PageTitle title='Skills' tagline="(0-10)"/>
              <Skills />
              <PageTitle title='Featured'/>
              { fProjects.map((project) => {
                return <FeaturedProject project={project} />
              })}
              <PageTitle title='Other Projects'/>
              <ProjectContainer type="secondary">
                { sProjects.map((p) => {
                  return <SecondaryProject title={p.title}
                                           description={p.description}
                                           tech={p.tech} 
                                           link={p.link}/>
                })}
              </ProjectContainer>
              <PageTitle title='Code Pens'/>
              <Pens />
            </div>
          </Route>
          <Route path="/svg">
            <SvgLine />
          </Route>
          <Route path="/about">
            <Nav timeOfDay={time} active={2} />
            <div className="pageContainer">
              <PageTitle title='About Me'/>
            </div>
          </Route>
          <Route path="/together">
            <Nav timeOfDay={time} active={3} />
            <div className="pageContainer">
              <PageTitle title="Let's Make Something!"/>
            </div>
          </Route>
          <Route path="/">
            <Welcome timeOfDay={time} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
