import React from 'react';
import Image from "../../images/home-feat-dyson.jpg";
import "./product.css"

function Product() {
    return (
      <div>
        <div className="background-blob slide-right top-100"></div>
        <div className="featured-area-one flex mx-40 my-24">
          <div className="img">
            <img src={Image} alt role="slider" />
          </div>
          <div className="t justify-around text-ritual-blue">
            <h1 className="text-4xl">
              We're not about pseudoscience and half-truths
            </h1>
            <span className="text-xl inline-block my-9 font-serif">
              From Omega-3 DHA from microalgae to regeneratively-farmed pea
              protein, our scientists studied diets and genetics to make daily
              essentials based on what we need.
            </span>
            <span className="text-xl block underline cursor-pointer hover:text-gray-400 ">
              Who we are
            </span>
          </div>
        </div>
      </div>
    );
}

export default Product
