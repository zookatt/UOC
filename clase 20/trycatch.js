//try catch usas cuando a lo mejor puedes tener un error, se usa en caso de fetch datos de API, son errores que pueden pasar o no

const v = 4;

try {
      v = 7;
} catch (err) {
      console.log('El error es:', err);
}finally { // El bloque finally estará necesariamente vinculado a una estructura try-catch. Contiene un código que se ejecutará SIEMPRE después de un bloque try-catch.
      console.log('Ejecución del finally');
}
