var ajaxPoller = (function () {

    function start(url) {
        if(url == void 0)
            throw new TypeError("the url is null");

        ajax.request(url);
    }

    return{
        start:start
    }
})();
