/* eslint-disable react/jsx-key */
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { useState } from "react";
import texto from "./data/texto.json";

function App() {
  const [frase, setFrase] = useState(0);

  return (
    <>
      <button onClick={() => setFrase(frase - 1)}>anterior</button>
      <button onClick={() => setFrase(frase + 1)}>anterior</button>
      {texto.map((text, index) => (
        <div key={index}>
          {frase == index ? (
            <div style={{ background: "#ffcbdb" }}>{text}</div>
          ) : (
            <div>{text}</div>
          )}
        </div>
      ))}
    </>
  );
}

export default App;
