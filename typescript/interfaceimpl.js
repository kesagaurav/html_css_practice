"use strict";
exports.__esModule = true;
exports.Gaurav = void 0;
var Gaurav = /** @class */ (function () {
    function Gaurav() {
    }
    Gaurav.prototype.hello1 = function () {
        console.log("hi i am from hello method");
    };
    Gaurav.prototype.hello2 = function () {
        return "heyyy from hello2 ";
    };
    Gaurav.prototype.gaurav = function () {
        console.log('hi i am from gaurav class.');
    };
    return Gaurav;
}());
exports.Gaurav = Gaurav;
var x = new Gaurav();
console.log(x.hello1());
console.log(x.hello2());
console.log(x.gaurav());
