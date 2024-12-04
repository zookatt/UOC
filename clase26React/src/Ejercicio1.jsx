import { useRef } from "react";

const Ejercicio1 = () => {
  const inputRef = useRef();
  const resultref = useRef();
  const euroTodollar = () => {
    //alert("aqui");
    resultref.current.innerHTML = inputRef.current.value * 2;
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={euroTodollar}>convertir a dollars</button>
      <div ref={resultref}></div>
    </>
  );
};

export default Ejercicio1;
