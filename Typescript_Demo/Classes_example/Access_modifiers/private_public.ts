//Here access modifiers are a part of typescript not javascript.
//if we have markedd a variable as a private in a class that means it can be accesible only in that
//  particular class and not outside of that class

class User {
    name: string;
    email:string;
    private city:string = "Delhi";
      constructor(name: string,email :string){
         this.name = name;
         this.email = email;
         console.log(this.email);
         console.log(this.city)
      }
 }
 
 const user_obj = new User("suma","suma@gmail.com");
//  user_obj.city = "Jammu" --- this is not accessable

 //the variables which are not marked with any type modifier is by default public.
 //We can also remove the type checking for the variables that used inside of the costructor 
 //   (in the class and outside of the constructor) by providing type modifier inside of the paretheses.
 // It provides the same code as the earlier


class UserOne {
      constructor(public name: string,public email :string){
         console.log(this.email);
      }
 }
 
 const user_one = new UserOne("suma","suma@gmail.com");

 export {};
