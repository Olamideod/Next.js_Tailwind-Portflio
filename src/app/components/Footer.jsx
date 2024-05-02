import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <a href="/">
          <img
            src="https://i.ibb.co/M2Rrcnm/alx.png"
            alt="Alx-logo"
            className="h-5 md:h-10"
          />
        </a>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
