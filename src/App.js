import React from "react";
import Food from "./components/Food";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SecondHeader from "./components/SecondHeader";
import Slider from "./components/Slider";
import ThirdHeader from "./components/ThirdHeader";

import './style.css';


function App(){

  return(
    <>
    <Header />
    <SecondHeader />
    <ThirdHeader />
    <Slider />
    <Food />
    </>
  )
  
}


export default App;