class Users{
    name:string="";
    setName(name:string){
        this.name=name;
    }
    displayName(){
        console.log(this.name)
    }
}

const u1= new Users();
u1.setName("John");
u1.displayName();
