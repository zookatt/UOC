//1

const nombres=["Juan","Roberto", "Ernesto", "Miriam", "Laura"]

for (let i=0; i<nombres.length; i++){
  console.log(`Conozco a alguien llamado ${nombres[i]}`)
}

//2

const toArray=(n1,n2)=>{
const arr=[]
arr[0]=n1
arr[1]=n2
//o tambien: arr.push(n1,n2)
}
const result=toArray(5,9)
console.log(5,9)

//3
const numbers = [1,9,3,8,5,7]
for(let i=0; i<numbers.length; i++){
  let resultado;
  resultado = numbers[i]*2
  console.log(resultado)
}

//4
const getFirstElement =(arr) =>{
  return arr[0]
}

const resu = getFirstElement([1, 2, 4 ]);
console.log(resu)

//5

const setFirstElement=(arr, n)=>{
  console.log(arr[0]=n) 
  console.log(arr)
}


setFirstElement([1, 2], 3);

//6 !

const getLastElement=(arr)=>{
return arr[arr.length-1]
}
const resulte = getLastElement([1, 2]);
console.log(resulte)

//7
const harcodeados= [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]
// Cantidad de positivos:  6
// Cantidad de negativos:  3
// Cantidad de ceros:  1

const positivos=[]
const negativos=[]
const ceros=[]

for(let i=0; i<harcodeados.length; i++){
 let n=harcodeados[i];
  if(n>0){
    positivos.push(n)
    console.log(positivos)
  }else if(n<0){
    negativos.push(n)
  }else{
    ceros.push(n)
  }
}
console.log(`Cantidad de positivos: ${positivos.length}`)
console.log(`Cantidad de negativos: ${negativos.length}`)
console.log(`Cantidad de ceros: ${ceros.length}`)

//8
const harcodeados1= [1, 9, -3, 8, -5, 0, 3, 4, 6, -7]

let positivos1=[]
let negativos1 =[]
let suma1=0;
let suma2=0;
for(let i=0; i<harcodeados1.length; i++){
  let n=harcodeados1[i];
  if(n>0){
    positivos1.push(n)
   suma1=suma1+n
   console.log(suma1)
  } else if(n<0){
    negativos1.push(n)
    suma2=suma2+n
    console.log(suma2)
  }else{
    console.log('Error')
  }
}

console.log(`Media positivos ${suma1/positivos1.length}`)
console.log(`Media positivos ${suma2/negativos1.length}`)
//9
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const myData = arr[2][1]; // Modificar únicamente esta línea para acceder al 8 del array bidimensional
console.log(myData);//8


