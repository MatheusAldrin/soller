import React from 'react';
import Button2 from './Button2';
import Macbook from '../assets/Macbook.png';

function Power() {
  return (
    <section className="bg-light-purple p-20 pb-10">
      <div className="px-40 justify-between flex flex-row items-center">
        <div className="flex space-betwen flex-col">
          <span className="text-yellow-400 text-xl font-medium">
            Get the Sun to power your home
          </span>
          <h2 className="text-6xl font-extrabold pt-2 text-white ">
            All the power that you need for <br /> your house is now available
          </h2>
        </div>
        <div className="">
          <Button2>Request a Quote</Button2>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <img src={Macbook} alt="" className="w-auto h-auto" />
      </div>
    </section>
  );
}

export default Power;
