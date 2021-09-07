


async function callPromise() {
    console.log("Before timeout.");

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function () {
      
            return resolve("data");
        }, 2000);
    });
    
let promiseResponse = await promise;
    console.log(promiseResponse);
   
  
}

callPromise();


// this is only for using fetch

fetch( "https://restcountries.eu/rest/v2/name/united")
.then(response=>response.json())
.then(data=>console.log(data));


// this is for using async and await

const gaurav=async (country)=>{
    const res= await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    console.log(res);
  const data= await  res.json();
     console.log(data);
 };
 gaurav('india');

 // this is for simple promise
 const lotteryPromise= new Promise((reslove,reject)=>{
    if(Math.random>=0.5){
        reslove('You win');
    }else{
        reject("sorry you did not win");
    }
});
lotteryPromise.then(response=>response.json()).catch(err=>console.log(err));


//type cohersion
console.log("5" + 2);
console.log("5"- 2 );


const array=[1,2,3,4,5,6,7,8,10];

const newArray=array.map(Math.sqrt);

console.log(newArray);




