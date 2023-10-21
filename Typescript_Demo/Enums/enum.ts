// Enum is a handy way to define a set of named fixed constants
//They allow us to express a range of possible values for a variable

//the values are assigned automatically start from 0
enum Sizes {
    small,
    medium,
    large,
}

let userSize: Sizes = Sizes.medium;

console.log(userSize);

// we can assign values instead of taking by default values

enum User_Sizes {
    small = 23,
    medium = 58,
    large = 100,
}

let customerSize: User_Sizes = User_Sizes.medium;

console.log(customerSize);

export {};