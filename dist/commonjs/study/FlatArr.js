"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("./Type");
var FlatArr = (function () {
    function FlatArr() {
    }
    FlatArr.prototype.flat = function (arr) {
        return this._flat(arr);
    };
    FlatArr.prototype._flat = function (arr) {
        var res = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (Type_1.type(item) == "Number") {
                res.push(item);
            }
            else if (Type_1.type(item) == "Array") {
                res = res.concat(this._flat(item));
            }
        }
        return res;
    };
    return FlatArr;
}());
exports.FlatArr = FlatArr;
//# sourceMappingURL=FlatArr.js.map