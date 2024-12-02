//Arrow functions

//1
const cubeCount =(n)=>n*3;
const cubeCountres=cubeCount(3)
console.log(cubeCountres)

//2
const kmAh =(n)=>n*1000
const kmAhres =kmAh(5)
console.log(kmAhres)

//3
const calcularRectangulo =(w,h)=>w*h
const rectResult =calcularRectangulo(3,4)
console.log(rectResult)

//4
const areaTriangulo =(base, altura)=>(base*altura)/2
const resuTriangulo =areaTriangulo(3,4)
console.log(resuTriangulo)

//5
const calculatePerimeter=(radio)=>2*Math.PI*radio
const resuCalculatePerimeter =calculatePerimeter(4)
console.log(resuCalculatePerimeter)

const calculateArea = (radio)=>Math.PI*radio*radio
const resuCalculateArea = calculateArea(4)
console.log(resuCalculateArea)