const users = [
	{
		"name" : "Paco",
		"isActive" : false,
		"age": 18
	},
	{
		"name" : "Laura",
		"isActive" : false,
		"age": 21
	},
	{
		"name" : "Raquel",
		"isActive" : false,
		"age": 15
	},
	{
		"name" : "Juan",
		"isActive" : true,
		"age": 17
	},
	{
		"name" : "Alberto",
		"isActive" : false,
		"age": 50
	},
	{
		"name" : "Rodolfo",
		"isActive" : true,
		"age":7
	},
];

const choosedUser = users.find((user)=>user.name==='Juan'); // Modifica esta línea para resolver el ejercicio

console.log(choosedUser.age); // Debería mostrar: 17
console.log(choosedUser)