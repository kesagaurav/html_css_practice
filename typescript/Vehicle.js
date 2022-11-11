"use strict";
exports.__esModule = true;
exports.MyInterfaceImpl = exports.Student = exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(name) {
        this.name = name;
    }
    Vehicle.prototype.getVehicle = function () {
        return "The Vehicle is " + this.name;
    };
    Vehicle.iAmStatic = function () {
        console.log("i am in static method");
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var g = new Vehicle("indica");
console.log(g.getVehicle());
Vehicle.iAmStatic();
var Student = /** @class */ (function () {
    function Student(name, rollno, section) {
        this.name = name;
        this.rollno = rollno;
        this.section = section;
    }
    Student.prototype.getStudentDetails = function () {
        return "the details of student are " + " " + this.name + " " + this.rollno + " " + this.section;
    };
    return Student;
}());
exports.Student = Student;
var stu = new Student("gauraav", 1, "A");
console.log(stu.getStudentDetails());
var MyInterfaceImpl = /** @class */ (function () {
    function MyInterfaceImpl() {
    }
    MyInterfaceImpl.prototype.hello = function () {
        console.log("i am using interface concepts");
    };
    MyInterfaceImpl.prototype.hello1 = function () {
        return " i am using string using interface";
    };
    MyInterfaceImpl.prototype.id = function () {
        return 10;
    };
    return MyInterfaceImpl;
}());
exports.MyInterfaceImpl = MyInterfaceImpl;
var ok = new MyInterfaceImpl();
ok.hello();
console.log(ok.hello1());
console.log(ok.id());
