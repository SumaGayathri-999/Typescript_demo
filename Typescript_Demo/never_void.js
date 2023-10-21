//"Void" means it will not return anythoing and also will reach the end of the function "}"
//But "never" will never return anything and even it is not returning anything,It is not gonna reach the end of the function execution "}"
function adding(a, b) {
    var c = a + b;
}
// But this won't work even it is not returning Because it is reaching the end of the execution
// function adding(a : number,b: number) : never{
//     let c = a + b;
// }
//Never Examples
function Example() {
    while (true) {
        console.log("Hello");
    }
}
function raiseError(message) {
    throw new Error(message);
}


