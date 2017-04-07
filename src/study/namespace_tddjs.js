var tddjs = (function () {
    function namespace(name) {
        var me = this;
        var level = name.split(".");
        for (var i = 0; i < level.length; i++) {
            if (me[level[i]] == void 0) {
                me[level[i]] = {};
            }
            me = me[level[i]];
        }
        return me;
    }

    var id = 0;
    function uid(obj) {
        if(typeof obj.__uid != "number"){
            obj.__uid = id++;
        }
        return obj.__uid;
    }
    
    function iterator(collection) {
        var index = 0;
        var len = collection.length;

        function next() {
            var item = collection[index++];
            return item;
        }

        function hasNext() {
            return index <= len;
        }

        return {
            next:next,
            hasNext:hasNext
        }
    }

    function F() {}
    function create(obj) {
        F.prototype = obj;
        return new F();
    }

    function extend(target,source) {
        target = target || {};
        if(source == void 0 || isEmptyObject(source))return target;
        for(var prop in source){
            if(source.hasOwnProperty(prop)){
                target[prop] = source[prop];
            }
        }
    }

    function isEmptyObject(obj) {
        for(var t in obj)
            return !1;
        return !0;
    }
    return {
        namespace: namespace,
        uid:uid,
        iterator:iterator,
        extend:extend,
        create:create,
        isEmptyObject:isEmptyObject
    };
})();
