
console.log("guaav");

console.log("hi how are you");

console.log("5" + 2);

console.log("5" - 2);



var x=1990;
var y=1000;
var z=x-y;
console.log(" the value if z is " + z);



function areaOfSquare(a) {
    return a*a;
}

var square=areaOfSquare(2);
console.log( " the area of square is " + square);


function add(a,b){
    return a+b;
}
var add=add(9,8);
console.log( " the value of add is " + add);

var a=4;
if(a%2==0){
    console.log(" the even no is " + a);
}else{
    console.log("the odd  no is " + a);
}

var a=[1,2,3,4,5,6,7,8,9,10];
for(var i=0;i<10;i++){
    console.log(a);
    break;
}


var b=[10,20,30,40];
b.push(50);
console.log( " the value of b is " + b);
b.map((a,b)=>{
 a+b;
})

console.log("after using map the value is " + b);




var c={
    id:"1",
    name:"kesagaurav"
};

console.log(c);




class Gaurav{
    constructor(code,name){
        this.code=code;
        this.name=name;
    }
    display(){
        console.log(this.code + " : " + this.name);
    }


}

var Gaurav1=new Gaurav("M","Male");
Gaurav1.display();
//console.log(Gaurav1);
