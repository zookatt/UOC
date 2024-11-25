//forEach no devuelve nada (es buscle for)
//map devuelve nuevo array con los elementos modificados
//map transforma los elementos, conservando la logtitud del array

const arr1 =["Juan","Roberto", "Ernesto", "Miriam", "Laura"]

arr1.forEach(name=>console.log(`Conozco a alguien llamado ${name}`))

//map con numeros

const numbers = [1, 2, 3];

const multipliedNumbers = numbers.map(number => number * 2);

console.log(multipliedNumbers); // 2, 4, 6


//1
const arr2 =["Juan","Roberto", "Ernesto", "Miriam", "Laura"]

const resp = arr2.map((name)=> `Conozco a alguien llamado ${name}`)
console.log(resp)