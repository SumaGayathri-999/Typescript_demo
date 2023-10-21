interface Bottle{
    brand: string;
    price:number;
}

//This is how to take the input for type array
function getSearchProducts<T>(products: T[]): T {
    let myIndex = 3;
    return products[myIndex];
}

//This is how to define arrow functionswith generics
const getMoreSearchProducts = <T>(products: T[]): T =>{
    let myIndex = 3;
    return products[myIndex];
}

//This is how to do generics for multiple parameters.
function products<T,U>(valueOne: T,valueTwo: U): object{
     return {
        valueOne,
        valueTwo
     }
}

//In react we can use "," inside of angular brackets to determine the difference betwen the generics and html tags
const getReactProducts = <T,>(products: T[]): T =>{
    let myIndex = 3;
    return products[myIndex];
}