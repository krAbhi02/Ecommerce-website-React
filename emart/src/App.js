import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        {/* <Redirect to="/" /> */}
      </Routes>
    </>
  );
}

export default App;

