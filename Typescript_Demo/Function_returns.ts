// We can describe that what type of value a function should return

function add(a: number, b: number): number {
  return a + b;
}

add(5,6);

//We can use  a void type to describe that the function is not gonna return anything.

function consoleAddition(a: number, b: number): void {
    console.log(a + b);
    //  return a+b;
}

consoleAddition(5,6);

//Arrow function syntax

const addTwo = (a:number,b:number):number =>{
      return a +b ;
}

console.log(addTwo(4,3))

