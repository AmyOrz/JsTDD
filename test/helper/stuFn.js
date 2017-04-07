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
    send:stuFn(),
    readyStateChange:function (readyState) {
        this.readyState = readyState;
        this.onreadystatechange();
    }
};

var isLocal = (function () {
    function local() {
        return !!(window.location && window.location.protocol.indexOf("file:") === 0);
    }
    return local;
})();

function forceStateAndReadyState(xhr,status,res) {
    var success = stuFn();
    var failure = stuFn();

    ajax.request("/url",{
        success:success,
        failure:failure
    });

    xhr.status = status;
    xhr.readyStateChange(res);

    return {
        success:success.called,
        failure:failure.called
    }
}