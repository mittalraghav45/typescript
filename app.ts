// class Users{
//     private name:string="";
//       setName(name:string){
//         this.name=name;
//     }
//       displayName(){
//         console.log(this.name)
//         this.getNameLength()
//     }
//       getNameLength(){
//         console.log(this.name.length)
//     }

// }
// const u1= new Users();
// u1.setName("John");
// // u1.name='Raghav';
// u1.displayName();
// u1.getNameLength();
// // }

class Users{
    constructor (public name:string,public email:string){
        console.log('constructor called')
    }
    displayVal(){
        console.log(this.name,this.email)
    }
}
const u1=new Users('raghav','test@gmail');
u1.displayVal();