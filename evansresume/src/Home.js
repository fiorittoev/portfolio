import logo from './logo.svg';
import devpostLogo from './images/devpost.png';
import githubLogo from './images/github.png';
import linkedInLogo from './images/linkedin.png';
import './Home.css';

function Home() {
    return (
      <div className="Home">
        <header className="Home-header">

          <img src={logo} className="Home-logo" alt="logo" />

          <h1 className="Name">
            Evan Fioritto
          </h1>

          <h2 className="Name">
            Software Developer
          </h2>

          <div className="Links">

            <a target="_blank" href="https://devpost.com/fiorittoev" rel="noreferrer"><img src={devpostLogo} className="Devpost-logo" alt="devpost"/></a>
            <a target="_blank" href="https://github.com/fiorittoev" rel="noreferrer"><img src={githubLogo} className="Github-logo" alt="github" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/evanfioritto/" rel="noreferrer"><img src={linkedInLogo} className="Linkedin-logo" alt="linkedin"/></a>

          </div>

        </header>
      </div>
    );
  }
  
  export default Home;