//Permite agrupar varios elementos de un array u objeto en una única variable.

//Rest operator en los parámetros de una función. Aplicado a los parámetros de una función, el Rest Operator siempre junta los parámetros en un array.

function doMath(operator, ...numbers) {
	console.log(operator); // add
	console.log(numbers); // [1, 2, 3]
}
 
doMath('add', 1, 2, 3);

//Rest operator en una desestructuración
const a = { letterA: 'a', letterB: 'b', letterC: 'c' };

const { letterB, ...otherLetters } = a;
console.log(otherLetters ); // {letterA:"a", letterC:"c"}