for(let i=0; i<=100; i+=2){
  console.log(i)
}

for(let i=0; i<=100; i++){
  if(i%2===0){
    console.log(i);
  }
}

for(let i=1; i<=20; i++){
  if(i%3===0 && i%5===0){
    console.log('FizzBuzz')
  }else if(i%3===0){
    console.log('Fizz')
  }else if(i%5===0){
    console.log('Buzz')
  }else{
    console.log(i)
  }
  
}


let suma=0;
for(let i=5; i>=0; i--){
  console.log(suma+=i)
}
console.log(suma)


for(let i=1; i<10; i++){
  console.log(`${7} * ${i} = ${7*i}`)
}

for (let k = 1; k<11; k++){
for(let i=1; i<10; i++){
  console.log(`${k} * ${i} = ${7*i}`)
}
}