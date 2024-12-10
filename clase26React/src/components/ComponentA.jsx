export const ComponentA = (props) => {
  // una prop es similar a los atributos de HTML. Sirve para transferir información de un componente a otro.
  return <div>A{props.amor}</div>;
};

// export const ComponentA = ({amor}) => { es lo mismo
//   return <div>A{amor}</div>;
// };
