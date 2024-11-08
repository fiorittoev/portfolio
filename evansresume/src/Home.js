import devpostLogo from './images/devpost.png';
import githubLogo from './images/github.png';
import profilePhoto from './images/evan.png';
import linkedInLogo from './images/linkedin.png';
import bulletPoint from './images/bulletPoint.png';
import {useParallax} from "react-scroll-parallax";
import './Home.css';

function Home() {

    return (
      <div className="Home">

        <div className="Left-panel">
        </div>

        <header className="Center-panel">
          <img src={profilePhoto} className="Profile-photo" alt="evan"/>

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
            Minor : Information Technology<br></br>
            Concenteration in Software Engineering
          </div>

          <div className="Objective">
            Objective Statement
            <p className="Objective-body">
            Looking to apply and expand upon my technical and cooperative skills in a professional
            environment within the field of software design
            </p>
          </div>

          <div className="Coursework">
            Relevant Coursework
            <p className="Coursework-body">
              <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point"></img>
                College Algebra and Trigonometry
              <br></br>
              <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point"></img>
                Calculus I
              <br></br>
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point"></img>
                Calculus II
              <br></br>
              <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point"></img>
                Calculus III
              <br></br>
              <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point"></img>
                Physics I
              <br></br>
              <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point"></img>
                Physics II
              <br></br>
              <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point"></img>
              <br></br>
            </p>
          </div>
        </header>

        <div className="Right-panel">
        </div>
      </div>
    );
  }
  
  export default Home;