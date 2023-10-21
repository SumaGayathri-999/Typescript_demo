function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(123);
printId("product");
//If we want a a type which accepts an array of multiple types
var data = [1, 2, "suma"];
//If we want to resrict only some particular values to be assigned to a variable.
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";
// it gives a squiggy line that says "Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'"
