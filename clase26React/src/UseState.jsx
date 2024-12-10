import { useState } from "react";

// export const UseState = () => {
//   const [numero2, setNumero2] = useState(0); //metodo use state devuelve un array
//   console.log(numero2);
//   console.log(setNumero2); //n0mbre de la funcion que utilizo para modificar ese estado
//   const handleClick = () => {
//     setNumero2(numero2 + 1);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>Pulsar</button>
//       <h2>{numero2}</h2>
//     </>
//   );
// };

//Cambiar valor al hacer click en un botón, en lugar de cuando cambia el input

const UseState = () => {
  const [inputText, setInputText] = useState("");
  const [valorAMostrar, setValorAMostrar] = useState(0);

  return (
    <div>
      <input type="text" onChange={(e) => setInputText(e.target.value)} />
      <p>{inputText}</p>
      <button onClick={() => setValorAMostrar(inputText)}>Cambiar valor</button>
      <div>{valorAMostrar}</div>
    </div>
  );
};

export default UseState;
