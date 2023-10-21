//getters and setters method are more useful to access and manipulate
// The private data outside the class by calling the getters and setters which are defined inside the class.

// to make a function getter we have to use "get" kwyword. for setter we have to use "set" kwyword.

class VehicleRegist{
    constructor(private vehical_name:string, private color: string){
        console.log(this.vehical_name);
    }

    //Getter method
    get getVehicle(): string{
         return this.vehical_name;
    }
    
    //Setter method
    set setColor(color: string){
        this.color = color;
    }

    printVehicle(){
        console.log(`vehicle_name = ${this.vehical_name}, color name = ${this.color}`)
    }
}

const vehicle_details = new VehicleRegist("car", "black");

// vehicle_details.vehical_name ---- not accessible but we can use getVehicle to access that
vehicle_details.printVehicle();

let vehi_name = vehicle_details.getVehicle;
vehicle_details.setColor = "grey";

vehicle_details.printVehicle();

console.log(`getting vehicle_name = ${vehi_name}`)

export {};