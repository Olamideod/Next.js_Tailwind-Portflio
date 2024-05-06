import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <a href="/">
          <img
            src="https://i.ibb.co/xFmzLXT/Codebender-logo.png"
            alt="logo"
            className="h-5 md:h-13"
          />
        </a>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
