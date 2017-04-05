var a = {
    x:12,
    eat:function (x) {
        return this.x+x;
    }
};

var b  = {
    y:21,
    __proto__:a
}
b.eat(b.y);
// console.log(a.hasOwnProperty("eat"))

function Animal() {
    this.name = "animal";
}

Animal.prototype.eat = function () {
    console.log(this.name + " eat")
};

function people() {
    this.name = "arvin";
}

people.prototype = a;

var man = new people();
man.eat(11);


