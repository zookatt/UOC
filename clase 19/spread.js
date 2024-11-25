//Permite expandir los elementos de un array u objeto en otro del mismo tipo.

//En arrays:
const a = [1,2,3];
const b = [...a, 4,5,6]; // [1, 2, 3, 4, 5, 6]

//En objetos:
const obj1 = {name:'Paco', age:'45'}
const obj2 = {...obj1, height:180} // {name:'Paco', age:'45', height:180}