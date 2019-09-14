const myFunction = (a,b)=> a + b
console.log(myFunction(10,50));

const withAParameter = a => a;
console.log(withAParameter(1));

const myArray = () => {
    return [
        'harrison',
        'markson' 
    ]
}
let names = myArray();
names.forEach(name => {
    console.log(name);
});

