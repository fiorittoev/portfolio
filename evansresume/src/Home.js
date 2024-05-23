import logo from './logo.svg';
import devpostLogo from './images/devpost.png';
import githubLogo from './images/github.png';
import linkedInLogo from './images/linkedin.png';
import {useParallax} from "react-scroll-parallax";
import './Home.css';

function Home() {

    const objMoveUp = useParallax({speed:30});
    const workMoveIn = useParallax({translateX:['-300px','900px']});
    return (
      <div className="Home">

        <div className="Left-panel">
        </div>

        <header className="Center-panel">

          <img src={logo} className="Home-logo" alt="logo" />

          <div className="Title">
            Evan Fioritto
          </div>
          
          <div className="Links">
              <a target="_blank" href="https://devpost.com/fiorittoev" rel="noreferrer"><img src={devpostLogo} className="Devpost-logo" alt="devpost"/></a>
              <a target="_blank" href="https://github.com/fiorittoev" rel="noreferrer"><img src={githubLogo} className="Github-logo" alt="github" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/evanfioritto/" rel="noreferrer"><img src={linkedInLogo} className="Linkedin-logo" alt="linkedin"/></a>
          </div>

          <div className="Desc">
            Junior @ Michigan State University<br></br>
            Major : Computer Science<br></br>
            Minor : Information Technology
          </div>

          <div ref={objMoveUp.ref} className="Objective">
            Objective
            <p className="Objective-body">
            Looking to apply and expand upon my technical and cooperative skills in a professional
            environment within the field of software design
            </p>
          </div>

          <div ref={workMoveIn.ref} className="Coursework">
            Relevant Coursework
            <p className="Coursework-body">
              hello
            </p>
          </div>
        </header>

        <div className="Right-panel">
        </div>


      </div>
    );
  }
  
  export default Home;