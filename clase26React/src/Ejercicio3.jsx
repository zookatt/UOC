// import { useRef } from "react";

// const Ejercicio3 = () => {
//   const inputRef1 = useRef();
//   const inputRef2 = useRef();
//   const resultref = useRef();
//   const areaRectangulo = () => {
//     //alert("aqui");
//     resultref.current.innerHTML =
//       inputRef1.current.value * inputRef2.current.value;
//   };
//   return (
//     <>
//       <input type="text" ref={inputRef1} />
//       <input type="text" ref={inputRef2} />
//       <button onClick={areaRectangulo}>calcular area rectangulo</button>
//       <div ref={resultref}></div>
//     </>
//   );
// };

// export default Ejercicio3;

//Calcular la superficie de un rectángulo con USE STATE()
import { useState } from "react";

const Ejercicio3 = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  return (
    <>
      <input type="text" onChange={(e) => setNum1(e.target.value)} />
      <input type="text" onChange={(e) => setNum2(e.target.value)} />
      <button onClick={() => setResult(num1 * num2)}>
        Calcular Area triangulo
      </button>
      <div>{result}</div>
    </>
  );
};

export default Ejercicio3;
