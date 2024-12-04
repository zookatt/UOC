import { useRef } from "react";

const Ejercicio2 = () => {
  const inputRef = useRef();
  const resultref = useRef();

  const aFarengeit = () => {
    //alert("aqui");
    resultref.current.innerHTML = (inputRef.current.value * 9) / 5 + 32;
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={aFarengeit}>convertir a Fahrengeit</button>
      <div ref={resultref}></div>
    </>
  );
};

export default Ejercicio2;
