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
    constructor (){
        console.log('constructor called')
    }
}
const u1=new Users();