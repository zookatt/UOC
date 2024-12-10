import { useState } from "react";

export const Ejercicio1 = () => {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <input type="text" onChange={(e) => setNumero(e.target.value)} />
      <div>{numero * 2}</div>
    </>
  );
};
