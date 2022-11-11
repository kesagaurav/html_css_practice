"use strict";
exports.__esModule = true;
exports.Company = void 0;
var Company = /** @class */ (function () {
    function Company(id, name) {
        this.id = id;
        this.name = name;
    }
    Company.prototype.getCompany = function () {
        return "the detailts of employess are " + this.id + " " + this.name;
    };
    return Company;
}());
exports.Company = Company;
