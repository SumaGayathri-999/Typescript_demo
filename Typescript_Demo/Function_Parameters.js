"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We can desribe the function for which type of values it should call with
function greetings(val) {
    val.toUpperCase();
    console.log(val);
}
// greetings(5);
greetings("Hello suma");
//We can use the default value for parameters
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    console.log("Welcome ".concat(name, ", Your eamil is ").concat(email, " and also you are ").concat(isPaid ? 'paid' : 'not paid', " subscriber"));
}
loginUser("Kavya", "kavya@gmail.com");
