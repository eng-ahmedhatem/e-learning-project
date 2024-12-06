import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ title, children ,status}) => {
  const [isOpen, setIsOpen] = useState(status);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={ ` ${isOpen ? 'active' : ''} shadow-lg mt-5 transition acordion bg-white p-4 rounded-3xl pb-0 cursor-pointer `}>
      <div className="acordion-head border  flex justify-between items-center rounded-xl bg-[#f3f4f6]" onClick={toggleAccordion}>
        <h3 className="mr-5 acord_title text-base md:text-xl !text-slate-300">{title}</h3>
        <span className={`text-5xl md:text-6xl font-normal ${isOpen ? 'rotate-180' : ''}`}>
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className={`acordion-body  transition mt-5 bg-[#f3f4f6] rounded-xl ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
