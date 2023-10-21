// We can desribe the function for which type of values it should call with
function greetings(val :string){
     val.toUpperCase();
     console.log(val);
}

// greetings(5);
greetings("Hello suma");

export {};

//We can use the default value for parameters

function loginUser(name:string, email:string,isPaid:boolean = true){
        console.log(`Welcome ${name}, Your eamil is ${email} and also you are ${isPaid ? 'paid' : 'not paid'} subscriber`);
}

loginUser("Kavya","kavya@gmail.com");