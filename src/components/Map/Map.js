import React from 'react';
import HomeMap from "../../images/Home-Map.jpg";
import "./map.css"

function Map() {
    return (
      <div className="featured-area-two flex mx-44 my-24 mt-44">
        <div className="te  flex-col  text-ritual-blue">
          <h1 className="text-4xl">You deserve traceability</h1>
          <span className="text-xl inline-block my-9 font-serif">
            We share our sources, studies, and suppliers — daily essentials
            backed by the first visible supply chain of its kind.
          </span>
          <span className="text-xl underline cursor-pointer hover:text-gray-400 ">
            Meet Our Ingredients
          </span>
          <span className="text-xl block my-6 underline cursor-pointer hover:text-gray-400 ">
            Our Clinical Study
          </span>
        </div>
        <div className="featured-area-image  w-full h-full">
          <img src={HomeMap} className="" alt="" />
        </div>
      </div>
    );
}

export default Map

