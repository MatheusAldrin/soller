import React from 'react';
import Button2 from './Button2';
import Macbook from '../assets/Macbook.png';
import '../components/Global.css';

function Power() {
  return (
    <section className="bg-purple-800 sm:bg-light-purple p-16 sm:p-20 sm:pb-10 text-center sm:text-left">
      <div className="sm:px-40 justify-between flex-col flex sm:flex-row items-center">
        <div className="p-4 sm:-0 flex space-betwen flex-col">
          <span className="text-yellow-400 text-xl font-medium">
            Get the Sun to power your home
          </span>
          <h2 className="font-bold text-3xl sm:text-6xl sm:font-extrabold pt-2 text-white ">
            <span className="sm:block hidden">
              All the power that you need for <br /> your house is now available
            </span>
            <span className="sm:hidden block">
              All the power that you need for your house is now available
            </span>
          </h2>
        </div>
        <div className="pt-5 sm:pt-0">
          <Button2>Request a Quote</Button2>
        </div>
      </div>
      <div className="flex justify-center pt-20 relative">
        <img src={Macbook} alt="" className="w-auto h-auto z-10" />
        <div className="before-circleEnd sm:hidden" />
      </div>
    </section>
  );
}

export default Power;
