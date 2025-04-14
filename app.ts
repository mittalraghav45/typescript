class Users{
    name:string='';
    addUser(user:string):string
    {
        return `${user} is added`
    }

    removeUser(user:string){
        console.log(`${user} removed`)
    }
}

let UserNew= new Users();
console.log(UserNew.addUser('John Doe'));
console.log(UserNew.removeUser('John Doe'));