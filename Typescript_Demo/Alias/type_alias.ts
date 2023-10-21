type User_type = {
    name: string,
    email:string,
    isPaid:boolean,
}

function GetUser(user : User_type){
    console.log(user.name);
}

function SubscribedUser(sub_user : User_type){
    console.log(sub_user.name);
}
GetUser({name:"gayathri",email:"gayathri@gmail.com",isPaid:false});
SubscribedUser({name:"kavya",email:"kavya@gmail.com",isPaid:true});

export {};