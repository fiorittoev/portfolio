import React, { useState } from 'react';
import bulletPoint from '../images/bulletPoint.png';
const Proficiencies= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="Details-section">
      <button className="Details-header" onClick={toggleDropdown}>
        Show Technical Proficiencies
      </button>
      <div className={`Details-body ${isOpen ? 'open' : ''}`}>
        <b>Preferred Languages with [Years of Experience]: </b><br/><br/>
        Python [3], C++/C [4], Java [1] <br/>
        <br/><b>Additional Languages with Proficiency: </b><br/><br/>
        Javascript, Typescript, HTML/CSS, ARM Assembly <br/>
        <br/><b>Frameworks: </b> <br/><br/>
        React/React Native, Flask, Expo<br/>
        <br/><b>Libraries: </b> <br/><br/>
        Selenium, Expo, PyTorch, Numpy, Panda<br/>
        <br/><b>Tools: </b> <br/><br/>
        Git/Github, CMake, Firebase, AWS<br/>
        <br/><b>Concepts: </b> <br/><br/>
        Object Oriented Programming, Databases, RESTful API, Data Structures and Algorithms, Multithreading, Web Design
      </div>
    </div>
  );
};

export default Proficiencies;
