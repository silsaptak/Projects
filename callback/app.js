// function getData(getdataId,getDataNext){
//     setTimeout(()=>{
//         console.log("Data",getdataId);
//         if(getDataNext){
//             getDataNext();
//         }
//     },2000);
// }
//call back hell====many function under 1 function
// getData(10,()=>{
//     console.log("Getting data 20")
//     getData(20,()=>{
//         console.log("Getting dara 30");
//         getData(30);
//     });
// });
//to resolve callback hell we use promises


//promise function   //used for API's
// function getData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data is ",data);
//             resolve("success");
//         },2000);
//     });
// }

// //HOW API's WORK

// const URL="https://cat-fact.herokuapp.com/facts";
// const funfact=document.querySelector("#fact");


// const getfacts= async()=>{
//     console.log("Getting data...");
//     let response=await fetch(URL);
//     console.log(response);  //JSON format
//     let data=await response.json();
//     funfact.innerHTML=data[2].text;
// }

// getfacts();