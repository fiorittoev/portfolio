import './Home.css';
import devpostLogo from './images/devpost.png';
import githubLogo from './images/github.png';
import profilePhoto from './images/evan.png';
import linkedInLogo from './images/linkedin.png';
import Coursework from './components/coursework';
import Proficiencies from './components/proficiencies';
import bulletPoint from './images/bulletPoint.png';
import scanLines from './images/scanlines.gif';
import velocIT from './images/velocit.png';
import carbonCount from './images/carboncount.png';
import system82 from './images/system82.png';
import led from './images/ledphonecase.png';
import pLink from './images/project-link.svg';
import aLink from './images/award-link.svg';
import downArrow from './images/down-arrow.gif';


function Home() {

    return (
      
      <div className="Home">
        <div class="gif-overlay">
          <img src={scanLines} alt="Overlay GIF"></img>
        </div>
        <div className = "NavBar"> 
          <div className = "NavBarLeft">
            Evan Fioritto
          </div>
          <div className="NavBarRight">
            <a href="#about" class="nav-link">About </a>
            <a href="#experience" class="nav-link">Experience </a>
            <a href="#projects" class="nav-link">Projects </a>
            <a href="#skills" class="nav-link">Skills</a>
          </div>
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

          <div className="Body">
            <img src={downArrow} className="Down-arrow" alt="down arrow" />
            <div id="about" className="Objective">
              <b>About Me</b>
              <p className="Objective-body">
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Aspiring Software Engineer with hands-on experience as a Research Assistant where Python programs were designed to manage large datasets.<br />
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Demonstrates a strong foundation in software engineering concepts, particularly through work on machine learning models with a focus on LSTM implementations.<br />
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Skilled in programming languages and tools such as C++, Python, Git, and Selenium.<br />
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Eager to apply analytical skills and technological expertise in contributing to strategic processes and supporting divisional needs in an internship position.<br />
              </p>
            </div>
            <div id ="experience" className="Experience-header">
              <b>Work Experience</b>
              <div className="Experience-title">
                Research Assistant II @ Michigan State University
                <div className="Experience-specs">
                  <i>May. 2024 - Nov. 2024</i>
                </div>
                <div className="Experience-detail">
                  <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Led efforts to design and implement multiple python programs to scrape, track,<br />
                  and manage desired files on a large scale from an online library to complete a dataset. <br/>
                  <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Successfully procured and verified over 20,000 files via Selenium and OCR processing. <br/>
                  <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Experimented with scaling up a LSTM machine learning model to predict and score integrative complexity of a body of text. <br/>
                  <a target="_blank" href="https://github.com/fiorittoev/ARC-Collection-Script" rel="noreferrer ">Implementation Link</a>
                </div>
              </div>
            </div>
            <div id="projects" className="Projects-container">
              <div className="Projects-title">
                <b>Personal Projects</b>
              </div>
              <div className="Projects-body">
                <div className="Project">
                  <div className="Project-title">StreetMeet (In Progress)</div>
                  <div className="Project-specs">Present</div>
                  <div className="Project-body">
                  </div>
                  <div className="Project-link"></div>
                </div>
                <div className="Project">
                  <img className="Project-image" src={velocIT} alt="VelocIT"/>
                  <div className="Project-title">VelocIT</div>
                  <div className="Project-specs">Oct. 2024</div>
                  <div className="Project-subtitle">Career Fair Optimization App</div>
                  <div className="Project-body">
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Developed backend infrastructure using Firebase for real-time data management, user authentication, and profile management <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Integrated geolocation services to connect users with nearby recruiters and facilitate networking. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Collaborated in leveraging Groq AI API for skill summaries and tailored networking recommendations. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Presented at MHacks 2024<br/>
                  </div>
                  <a target="_blank" href="https://devpost.com/software/velocit" rel="noreferrer"><img src={pLink} className="Project-link" alt="project link"/></a>
                </div>
                <div className="Project">
                  <img className="Project-image" src={carbonCount} alt="Carbon count"/>
                  <div className="Project-title">CarbonCount</div>
                  <div className="Project-specs">Feb. 2024</div>
                  <div className="Project-subtitle">Competitive Emmisions Tracker</div>
                  <div className="Project-body">
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Built a full-stack web application using Node.js and HTML/CSS. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Integrated Google Maps API, Kintone, and Auth0 for user authentication and data storage. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Calculated and tracked users' carbon emissions during transit, enabling competition for the lowest emissions. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Won "Best Auth0 Application" and "Best Use of Kintone" awards at Grizzhacks 6<br/>
                  </div>
                  <a target="_blank" href="https://devpost.com/software/carboncounter" rel="noreferrer"><img src={pLink} className="Project-link" alt="project link"/></a>
                </div>
                <div className="Project">
                  <img className="Project-image" src={system82} alt="System82"/>
                  <div className="Project-title">System82</div>
                  <div className="Project-specs">Jan. 2024</div>
                  <div className="Project-subtitle">Interactive Puzzle Experience</div>
                  <div className="Project-body">
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Interactive Puzzle Experience <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Developed an interactive puzzle website using Flask framework. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Designed puzzles requiring users to manipulate and interact with webpage elements to advance. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Won "Best Artistic Application" award at Sparahack 9.<br/>
                  </div>
                  <a target="_blank" href="https://devpost.com/software/system82" rel="noreferrer"><img src={pLink} className="Project-link" alt="project link"/></a>
                </div>
                <div className="Project">
                  <img className="Project-image" src={led} alt="LED"/>
                  <div className="Project-title">LED Phone Case</div>
                  <div className="Project-specs">Jan. 2023</div>
                  <div className="Project-subtitle">Creative Hardware Prototype</div>
                  <div className="Project-body">
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Functional iPhone SE phone case design custom printed using Autodesk 360 outfitted to comfortably house and operate an Arduino-powered LED ring running user uploaded code. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Designed for MSU Design Day and was a winner in the EGR 100 design competition. <br/>
                  </div>
                  <a target="_blank" href="https://designday.msu.edu/wp-content/uploads/2023/04/Design_Day_Spring_2023_web_RED_final.pdf" rel="noreferrer"><img src={pLink} className="Project-link" alt="project link"/></a>
                </div>
              </div>
            </div>
            <div id="awards" className="Awards-container">
              <b>Awards</b>
              <div className="Awards-body">
                <div className="Award">
                  <div className="Award-title">John K Welch Endowed Scholarship</div>
                  <div className="Award-specs">Jul 2024</div>
                  <div className="Award-body">"Recipients will be students who demonstrate financial need and who are pursuing degrees in the College of Engineering with a preference for students that have a focus on information technology in the healthcare industry."</div>
                  <a target="_blank" href="https://finaid.msu.edu/undergrad/undergrad-scholarships/undergrad-scholarship-searches#stateprograms" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">Michigan Competitive Scholarship</div>
                  <div className="Award-specs">Jan 2023</div>
                  <div className="Award-body">"The Michigan Competitive Scholarship is available to undergraduate students pursuing their first degree and is based on both financial need and merit. To be considered, a student must take the SAT (Class of 2017 and beyond) prior to entering college and achieve a qualifying score of at least 1200."</div>
                  <a target="_blank" href="https://www.michigan.gov/mistudentaid/programs/michigan-competitive-scholarship" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">SpartaHack 9 Winner</div>
                  <div className="Award-specs">Jan 2024</div>
                  <div className="Award-body">Interactive Media Track - Best Artistic Application: "You wonder how art and technology combine in the best way possible? The best artistic application in interactive media will show how that can be done!"</div>
                  <a target="_blank" href="https://spartahack-9.devpost.com/" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">GrizzHacks 6 Winner</div>
                  <div className="Award-specs"></div>
                  <div className="Award-body"></div>
                  <a target="_blank" href="https://grizzhacks-6.devpost.com/" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">MSU Design Day EGR 100 Winner</div>
                  <div className="Award-specs"></div>
                  <div className="Award-body"></div>
                  <a target="_blank" href="https://designday.msu.edu/wp-content/uploads/2023/04/Design_Day_Spring_2023_web_RED_final.pdf" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">Dean's List</div>
                  <div className="Award-specs"></div>
                  <div className="Award-body"></div>
                  <a target="_blank" href="https://reg.msu.edu/academicprograms/Print.aspx?Section=294" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
              </div>
            </div>
            <div className="Button-lists">
              <Proficiencies/>
              <Coursework />
            </div>
          </div>
        </header>
      </div>
    );
  }
  
  export default Home;