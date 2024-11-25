// Devuelve el elemento de un array que cumple cierta condición

const escenas = [
	{
		"id": 1,
		"titulo": "beso inicial"
	},
	{
		"id": 2,
		"titulo": "beso final"
	}
]

const escenaSeleccionada = escenas.find( escena => escena.id === 2);
	
console.log(escenaSeleccionada); // muestra: { "id": 2, "titulo": "beso final"}


const people =
[

{
  nombre:'Pablo',
  edad:78
},
{
  nombre:'Pepe',
  edad:42,
}

]



const personaJoven =people
.map((persona)=> ({...persona, nombre: 'Mr/Mrs ' + persona.nombre}))
.find((person)=>person.edad<=42)
console.log(personaJoven)