var markWeight=10;
var markHeight=1.69;
var markMass=markWeight/markHeight*markHeight;
console.log(markMass);
var johnWeight=92;
var johnHeight=1.95;
var johnMass=johnWeight/johnHeight*johnHeight;
console.log(johnMass);
var markHigherBmi=markMass>johnMass;  //? bodyMass : johnMass;
console.log(markHigherBmi);
//2q)
if(markMass>johnMass){
    console.log(`markmass is ${markMass}`);
}else{
    console.log(`johnmass is ${johnMass}`);
}

//3q): Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
var dolphinsScore=96+108+89;
console.log(dolphinsScore/3);
var kolasScore=88+91+110;
console.log(kolasScore)/3;
if(dolphinsScore>kolasScore){
    console.log("dolphinsScore is greater than kolasscore " + dolphinsScore);
}else if(dolphinsScore==kolasScore){
    console.log(draw);
}else{
    console.log("kolasScore is greater than dolphinsScore"  + kolasScore);
}
//3q1)Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
var minimumScore=100;
var dolphinsScore=97+112+101;
console.log(dolphinsScore/3);
var kolasScore=109+95+123;
console.log(kolasScore/3);
if(dolphinsScore >=100 && dolphinsScore>kolasScore){
    console.log("dolphinsScore is greater than kolasscore " + dolphinsScore);
}else if(dolphinsScore==kolasScore){
    console.log(draw);
}else if(kolasScore >=100 && kolasScore>dolphinsScore){
    console.log("kolasScore is greater than dolphinscore " + kolasScore);

}


const gaurav={
    firstName:"gaurav",
    lastName:"kesa",
    age:18,
    number:90,
    gauravFriends:["rama","himanshu","sahith"]
};

console.log(gaurav['firstName'] + gaurav['lastName'],gaurav['gauravFriends'],gaurav['age'],gaurav['number']);

const cutFruits=function(fruits){
    return fruits*3;

}

const fruitProcessor=function(apples,oranges){
    const applePeices=cutFruits(apples);
    const orangePeices=cutFruits(oranges);
    const juice=`the juice with ${applePeices} and oranges are ${orangePeices}`;
    return juice;
}

console.log(fruitProcessor(3,9));


const restaurent={
    name:'gaurav',
    categories:['italian','vegetarian','chinese','non-veg','tiffins','lunch'],
    starterMenu:['manchuria','noodels','eggrools','bread','butter','jam'],
    mainMenu:['pizza','burger','pasta'],
    
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
    order:function(startedId,mainId){
        return[this.starterMenu[startedId],this.mainMenu[mainId]]
    }
}

console.log(restaurent.order(3,2));

console.log(restaurent.starterMenu[0].length);
console.log(restaurent.starterMenu[1].toUpperCase().length);
console.log(restaurent.starterMenu[2].replace("eggrools","springrolls").length);
 console.log(restaurent.starterMenu[3].split(2,3));
 
 console.log(restaurent.starterMenu[4].trim().length);
 console.log(restaurent.starterMenu[5].search("jam".length));


 const arr=[2,3,4];

 const[x,y,z,o=1]=arr;
 console.log(x,y,z,o);

 let[first,second]=restaurent.categories;
 console.log(first,second);
 [first,second]=[second,first];
console.log(first,second);
 

const{name,openingHours,categories}=restaurent;
console.log(name,openingHours,categories);
//spread operators
const a=[7,8,9];
const b=[5,6,...a];
console.log(b);

const newArr=[...restaurent.mainMenu,"springrools"];
console.log(newArr);


const menu=[...restaurent.mainMenu,...restaurent.starterMenu];
console.log(menu);

// this is the rest where we use in the left side of=
const[pizza, , pasta,...otherFoods]=[...restaurent.mainMenu,...restaurent.starterMenu,]
console.log(pizza,pasta,otherFoods);

//set

const items=new Set([
    "pizza",
    "burger",
    "chickend fry",
    "egg cury",
    "mutton",
    
]);

for(var i=0;i<items.size;i++){
    console.log(items.values(i));
}

for(var item of items){
    console.log(item.charAt(item));
}

console.log(items.add("springrools"));
console.log(`${items.has("egg")} , ${items.has("egg cury")}`);
console.log(items.delete('mutton'));


var a1="underscore_case";
        for(var c=0;c<a1.length;c++){
            var b2=0;
            if(a1.charAt(c)=='_'){
              console.log(a1.replace("_",""));
              b2++;
              console.log(a1.startsWith("c"));
                
            }
        }