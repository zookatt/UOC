// Nos permite almacenar los valores de una entidad compleja (un array o un objeto) en variables independientes.

//Desestructuración de un array
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


//Desestructuración de un objeto
const obj = {a1: 1, b1: 2, c1: 3};
const {a1, b1, c1 } = obj;
console.log(a1); // 1
console.log(b1); // 2
console.log(c1); // 3

//Diferencia: en objeto puedes desestructurar sin mantener el orden, array no