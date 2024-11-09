import React, { useState } from 'react';
import bulletPoint from '../images/bulletPoint.png';
const Coursework = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="Details-section">
      <button className="Details-header" onClick={toggleDropdown}>
        Show Relevant Coursework
      </button>
      <div className={`Details-body ${isOpen ? 'open' : ''}`}>
        <b>Planned Courses (Spring 2025)</b>: <br/><br/>
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Algorithm Engineering [CSE 431]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Web App Architecture and Development [CSE 477]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Info Management and the Cloud [CSE 380]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Network Management and Security [MI 361]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Understanding Media and Info [MI 101]<br />
        <br/>
        <b>Completed Courses:</b> <br/><br/>
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Matrix Algebra with Computational Applications [MTH 314]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Probability and Statistics for Engineering - Honors [STT351-H]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Algorithms and Data Structures [CSE 331]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Computer Systems [CSE 325]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Software Design [CSE 335]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Computer Organization and Architecture [CSE 320]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Multivariable Calculus [MTH 234]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Physics for Scientists and Engineers II [PHY 184]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Ethics and Professional Issues in Computer Science [CSE 300]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Discrete Structures in Computer Science [CSE 260]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Calculus II [MTH 133]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Introduction to Programming II [CSE 232]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Physics for Scientists and Engineers I [PHY 183-B]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Intro to Engineering Design [EGR 100]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Calculus I [MTH 132]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Introduction to Programming I [CSE 321]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Algorithmic Thinking and Programming [CSE 102]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> Intro to Information Science [MI 201]<br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" /> College Algebra and Trigonometry [MTH 116]<br />
      </div>
    </div>
  );
};

export default Coursework;
