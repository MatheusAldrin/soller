import React from 'react';
import arrowIcon from '../assets/seta.svg';

function Button({ children, icon = arrowIcon, onClick }) {
  return (
    <button
      className={
        'group border-2 border-purple-800 pl-12 py-4 cursor-pointer text-purple-800 rounded-full font-bold text-xl inline-block max-w-max hover:bg-purple-800 hover:text-yellow-400 transition-colors duration-300'
      }
      onClick={onClick}
    >
      {children}
      <span className="ml-6 mr-6 transition-all duration-300 stroke-purple-800 ">
        <span className="inline-block">
          <svg
            viewBox="0 0 13 10"
            height="12px"
            width="18px"
            className="top-0 ml-2 stroke-purple-800 stroke-2 stroke-linecap-round fill-none transition-colors duration-300 group-hover:stroke-yellow-400"
          >
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </span>
      </span>
    </button>
  );
}

export default Button;
