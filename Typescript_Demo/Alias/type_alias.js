"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetUser(user) {
    console.log(user.name);
}
function SubscribedUser(sub_user) {
    console.log(sub_user.name);
}
GetUser({ name: "gayathri", email: "gayathri@gmail.com", isPaid: false });
SubscribedUser({ name: "kavya", email: "kavya@gmail.com", isPaid: true });
