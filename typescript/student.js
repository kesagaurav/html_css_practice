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
exports.Person1 = exports.Student = void 0;
var company_1 = require("./company");
var Student = /** @class */ (function () {
    function Student(id, name, loc, salarly, company) {
        this.id = id;
        this.name = name;
        this.loc = loc;
        this.salarly = salarly;
        this.company = company;
    }
    Student.prototype.showStudent = function () {
        return "the studnt details are " + this.id + " " + this.name + " " + this.loc + " " + this.salarly + " " + this.company.getCompany();
    };
    return Student;
}());
exports.Student = Student;
var comp1 = new company_1.Company(1, "infosys");
var comp2 = new company_1.Company(2, "tcs");
var comp3 = new company_1.Company(3, "wipro");
var stu1 = new Student(1, "gaurav", "war", 43809, comp1);
console.log(" The values of stu1 " + stu1.showStudent());
var stu2 = new Student(2, "deepa", "hyd", 44809, comp2);
console.log(" The values of stu2 " + stu2.showStudent());
var stu3 = new Student(3, "rama", "war", 47890, comp3);
console.log(" The values of stu3 " + stu3.showStudent());
var Person1 = /** @class */ (function (_super) {
    __extends(Person1, _super);
    function Person1(personid, personName, contactNumber, personage, personGender, id, name, loc, salarly, company) {
        var _this = _super.call(this, id, name, loc, salarly, company) || this;
        _this.personid = personid;
        _this.personName = personName;
        _this.contactNumber = contactNumber;
        _this.personage = personage;
        _this.personGender = personGender;
        return _this;
    }
    Person1.prototype.showPerson = function () {
        "return his id is " + this.personid + "is name is " + this.personName + " his conatct is " + this.contactNumber + "his age is " + this.personage;
    };
    return Person1;
}(Student));
exports.Person1 = Person1;
var company = new company_1.Company(1, "infosys");
var student = new Student(1, "gaurav", "war", 43809, company);
var person = new Person1(1, "gaurav", 955071038, 23, "male", 2, "gaurav1", "war", 43809, company);
console.log(person);
