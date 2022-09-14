import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid';

const BackButton = ({ label, children }) => {
  const navigate = useNavigate();
  const handleClick = (params) => {
    navigate(-1);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="group flex font-semibold text-sm leading-6 text-slate-600 hover:text-slate-400 trans transition-all duration-200"
      >
        <ChevronLeftIcon className="h-6" />
        {children || label}
      </button>
    </div>
  );
};

export default BackButton;
