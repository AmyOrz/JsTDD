interface Date {
    strftime: Function;
}

Date.prototype.strftime = (() => {
    function strftime(format) {
        var date = this;

        var formats = {
            d: function(date) {
                return zeroPad(date.getDate());
            },

            m: function(date) {
                return zeroPad(date.getMonth() + 1);
            },

            y: function(date) {
                return zeroPad(date.getYear() % 100);
            },

            Y: function(date) {
                return date.getFullYear();
            },

            //Format shorthands
            F: "%Y-%m-%d",
            D: "%m/%d/%y"
        };

        return (format + "").replace(/%([a-zA-Z ])/g,
            function(m, f) {
                var formatter = formats && formats[f];

                if (typeof formatter == "function") {
                    return formatter.call(formats, date);
                } else if (typeof formatter == "string") {
                    return date.strftime(formatter);
                }

                return f;
            });
    }

    //Internal helper
    function zeroPad(num) {
        return (+num < 10 ? "0" : "") + num;
    }

    return strftime;
})();

