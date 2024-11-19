import React from 'react';
import FooterLogo from '../assets/FooterLogo.svg';

function Footer() {
  return (
    <footer className="bg-white py-10 flex flex-col justify-center sm:flex-row sm:justify-between">
      <div className="flex flex-col gap-6 items-center sm:gap-0 sm:flex-row ">
        <img src={FooterLogo} alt="" className="px-24 sm:px-0" />
        <p className="text-center sm:pl-6 sm:text-xl">
          @ 2023 Soller, Inc. All rights reserved.
        </p>
      </div>
      <ul className="flex flex-row gap-6 justify-center font-semibold pt-10 pt:0">
        <li>Terms</li>
        <li>Privacy</li>
        <li>Support</li>
      </ul>
    </footer>
  );
}

export default Footer;
