//1
const longtitud = (text) => text.length;
const textLength = longtitud('Ana');
console.log(textLength)

//2
const devuelvePrimeraLetra =(text)=>text.charAt(0)
const primeraLetra =devuelvePrimeraLetra('Ana')
console.log(primeraLetra)

//3 !
const devuelveUltimaLetra =(text)=>text.slice(-1)
const ultimaLetra =devuelveUltimaLetra('Ana')
console.log(ultimaLetra)

//4 !
const devuelveEnesimaLetra =(text, num)=>text[num]
const enesimaLetra = devuelveEnesimaLetra('Ana', 2)
console.log(enesimaLetra)

//5 
const subrtrText = (text)=>text.slice(3,7)
const substracted = subrtrText('wonderful day')
console.log(substracted)

//6
const toCase =(txt)=>txt.toUpperCase()
const resuToCase =toCase('pablo')
console.log(`pablo-${resuToCase}`)

//7
const shortcut =(txt1, txt2)=> 
  //mi solucion mas larga
  //{ let result=''
  // const firstLetter1 = txt1.charAt(0);
  // console.log(firstLetter1)
  // const firstLetter2 = txt2.charAt(0)
  // console.log(firstLetter2)
  // result =firstLetter1+firstLetter2;
  // return result}

  txt1[0]+txt2[0]

const resuShortcut = shortcut('Amnesty', 'International')
console.log(resuShortcut)


//8
const firstChar =(text)=>{
  const noSpaces=text.trim()
  console.log(noSpaces)
  const first = noSpaces[0] 
  return first;
 
}
const resuFirstChar=firstChar(" Rosa Parks ");
console.log(resuFirstChar)

//9
const devuelveMasLarga =(txt1, txt2)=>{
  // if (txt1.length>txt2.length){
  //   return txt1;
  // }else if (txt1.length<txt2.length){
  //   return txt2;
  // }else{
  //   return txt1
  // }
  return txt1.length<txt2.length? txt2 :txt1
}

const resuMasLarga = devuelveMasLarga('Hello', 'Hel')
console.log(resuMasLarga)

//10
const devuelveMasLarga2 =(txt1, txt2, txt3)=>{
   if (txt1.length>txt2.length && txt1.length>txt3.length){
   return `${txt1} es mas larga`;
   }else if (txt2.length>txt1.length && txt2.length>txt3.length){
    return `${txt2} es mas larga`;
   }else if (txt3.length>txt1.length && txt3.length>txt2.length){
    return `${txt3} es mas larga`;
   }else{
    return 'No hay una única cadena más larga'
   }
  
}

const resuMasLarga2 = devuelveMasLarga2('Hello', 'Hello', 'Hello')
console.log(resuMasLarga2)

//11
const generarNombre =(txt1, txt2, txt3)=>{
  if (txt1.length <5 || txt2.length <5 || txt2.length <5 ){
   return 'error'

  }else{
    return txt1[0]+txt2[0]+txt3[0]
  }
}

const resuGenerarNombre = generarNombre('Hello', 'Beautiful', 'World')
console.log(resuGenerarNombre)

//12

const generarNombre2 =(txt1, txt2, txt3)=>{
  if (txt1.length <5 || txt2.length <5 || txt2.length <5 ){
   return 'error'

  }else{
    return txt1.slice(-1)+txt2.slice(-1)+txt3.slice(-1)
  }
}

const resuGenerarNombre2 = generarNombre2('Hello', 'Beautiful', 'World')
console.log(resuGenerarNombre2)

//13
const generarNombre3 =(txt1, txt2, txt3)=>{
  if (txt1.length <5 || txt2.length <5 || txt2.length <5 ){
   return 'error'

  }else{
    return txt1.slice(-3)+txt2.slice(-3)+txt3.slice(-3)
  }
}

const resuGenerarNombre3 = generarNombre3('Hello', 'Beautiful', 'World')
console.log(resuGenerarNombre3)

//14
const tieneLetra2 =(txt, letra)=>{
  return txt.includes(letra)
}
const resuTieneLetra2 = tieneLetra2('Hello', 'h')
console.log(resuTieneLetra2)

//15

const tieneLetra =(txt, letra)=>{
  return txt.toUpperCase().includes(letra.toUpperCase())
}
const resuTieneLetra = tieneLetra('Hello', 'H')
console.log(resuTieneLetra)

//16
const crearPalabra =(letra, numero)=>{
return letra.repeat(numero)
}
const resuCrearPalabra = crearPalabra('a', 10)
console.log(resuCrearPalabra)

//17
const crearPalabra2 =(letra, numero)=>{
return letra.repeat(numero).toUpperCase()
}
const resuCrearPalabra2 = crearPalabra2('a', 10)
console.log(resuCrearPalabra2)

//18 !
const addGuiones =(txt)=>{
  let result='';
  for(let i=0; i<txt.length; i++){
    let cadaLetraConGuion=txt[i]+'-'
   result += cadaLetraConGuion
}
return result
}
const resuAddGuiones = addGuiones('hola')
console.log(resuAddGuiones)


//19
const contadorDeLetras=(palabra, letra)=>{
  let veces=0;
   for(let i=0; i<palabra.length; i++){
    if (palabra[i]===letra){
      veces=veces+1;
    }

   }
  
  return veces;
}
const resuContadorDeLetras = contadorDeLetras('hello', 'l')
console.log(resuContadorDeLetras)

//20
const contadorDeLetras2=(palabra, letra)=>{
  let veces=0;
  for(let i=0; i<palabra.length; i++){
    if(palabra[i]===letra || palabra[i]===letra.toUpperCase()|| palabra[i]===letra.toLowerCase()){
      veces++
    } 
   }
 return veces;
}
const resuContadorDeLetras2 = contadorDeLetras2('Welcome', 'c')
console.log(resuContadorDeLetras2)


//21
const contadorDeLetras3=(palabra1, palabra2, letra)=>{
   let letraEnPrimeraPalabra=0;
   let letraEnSegundaPalabra=0;

   for (let i=0; i<palabra1.length; i++){
      if(palabra1[i]===letra) letraEnPrimeraPalabra++ 
     
   }
    for (let i=0; i<palabra2.length; i++){
      if(palabra2[i]===letra) letraEnSegundaPalabra++
   } 
   
   return letraEnPrimeraPalabra > letraEnSegundaPalabra ? palabra1 : palabra2
}
const resuContadorDeLetras3 = contadorDeLetras3('Welcome','Coco', 'c')
console.log(resuContadorDeLetras3)

//22
const indexOfIgnoreCase =(txt1,txt2)=>{
  return txt1.toUpperCase().indexOf(txt2.toUpperCase())
}
const resuIndexOfIgnoreCase=indexOfIgnoreCase('bit','IT')
console.log(resuIndexOfIgnoreCase)

//23
const firstWord =(txt)=>{
  const splitted=txt.split(' ')
  return splitted[0]
}

const resufirstWord =firstWord('see and stop');
console.log(resufirstWord)