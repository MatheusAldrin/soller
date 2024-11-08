import React from 'react';
import ThumbImage from '../assets/thumb1.png';

function Cards() {
  return (
    <div className="w-[350px] h-auto bg-white rounded pt-28 px-8 pb-8 gap-4 transform transition-all duration-300 hover:scale-105">
      <p>
        Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam
        sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum
        consequat aenean libero. Blandit porta leo condimentum dolor, nisi,
        aliquet ante laoreet.
      </p>
      <div className="flex items-center mt-4">
        <img
          src={ThumbImage}
          alt="Rwanda Melflor"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="font-semibold text-lg">Rwanda Melflor</h2>
          <span className="text-sm text-gray-500">zerowaste.com</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
