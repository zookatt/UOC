/* eslint-disable react/prop-types */
import { useState } from "react";

export const Componente1 = ({ calculate }) => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  //funcion para calcular resultado
  const handleResult = () => {
    const result = input1 * input2;
    calculate(result); //ese prop viene desde al padre App y ayuda a mostrarlo
  };

  return (
    <>
      <div style={{ backgroundColor: "green", padding: "10px" }}>
        <h3>Componente 1</h3>
        <input type="text" onChange={(e) => setInput1(e.target.value)} />
        <input type="text" onChange={(e) => setInput2(e.target.value)} />
        <button onClick={handleResult}>Calcular</button>
      </div>
    </>
  );
};

// import { useState } from "react";

// const Componente1 = ({ sendValue }) => {
//   const [v1, setV1] = useState(0);
//   const [v2, setV2] = useState(0);
//   return (
//     <div style={{ backgroundColor: "salmon", padding: 20 }}>
//       <input type="text" onChange={(e) => setV1(e.target.value)} />
//       <input type="text" onChange={(e) => setV2(e.target.value)} />
//       <button onClick={() => sendValue(v1 * v2)}>Pulsar</button>
//     </div>
//   );
// };

// export default Componente1;
