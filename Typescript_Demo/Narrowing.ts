//if we have been using or operator for inferring type in parameters of a function.Then we have to be carefulwhen doing operations inside of that function.
//For that, We have to check for the type of the paramter and do respective operations based on that.we have to be carefull for null type and empty string parameters and also string type.
//Beacuse if console typeof "suma". it returns object instead of returning array.

// "in" operator
interface User{
    name: string,
    email:string,
}

interface Admin{
    name: string,
    email:string,
    isAdmin: boolean
}

function login(account : User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}

//Instanceof 
//Instanceof is used to check for an object is istance of paricular class or not
// this instance of ccan be used for the values r=thare are constructed with new keyword.

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}

//Type predicates.
//It is like a flow wich predicates the type

type Bird = {
    fly():void;
}

type Fish = {
    swim():void;
}

// This is the function for type predicating
// Here we have used :pet is Fish to determine it as Fish type if the function returns true or else Bird
function isFish(pet:Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet :Fish | Bird){
    if(isFish(pet)){
        return "Fish Food"
    }
    else{
        return "Bird Food"
    }
}

export {};