/* eslint-disable react/jsx-key */
import books from "../src/data/books.json";
import { Book } from "./Book";
const App = () => {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "20",
        height: "20",
        padding: "10px",
      }}
    >
      <h3>Esto es componente App</h3>
      {books.map((b) => (
        <Book book={b} />
      ))}
    </div>
  );
};
export default App;
// books son lista de objetos de json, <Book/> es un componente, {b} es el objeto sobre el que estas iterando y {book} es una prop

// Resumen:
// App tiene los datos (books array) y pasa un objeto individual (book) a cada instancia de Book.
// Book recibe ese objeto como un prop (book) y accede a sus propiedades específicas (book.title, book.author) para mostrarlas.
// App
//  └── books = [{title: "Viaje a la luna", author: "Julio Verne"}, {...}]
//       └── <Book book={b1} />      <-- Pasa un objeto individual como prop
//       └── <Book book={b2} />

// En React, los datos fluyen en una sola dirección: desde el componente padre hacia el hijo. Esto significa que:

// App puede pasar datos a Book como props.
// Book no puede pasar datos directamente a App, porque los props son de solo lectura desde la perspectiva del componente hijo.
// Sin embargo, hay maneras de permitir que un componente hijo como Book "comunique" datos al componente padre (App) utilizando funciones pasadas como props.
