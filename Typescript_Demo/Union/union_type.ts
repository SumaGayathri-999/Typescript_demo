function printId(id :string  | number){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }
    else{
        console.log(id);
    }
}

printId(123);
printId("product");

//If we want a a type which accepts an array of multiple types

const data : (string | number)[] = [1,2,"suma"];

//If we want to resrict only some particular values to be assigned to a variable.

let seatAllotment:"aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";
// it gives a squiggy line that says "Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'"
