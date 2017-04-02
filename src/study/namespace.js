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
    return {
        namespace: namespace
    };
})();
