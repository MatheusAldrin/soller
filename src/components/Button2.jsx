import React from 'react';

function Button2({ children, onClick }) {
  return (
    <button
      className={
        'group border-2 border-yellow-400 pl-12 py-4 cursor-pointer text-yellow-400 rounded-full font-bold text-xl inline-block max-w-max hover:bg-yellow-400 hover:text-purple-800 transition-colors duration-300'
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
            className="top-0 ml-2 stroke-yellow-400 stroke-2 stroke-linecap-round fill-none transition-colors duration-300 group-hover:stroke-purple-800"
          >
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </span>
      </span>
    </button>
  );
}

export default Button2;
