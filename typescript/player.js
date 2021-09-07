"use strict";
exports.__esModule = true;
exports.Player = void 0;
var team_1 = require("./team");
var Player = /** @class */ (function () {
    function Player(id, firstName, lastName, gender, age, contact, team) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.contact = contact;
        this.team = team;
    }
    Player.prototype.getPlayerDetails = function () {
        return "player id is " + this.id + " and his name is " + this.firstName + " and his last name is" + this.lastName + " and his age is " + this.age + "his gender is " + this.gender + "his conatctnumber is " + this.contact + " his team is " + this.team.getTeam();
    };
    return Player;
}());
exports.Player = Player;
var t1 = new team_1.Team(1, "india");
var p1 = new Player(1, "gaurav", "kesa", "male", 23, "901901901", t1);
console.log(p1);
//console.log(t1);
