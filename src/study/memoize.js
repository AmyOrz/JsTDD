var fibonacci = (function () {
    var cache = {};
    
    function fibo(num) {
        if(num < 2){
            return 1;
        }
        if(cache[num] == void 0){
            cache[num] = fibo(num-1) + fibo(num-2);
        }
        return cache[num];
    }
    return fibo;
})();

Function.prototype.memoize = function () {
    var cache = {};
    var me = this;

    return function (num) {
        if(cache[num] == void 0){
            cache[num] = me.call(this,num);
        }
        return cache[num];
    }

};
