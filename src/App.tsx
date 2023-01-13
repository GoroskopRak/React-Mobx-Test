import React from "react";
import Control from "./components/control";
import Control2 from "./components/control2";
import CountriesControl from "./components/countriesControl";
import { controlStore3 } from "./store/ControlStore3";
import { controlStore4 } from "./store/ControlStore4";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <h3>Компонент 1</h3>
      <Control />
      <h3>Компонент 2</h3>
      <Control2 />
      <h3>Компонент 3, максимум 3 страны</h3>
      <CountriesControl maxSuggestions={3} controlStore={controlStore3}/>
      <h3>Компонент 3 с другим стор, максимум 10 стран</h3>
      <CountriesControl maxSuggestions={10} controlStore={controlStore4}/>
    </div>
  );
}