import React from 'react';
import Button2 from './Button2';
import Cards from './Cards';

function Quotes() {
  return (
    <section className="bg-purple-800 p-10 sm:p-20 mt-20 pb-40">
      <div className="justify-between flex sm:flex-row flex-col text-center sm:text-left">
        <div className="flex space-betwen flex-col">
          <span className="text-yellow-400 text-xl font-medium">
            Join other Sun harvesters
          </span>
          <h2 className="font-bold text-4xl sm:text-6xl sm:font-extrabold pt-2 text-white">
            Make something awesome
          </h2>
          <p className="text-xl pt-6 pb-12 text-white max-w-[900px]">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div className="pb-20 sm:pb-0">
          <Button2>Request a Quote</Button2>
        </div>
      </div>
      <div>
        <div className="sm:flex flex-row gap-6 hidden">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="sm:hidden flex justify-center">
          <Cards />
        </div>
      </div>
    </section>
  );
}

export default Quotes;
