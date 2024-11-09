import devpostLogo from './images/devpost.png';
import githubLogo from './images/github.png';
import profilePhoto from './images/evan.png';
import linkedInLogo from './images/linkedin.png';
import Coursework from './components/coursework';
import Proficiencies from './components/proficiencies';
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
                <div className="Profile-text">
                  <div className="Title"><b>Evan Fioritto</b></div>

                  <div className="Desc">
                    <b>Junior</b><i> @ Michigan State University</i> <br></br>
                    <b>Major</b><i> : Computer Science</i><br></br>
                    <b>Minor</b><i> : Information Technology</i><br></br>
                    <p style={{fontSize: '2.5vmin'}}>
                      <i>Concentration in Software Engineering</i>
                    </p>
                  </div>

                  <div className="Links">
                      <a target="_blank" href="https://devpost.com/fiorittoev" rel="noreferrer"><img src={devpostLogo} className="logo" alt="devpost"/></a>
                      <a target="_blank" href="https://github.com/fiorittoev" rel="noreferrer"><img src={githubLogo} className="logo" alt="github" /></a>
                      <a target="_blank" href="https://www.linkedin.com/in/evanfioritto/" rel="noreferrer"><img src={linkedInLogo} className="logo" alt="linkedin"/></a>
                  </div>
                </div>
            </div>
          </div>

          <div className="Objective">
            About Me
            <p className="Objective-body">
            Looking to apply and expand upon my technical and cooperative skills in a professional
            environment within the field of software design
            </p>
          </div>


          <Proficiencies/>
          <Coursework />
        </header>

        <div className="Right-panel">
        </div>
      </div>
    );
  }
  
  export default Home;