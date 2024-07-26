let student={
    cgpa:8.4,
    firstname:"Saptak",
    college:"JU",
    Degree:"ME",
    Branch:"IT",
}
//for in loop(for object only)
for(key in student){
    console.log(key+" is "+student[key]);
}

//for of loop(string & array only)

let s="Saptak";
for(let i of s){
    console.log(i);
}
//discount
let items=[100,300,700,900,1800,1200];
let index=0;
for(let item of items){
    console.log(`efore applying descount value of ${index} is ${item}`);
    let discount=item/10;
    items[index]-=discount;
    console.log(`After discount value is ${items[index]}`);
    index++;
}

//array methods
let arr=[10,20,30];
arr.push(40,50);
arr.pop();
for(let item of arr){
    console.log(item);
}
arr.toString();//convert to string '10,20,30,40'

//forEach --- only for array  --takes function  & parameter as the element of array
// (val,position,array)
arr.forEach(function printval(val){  //val = value at each index
    console.log(val);
})
//another way of function using for each
arr.forEach((val)=>{  //val = value at each index
    console.log(val);
})
