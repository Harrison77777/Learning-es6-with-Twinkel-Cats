 class Person{
     
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    myInformation(){
        return 'Name is ' + this.name + 'Email is ' + this.email
    }
}

const person = new Person("harrison", "ermhroy7@gmail.com")

console.log(person.myInformation());


