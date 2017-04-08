function stuFn(retVal) {
    var fn = function () {
        fn.called = true;
        fn.args = [].slice.call(arguments);
        return retVal;
    };

    fn.called = false;
    return fn;
}

var pollerHttpRequest = {
    open:stuFn(),
    send:stuFn(),
    setRequestHeader:function (header,val) {
        if(this.headers == void 0){
            this.headers = {};
        }
        this.headers[header] = val;
    },
    readyStateChange:function (readyState) {
        this.readyState = readyState;
        this.onreadystatechange();
    }
};
var postHttpRequest = {
    open:stuFn(),
    send:stuFn(),
    setRequestHeader:function (header,val) {
        if(this.headers == void 0){
            this.headers = {};
        }
        this.headers[header] = val;
    },
    readyStateChange:function (readyState) {
        this.readyState = readyState;
        this.onreadystatechange();
    },
    name:111
};
var getHttpRequest = {
    open:stuFn(),
    send:stuFn(),
    setRequestHeader:function (header,val) {
        if(this.headers == void 0){
            this.headers = {};
        }
        this.headers[header] = val;
    },
    readyStateChange:function (readyState) {
        this.readyState = readyState;
        this.onreadystatechange();
    },
    name:111
};

var isLocal = (function () {
    function local() {
        return !!(window.location && window.location.protocol.indexOf("file:") === 0);
    }
    return local;
})();

