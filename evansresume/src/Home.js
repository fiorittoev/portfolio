import devpostLogo from './images/devpost.png';
import githubLogo from './images/github.png';
import profilePhoto from './images/evan.png';
import linkedInLogo from './images/linkedin.png';
import Coursework from './components/coursework';
import './Home.css';

function Home() {

    return (
      <div className="Home">

        <div className="Left-panel">
        </div>

        <header className="Center-panel">

          <div className="Profile">

            <div className="Profile-details">

                <img src={profilePhoto} className="Profile-photo" alt="evan"/>
                
                <div className="Desc">
                  <div className="Title">Evan Fioritto</div>
                  <b>Junior</b> @ Michigan State University<br></br>
                  <b>Major</b> : Computer Science<br></br>
                  <b>Minor</b> : Information Technology<br></br>
                  <p style={{fontSize: 'calc(5px + 2vmin)'}}>
                    <i>Concentration in Software Engineering</i>
                  </p>
                  <div className="Links">
                    <a target="_blank" href="https://devpost.com/fiorittoev" rel="noreferrer"><img src={devpostLogo} className="logo" alt="devpost"/></a>
                    <a target="_blank" href="https://github.com/fiorittoev" rel="noreferrer"><img src={githubLogo} className="logo" alt="github" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/evanfioritto/" rel="noreferrer"><img src={linkedInLogo} className="logo" alt="linkedin"/></a>
                  </div>
                </div>

                
            </div>

              

          </div>

          <div className="Objective">
            Objective Statement
            <p className="Objective-body">
            Looking to apply and expand upon my technical and cooperative skills in a professional
            environment within the field of software design
            </p>
          </div>

          <Coursework />
        </header>

        <div className="Right-panel">
        </div>
      </div>
    );
  }
  
  export default Home;