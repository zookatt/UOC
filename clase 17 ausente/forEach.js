//1
const arr =["Juan","Roberto", "Ernesto", "Miriam", "Laura"]

arr.forEach(name=>console.log(`Conozco a alguien llamado ${name}`))


//2
const numbers = [1,9,3,8,5,7]
numbers.forEach(n=>console.log(n*2))


//3

const hardcoaded = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos =[];
let negativos =[];
let ceros =[0];

hardcoaded.forEach((n)=>{

   if (n>0){
    positivos.push(n)
    }else if(n<0){
    negativos.push(n)
    }else{
    ceros.push(n)
    }
})

console.log(`Cantidad de positivos: ${positivos.length}`)
console.log(`Cantidad de negativos: ${negativos.length}`)
console.log(`Cantidad de ceros: ${ceros.length}`)

//4
const hardcoaded1 = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
let positivos1 =[];
let negativos1 =[];

let sumaPositivos=0;
let sumaNegativos=0;

hardcoaded.forEach((n)=>{
    if (n>0){
    positivos1.push(n)
    sumaPositivos+=n
    console.log(sumaPositivos)
    }
    if(n<0){
    negativos1.push(n)
    sumaNegativos+=n
    console.log(sumaNegativos)
    }
})
console.log(`media positivos es ${sumaPositivos/positivos1.length}`)
console.log(`media negativos es ${sumaNegativos/negativos1.length}`)

