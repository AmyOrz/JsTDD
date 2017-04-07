var ajax = (function () {
    function create() {
        var xhr = null;
        if(window.XMLHttpRequest)
            xhr = new XMLHttpRequest;
        else xhr = new ActiveXObject("Microsoft.XMLHTTP");

        return xhr;
    }

    function request(url,options) {
        if(url == void 0)
            return TypeError("url is not find");

        if(ajax.create == void 0)return;

        options = options || {};
        var transport = ajax.create();
        transport.open(options.method ||"GET",url,true);

        transport.onreadystatechange = function () {
            if(transport.readyState == 4 && (transport.status == 200 || (isLocal() && !transport.status))){
                if(typeof options.success == "function") {
                    options.success(transport.responseText);
                }
            }else{
                if(typeof options.error == "function") {
                    options.error(transport.responseText);
                }
            }
        };
        transport.send(null);
    }
    return {
        create:create,
        request:request
    }
})();
