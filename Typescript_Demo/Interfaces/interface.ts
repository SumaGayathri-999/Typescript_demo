//Interface is like an overview or a structure that cares only abou whether that compulsory properties
//  and methods whenever we are defining the variabe that inferred by the interface.
//  And it does not care about the logic or implementation that we perform on that.

interface User {
    user_name : string,
    age : number,
    startTrail() : string,
    getCoupon(couponName : string):number
}


const details : User = {
    user_name : "suma",
    age: 22,
    startTrail : () =>{ return "Started" },
    getCoupon : (name: "123ER34") => {
         return 123;
    }
}

//Interface also supports Interface.
interface Skills extends User {
    skill_name: string,
}

const user_details : Skills = {
    user_name : "suma",
    age: 22,
    startTrail : () =>{ return "Started" },
    getCoupon : (name: "123ER34") => {
         return 123;
    },
    skill_name : "Logical thinking",
}


export {}