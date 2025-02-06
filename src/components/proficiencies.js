import React, { useState } from 'react';
import bulletPoint from '../images/bulletPoint.png';
const Proficiencies= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div id="skills" className="Details-section">
      <button className="Details-header" onClick={toggleDropdown}>
        <b>Show Technical Proficiencies</b>
      </button>
      <div className={`Details-body ${isOpen ? 'open' : ''}`}>
        <b>Preferred Languages with [Years of Experience]: </b><br/><br/>
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Python [3]<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> C++/C [4]<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Java [1]<br />
        <br/><b>Additional Languages with Proficiency: </b><br/><br/>
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> SQL<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Javascript<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Typescript<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> HTML/CSS<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> ARM Assembly<br />
        <br/><b>Frameworks: </b> <br/><br/>
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> React/React Native<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Flask<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Expo<br />
        <br/><b>Libraries: </b> <br/><br/>
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Selenium<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> PyTorch<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Numpy<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Panda<br />
        <br/><b>Tools: </b> <br/><br/>
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Git/Github<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> CMake<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Firebase<br />
        <br/><b>Concepts: </b> <br/><br/>
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Object Oriented Programming<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Data Structures and Algorithms<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Embedded Systems<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Web Design<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Design Patterns<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Multithreading<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Databases<br />
          <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> REST APIs<br />
      </div>
    </div>
  );
};

export default Proficiencies;
