let variable1 = 5;
{
    let variable2 = 7;
    console.log(variable1); // 5
    console.log(variable2); // 7
}
console.log(variable1); // 5
console.log(variable2); // Esta línea dará error


//shadowing
let variable0 = 5;
{
    let variable0 = 7;
    console.log(variable0); // 7
}
console.log(variable0); // 5