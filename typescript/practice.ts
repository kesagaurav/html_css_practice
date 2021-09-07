const names:string[]=["gaurav","deepa","surya"];
names.forEach(e=>{
    console.log(e.toUpperCase());
    
});

const numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
numbers.map(e=>{
    if(e%2==0){
        console.log("even is " + e);
        
    }else{
        console.log("odd is " + e);
        
    }
});


const numbers1:number=1;
console.log(numbers1);
