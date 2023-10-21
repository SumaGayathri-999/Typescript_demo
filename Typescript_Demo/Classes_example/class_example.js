// We have to typecheck for the variabes that we have been using in 
// constructor outside of the constructor.
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        console.log(this.email);
    }
}
const user_obj = new User("suma", "suma@gmail.com");
export {};
