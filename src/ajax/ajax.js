var ajax = (function () {
    function create() {
        var xhr = null;
        if(window.XMLHttpRequest)
            xhr = new XMLHttpRequest;
        else xhr = new ActiveXObject("Microsoft.XMLHTTP");

        return xhr;
    }

    function get(url) {
        if(url == void 0)
            return TypeError("url is not find");

        var transport = ajax.create();
        transport.open("GET",url,true);
    }
    return {
        create:create,
        get:get
    }
})();
