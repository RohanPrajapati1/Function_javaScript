// // simple function
// function sum(x , y){
//     return x + y;
// }
// const a = 25;
// const b = 30;
// const c = sum(a , b);
// console.log('a + b = ',c);


// // Anonymous function(a function without a name) || function expression can be store in vatiable\
// const x = function (a , b){
//     return a + b;
// };
// const z = x(a , b);
// console.log('a + b = ',z);


// // Arrow function
// const greet = () =>{
//     console.log('Hello World');    
// };
// greet();


// // Callback function => function passed as perameter
// function greet2(a , b , operation){
//     console.log('Hello ');
//     operation(a , b);
    
// }
// function product(x , y){
//     console.log('a * b = ',x*y);
    
// }
// greet2(a , b , product);

// console.log('one');
// console.log('two');
// // setTimeOut Function => This function execute after a give time period(in milliseconds)
// setTimeout(()=>{
//     console.log('Hii!');    
// }, 2000);
// console.log('three');
// console.log('four');


// // callback Hell
// function getData(dataId , getNextData){
//     setTimeout(() => {
//         console.log('data', dataId);
//         if(getNextData){
//             getNextData();
//         }       
//     },3000);
// }

// getData(1 , () =>{
//     console.log("Getting next data.....");
//     getData(2 , ()=>{
//         console.log("Getting next data....");
//         getData(3 , ()=>{
//             console.log("Getting Next data.....");
//             getData(4);
//         });
//     });
// });



// Promises
let promise = new Promise((resolve , reject) => {
    console.log("Hey Everyone !");
    resolve();
});
function getData(dataId , getNextData){
    return new Promises((resolve , reject) => {
        setTimeout(() => {
            console.log("Data" , dataId);
            resolve("success");
            // reject("error");
            if(getNextData){
                getNextData();
            }
        } , 5000);
    });
} 