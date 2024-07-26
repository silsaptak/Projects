const student={
    fullname:"Saptak",
    age:24,
    cgpa:8.3,
    isPass:true,
};
console.log(student);

firstname=prompt("Enter name");
//alert(firstname);


//object
const employee={
    calculateTax(){
        console.log("Tax is 20%");
    },
};
const Saptak={
    salary:1100000,
    calculateTax(){
        console.log("Tax is 15%");
    }
};
Saptak.__proto__=employee;
console.log(Saptak.calculateTax);