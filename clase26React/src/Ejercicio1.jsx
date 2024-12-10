//EJERCICIO 1 CON USEREF()

// import { useRef } from "react";

// const Ejercicio1 = () => {
//   const inputRef = useRef();
//   const outputRef = useRef();
//   const euroTodollars = () => {
//     outputRef.current.innerHTML = inputRef.current.value * 2;
//   };
//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={euroTodollars}>Euros A Dollares</button>
//       <div ref={outputRef}></div>
//     </>
//   );
// };

// export default Ejercicio1;

//EJERCICIO 1 CON USESTATE() y USEREF()
// import { useState } from "react"; //para mostrar
// import { useRef } from "react"; //para recoger

// const Ejercicio1 = () => {
//   const [resultado, setResultado] = useState(0);
//   const inputRef = useRef();
//   const euroTodollars = () => {
//     setResultado(inputRef.current.value * 2);
//   };
//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={euroTodollars}>Euros A Dollares</button>
//       <div>{resultado}</div>
//     </>
//   );
// };

// export default Ejercicio1;

//EJERCICIO 1 CON USESTATE() SOLO!!!
import { useState } from "react"; //para mostrar

const Ejercicio1 = () => {
  const [resultado, setResultado] = useState(0);
  const handleChange = (e) => {
    setResultado(e.target.value);
  };
  const dollar = resultado * 2;

  return (
    <>
      <input type="text" onChange={handleChange} />
      <div>{dollar}</div>
    </>
  );
};

export default Ejercicio1;
