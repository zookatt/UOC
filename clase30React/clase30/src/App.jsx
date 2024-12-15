//para pasar props de hijos a padre hay que usar funciones

import { useState } from "react";
import { Componente1 } from "./componentes/Componente1";
import { Componente2 } from "./componentes/Componente2";

function App() {
  //inicimos el estado para mostrar resultado final
  const [resultadoFinal, setResultadofinal] = useState(0);
  //useState(0) es para mostrar resultado nicial por la pantalla como 0
  //useState(null) es para que no aparezca nada en la pantalla desde el principio

  //funcion para mostrar resultado
  const mostrarResultado = (result) => {
    setResultadofinal(result);
  };

  return (
    <>
      <div style={{ backgroundColor: "red", padding: "10px" }}>
        <h3>Componente APP</h3>
        <Componente1 calculate={mostrarResultado} />
        <Componente2 result={resultadoFinal} />
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
// import Componente1 from "./components/Componente1";
// import Componente2 from "./components/Componente2";

// const App = () => {
//   const [v, setV] = useState(0);
//   return (
//     <div>
//       <Componente1 sendValue={setV} />
//       {/* <Componente1 sendValue={ valor => setV(valor)} /> */}
//       {v}
//       <Componente2 miValor={v} />
//     </div>
//   );
// };

// export default App;
