import { useState } from "react";
import "./style.css";
function App() {
  const [state, setState] = useState(0);
  return (
    <>
      {/* {state % 2 === 0 && <div>hola</div>}  con && renderizado condicional*/}
      {state % 2 === 0 ? <div>hola</div> : <div>adios</div>}
      <button onClick={() => setState(state + 1)}>clickar</button>
      <div className="cube"></div>
      <div style={{ width: "80px", height: "80px", background: "green" }}></div>
      <img src="/imagen.jpg" width={200} height={200} alt="img" />
    </>
  );
}

export default App;
