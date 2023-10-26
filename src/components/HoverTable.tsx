import React, { useState } from 'react';

interface ExperiencesProps {
    company: string;
    role: string;
    duration: string;
    year: string;
    description: JSX.Element;
}

const HoverTable: React.FC<ExperiencesProps>= ({ company, role, duration, year, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onMouseEnter={toggleExpand}
      onMouseLeave={toggleExpand}
      className={isExpanded? 'border-y-2 border-darkbrown py-5':"py-5"}
    >
        <div className="flex flex-row gap-24">
            <p className="text-other w-1/5">{isExpanded? duration : year}</p>
            <div className="flex flex-col w-4/5">
                <h1 className="text-company">{company}</h1>
                <h2 className="text-role mt-2">{role}</h2>
            </div>
        </div>
        {isExpanded && <div className="text-other mt-4 px-10">{description}</div>}
    </div>
  );
};

export default HoverTable;
