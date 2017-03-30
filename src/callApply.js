var apple = {
    color: "red",
    show: function (a, b) {
        return this.color + a + b;
    }
};
var banana = {
    color: "yellow"
};

function log() {
    console.log.apply(console,arguments);
}


//bind
var foo = {
    x:123
};

var bar = function () {
    return this.x;
};

//区别
var obj = {
    x :81
};
var fck = {
    getX:function () {
        return this.x;
    }
};
