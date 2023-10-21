function my_Object(user: { name: string, isPaid: boolean }) {
    console.log(user.name);
  }
  
  my_Object({ name: "suma", isPaid: true }); // Correct usage

  //If we are not sure that how many properties would pass we can use "?" operator
function dynamicTyping(user : { name: string, isPaid: boolean,email?:string}){
    console.log(user.name);
    if(user.email){
       console.log(user.email);
     }
}

// Both are correct
dynamicTyping({name:"kavya", isPaid: true});
dynamicTyping({name:"kavya",email:"kavya@gmail.com",isPaid: true});

export {};