//"Void" means it will not return anythoing and also will reach the end of the function "}"
//But "never" will never return anything and even it is not returning anything,It is not gonna reach the end of the function execution "}"

function adding(a : number,b: number) : void{
    let c = a + b;
}

// But this below example won't work even it is not returning Because it is reaching the end of the execution

// function adding(a : number,b: number) : never{
//     let c = a + b;
// }

//Never Examples

function Example() : never{
    while(true){
        console.log("Hello");
    }
}

function raiseError(message:string) : never{
    throw new Error(message);
}


//Another Example for using never
interface Circle {
    kind: "circle";
    radius: number;
  }
   
interface Square {
    kind: "square";
    sideLength: number;
  }

type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
        // this should never happen...
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

getArea({kind:"square",sideLength:2});
//This example make sure that all the types has been checked in the switch Statement.
export {}