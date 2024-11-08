import React from 'react';
import FooterLogo from '../assets/FooterLogo.svg';

function Footer() {
  return (
    <footer className="bg-white py-8 flex flex-row justify-between">
      <div className="flex flex-row">
        <img src={FooterLogo} alt="" />
        <p className="pl-6 text-xl">@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <ul className="flex flex-row gap-6">
        <li>Terms</li>
        <li>Privacy</li>
        <li>Support</li>
      </ul>
    </footer>
  );
}

export default Footer;
