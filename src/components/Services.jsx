import React from 'react';
import Mobile from '../assets/Mobile.png';
import './Global.css';

function Services() {
  return (
    <section className="flex flex-row pt-40 items-center">
      <div className="max-w-[400px] h-full flex justify-center relative">
        <img src={Mobile} alt="" className=" w-auto h-auto" />
        <div className="before-mobile" />
      </div>
      <div className="pl-40">
        <div className="flex flex-col">
          <span className="text-span-orange text-xl font-medium">Services</span>
          <h2 className="text-6xl font-extrabold pt-2">
            Personalized services
          </h2>
          <p className="text-xl pt-6 pb-12">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-12 mt-10">
            <li>
              <h3 className="text-dark-blue text-2xl font-bold mb-4">
                Et mauris
              </h3>
              <p className="font-lg font-normal">
                Posuere quis sed mauris non curabitur pretium elementum eget.
                Feugiat sed maecenas eu accumsan tristique.
              </p>
            </li>
            <li>
              <h3 className="text-dark-blue text-2xl font-bold mb-4">
                Eget sit
              </h3>
              <p className="font-lg font-normal">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </li>
            <li>
              <h3 className="text-dark-blue text-2xl font-bold mb-4">
                Imperdiet pellentesque
              </h3>
              <p className="font-lg font-normal">
                Platea arcu dapibus non magna cursus lectus id sollicitudin.
                Enim viverra parturient tristique nulla.
              </p>
            </li>
            <li>
              <h3 className="text-dark-blue text-2xl font-bold mb-4">
                Non libero
              </h3>
              <p className="font-lg font-normal">
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit
                purus ut sed eros, consectetur viverra.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
