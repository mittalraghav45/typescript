class Users{
    name:string='';
    addUser(user:string):string
    {
        return `${user} is added`
    }
}

let UserNew= new Users();
console.log(UserNew.addUser('John Doe'));