import './App.scss';
import Welcome from './components/Welcome';
import { FeaturedProjects, SecondaryProjects } from './common/constants/Projects';
// import FeaturedProject from './components/FeaturedProject';
// import SecondaryProject from './components/SecondaryProject';
import Project from './components/Project';
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
  if (date.getHours() >= 24) {
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
    <div className="App-fadein">
      <Router>
        <Switch>
          <Route path="/work">
            <Nav timeOfDay={time} active={1} navIconActive={navIconActive ? "active" : ""} />
            <div className="pageContainer">
              <h1>Hello, I'm Daniel.</h1>
              <p>Web Developer | Javascript | React | Angular | VR Enthusiast | Singer/Songwriter</p>
              <p>
                <a rel="noreferrer" 
                   href="https://www.linkedin.com/in/daniel-berryman/" 
                   target="_blank" 
                   alt="linkedin page"
                   style={{textDecoration: "none", color: "blue"}}>LinkedIn</a> | 
                <a rel="noreferrer" 
                   href="https://github.com/danielberryman" 
                   target="_blank" 
                   alt="github page"
                   style={{textDecoration: "none", color: "blue"}}> Github</a>
              </p>
              <hr style={{marginTop: '25px'}}/>
              <PageTitle title='Skills' tagline="(0-10)"/>
              <Skills />
              <PageTitle title='Featured'/>
              <ProjectContainer type="featured">
                { FeaturedProjects.map((p) => {
                  return <Project title={p.title}
                                  tagline={p.tagline}
                                  description={p.description}
                                  tech={p.tech} 
                                  link={p.link} 
                                  bg={p.bg}
                                  type="featured"
                                  image={p.image} />
                })}
              </ProjectContainer>
              <PageTitle title='Other Projects'/>
              <ProjectContainer type="secondary">
                { SecondaryProjects.map((p) => {
                  return <Project title={p.title}
                                  description={p.description}
                                  tech={p.tech} 
                                  link={p.link}
                                  bg={p.bg}
                                  type="secondary"
                                  image={p.image} />
                })}
              </ProjectContainer>
              <PageTitle title='Code Pens'/>
              <Pens />
            </div>
            <footer style={{height: '48px', textAlign: 'center'}}>© Copyright 2021, Daniel Berryman</footer>
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
