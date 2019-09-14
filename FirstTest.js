class person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    print(){
        return `Name is ${this.name} email is ${this.email}`
    }
    print2(){
        return 'test' + this.print();
    }
}

let p1 = new person('Harrison', 'ermhroy@gmail.com');
console.log(p1.print());
console.log(p1.print2());



