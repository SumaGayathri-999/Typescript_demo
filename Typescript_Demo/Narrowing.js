//if we have been using or operator for inferring type in parameters of a function.Then we have to be carefulwhen doing operations inside of that function.
//For that, We have to check for the type of the paramter and do respective operations based on that.we have to be carefull for null type and empty string parameters and also string type.
//Beacuse if console typeof "suma". it returns object instead of returning array.
function login(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//Instanceof 
//Instanceof is used to check for an object is istance of paricular class or not
// this instance of ccan be used for the values r=thare are constructed with new keyword.
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// This is the function for type predicating
// Here we have used :pet is Fish to determine it as Fish type if the function returns true or else Bird
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "Fish Food";
    }
    else {
        return "Bird Food";
    }
}
