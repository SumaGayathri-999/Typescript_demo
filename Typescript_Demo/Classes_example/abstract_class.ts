//here abstract keyword is part of typescript not javascript.
// we can't create the object for a abstract class.
// Abstract class is like a blueprint that we can't create an objects from that.But it is the responsibility 
// of the class (which is extending(or inheriting) that abstract class) to implement it.
//abstract class can also have abstract methods which normally doesn't have body because it has to be implemented by other class.Byt these methods should compulsary should be implemented by class which is inheriting from abstract class
// Here abstarct class ia a blueprint with also contains some by default methods which don't need to be implemented but can be accessed by the inheriting class.


abstract class TakePhoto{
    constructor(public cameramode: string,public filter:string){
        // ....
    }

    abstract getSepia(): void;

    getReels():string{
        return "First Reel";
    }
}

// const obj = new TakePhote();  We cannot create object from abstract class.

class Instagram extends TakePhoto{
    constructor(public cameramode: string,public filter:string, public burst : number ){
        //super is used to call the parent class constructor
        super(cameramode,filter);
    }
    getSepia(): void {
        console.log("Sepia");
    }
}

const inst = new Instagram("camera","filter",3);

inst.getReels();

export{};
