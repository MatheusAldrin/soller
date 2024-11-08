import React from 'react';
import Desktop from '../assets/Desktop.png';
import './Global.css';

function PickTheSun() {
  return (
    <section className="">
      <div className="py-20 flex flex-col items-center text-center">
        <span className="text-span-orange text-xl font-medium">
          No more waste
        </span>
        <h2 className="text-6xl font-extrabold pt-2">Pick the Sun</h2>
        <p className="max-w-4xl text-xl pt-6">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full px-4">
        <img src={Desktop} alt="desktop" className="w-auto h-auto" />
        <div className="before-circle" />
        <div className="after-circle " />
      </div>
    </section>
  );
}

export default PickTheSun;
