//Repaso cadenas

//1
const longitud =(nombre)=>nombre.length
const result1=longitud("Ana")
console.log(result1)


//2
const  devuelvePrimeraLetra=(nombre)=>nombre[0]
const result2 =devuelvePrimeraLetra("Katia")
console.log(result2)

//3
const  devuelveUltimaLetra=(nombre)=>nombre[nombre.length-1]
const result3 = devuelveUltimaLetra("Alvaro")
console.log(result3)

//4
const   devuelveEnesimaLetra=(nombre, n)=>nombre[n]
const result4 = devuelveEnesimaLetra("Alvaro", 1)
console.log(result4)


//5
const cutLetters =(word, n1, n2)=> word.slice(n1,n2)
const result5 =cutLetters("wonderful day", 3,7)
console.log(result5)


//6
const toCase =(text)=>text + "-" + text.toUpperCase()
const result6 = toCase("Pablo")
console.log(result6)

//7
const shortcut=(string1, string2)=>string1[0]+string2[0]
const result7=shortcut('Amnesty', 'International')
console.log(result7)

//8
const firstChar =(string)=>string.trim()[0]
const result8 = firstChar(" Rosa Parks ")
console.log(result8)

//9
const devuelveMasLarga =(txt1, txt2)=>{
  if (txt1.length<txt2.length){
    txt2
  }else if(txt1.length>txt2.length){
    txt1
  }else{
    txt1
  } 
}
const result9 = devuelveMasLarga("Hello", "Hello")


//10
const devuelveMasLarga2=(txt1, txt2, txt3)=>{
  if (txt2.length<txt1.length && txt3.length<txt1.length){
    return txt1
  }else if(txt1.length<txt2.length && txt3.length<txt2.length){
    return txt2
  }else if(txt1.length<txt3.length && txt2.length<txt3.length){
    return txt3
  }else{
    return "No hay una única cadena más larga"
  }
}
const result10 = devuelveMasLarga2("Helloooo", "Helloooooo", "Helloo")
console.log(result10)


//11
const generarNombre =(str1,str2,str3)=>{
   if (str1.length<5 || str2.length<5 || str3.length<5){
    return "error"
   }else{
    return str1.slice(0,3)+str2.slice(0,3)+str3.slice(0,3)
   }
}
const result11=generarNombre('Ramon', 'Alvaro', 'Katia')
console.log(result11)

//12
const generarNombre2 =(str1,str2,str3)=>{
   if (str1.length<5 || str2.length<5 || str3.length<5){
    return "error"
   }else{
    return str1[str1.length-1]+str2[str2.length-1]+str3[str3.length-1]
   }
}
const result12=generarNombre2('Ramon', 'Alvaro', 'Katia')
console.log(result12)

//13
const generarNombre3 =(str1,str2,str3)=>{
   if (str1.length<5 || str2.length<5 || str3.length<5){
    return "error"
   }else{
    return str1.slice(-3)
    +str2.slice(-3)
    +str3.slice(-3)
   }
}
const result13=generarNombre3('Ramon', 'Alvaro', 'Katia')
console.log(result13)


//14
const tieneLetra=(str, letra)=>{
return str.includes(letra) ? true :false
}

const result14 =tieneLetra('Katia','o')
console.log(result14)


//15
const tieneLetra2=(str, letra)=>{
let lowerStr = str.toLowerCase()
let lowerLetra=letra.toLowerCase()
return lowerStr.includes(lowerLetra) ? true :false
}
const result15 = tieneLetra2('Katia','A')
console.log(result15)


//16
const crearPalabra = (letra, num)=>letra.repeat(num)
const result16 = crearPalabra('a', 5)
console.log(result16)


//17

const crearPalabra2 = (letra, num)=>letra.repeat(num).toUpperCase()
const result17 = crearPalabra2('a', 5)
console.log(result17)

//18
const addGuiones =(txt)=>{
  let newWord='';
  for(let i=0; i<txt.length; i++){
    newWord+='-'+txt[i]
  }
  return newWord;
}
const result18=addGuiones('hola')
console.log(result18)

//19
const contadorDeLetras =(txt, letra)=>{
 let veces=[];
 for (let i=0; i<txt.length; i++){
  if (txt[i]==letra) {
    veces.push(letra)
  }
 }
  return veces.length
}
const result19=contadorDeLetras('hello', 'l')
console.log(result19)


//20
const contadorDeLetras2 =(txt, letra)=>{
let txtLower=txt.toLowerCase()
let letraLower=letra.toLowerCase()
 let veces=[];
 for (let i=0; i<txtLower.length; i++){
  if (txtLower[i]==letraLower) {
    veces.push(letraLower)
  }
 }
  return veces.length
}
const result20=contadorDeLetras2('hello', 'L')
console.log(result20)

//21
const contadorDeLetras3 =(txt1, txt2,  letra)=>{
let txtLower1=txt1.toLowerCase()
let txtLower2=txt2.toLowerCase()
let letraLower=letra.toLowerCase()
 let veces1=[];
  let veces2=[];

 for (let i=0; i<txtLower1.length; i++){
  if (txtLower1[i]==letraLower) {
    veces1.push(letraLower)
  }
 }

 for (let i=0; i<txtLower2.length; i++){
  if (txtLower2[i]==letraLower) {
    veces2.push(letraLower)
  }
 }
  return veces1.length > veces2.length? txt1 : txt2
}
const result21=contadorDeLetras3('hello', 'hola','L')
console.log(result21)

//22

const indexOfIgnoreCase=(txt,part)=>{
  let txtLower=txt.toLowerCase()
  let partLower=part.toLowerCase()
  return txtLower.indexOf(partLower)
}
const result22=indexOfIgnoreCase("bit","IT")
console.log(result22)
//23
const firstWord=(frase)=>frase.split(' ')[0]
const result23 =firstWord("see and stop")
console.log(result23)