"use strict";
class Users {
    constructor() {
        this.name = "";
    }
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(this.name);
    }
}
const u1 = new Users();
u1.setName("John");
u1.displayName();
