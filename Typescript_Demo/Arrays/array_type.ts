// the ids can only have data of type number

let ids: number[] = [1,2,3,4];
let users : string[] = ["suma","maha","kavya"]

// if want to use any custome type(alias) for the elements of an array.

type user_type = {
    name:string,
    age:number,
}

let all_users: user_type[] = [];

all_users.push({name:"suma",age:23});

// syntax for array of arrays,

let MLmodels : number[][] = [ [12,34,78], [ 55,54,23]]

