import React from 'react';
import Button2 from './Button2';
import Cards from './Cards';

function Quotes() {
  return (
    <section className="bg-purple-800 p-20 mt-20 pb-40">
      <div className="justify-between flex flex-row">
        <div className="flex space-betwen flex-col">
          <span className="text-yellow-400 text-xl font-medium">
            Join other Sun harvesters
          </span>
          <h2 className="text-6xl font-extrabold pt-2 text-white">
            Make something awesome
          </h2>
          <p className="text-xl pt-6 pb-12 text-white max-w-[900px]">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div>
          <Button2>Request a Quote</Button2>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </section>
  );
}

export default Quotes;
