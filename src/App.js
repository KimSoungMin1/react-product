import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./page/Layout";
import About from "./page/About";
import Product from "./page/product";
import Home from "./page/Home";
import ProductServe from "./page/ProductServe";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/product"
            element={<Product text={text} setText={setText} />}
          ></Route>
          <Route
            path="/:Product"
            element={<ProductServe text={text} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
