function stuFn(retVal) {
    var fn = function () {
        fn.called = true;
        fn.args = [].slice.call(arguments);
        return retVal;
    };

    fn.called = false;
    return fn;
}

var fakeHttpRequest = {
    open:stuFn(),
    send:stuFn()
};

var isLocal = (function () {
    function local() {
        return !!(window.location && window.location.protocol.indexOf("file:") === 0);
    }
    return local;
})();
