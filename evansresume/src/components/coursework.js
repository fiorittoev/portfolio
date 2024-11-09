import React, { useState } from 'react';
import bulletPoint from '../images/bulletPoint.png';
const Coursework = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className="Coursework">
      <button className="Coursework-header" onClick={toggleDropdown}>
        Show Relevant Coursework
      </button>
      <div className={`Coursework-body ${isOpen ? 'open' : ''}`}>
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" />
        College Algebra and Trigonometry
        <br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" />
        Calculus I
        <br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" />
        Calculus II
        <br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" />
        Calculus III
        <br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" />
        Physics I
        <br />
        <img src={bulletPoint} className="Bullet-Point" alt="Bullet Point" />
        Physics II
        <br />
      </div>
    </div>
  );
};

export default Coursework;
