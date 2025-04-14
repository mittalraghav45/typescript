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
        this.getNameLength();
    }
    getNameLength() {
        console.log(this.name.length);
    }
}
const u1 = new Users();
u1.setName("John");
// u1.name='Raghav';
u1.displayName();
u1.getNameLength();
// }
