import React, { useState } from "react";
import "./Accordion.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  function activefunction() {
      setIsActive(!isActive);
  }
  return (
    
      <div  className="accordion-container">
        <p className="accordion-title" onClick={activefunction}>
          {title} {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </p>
      
      {isActive && (
        <ul className="accordion-ul">
          {content.map((item) => (
            <li>
              <a href='/' className="accordion-list">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
