// we can't create the object for a abstract class.
// Abstract class is like a blueprint that we can''t create an abjects from that.But it is the responsibility 
// of the class (which is extending that abstract class) to implement it.
//abstract class can also have abstract methods which normally doesn't have body because it has to be implemented by other class.Byt these methods should compulsary should be implemented by class which is inheriting from abstract class
// Here abstarct class ia a blueprint with also contains some by default methods which don't need to be implemented but can be accessed by the inheriting class.
class TakePhoto {
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
        // ....
    }
    getReels() {
        console.log("get reels")
        return "First Reel";
    }
}
// const obj = new TakePhote();  We cannot create object from abstract class.
class Instagram extends TakePhoto {
    constructor(cameramode, filter, burst) {
        //super is used to call the parent class constructor
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const inst = new Instagram("camera", "filter", 3);
inst.getReels();

export {};