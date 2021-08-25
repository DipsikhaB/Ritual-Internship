import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import ProductCategories from "./components/ProductCatagory/ProductCatagory";
import Intro from "./components/Intro/intro";
import Product from "./components/Product/Product";
import Map from "./components/Map/Map";
import FeaturedProduct from "./components/FeatureProduct/FeatureProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <ProductCategories />
      <Intro/>
      <Product />
      <Map/>
      <FeaturedProduct />
    </div>
  );
}

export default App;
