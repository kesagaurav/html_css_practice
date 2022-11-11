"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Person = void 0;
var player_1 = require("./player");
var team_1 = require("./team");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, firstName, lastName, gender, age, contact, team, personid, personName, contactNumber, personage, personGender) {
        var _this = _super.call(this, id, firstName, lastName, gender, age, contact, team) || this;
        _this.personid = personid;
        _this.personName = personName;
        _this.contactNumber = contactNumber;
        _this.personage = personage;
        return _this;
    }
    Person.prototype.showPerson = function () {
        "return his id is " + this.personid + "is name is " + this.personName + " his conatct is " + this.contactNumber + "his age is " + this.personage;
    };
    return Person;
}(player_1.Player));
exports.Person = Person;
var t1 = new team_1.Team(1, "india");
var p1 = new player_1.Player(1, "gaurav", "kesa", "male", 23, "901901901", t1);
var p3 = new Person(2, "gaurav2", "kesa2", "male", 23, "9550671038", t1, 2, "gaurav", 9010910, 23, "male");
console.log(p3);
