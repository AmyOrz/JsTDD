var ajax = (function () {
    function create() {
        var xhr = null;
        if(window.XMLHttpRequest)
            xhr = new XMLHttpRequest;
        else xhr = new ActiveXObject("Microsoft.XMLHTTP");

        return xhr;
    }

    function get(url,options) {
        options = options == void 0?{}:options;
        options = tddjs.extend({method:"GET"},options);
        ajax.request(url,options);
    }
    function post(url,options) {
        options = options == void 0?{}:options;
        options = tddjs.extend({method:"POST"},options);
        ajax.request(url,options);
    }

    function request(url,options) {
        if(url == void 0)
            return TypeError("url is not find");

        if(ajax.create == void 0)return;

        options = tddjs.extend({url:url},options);
        _sendData(options);
        var transport = ajax.create();

        options = tddjs.extend({transport:transport},options);
        transport.open(options.method ||"GET",options.url,true);
        _setHeader(options);

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
        transport.send(options.data);
    }

    function _setHeader(options) {
        var headers = options.headers || {};
        var transport = options.transport;

        for(var m in headers){
            transport.setRequestHeader(m,headers[m]);
        }

        if(options.method == "POST" && options.data){
            _defaultHeader(transport,headers,"Content-Type","application/x-www-form-urlencoded");
            _defaultHeader(transport,headers,"Content-Length",options.data.length);
        }

        _defaultHeader(transport,headers,"X-Requested-With","XMLHttpRequest");
    }

    function _defaultHeader(transport,headers,header,val) {
        if(headers[header] == void 0){
            transport.setRequestHeader(header,val);
        }
    }

    function _sendData(options) {
        if(options.data != void 0){
            options.data = ajax.urlParams(options.data);

            if(options.method == "GET"){
                options.url += "?"+options.data;
                options.data = null;
            }
        }else{
            options.data = null;
        }
    }

    function urlParmas(obj) {
        if(obj == void 0)return " ";

        if(tddjs.type(obj) == "string")return encodeURI(obj);

        var pieces = [];
        for(var m in obj){
            pieces.push(encodeURIComponent(m) + "="+encodeURIComponent(obj[m]));
        }
        return pieces.join("&");
    }
    return {
        create:create,
        get:get,
        post:post,
        request:request,
        urlParams:urlParmas
    }
})();
