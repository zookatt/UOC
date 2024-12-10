import { useState } from "react";

export const Ejercicio4 = () => {
  const ANIMAL_IMAGES = {
    img1: "https://pablomonteserin.com/lorem/111x111",
    img2: "https://pablomonteserin.com/lorem/222x222",
    img3: "https://pablomonteserin.com/lorem/333x333",
  };
  const [img, setImg] = useState(0);

  return (
    <>
      <button onClick={() => setImg(ANIMAL_IMAGES.img1)}>Img1</button>
      <button onClick={() => setImg(ANIMAL_IMAGES.img2)}>Img2</button>
      <button onClick={() => setImg(ANIMAL_IMAGES.img3)}>Img3</button>
      <div>
        <img src={img} />
      </div>
    </>
  );
};
