var ajax = (function () {
    function create() {
        var xhr = null;
        if(window.XMLHttpRequest)
            xhr = new XMLHttpRequest;
        else xhr = new ActiveXObject("Microsoft.XMLHTTP");

        return xhr;
    }
    return {
        create:create
    }
})();