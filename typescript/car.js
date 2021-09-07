"use strict";
exports.__esModule = true;
exports.Gaurav = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.getCar = function () {
        return "car is " + this.name;
    };
    return Car;
}());
exports.Car = Car;
var Gaurav = /** @class */ (function () {
    function Gaurav(name, id, salarly) {
        this.name = name;
        this.id = id;
        this.salarly = salarly;
    }
    Gaurav.prototype.getGaurav = function () {
        return " gaurav name is " + this.name + " and his id is " + this.id + "and his salalry his " + this.salarly;
    };
    return Gaurav;
}());
exports.Gaurav = Gaurav;
