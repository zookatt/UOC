import { useState } from "react";

export const Ejercicio2 = () => {
  const [numero, setNumero] = useState(0);

  return (
    <>
      <input type="text" onChange={(e) => setNumero(e.target.value)} />
      <div>{(numero * 9) / 5 + 32}</div>
    </>
  );
};
