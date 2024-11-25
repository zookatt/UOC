// permite acumular valores en una variable. Convierte un array en una cadena de texto.


const words = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const frase = words.reduce((acc, word) => `${acc} ${word}`);
//acc es valor acumulado
// en cada iteracion acumula lo que habia en acc mas word lo que estoy acumulando
//frase es nuevo valor de acc
console.log(frase); // a long time ago in a galaxy far far away

//Acumular valores de un array de objetos, pero sólo cuando cierta propiedad esta presente
// const scoreSum = films.reduce((acc, film) => 'score' in film ? parseFloat(acc + film.score) : parseFloat(acc), 0);



//1
//cuando son objetos tienes que inicializar el valor de acc, poner a 0. cuando recorro numeros o palabbras, es indiferente.
const numbers= [1,2,3]
const media= numbers.reduce((acc, number)=>acc+number)/numbers.length
console.log(media)



const people =
[
{
  nombre:'Pablo',
  edad:78
},
{
  nombre:'Pepe',
  edad:42,
}
]

const average =people.reduce((acc, person)=>acc+person.edad,0)/people.length
console.log(average)