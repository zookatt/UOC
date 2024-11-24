
  const persona = {
    nombre: "Juan",
    edad: 38,
    altura: 185,
    cantar: ()=> "lalalalalal" // no es habitual 
  }
   console.log(persona.nombre)
  persona.nombre ="laura"
  console.log(persona.nombre)
console.log(persona.cantar()) // no es habitual 


//Acceder a las propiedades de un objeto
//De manera estática (lo habitual)
console.log(persona.nombre)

//De manera dinámica
const nombrePropiedad = 'nombre';
console.log(persona[nombrePropiedad])


