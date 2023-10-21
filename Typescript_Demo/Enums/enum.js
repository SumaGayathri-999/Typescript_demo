"use strict";
// Enum is a handy way to define a set of named fixed constants
//They allow us to express a range of possible values for a variable
Object.defineProperty(exports, "__esModule", { value: true });
//the values are assigned automatically start from 0
var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 0] = "small";
    Sizes[Sizes["medium"] = 1] = "medium";
    Sizes[Sizes["large"] = 2] = "large";
})(Sizes || (Sizes = {}));
var userSize = Sizes.medium;
console.log(userSize);
// we can assign values instead of taking by defaillt values
var User_Sizes;
(function (User_Sizes) {
    User_Sizes[User_Sizes["small"] = 23] = "small";
    User_Sizes[User_Sizes["medium"] = 58] = "medium";
    User_Sizes[User_Sizes["large"] = 100] = "large";
})(User_Sizes || (User_Sizes = {}));
var customerSize = User_Sizes.medium;
console.log(customerSize);
