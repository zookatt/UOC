// Permite obtener los elementos de un array cumplen cierta condición, posiblemente reduciendo la longtitud del array
// ejemplo: const result = numeros.filter(num => num < n_introducido);


//1,2
const users = [
	{
		"name" : "Paco",
		"isActive" : false,
		"edad": 18
	},
	{
		"name" : "Laura",
		"isActive" : false,
		"edad": 21
	},
	{
		"name" : "Raquel",
		"isActive" : false,
		"edad": 15
	},
	{
		"name" : "Juan",
		"isActive" : true,
		"edad": 17
	},
	{
		"name" : "Alberto",
		"isActive" : false,
		"edad": 50
	},
	{
		"name" : "Rodolfo",
		"isActive" : true,
		"edad":7
	},
];

const activeUsers = users.filter((user)=>user.isActive===true)
console.log(activeUsers)

const olderThan18 = users.filter((user)=>user.edad>18)
console.log(olderThan18)