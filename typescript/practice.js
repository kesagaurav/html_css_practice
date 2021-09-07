var names = ["gaurav", "deepa", "surya"];
names.forEach(function (e) {
    console.log(e.toUpperCase());
});
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.map(function (e) {
    if (e % 2 == 0) {
        console.log("even is " + e);
    }
    else {
        console.log("odd is " + e);
    }
});
var numbers1 = 1;
console.log(numbers1);
