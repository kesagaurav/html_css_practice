"use strict";
exports.__esModule = true;
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team(teamid, teamName) {
        this.teamid = teamid;
        this.teamName = teamName;
    }
    Team.prototype.getTeam = function () {
        return " team id is " + this.teamid + " and his name is " + this.teamName;
    };
    return Team;
}());
exports.Team = Team;
