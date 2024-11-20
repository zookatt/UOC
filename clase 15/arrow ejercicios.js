//1
const countCube =n=>n*n*n;
const cube =  countCube(3);
console.log(cube)

//2
const kmAmetros = kms => kms*1000
const metros = kmAmetros(5)
console.log(metros)

//3
const calculateAreaRectangulo=(width, height)=>width*height;
const areaRectangulo = calculateAreaRectangulo(4, 5);
console.log(areaRectangulo)

//4
const calculateAreaTriangulo =(base, altura)=> base*altura/2;
const areaTriangulo=calculateAreaTriangulo(4,5);
console.log(areaTriangulo)

//5
const calculatePerimeter=(radio)=>2*Math.PI*radio
const perimeter = calculatePerimeter(5);
console.log(perimeter)

const calculateAreaCirc=(radio)=>Math.PI*radio*radio
const  circunferencia = calculateAreaCirc(10);
console.log( circunferencia)