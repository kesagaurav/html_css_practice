var names1 = ["gaurav", "deeepa", "apple", "banana"];
console.log(names1.sort());
var names2 = ["batman,superman,ironman", "derkovyv", "redhulk", "redskull", "drdoom"];
console.log(" deleted names are  " + names2.pop()); // it will delete the method at last
console.log(" deleted names are  " + names2.pop());
console.log(" deleted names are  " + names2.pop());
console.log(" deleted names are  " + names2.push("drdoom")); // it will add the elemenst at the last
names2.forEach(function (e) { return console.log(e.toString()); });
var avengers = ["blackwidow", "captainamerica", "hulk", "ironman", "gaurav"];
var x1 = avengers.push("spiderman"); // it will add the elment in the end of an array
console.log(x1); // it will show the length which is 6
console.log("avengers are");
// shift will remove the firstelement and adds all the element to the left
avengers.shift(); // in this case the blackwidow is deleted which is the first element
avengers.forEach(function (e) { return console.log(e); });
// diff between pop and shift is pop will delete the elment at the last but the shift will delete at beginning
var avengerVillian = ["droctopuss", "taskmaster", "thanos", "dormamamu", "modok", "redskull", "autuma"];
avengerVillian.unshift("galactus");
console.log("avengers villian are");
avengerVillian.forEach(function (e) { return console.log(e); });
// the diff between push and unshift is push can be added at the end of the list
// while unshift will add array to the beginning of the list let us say at index[0];
// changing the elemenst in the array using the index position
var dcHeros = ["superman", "batman", "greenarrow", "wonderwoman", "hawkgirl", "flash", "john", "shazam"];
dcHeros[0] = "aquaman";
console.log("the dc heros after assign the value ");
dcHeros.forEach(function (d) { return console.log(d); });
dcHeros[dcHeros.length] = "cybrog"; // it is added to the last
console.log("after adding the value to the lenght the final values is");
dcHeros.forEach(function (d) { return console.log(d); });
// small example of delete in java
console.log("after deleteing the values are");
delete dcHeros[0];
dcHeros.forEach(function (d) { return console.log(d); });
// preferable are pop() and shift() bec in delete it will go to undefined loops which is of very complex
var dcVillians = ["lexluthor", "joker", "darkseid", "theoneeyedman", "twofaceman"];
dcVillians.splice(2, 0, "bane", "generalzod"); // splice method is used to add new items in an array
console.log("after slicing the dc villians are");
dcVillians.forEach(function (e) { return console.log(e); });
// now i want to delete 3 items in dcVillains using splice method is
// dcVillians.splice(2,2,"bane","generalzod"); 
// console.log("after deleting/removing the dc villians are");
// dcVillians.forEach(e=>console.log(e));
dcVillians.splice(0, 3);
console.log("after deleting/removing the dc villians are");
dcVillians.forEach(function (e) { return console.log(e); });
// merging of 2 arrays
var gauravDevs = dcHeros.concat(dcVillians, avengers, avengerVillian); // so in concat we can keep as many as arguments or parameters in concat method
console.log("concationnation of dcheros and dcvillians"); // add 2 arrays
console.log(gauravDevs);
var gauravNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var y = gauravNumber.slice(1);
console.log("after slicing the elemenst the remaing are");
console.log(y);
// the slice will not remove any value but it will return new array
// including the slice element 
var z = gauravNumber.slice(1, 9);
console.log("slicing in between athe values are");
console.log(z);
// finfding min and max values
var x3 = 10;
gauravNumber.map(function (e) {
    if (e >= x3) {
        console.log("max" + e);
    }
    else {
        console.log("min" + e);
    }
});
