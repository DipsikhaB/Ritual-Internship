import React from 'react';
import "./container.css";

function Container() {
    return (
      <div className="hero-container flex flex-row justify-center ">
        <div className="hero-background-container w-full  bg-hero-dsk bg-center bg-cover bg-no-repeat">
          <div className="hero-content-wrapper  flex flex-col h-full justify-center items-center ">
            <h1 className="text-ritual-blue">
              <div className="future">The future</div>
              <span className="health">of health</span>
              <div className="clear">
                — is clear.
              </div>
            </h1>
            <div className="hero-button">
              <button className="cta-mail text-white bg-ritual-blue px-12 py-3 rounded-full m-4 hover:bg-white hover:text-ritual-blue">
                Shop All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Container
