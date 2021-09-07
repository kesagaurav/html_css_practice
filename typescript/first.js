"use strict";
exports.__esModule = true;
exports.MyClass = void 0;
var car_1 = require("./car");
console.log("welcome to typescript");
var x;
x = 100;
console.log(" x is " + x);
function helloFunction() {
    console.log("hello ts from function ts");
}
helloFunction();
var MyClass = /** @class */ (function () {
    function MyClass() {
        console.log("hello from constructor ts");
    }
    MyClass.prototype.helloMethod = function () {
        console.log("heyy");
    };
    return MyClass;
}());
exports.MyClass = MyClass;
var c1 = new MyClass();
c1.helloMethod();
var c2 = new car_1.Car("toyato");
c2.getCar();
console.log(c2);
var c3 = new car_1.Gaurav("gaurav", 3, 300000);
var c4 = new car_1.Gaurav("deepa1", 4, 400000);
var c5 = new car_1.Gaurav("sai", 5, 5000);
c3.getGaurav();
console.log(" c4 details are " + c4.getGaurav() + " c5 details are " + c5.getGaurav());
