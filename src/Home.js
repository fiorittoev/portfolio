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
import thereMINIT from './images/theremini.jpg';
import carbonCount from './images/carboncount.png';
import system82 from './images/system82.png';
import led from './images/ledphonecase.png';
import pLink from './images/project-link.gif';
import aLink from './images/award-link.svg';
import downArrow from './images/down-arrow.gif';
import rLink from './images/resume-link.svg';


function Home() {

    return (
      
      <div className="Home">
          <img class="gif-overlay" src={scanLines} alt="Overlay GIF"></img>
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

        <div className="Resume-download">
          <a 
            href="./evan_fioritto_resume.pdf" 
            download="Evan_Fioritto_SWE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rLink} alt="Download Resume" className="Download-link" />
            Download Resume
          </a>
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
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Aspiring Software Engineer with experience in full-stack development, machine learning, and automation<br />
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Skilled in Python, C++, Java, and
                React, with hands-on experience in web scraping, NLP, and real-time data processing<br />
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Proven ability to integrate AI, optimize workflows,
                and develop interactive applications through research and hackathon projects<br />
                <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Seeking a software engineering internship to apply technical
                expertise and problem-solving skills in impactful projects<br />
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
                  <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Developed a Python-based web scraping pipeline using Selenium to automate bulk data collection from financial databases, improving
                  data retrieval efficiency<br/>
                  <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Implemented NLP and OCR techniques with PyMuPDF, docTr, and icgauge to extract, verify, and analyze textual data from PDFs,
                  enhancing data accuracy<br/>
                  <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Designed and maintained structured data pipelines using pandas, scikit-learn, and SQL-like CSV processing to track, validate, and process
                  large datasets<br/>
                  <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Optimized file handling and automation scripts, ensuring robust error handling and seamless reruns for large-scale data collection and
                  analysis.<br/>
                  <div className="Project-link">
                    <a target="_blank" href="https://github.com/fiorittoev/ARC-Collection-Script" rel="noreferrer">
                      <img src={pLink} className="Project-link-image" alt="Project link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="projects" className="Projects-container">
              <div className="Projects-title">
                <b>Personal Projects</b>
              </div>
              <div className="Projects-body">
                <div className="Project">
                  <img className="Project-image" src={thereMINI} alt="thereMINI"/>
                  <div className="Project-title">thereMINI</div>
                  <div className="Project-specs">Feb. 2025</div>
                  <div className="Project-body">
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Designed and implemented an accessible, motion-based MIDI controller using the FREE-WILi device, enabling intuitive one-handed
                    music creation through hand gestures<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Developed a real-time sensor-to-MIDI pipeline by processing accelerometer data with C++, C, and Python, sending through serial data
                    and integrating it with loopMIDI and DAWs like Ableton<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Optimized signal processing and ergonomic mapping of hand movements to pitch, volume, and note selection, ensuring precise and intuitive
                    musical control<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Overcame hardware-software integration challenges by refining data transmission, filtering accelerometer noise, and troubleshooting USB
                    connectivity between WSL and Windows<br/>
                  </div>
                  <div className="Project-link">
                    <a target="_blank" href="https://devpost.com/software/theremini" rel="noreferrer">
                      <img src={pLink} className="Project-link-image" alt="Project link" />
                    </a>
                  </div>
                </div>
                <div className="Project">
                  <img className="Project-image" src={velocIT} alt="VelocIT"/>
                  <div className="Project-title">VelocIT</div>
                  <div className="Project-specs">Oct. 2024</div>
                  <div className="Project-subtitle">Career Fair Optimization App</div>
                  <div className="Project-body">
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Developed a React Native application using Expo and Firebase to enhance career fair networking through geolocation-based recruiter
                    discovery<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Integrated Groq AI to generate personalized conversation starters and career insights, improving user engagement and follow-up actions<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Overcame platform limitations by adapting iOS development to Windows PCs, utilizing Expo Go and Firebase for seamless cross-platform
                    functionality<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Implemented real-time location tracking with Expo-location and Firebase to connect users with nearby recruiters, replacing an initial
                    Bluetooth Low Energy (BLE) approach<br/>
                  </div>
                  <div className="Project-link">
                    <a target="_blank" href="https://devpost.com/software/velocit" rel="noreferrer">
                      <img src={pLink} className="Project-link-image" alt="Project link" />
                    </a>
                  </div>
                </div>
                <div className="Project">
                  <img className="Project-image" src={carbonCount} alt="Carbon count"/>
                  <div className="Project-title">CarbonCount</div>
                  <div className="Project-specs">Feb. 2024</div>
                  <div className="Project-subtitle">Competitive Emmisions Tracker</div>
                  <div className="Project-body">
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Developed a Node.js backend integrating Google Maps API, Kintone, and Auth0 to track and analyze users’ carbon emissions from personal
                    transportation<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Designed a real-time leaderboard system that dynamically updates user scores based on transportation choices, fostering engagement
                    through competition<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Overcame challenges with new technologies by learning and implementing Kintone, Google APIs, and Auth0 despite limited documentation and prior experience<br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Gained experience in API integration and user-focused design, creating an interactive platform that encourages sustainable transportation
                    choices through gamification<br/>
                  </div>
                  <div className="Project-link">
                    <a target="_blank" href="https://devpost.com/software/carboncounter" rel="noreferrer">
                      <img src={pLink} className="Project-link-image" alt="Project link" />
                    </a>
                  </div>
                </div>
                <div className="Project">
                  <img className="Project-image" src={system82} alt="System82"/>
                  <div className="Project-title">System82</div>
                  <div className="Project-specs">Jan. 2024</div>
                  <div className="Project-subtitle">Interactive Puzzle Experience</div>
                  <div className="Project-body">
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Developed an interactive puzzle website using Flask framework. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Designed puzzles requiring users to manipulate and interact with webpage elements to advance. <br/>
                    <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Won "Best Artistic Application" award at Sparahack 9.<br/>
                  </div>
                  <div className="Project-link">
                    <a target="_blank" href="https://devpost.com/software/system82" rel="noreferrer">
                      <img src={pLink} className="Project-link-image" alt="Project link" />
                    </a>
                  </div>
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
                  <div className="Project-link">
                    <a target="_blank" href="https://designday.msu.edu/wp-content/uploads/2023/04/Design_Day_Spring_2023_web_RED_final.pdfr" rel="noreferrer">
                      <img src={pLink} className="Project-link-image" alt="Project link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="awards" className="Awards-container">
              <b>Awards</b>
              <div className="Award">
                  <div className="Award-title">Spartahack X Winner</div>
                  <div className="Award-specs">Jul 2024</div>
                  <div className="Award-body"><b>Best Use of FREE-WiLi application</b></div>
                  <a target="_blank" href="https://spartahack-x.devpost.com/" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
              <div className="Awards-body">
                <div className="Award">
                  <div className="Award-title">John K Welch Endowed Scholarship</div>
                  <div className="Award-specs">Jul 2024</div>
                  <div className="Award-body"></div>
                  <a target="_blank" href="https://finaid.msu.edu/undergrad/undergrad-scholarships/undergrad-scholarship-searches#stateprograms" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">GrizzHacks 6 Winner</div>
                  <div className="Award-specs">Feb 2024</div>
                  <div className="Award-body"><b>Best Use of Auth0</b><br/>
                                              <b>Best Use of Kintone</b> </div>
                  <a target="_blank" href="https://grizzhacks-6.devpost.com/" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">SpartaHack 9 Winner</div>
                  <div className="Award-specs">Jan 2024</div>
                  <div className="Award-body"><b>Best Artistic Application</b> </div>
                  <a target="_blank" href="https://spartahack-9.devpost.com/" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">MSU Design Day EGR 100 Winner</div>
                  <div className="Award-specs">May 2023</div>
                  <div className="Award-body"></div>
                  <a target="_blank" href="https://designday.msu.edu/wp-content/uploads/2023/04/Design_Day_Spring_2023_web_RED_final.pdf" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">Michigan Competitive Scholarship</div>
                  <div className="Award-specs">Jan 2023</div>
                  <div className="Award-body"></div>
                  <a target="_blank" href="https://www.michigan.gov/mistudentaid/programs/michigan-competitive-scholarship" rel="noreferrer"><img src={aLink} className="Award-link" alt="award link"/></a>
                </div>
                <div className="Award">
                  <div className="Award-title">Dean's List</div>
                  <div className="Award-specs">Various Dates</div>
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

        <footer className="Footer">
          <div className="Footer-content">
            <p>© {new Date().getFullYear()} Evan Fioritto. All Rights Reserved.</p>
            <div className="Footer-links">
              <a href="https://github.com/fiorittoev" target="_blank" rel="noreferrer">GitHub</a> | 
              <a href="https://www.linkedin.com/in/evanfioritto/" target="_blank" rel="noreferrer"> LinkedIn</a> | 
              <a href="https://devpost.com/fiorittoev" target="_blank" rel="noreferrer"> Devpost</a>
            </div>
          </div>
        </footer>

      </div>
    );
  }
  
  export default Home;