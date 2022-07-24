import React from "react";


import { BrowserRouter, Route, Routes } from "react-router-dom";


import Header from "../components/Header";
import Home from "../components/Home";
import Menu from "../components/Menu";
import About from "../components/About";
import AllMenu from "../components/HomeComp/AllMenu";
import FastFood from "../components/HomeComp/FastFood";
import RiceMenu from "../components/HomeComp/RiceMenu";
import Coffee from "../components/HomeComp/Coffee";
import Pizza from "../components/HomeComp/Pizza";
import Desserts from "../components/HomeComp/Desserts";
import Install from "../components/Install";
import Basket from "../components/Basket";


const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<AllMenu />} />
          <Route path="FastFood" element={<FastFood />} />
          <Route path="RiceMenu" element={<RiceMenu />} />
          <Route path="Coffee" element={<Coffee />} />
          <Route path="Pizza" element={<Pizza />} />
          <Route path="Desserts" element={<Desserts />} />
        </Route>
        <Route path="About" element={<About />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Install" element={<Install />} />
        <Route path="Basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
