//Here interface is part of typescript not javascript.The interfaces are esimpleemented by classes.
// Classes implements interface. A class that implements the interface should have all of it's methods and variables.

interface TakePhoto {
    cameraMode : string;
    filter:string;
    burst:number;
}

interface Story{
    createStory(): string;
}
class Instagram implements TakePhoto, Story{
    constructor(public cameraMode : string,public filter:string,public burst:number){
          console.log(this.cameraMode);
    }
    createStory(){
        return "story created";
    }
}