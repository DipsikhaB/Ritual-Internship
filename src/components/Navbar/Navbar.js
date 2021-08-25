import React from 'react';
import "./navbar.css";
import {BsBag} from 'react-icons/bs';
import Divider from '@material-ui/core/Divider';

function Navbar() {
    return (
      <div>
        <div className="h-1 bg-ritual-blue"></div>
        <div className="navbar-container bg-white w-full select-none fixed top-0 z-20">
          <div className="navbar-items h-full flex items-center font-sans ">
            <span className="navbar-items cursor-pointer text-base  hover:underline hover:underline-yellow">
              Menu
            </span>
            <span className="navbar-item">Ritual</span>
            <span className=" nav text-base left-items  flex items-center">
              <span className="navbar-i hover:underline hover:underline-yellow">
                Who We Are
              </span>
              <BsBag className="font-bold cursor-pointer navbar-it" />
            </span>
          </div>
        </div>
        <Divider />
      </div>
    );
}

export default Navbar
