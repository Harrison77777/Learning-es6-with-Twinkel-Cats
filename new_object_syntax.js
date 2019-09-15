let name = 'Harrison'
let email = 'ermhroy7@gmail.com'
let age = 27

const mySelf = {
    name,
    email,
    age,
    print(){
       return  `My name is ${this.name}; My email is ${email}; My age ${this.age}`
    }
}

console.log(mySelf.print());

