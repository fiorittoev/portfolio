import devpostLogo from './images/devpost.png';
import githubLogo from './images/github.png';
import linkedInLogo from './images/linkedin.png';
import bulletPoint from './images/bulletPoint.png';
import {useParallax} from "react-scroll-parallax";
import './Home.css';

function Home() {

    const objMoveUp = useParallax
    (
      {
        startScroll:0,
        endScroll:40,
        translateY:[150,0]
      }
    );

    const workMoveIn = useParallax
    (
      {
        startScroll:40,
        endScroll:50,
        opacity:[1,0],
        translateX:[250,0]
      }
    );


    return (
      <div className="Home">

        <div className="NavBar">
          <div className="Links">
              <a target="_blank" href="https://devpost.com/fiorittoev" rel="noreferrer"><img src={devpostLogo} className="Devpost-logo" alt="devpost"/></a>
              <a target="_blank" href="https://github.com/fiorittoev" rel="noreferrer"><img src={githubLogo} className="Github-logo" alt="github" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/evanfioritto/" rel="noreferrer"><img src={linkedInLogo} className="Linkedin-logo" alt="linkedin"/></a>
          </div>
        </div>

        <div className="Left-panel">
        </div>

        <header className="Center-panel">

          <div className="Title">
            Evan Fioritto
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