//if we have marked a variable as a private in a class that means it can be accesible only in 
// that particular class and also the the class whch inherits that class.

class Tutorial {
    protected coursecount = 2;
    public userPaid = true;
    constructor(public name: string,public email :string){
        console.log(this.email);
     }
    }

const user_one = new Tutorial("suma", "suma@gmail.com");

class UserOne extends Tutorial{
    changeCourse(){
        this.coursecount = 4;
    }
}
export {};