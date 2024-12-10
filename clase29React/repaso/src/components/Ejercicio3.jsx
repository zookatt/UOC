import { useState } from "react";

export const Ejercicio3 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <>
      <input type="text" onChange={(e) => setNum1(e.target.value)} />
      <input type="text" onChange={(e) => setNum2(e.target.value)} />
      <button onClick={() => setResult(num1 * num2)}>Calcular Area</button>
      <div>{result}</div>
    </>
  );
};
