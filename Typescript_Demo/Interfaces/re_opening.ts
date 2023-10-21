interface User {
    user_name : string,
    age : number,
    startTrail() : string,
    getCoupon(couponName : string):number
}

//we can also re-open the existing interface and extra properties to that.
interface User {
    role : string
 }


 
const user_details : User = {
    user_name : "suma",
    age: 22,
    startTrail : () =>{ return "Started" },
    getCoupon : (name: "123ER34") => {
         return 123;
    },
    role: "admin"
}

export {}