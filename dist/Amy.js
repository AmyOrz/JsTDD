(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Amy = global.Amy || {})));
}(this, (function (exports) { 'use strict';

	function type(obj) {
	    return {}.toString.call(obj).slice(8, -1);
	}

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
	            if (type(item) == "Number") {
	                res.push(item);
	            }
	            else if (type(item) == "Array") {
	                res = res.concat(this._flat(item));
	            }
	        }
	        return res;
	    };
	    return FlatArr;
	}());

	exports.FlatArr = FlatArr;
	exports.type = type;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=Amy.js.map
