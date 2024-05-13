import logo from './logo.svg';
import devpostLogo from './images/devpost.png';
import githubLogo from './images/github.png';
import linkedInLogo from './images/linkedin.png';
import {useParallax} from "react-scroll-parallax";
import './Home.css';

function Home() {

    //const parallax = useParallax({
    //  rotate:[0,100],
    //});

    return (
      <div className="Home">

        <div className="Left-panel">
        </div>

        <header className="Home-header">

          <img src={logo} className="Home-logo" alt="logo" />

          <h1 className="Title">
            Evan Fioritto
          </h1>
          
          <div className="Links">
              <a target="_blank" href="https://devpost.com/fiorittoev" rel="noreferrer"><img src={devpostLogo} className="Devpost-logo" alt="devpost"/></a>
              <a target="_blank" href="https://github.com/fiorittoev" rel="noreferrer"><img src={githubLogo} className="Github-logo" alt="github" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/evanfioritto/" rel="noreferrer"><img src={linkedInLogo} className="Linkedin-logo" alt="linkedin"/></a>
          </div>

          <h2 className="Desc">
            Junior in CS and IT at Michigan State University
          </h2>

        </header>

        <div className="Right-panel">
        </div>


      </div>
    );
  }
  
  export default Home;