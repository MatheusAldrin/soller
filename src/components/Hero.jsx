import React from 'react';
import MaskImage from '../assets/Mask masked.png';
import Button from './button';
import ThumbImage from '../assets/thumb1.png';

function Hero() {
  return (
    <main className="">
      <section className="grid grid-cols-2">
        <div className="flex flex-col gap-6 max-w-[650px]">
          <h1 className="text-7xl font-extrabold mb-4">
            Get the Sun to Power Your Home
          </h1>
          <p className="text-2xl mb-6">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <div>
            <Button>Request a Quote</Button>
          </div>

          <div className="pt-32 text-left">
            <p className="text-gray-700 italic">
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.”
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
        </div>
        <div className="mb-4 z-0">
          <img
            src={MaskImage}
            alt="Homem parafusando teto solar"
            className="absolute -top-5 -right-4 w-[600px] h-auto"
          />
        </div>
      </section>
    </main>
  );
}

export default Hero;
