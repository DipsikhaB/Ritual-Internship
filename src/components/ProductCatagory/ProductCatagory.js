import React from 'react'
import ProductCard from "../ProductCard/ProductCard";
import "./productcatagory.css"

import Category1 from "../../images/Category-Multivitamin.jpg";
import Category2 from "../../images/Category-Protein__1_.jpg";
import Category3 from "../../images/Category-Pregnancy__1_.jpg";
import Category4 from "../../images/Category-Bundles.jpg";

function ProductCatagory() {
    return (
      <div className="product-categories-container flex justify-center items-center px-4 py-10">
        <ProductCard img={Category1} name="Multivitamins" />
        <ProductCard img={Category2} name="Proteins" />
        <ProductCard img={Category3} name="Pregnancy" />
        <ProductCard img={Category4} name="Bundles" />
      </div>
    );
}

export default ProductCatagory
