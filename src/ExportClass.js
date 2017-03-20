"use strict";
var InnerClass_1 = require("./InnerClass");
var SampleClass = (function () {
    function SampleClass() {
    }
    SampleClass.prototype.method = function () {
        return new InnerClass_1.InnerClass().
        ;
    };
    return SampleClass;
}());
exports.SampleClass = SampleClass;
//# sourceMappingURL=SampleClass.js.map