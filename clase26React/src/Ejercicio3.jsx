import { useRef } from "react";

const Ejercicio3 = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const resultref = useRef();
  const areaRectangulo = () => {
    //alert("aqui");
    resultref.current.innerHTML =
      inputRef1.current.value * inputRef2.current.value;
  };
  return (
    <>
      <input type="text" ref={inputRef1} />
      <input type="text" ref={inputRef2} />
      <button onClick={areaRectangulo}>calcular area rectangulo</button>
      <div ref={resultref}></div>
    </>
  );
};

export default Ejercicio3;
