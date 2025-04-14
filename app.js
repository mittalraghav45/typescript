"use strict";
class Users {
    constructor() {
        this.name = '';
    }
    // email:string'';
    addUser(user) {
        return `${user} is added`;
    }
}
let UserNew = new Users();
console.log(UserNew.addUser('John Doe'));
