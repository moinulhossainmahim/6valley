'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const Tabs = ({ children } : { children: any[] }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e: any, newActiveTab: any) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-1/2">
        {children.map(child => (
          <button
            key={child.props.label}
            className={`${child.props.label === 'New Arrivals' ? 'flex gap-2' : ''}transition-all ${
              activeTab === child.props.label ? 'border-b-[3px] border-[#1b7fed] py-2 text-[#1b7fed]' : 'text-gray-700 py-2 border-b-[3px] border-transparent'
            }`}
            onClick={e => handleClick(e, child.props.label)}
          >
            {child.props.label}
            {child.props.label === 'New Arrivals' ? (
              <Image src='/assets/new-arrival.png' style={{ height: '25px', width: '25px' }} height={100} width={100} alt="flower-img" />
            ) : null }
          </button>
        ))}
      </div>
      <div className="pt-8 w-[80%]">
        {children.map(child => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, children } : { label: any, children: any }) => {
  return (
    //@ts-ignore
    <div label={label} className="hidden">
      {children}
    </div>
  );
};

export { Tabs, Tab };
