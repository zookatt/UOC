export const Book = ({ book }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          width: "20",
          height: "20",
        }}
      >
        <h3>Esto es componente Book</h3>
        <div>{book.title}</div>
        <div>{book.author}</div>
      </div>
    </>
  );
};

// {book} es el prop, osea Es el objeto que se pasa desde el componente padre (App) al hijo (Book) como un  prop.
// Ejemplo de un valor de book en json:
// {
//   title: "Viaje a la luna",
//   author: "Julio Verne"
// }

// {book.title} Es una propiedad del objeto book. En este caso, sería "Viaje a la luna".

// {book.author} Es otra propiedad del objeto book. En este caso, sería "Julio Verne".
