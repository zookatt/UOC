//EJERCICIO 2 CON USEREF()
// import { useRef } from "react";

// const Ejercicio2 = () => {
//   const inputRef = useRef();
//   const resultref = useRef();

//   const aFarengeit = () => {
//     //alert("aqui");
//     resultref.current.innerHTML = (inputRef.current.value * 9) / 5 + 32;
//   };
//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={aFarengeit}>convertir a Fahrengeit</button>
//       <div ref={resultref}></div>
//     </>
//   );
// };

//export default Ejercicio2;

//EJERCICIO 2 CON USESTATE() y USEREF()
// import { useRef, useState } from "react";
// const Ejercicio2 = () => {
//   const inputRef = useRef();
//   const [resultado, setResultado] = useState(0);
//   const aFarengeit = () => {
//     setResultado((inputRef.current.value * 9) / 5 + 32);
//   };
//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={aFarengeit}>convertir a Fahrengeit</button>
//       <div>{resultado}</div>
//     </>
//   );
// };

// export default Ejercicio2;

//EJERCICIO 2 CON USESTATE()
import { useState } from "react";
const Ejercicio2 = () => {
  const [resultado, setResultado] = useState(0);
  const handleChange = (e) => {
    setResultado(e.target.value);
  };
  const fahrengeit = (resultado * 9) / 5 + 32;
  return (
    <>
      <input type="text" onChange={handleChange} />
      <div>{fahrengeit}</div>
    </>
  );
};

export default Ejercicio2;
