// //

// import { useRef } from "react";

// const App = () => {
//   const hacerCosas = () => {
//     alert("hola");
//   };
//   const otrasCosas = () => {
//     alert("hola");
//     console.log(inputRef.current.value);
//     divRef.current.innerHTML = inputRef.current.value; //pintar valor introducido al input
//   };
//   const inputRef = useRef(); //useRef es un hook que guarda la referencia del nodo dentro del DOM
//   const divRef = useRef();
//   const numeros = [1, 1, 3, 5, 7];
//   return (
//     <>
//       <p>amor</p>
//       <p>amorvdvvdvdvd</p>
//       <button onClick={hacerCosas}>Hacer cosas</button>
//       <div>
//         {numeros.map((n) => {
//           return <p>{n}</p>;
//         })}
//       </div>
//       <input type="text" ref={inputRef} />
//       <button onClick={otrasCosas}>Otras cosas</button>
//       <div ref={divRef}></div>
//     </>
//   );
// };
// export default App;

//useRef es equivalente a document.querySelector(), Pablo no lo usa, usa useState
//en version 16 de React sacaron los hooks y quiter la OOP de react. permiten hacer cosas que se podian hacer antes con OOP hacer ahora con funciones
//import Ejercicio1 from "./Ejercicio1";
//import Ejercicio2 from "./Ejercicio2";
//import Ejercicio3 from "./Ejercicio3";
//import { Ejercicio4 } from "./Ejercicio4";
//import UseState from "./UseState";

//import { ComponentA } from "./components/ComponentA";
//import { ComponentB } from "./components/ComponentB";
//import { ComponentC } from "./components/ComponentC";
import Book from "./components/Book";
import books from "./data/books.json";
const App = () => {
  return (
    <div>
      {books.map((b) => (
        <Book book={b} />
      ))}
    </div>
  );
};

export default App;
{
  /* <div>Ejercicios:</div>
      <h2>Euros a dólares</h2>
      <Ejercicio1 />
      <h2>Grados centígrados</h2>
      <Ejercicio2 />
      <h2>Calcular la superficie de un rectángulo</h2>*/
}
{
  /* <Ejercicio3 /> */
}
{
  /* <Ejercicio4 /> */
}
{
  /* <ComponentA amor="te quiero" />
      <ComponentB>{children}</ComponentB>
      <ComponentC /> */
}
