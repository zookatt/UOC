// Cambia imagen al pulsar botones
import { useState } from "react";
export const Ejercicio4 = () => {
  const ANIMAL_IMAGES = {
    img1: "https://pablomonteserin.com/lorem/111x111",
    img2: "https://pablomonteserin.com/lorem/222x222",
    img3: "https://pablomonteserin.com/lorem/333x333",
  };
  //ANIMAL_IMAGES es un objeto, para acceder a los elementos hay que usar las claves definidas en el objeto ANIMAL_IMAGES.img1, ANIMAL_IMAGES.img2.. etc

  const [img, setImg] = useState(ANIMAL_IMAGES.img1);

  return (
    <>
      <button onClick={() => setImg(ANIMAL_IMAGES.img1)}>Img1</button>
      <button onClick={() => setImg(ANIMAL_IMAGES.img2)}>Img2</button>
      <button onClick={() => setImg(ANIMAL_IMAGES.img3)}>img3</button>
      <div>
        <img src={img} />
      </div>
    </>
  );
};
